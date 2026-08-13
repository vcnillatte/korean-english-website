// Gemini API Integration for Mode 3 Cek Kalimat (Free-Writing Evaluation)

export async function evaluateSentenceWithGemini(userSentence, scenarioContext, customApiKey = '') {
  const apiKey = customApiKey || import.meta.env.VITE_GEMINI_API_KEY || '';

  // System Prompt as defined in PRD Section 5.5
  const systemInstruction = `
You are an expert English grammar coach evaluating a student who is learning English for cafe scenarios.
Context scenario: "${scenarioContext}"
Student submitted sentence: "${userSentence}"

Rules for response:
Return ONLY a valid JSON object without markdown formatting or code blocks.
JSON schema:
{
  "is_correct": boolean,
  "corrected_sentence": string,
  "grammar_explanation_en": string,
  "grammar_explanation_kr": string,
  "grammar_explanation_id": string
}

Guidelines:
1. If the sentence is grammatically correct and natural for a cafe context, set "is_correct": true.
2. If there are grammar mistakes, spelling errors, or awkward phrasing, set "is_correct": false and provide the natural corrected English sentence in "corrected_sentence".
3. Provide friendly, clear grammar explanations in English, Korean, and Indonesian.
`;

  // If no API Key provided, use built-in smart heuristic evaluator fallback
  if (!apiKey) {
    console.log('No Gemini API key provided. Using fallback smart evaluation.');
    return mockSmartEvaluation(userSentence, scenarioContext);
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: systemInstruction }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.2,
          responseMimeType: "application/json"
        }
      })
    });

    if (response.status === 429) {
      throw new Error('RATE_LIMIT_EXCEEDED');
    }

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API error (${response.status}): ${errText}`);
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      throw new Error('EMPTY_AI_RESPONSE');
    }

    // Clean Markdown wrapper if present
    const cleanedText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    const resultJson = JSON.parse(cleanedText);

    return {
      success: true,
      data: resultJson
    };

  } catch (error) {
    console.error('Gemini API Evaluation Error:', error);

    if (error.message === 'RATE_LIMIT_EXCEEDED') {
      return {
        success: false,
        errorType: 'RATE_LIMIT',
        message: 'AI sedang istirahat sebentar, coba lagi dalam 1 menit. (Rate limit exceeded)'
      };
    }

    // Fallback to local evaluation on generic error so UI never crashes
    return mockSmartEvaluation(userSentence, scenarioContext, error.message);
  }
}

// Fallback smart evaluator for offline testing or when API key is unconfigured
function mockSmartEvaluation(sentence, context, rawError = '') {
  const trimmed = sentence.trim();
  const lower = trimmed.toLowerCase();

  // Basic check rules for cafe scenarios
  const hasSubjectVerb = /i (want|would like|can get|need|order)/i.test(lower) || /where is|how much/i.test(lower);
  const isTooShort = trimmed.length < 5;

  let isCorrect = hasSubjectVerb && !isTooShort;
  let corrected = trimmed;

  if (!hasSubjectVerb) {
    if (lower.includes('latte') || lower.includes('americano') || lower.includes('coffee')) {
      corrected = `Can I get a ${trimmed}?`;
    } else if (lower.includes('restroom') || lower.includes('toilet')) {
      corrected = `Where is the restroom?`;
    } else {
      corrected = `I would like to order: ${trimmed}.`;
    }
  }

  return {
    success: true,
    isFallback: true,
    rawError: rawError,
    data: {
      is_correct: isCorrect,
      corrected_sentence: isCorrect ? sentence : (corrected.charAt(0).toUpperCase() + corrected.slice(1)),
      grammar_explanation_en: isCorrect 
        ? "Great job! Your sentence is natural and clear for a cafe context."
        : "Make sure to include a subject and polite verb (e.g. 'Can I get...' or 'I would like...').",
      grammar_explanation_kr: isCorrect
        ? "잘 하셨습니다! 카페에서 자연스럽게 사용할 수 있는 문장입니다."
        : "문장의 주어와 예의 바른 동사(예: 'Can I get...', 'I would like...')를 함께 사용해 보세요.",
      grammar_explanation_id: isCorrect
        ? "Bagus sekali! Kalimat Anda sangat natural untuk konteks kafe."
        : "Pastikan menyertakan subjek dan kata kerja sopan (misal: 'Can I get...' atau 'I would like...')."
    }
  };
}
