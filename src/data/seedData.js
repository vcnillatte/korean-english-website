// Comprehensive Seed Dataset for Cafe & Daily English/Korean Practice

export const INITIAL_MODULES = [
  { id: 'mod-01', name: 'Modul 1: Coffee & Drinks (Minuman Kafe)', description: 'Semua jenis kopi, teh, dan minuman populer' },
  { id: 'mod-02', name: 'Modul 2: Customization & Flavors (Susu, Gula & Es)', description: 'Modifikasi rasa, takaran es, dan jenis susu' },
  { id: 'mod-03', name: 'Modul 3: Bakery, Desserts & Food (Roti & Kue)', description: 'Berbagai camilan, kue, dan roti' },
  { id: 'mod-04', name: 'Modul 4: Practical Verbs & Boss Casual Talk (Kata Kerja & Obrolan Kafe)', description: 'Kata kerja harian dan obrolan kasual seorang bos/barista dengan pelanggan' },
  { id: 'mod-05', name: 'Modul 5: Useful Adjectives & Tastes (Kata Sifat & Rasa)', description: 'Kata sifat deskriptif untuk rasa, suasana, dan kondisi' },
  { id: 'mod-06', name: 'Modul 6: Useful Expressions & Facilities (Fasilitas & Bayar)', description: 'Pertanyaan umum, struk, Wi-Fi, dan tempat duduk' }
];

export const INITIAL_VOCAB = [
  // ==================== MODUL 1: Coffee & Drinks (25 Items) ====================
  { id: 'v-101', en: 'Coffee', kr: '커피', id_optional: 'Kopi', pronunciation: 'keopi', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-102', en: 'Iced Americano', kr: '아이스 아메리카노', id_optional: 'Es Kopi Americano (Ah-Ah)', pronunciation: 'aiseu amerikano', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-103', en: 'Cafe Latte', kr: '카페 라떼', id_optional: 'Kopi Susu Latte', pronunciation: 'kape ratte', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-104', en: 'Cappuccino', kr: '카푸치노', id_optional: 'Kapucino', pronunciation: 'kapuchino', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-105', en: 'Caramel Macchiato', kr: '카라멜 마키아또', id_optional: 'Karamel Makiato', pronunciation: 'karamel makiatto', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-106', en: 'Cold Brew', kr: '콜드 브루', id_optional: 'Kopi Cold Brew', pronunciation: 'koldeu beureu', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-107', en: 'Decaf Coffee', kr: '디카페인 커피', id_optional: 'Kopi Bebas Kafein', pronunciation: 'dikapein keopi', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-108', en: 'Green Tea Latte', kr: '녹차 라떼 (말차)', id_optional: 'Latte Teh Hijau / Matcha', pronunciation: 'nokcha ratte', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-109', en: 'Milk Tea', kr: '밀크티', id_optional: 'Teh Susu', pronunciation: 'milkeuti', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-110', en: 'Chamomile Tea', kr: '캐모마일 차', id_optional: 'Teh Chamomile', pronunciation: 'kaemomail cha', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-111', en: 'Lemonade', kr: '레몬 에이드', id_optional: 'Es Lemonade', pronunciation: 'remon eideu', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-112', en: 'Ice Water', kr: '얼음물', id_optional: 'Air Es', pronunciation: 'eoreummul', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-113', en: 'Hot Chocolate', kr: '핫초코 (따뜻한 초콜릿)', id_optional: 'Cokelat Panas', pronunciation: 'hatchoko', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-114', en: 'Smoothie', kr: '스무디', id_optional: 'Jus Smoothie', pronunciation: 'seumudi', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-115', en: 'Espresso', kr: '에스프레소', id_optional: 'Kopi Espresso', pronunciation: 'eseupeureso', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-116', en: 'Vanilla Latte', kr: '바닐라 라떼', id_optional: 'Kopi Vanila Latte', pronunciation: 'banilla ratte', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-117', en: 'Flat White', kr: '플랫 화이트', id_optional: 'Kopi Flat White', pronunciation: 'peullaet hwaiteu', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-118', en: 'Einspanner', kr: '아인슈페너', id_optional: 'Kopi Einspanner (Krim Kopi)', pronunciation: 'ainsyupeneor', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-119', en: 'Grapefruit Ade', kr: '자몽 에이드', id_optional: 'Es Grapefruit Ade', pronunciation: 'jamong eideu', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-120', en: 'Earl Grey Tea', kr: '얼그레이 차', id_optional: 'Teh Earl Grey', pronunciation: 'eolgeurei cha', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-121', en: 'Peppermint Tea', kr: '페퍼민트 차', id_optional: 'Teh Peppermint', pronunciation: 'pepeominteu cha', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-122', en: 'Chai Latte', kr: '차이 라떼', id_optional: 'Kopi / Teh Chai Latte', pronunciation: 'chai ratte', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-123', en: 'Strawberry Latte', kr: '딸기 라떼', id_optional: 'Susu / Latte Stroberi', pronunciation: 'ttalgi ratte', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-124', en: 'Sparkling Water', kr: '탄산수', id_optional: 'Air Soda / Sparkling Water', pronunciation: 'tansansu', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },
  { id: 'v-125', en: 'Hot Tea', kr: '따뜻한 차', id_optional: 'Teh Panas', pronunciation: 'ttatteut-han cha', partOfSpeech: 'noun', moduleTag: 'mod-01', contextTag: 'drinks', streak: 0, masteryLevel: 0 },

  // ==================== MODUL 2: Customization & Flavors (25 Items) ====================
  { id: 'v-201', en: 'Oat Milk', kr: '오트 밀크 (귀리 우유)', id_optional: 'Susu Gandum (Oat milk)', pronunciation: 'oteu milkeu', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-202', en: 'Soy Milk', kr: '두유', id_optional: 'Susu Kedelai (Soy milk)', pronunciation: 'duyu', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-203', en: 'Almond Milk', kr: '아몬드 밀크', id_optional: 'Susu Almond', pronunciation: 'amondeu milkeu', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-204', en: 'Extra Shot', kr: '샷 추가', id_optional: 'Tambah Espresso Shot', pronunciation: 'syat chuga', partOfSpeech: 'phrase', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-205', en: 'Vanilla Syrup', kr: '바닐라 시럽', id_optional: 'Sirup Vanila', pronunciation: 'banilla sireop', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-206', en: 'Less Sugar', kr: '설탕 적게', id_optional: 'Sedikit Gula / Less Sugar', pronunciation: 'seoltang jeokge', partOfSpeech: 'phrase', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-207', en: 'No Sugar', kr: '시럽 빼고 (무설탕)', id_optional: 'Tanpa Gula / Sirup', pronunciation: 'sireop ppaego', partOfSpeech: 'phrase', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-208', en: 'Extra Ice', kr: '얼음 많이', id_optional: 'Banyak Es', pronunciation: 'eoreum man-i', partOfSpeech: 'phrase', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-209', en: 'Less Ice', kr: '얼음 적게', id_optional: 'Sedikit Es', pronunciation: 'eoreum jeokge', partOfSpeech: 'phrase', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-210', en: 'Whipped Cream', kr: '휘핑 크림', id_optional: 'Whipping Cream', pronunciation: 'hwiping keureim', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-211', en: 'Hot', kr: '따뜻한', id_optional: 'Panas', pronunciation: 'ttatteut-han', partOfSpeech: 'adj', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-212', en: 'Iced', kr: '시원한 / 아이스', id_optional: 'Dingin / Es', pronunciation: 'siwonhan / aiseu', partOfSpeech: 'adj', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-213', en: 'Large Size', kr: '라지 사이즈', id_optional: 'Ukuran Besar', pronunciation: 'raji saijeu', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-214', en: 'Medium Size', kr: '미디엄 사이즈', id_optional: 'Ukuran Sedang', pronunciation: 'midieom saijeu', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-215', en: 'Small Size', kr: '스몰 사이즈', id_optional: 'Ukuran Kecil', pronunciation: 'seumol saijeu', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-216', en: 'Caramel Syrup', kr: '카라멜 시럽', id_optional: 'Sirup Karamel', pronunciation: 'karamel sireop', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-217', en: 'Hazelnut Syrup', kr: '헤이즐넛 시럽', id_optional: 'Sirup Hazelnut', pronunciation: 'heijeulneot sireop', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-218', en: 'Lactose Free Milk', kr: '락토프리 우유', id_optional: 'Susu Bebas Laktosa', pronunciation: 'raktopeuri uyu', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-219', en: 'Sweetness level', kr: '당도', id_optional: 'Tingkat Manis / Gula', pronunciation: 'dangdo', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-220', en: 'Extra Hot', kr: '아주 따뜻하게', id_optional: 'Sangat Panas', pronunciation: 'aju ttatteuthage', partOfSpeech: 'adj', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-221', en: 'Light Ice', kr: '얼음 살짝만', id_optional: 'Es Tipis / Sedikit Sekali', pronunciation: 'eoreum saljjakman', partOfSpeech: 'phrase', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-222', en: 'Cinnamon Powder', kr: '시나몬 가루', id_optional: 'Bubuk Kayu Manis', pronunciation: 'sinamon garu', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-223', en: 'Cocoa Powder', kr: '코코아 가루', id_optional: 'Bubuk Cokelat', pronunciation: 'kokoa garu', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-224', en: 'Drizzle', kr: '드리즐 (드리즐 추가)', id_optional: 'Saus Toping (Drizzle)', pronunciation: 'deurijeul', partOfSpeech: 'noun', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },
  { id: 'v-225', en: 'Double Shot', kr: '투샷 (투 샷)', id_optional: 'Dua Shot Espresso', pronunciation: 'tusyat', partOfSpeech: 'phrase', moduleTag: 'mod-02', contextTag: 'customization', streak: 0, masteryLevel: 0 },

  // ==================== MODUL 3: Bakery & Desserts (25 Items) ====================
  { id: 'v-301', en: 'Croissant', kr: '크로와상', id_optional: 'Roti Croissant', pronunciation: 'keurowasang', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-302', en: 'Bagel', kr: '베이글', id_optional: 'Roti Bagel', pronunciation: 'beigeul', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-303', en: 'Cream Cheese', kr: '크림치즈', id_optional: 'Keju Krim (Cream Cheese)', pronunciation: 'keureimchijeu', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-304', en: 'Cheesecake', kr: '치즈케이크', id_optional: 'Kue Keju', pronunciation: 'chijeukeikeu', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-305', en: 'Chocolate Cake', kr: '초콜릿 케이크', id_optional: 'Kue Cokelat', pronunciation: 'chokollit keikeu', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-306', en: 'Sandwich', kr: '샌드위치', id_optional: 'Roti Lapis / Sandwich', pronunciation: 'saendeuwichi', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-307', en: 'Cookie', kr: '쿠키', id_optional: 'Kue Kering / Cookie', pronunciation: 'kuki', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-308', en: 'Muffin', kr: '머핀', id_optional: 'Kue Muffin', pronunciation: 'meopin', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-309', en: 'Toast', kr: '토스트', id_optional: 'Roti Panggang', pronunciation: 'toseuteu', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-310', en: 'Scone', kr: '스콘', id_optional: 'Kue Scone', pronunciation: 'seukon', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-311', en: 'Macaron', kr: '마카롱', id_optional: 'Kue Macaron', pronunciation: 'makarong', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-312', en: 'Brownie', kr: '브라우니', id_optional: 'Kue Brownies', pronunciation: 'beurauni', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-313', en: 'Tiramisu', kr: '티라미수', id_optional: 'Kue Tiramisu', pronunciation: 'tiramisu', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-314', en: 'Salt Bread', kr: '소금빵', id_optional: 'Roti Garam (Salt Bread)', pronunciation: 'sogeumppang', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-315', en: 'Garlic Bread', kr: '마늘빵', id_optional: 'Roti Bawang / Garlic Bread', pronunciation: 'maneulppang', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-316', en: 'Churro', kr: '츄러스', id_optional: 'Kue Churros', pronunciation: 'chyureosseu', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-317', en: 'Pancake', kr: '팬케이크', id_optional: 'Kue Pancake', pronunciation: 'paenkeikeu', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-318', en: 'Waffle', kr: '와플', id_optional: 'Kue Waffle', pronunciation: 'wapeul', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-319', en: 'Egg Tart', kr: '에그타르트', id_optional: 'Kue Egg Tart', pronunciation: 'egeutareuteu', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-320', en: 'Bingsu (Shaved Ice)', kr: '빙수', id_optional: 'Es Serut Korea (Bingsu)', pronunciation: 'bingsu', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-321', en: 'Pretzel', kr: '프레첼', id_optional: 'Kue Pretzel', pronunciation: 'peurechel', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-322', en: 'Strawberry Shortcake', kr: '딸기 생크림 케이크', id_optional: 'Kue Stroberi Krim', pronunciation: 'ttalgi saengkeureim keikeu', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-323', en: 'Butter', kr: '버터', id_optional: 'Mentega / Butter', pronunciation: 'beoteo', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-324', en: 'Jam', kr: '잼', id_optional: 'Selai', pronunciation: 'jaem', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },
  { id: 'v-325', en: 'Ice Cream', kr: '아이스크림', id_optional: 'Es Krim', pronunciation: 'aiseukeureim', partOfSpeech: 'noun', moduleTag: 'mod-03', contextTag: 'bakery', streak: 0, masteryLevel: 0 },

  // ==================== MODUL 4: Practical Verbs & Boss Casual Talk (25 Items) ====================
  { id: 'v-401', en: 'Order', kr: '주문하다', id_optional: 'Memesan', pronunciation: 'jumunhada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-402', en: 'Pay', kr: '결제하다 / 계산하다', id_optional: 'Membayar', pronunciation: 'gyeoljehada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-403', en: 'Sit', kr: '앉다', id_optional: 'Duduk', pronunciation: 'anjda', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-404', en: 'Wait', kr: '기다리다', id_optional: 'Menunggu', pronunciation: 'gidarida', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-405', en: 'Meet', kr: '만나다', id_optional: 'Bertemu', pronunciation: 'mannada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-406', en: 'Enjoy / Drink', kr: '마시다 / 즐기다', id_optional: 'Minum / Menikmati', pronunciation: 'masida / jeulgida', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-407', en: 'Study', kr: '공부하다', id_optional: 'Belajar', pronunciation: 'gongbuhada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-408', en: 'Work', kr: '일하다', id_optional: 'Bekerja', pronunciation: 'ilhada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-409', en: 'Pack / Take out', kr: '포장하다', id_optional: 'Membungkus (To go)', pronunciation: 'pojanghada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-410', en: 'Clean up', kr: '치우다 / 정리하다', id_optional: 'Membersihkan / Merapikan', pronunciation: 'chiuda', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-411', en: 'Spill', kr: '쏟다', id_optional: 'Tumpah', pronunciation: 'ssotda', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-412', en: 'Return', kr: '반납하다', id_optional: 'Mengembalikan (Gelas/Piring)', pronunciation: 'bannabhada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-413', en: 'Charge (Phone/Laptop)', kr: '충전하다', id_optional: 'Mengisi Daya / Mengisi Baterai', pronunciation: 'chungjeonhada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-414', en: 'Warm up / Heat', kr: '데우다', id_optional: 'Memanaskan', pronunciation: 'dewuda', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-415', en: 'Cool down', kr: '식히다', id_optional: 'Mendinginkan', pronunciation: 'sikhida', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-416', en: 'Recommend', kr: '추천하다', id_optional: 'Merekomendasikan', pronunciation: 'chucheonhada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-417', en: 'Choose / Select', kr: '고르다 / 선택하다', id_optional: 'Memilih', pronunciation: 'goreuda', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-418', en: 'Pour', kr: '따르다 / 붓다', id_optional: 'Menuangkan', pronunciation: 'ttareuda', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-419', en: 'Mix / Stir', kr: '섞다 / 저어가다', id_optional: 'Mencampur / Aduk', pronunciation: 'seokda', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-420', en: 'Add', kr: '추가하다', id_optional: 'Menambahkan', pronunciation: 'chugahada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-421', en: 'Remove / Leave out', kr: '빼다', id_optional: 'Menghilangkan / Tanpa', pronunciation: 'ppaeda', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-422', en: 'Reserve / Book', kr: '예약하다', id_optional: 'Memesan Tempat / Reservasi', pronunciation: 'yeyakhada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-423', en: 'Taste / Try', kr: '맛보다', id_optional: 'Mencicipi / Mencoba Rasa', pronunciation: 'matboda', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-424', en: 'Talk / Chat', kr: '대화하다 / 수다떨다', id_optional: 'Bercakap-cakap / Mengobrol', pronunciation: 'daehwahada', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },
  { id: 'v-425', en: 'Relax / Rest', kr: '쉬다 / 휴식하다', id_optional: 'Beristirahat / Santai', pronunciation: 'swida', partOfSpeech: 'verb', moduleTag: 'mod-04', contextTag: 'verbs', streak: 0, masteryLevel: 0 },

  // ==================== MODUL 5: Useful Adjectives & Tastes (25 Items) ====================
  { id: 'v-501', en: 'Delicious / Tasty', kr: '맛있는', id_optional: 'Enak / Lezat', pronunciation: 'masinneun', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-502', en: 'Bitter', kr: '쓴', id_optional: 'Pahit', pronunciation: 'sseun', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-503', en: 'Sweet', kr: '달콤한 / 달달한', id_optional: 'Manis', pronunciation: 'dalkomhan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-504', en: 'Sour', kr: '신 / 새콤한', id_optional: 'Asam / Masam', pronunciation: 'sin', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-505', en: 'Salty', kr: '짭짤한 / 짠', id_optional: 'Asin', pronunciation: 'jjapjjalhan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-506', en: 'Savory / Rich', kr: '고소한', id_optional: 'Gurih / Rich Flavor', pronunciation: 'gosohan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-507', en: 'Hot / Warm', kr: '뜨거운 / 따뜻한', id_optional: 'Panas / Hangat', pronunciation: 'tteugeoun / ttatteut-han', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-508', en: 'Cold / Refreshing', kr: '차가운 / 시원한', id_optional: 'Dingin / Segar', pronunciation: 'chagaoun / siwonhan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-509', en: 'Strong (Coffee)', kr: '진한', id_optional: 'Kental / Pekat (Kopi)', pronunciation: 'jinhan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-510', en: 'Weak / Mild', kr: '연한', id_optional: 'Encer / Ringan (Kopi)', pronunciation: 'yeonhan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-511', en: 'Crowded / Busy', kr: '복잡한 / 붐비는', id_optional: 'Ramai / Padat', pronunciation: 'bokjabhan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-512', en: 'Quiet / Peaceful', kr: '조용한', id_optional: 'Tenang / Sunyi', pronunciation: 'joyonghan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-513', en: 'Cozy / Warm', kr: '아늑한', id_optional: 'Nyaman / Hangat (Suasana)', pronunciation: 'aneukhan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-514', en: 'Spacious / Wide', kr: '넓은', id_optional: 'Luas / Lapang', pronunciation: 'neolbeun', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-515', en: 'Expensive', kr: '비싼', id_optional: 'Mahal', pronunciation: 'bissan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-516', en: 'Cheap / Affordable', kr: '저렴한 / 싸다', id_optional: 'Murah / Terjangkau', pronunciation: 'jeoryeomhan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-517', en: 'Fresh', kr: '신선한', id_optional: 'Segar (Bahan / Buah)', pronunciation: 'sinseonhan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-518', en: 'Soft', kr: '부드러운', id_optional: 'Lembut', pronunciation: 'budeureoun', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-519', en: 'Crispy / Crunchy', kr: '바삭한', id_optional: 'Renyah / Garing', pronunciation: 'basakhan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-520', en: 'Chewy', kr: '쫄깃한', id_optional: 'Kenyal', pronunciation: 'jjolgit-han', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-521', en: 'Thirsty', kr: '목마른', id_optional: 'Haus', pronunciation: 'mongmareun', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-522', en: 'Hungry', kr: '배고픈', id_optional: 'Lapar', pronunciation: 'baegopeun', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-523', en: 'Full (Stomach)', kr: '배부른', id_optional: 'Kenyang', pronunciation: 'baebureun', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-524', en: 'Comfortable', kr: '편안한', id_optional: 'Nyaman (Tempat Duduk)', pronunciation: 'pyeon-anhan', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },
  { id: 'v-525', en: 'Relaxed / Slow', kr: '여유로운', id_optional: 'Santai / Relaxed', pronunciation: 'yeoyuroun', partOfSpeech: 'adj', moduleTag: 'mod-05', contextTag: 'adjectives', streak: 0, masteryLevel: 0 },

  // ==================== MODUL 6: Useful Expressions & Facilities (25 Items) ====================
  { id: 'v-601', en: 'To go', kr: '테이크아웃 (포장)', id_optional: 'Dibungkus (Takeaway)', pronunciation: 'teikeu-a-ut', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-602', en: 'For here', kr: '매장 이용 (먹고 가기)', id_optional: 'Makan di tempat (Dine in)', pronunciation: 'maejang iyong', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-603', en: 'How much is this?', kr: '이것 얼마예요?', id_optional: 'Berapa harga ini?', pronunciation: 'igeot eolmayeyo', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-604', en: 'Where is the restroom?', kr: '화장실 어디에 있나요?', id_optional: 'Toilet ada di mana?', pronunciation: 'hwajangsil eodie innayo', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-605', en: 'What do you recommend?', kr: '어떤 것을 추천하세요?', id_optional: 'Apa yang Anda rekomendasikan?', pronunciation: 'eotteon geoseul chucheonhaseyo', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-606', en: 'Can I get a seat?', kr: '자리가 있나요?', id_optional: 'Apakah ada tempat duduk?', pronunciation: 'jariga innayo', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-607', en: 'Warm it up please', kr: '데워 주세요', id_optional: 'Tolong dipanaskan', pronunciation: 'deweojuseyo', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-608', en: 'Is this drink sweet?', kr: '이 음료 달아요?', id_optional: 'Apakah minuman ini manis?', pronunciation: 'i eumryo darayo', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-609', en: 'Can I order now?', kr: '지금 주문할 수 있나요?', id_optional: 'Bisa saya pesan sekarang?', pronunciation: 'jigeum jumunhal su innayo', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-610', en: 'One more please', kr: '하나 더 주세요', id_optional: 'Tolong tambah satu lagi', pronunciation: 'hana deo juseyo', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-611', en: 'I am allergic to milk', kr: '우유 알레르기가 있어요', id_optional: 'Saya alergi susu', pronunciation: 'uyu allereugiga issoyo', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-612', en: 'Does it contain nuts?', kr: '견과류가 들어있나요?', id_optional: 'Apakah ini mengandung kacang?', pronunciation: 'gyeonggwaryuga deureoinnayo', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-613', en: 'Can I have some water?', kr: '물 좀 주시겠어요?', id_optional: 'Bolehkah saya minta air minum?', pronunciation: 'mul jom jusigesseoyo', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'expressions', streak: 0, masteryLevel: 0 },
  { id: 'v-614', en: 'Receipt', kr: '영수증', id_optional: 'Struk Pembayaran', pronunciation: 'yeongsujeung', partOfSpeech: 'noun', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 },
  { id: 'v-615', en: 'Stamp Card', kr: '쿠폰 적립 (스탬프)', id_optional: 'Kartu Stempel / Kupon', pronunciation: 'kupon jeokrip', partOfSpeech: 'phrase', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 },
  { id: 'v-616', en: 'Credit Card', kr: '신용카드', id_optional: 'Kartu Kredit / Debit', pronunciation: 'sinyongkadeu', partOfSpeech: 'noun', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 },
  { id: 'v-617', en: 'Cash', kr: '현금', id_optional: 'Uang Tunai', pronunciation: 'hyeongeum', partOfSpeech: 'noun', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 },
  { id: 'v-618', en: 'Vibrating Pager / Bell', kr: '진동벨', id_optional: 'Bel Pengambil Pesanan (Pager)', pronunciation: 'jindongbel', partOfSpeech: 'noun', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 },
  { id: 'v-619', en: 'Pick up counter', kr: '픽업대 (받는 곳)', id_optional: 'Counter Pengambilan Pesanan', pronunciation: 'pigeobdae', partOfSpeech: 'noun', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 },
  { id: 'v-620', en: 'Return counter', kr: '반납대 (퇴식구)', id_optional: 'Tempat Pengembalian Gelas/Piring', pronunciation: 'bannabdae', partOfSpeech: 'noun', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 },
  { id: 'v-621', en: 'Kiosk Machine', kr: '키오스크 (무인 주문기)', id_optional: 'Mesin Kios Self-Service', pronunciation: 'kioskeu', partOfSpeech: 'noun', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 },
  { id: 'v-622', en: 'Restroom Key', kr: '화장실 열쇠', id_optional: 'Kunci Toilet', pronunciation: 'hwajangsil yeolsoe', partOfSpeech: 'noun', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 },
  { id: 'v-623', en: 'Barista', kr: '바리스타', id_optional: 'Barista', pronunciation: 'bariseuta', partOfSpeech: 'noun', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 },
  { id: 'v-624', en: 'Menu Board', kr: '메뉴판', id_optional: 'Papan Menu', pronunciation: 'menyupan', partOfSpeech: 'noun', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 },
  { id: 'v-625', en: 'Table', kr: '테이블 / 자리', id_optional: 'Meja / Tempat', pronunciation: 'teibeul', partOfSpeech: 'noun', moduleTag: 'mod-06', contextTag: 'facilities', streak: 0, masteryLevel: 0 }
];

// 90 EXACT SENTENCE PATTERNS (15 PATTERNS PER MODULE x 6 MODULES)
export const INITIAL_SENTENCE_PATTERNS = [
  // ==================== MODUL 1: Coffee & Drinks (15 Patterns) ====================
  {
    id: 'sp-101',
    moduleTag: 'mod-01',
    promptKR: '아이스 아메리카노 주세요.',
    promptEN: 'I want an Iced Americano.',
    promptID: 'Saya mau Es Kopi Americano.',
    correctOrder: ['I', 'want', 'an', 'Iced Americano'],
    optionsPool: ['I', 'want', 'an', 'Iced Americano', 'Hot', 'Latte', 'she']
  },
  {
    id: 'sp-102',
    moduleTag: 'mod-01',
    promptKR: '따뜻한 바닐라 라떼 한 잔 주세요.',
    promptEN: 'Can I get a hot vanilla latte?',
    promptID: 'Bisa saya pesan vanilla latte panas?',
    correctOrder: ['Can', 'I', 'get', 'a', 'hot vanilla latte'],
    optionsPool: ['Can', 'I', 'get', 'a', 'hot vanilla latte', 'water', 'they', 'want']
  },
  {
    id: 'sp-103',
    moduleTag: 'mod-01',
    promptKR: '[Bos/Barista] 보통 어떤 종류의 커피를 마시나요?',
    promptEN: 'What kind of coffee do you usually drink?',
    promptID: 'Biasanya Anda suka minum jenis kopi apa?',
    correctOrder: ['What', 'kind of', 'coffee', 'do you', 'usually drink'],
    optionsPool: ['What', 'kind of', 'coffee', 'do you', 'usually drink', 'where', 'want']
  },
  {
    id: 'sp-104',
    moduleTag: 'mod-01',
    promptKR: '[Bos/Barista] 저희 콜드 브루를 시도해 보시겠어요?',
    promptEN: 'Would you like to try our cold brew?',
    promptID: 'Apakah Anda ingin mencoba cold brew kami?',
    correctOrder: ['Would you', 'like to', 'try', 'our', 'cold brew'],
    optionsPool: ['Would you', 'like to', 'try', 'our', 'cold brew', 'drink', 'water']
  },
  {
    id: 'sp-105',
    moduleTag: 'mod-01',
    promptKR: '[Bos/Barista] 저희 녹차 라떼는 매우 인기 있습니다.',
    promptEN: 'Our green tea latte is very popular.',
    promptID: 'Green tea latte kami sangat populer.',
    correctOrder: ['Our', 'green tea latte', 'is', 'very popular'],
    optionsPool: ['Our', 'green tea latte', 'is', 'very popular', 'cold', 'smoothie']
  },
  {
    id: 'sp-106',
    moduleTag: 'mod-01',
    promptKR: '핫초코 한 잔 주세요.',
    promptEN: 'I would like a hot chocolate please.',
    promptID: 'Saya ingin pesan cokelat panas.',
    correctOrder: ['I', 'would like', 'a', 'hot chocolate', 'please'],
    optionsPool: ['I', 'would like', 'a', 'hot chocolate', 'please', 'tea', 'can']
  },
  {
    id: 'sp-107',
    moduleTag: 'mod-01',
    promptKR: '오늘 디카페인 커피가 가능한가요?',
    promptEN: 'Is decaf coffee available today?',
    promptID: 'Apakah kopi bebas kafein ada hari ini?',
    correctOrder: ['Is', 'decaf coffee', 'available', 'today'],
    optionsPool: ['Is', 'decaf coffee', 'available', 'today', 'how', 'want']
  },
  {
    id: 'sp-108',
    moduleTag: 'mod-01',
    promptKR: '[Bos/Barista] 저희 시그니처 플랫 화이트를 추천합니다.',
    promptEN: 'I recommend our signature Flat White.',
    promptID: 'Saya merekomendasikan Flat White andalan kami.',
    correctOrder: ['I', 'recommend', 'our', 'signature', 'Flat White'],
    optionsPool: ['I', 'recommend', 'our', 'signature', 'Flat White', 'you', 'drink']
  },
  {
    id: 'sp-109',
    moduleTag: 'mod-01',
    promptKR: '에스프레소 한 잔과 얼음물 주세요.',
    promptEN: 'Can I get an espresso and ice water?',
    promptID: 'Bisa saya pesan espresso dan air es?',
    correctOrder: ['Can I', 'get an', 'espresso', 'and', 'ice water'],
    optionsPool: ['Can I', 'get an', 'espresso', 'and', 'ice water', 'hot', 'want']
  },
  {
    id: 'sp-110',
    moduleTag: 'mod-01',
    promptKR: '[Bos/Barista] 카푸치노 맛은 어떠신가요?',
    promptEN: 'How do you like your cappuccino?',
    promptID: 'Bagaimana rasa kapucino Anda?',
    correctOrder: ['How', 'do you', 'like your', 'cappuccino'],
    optionsPool: ['How', 'do you', 'like your', 'cappuccino', 'is', 'want']
  },
  {
    id: 'sp-111',
    moduleTag: 'mod-01',
    promptKR: '레몬 에이드 한 잔 할게요.',
    promptEN: 'I will have a lemonade please.',
    promptID: 'Saya pesan es lemonade satu.',
    correctOrder: ['I will', 'have a', 'lemonade', 'please'],
    optionsPool: ['I will', 'have a', 'lemonade', 'please', 'hot', 'coffee']
  },
  {
    id: 'sp-112',
    moduleTag: 'mod-01',
    promptKR: '[Bos/Barista] 오늘 신선한 딸기 라떼가 준비되어 있습니다.',
    promptEN: 'We have fresh strawberry latte today.',
    promptID: 'Hari ini kami punya strawberry latte segar.',
    correctOrder: ['We have', 'fresh', 'strawberry latte', 'today'],
    optionsPool: ['We have', 'fresh', 'strawberry latte', 'today', 'drink', 'water']
  },
  {
    id: 'sp-113',
    moduleTag: 'mod-01',
    promptKR: '[Bos/Barista] 차를 좋아하시나요 커피를 좋아하시나요?',
    promptEN: 'Do you prefer tea or coffee?',
    promptID: 'Apakah Anda lebih suka teh atau kopi?',
    correctOrder: ['Do you', 'prefer', 'tea', 'or', 'coffee'],
    optionsPool: ['Do you', 'prefer', 'tea', 'or', 'coffee', 'want', 'where']
  },
  {
    id: 'sp-114',
    moduleTag: 'mod-01',
    promptKR: '얼그레이 차 한 잔 주세요.',
    promptEN: 'Can I get an Earl Grey tea?',
    promptID: 'Bisa minta satu teh Earl Grey?',
    correctOrder: ['Can I', 'get an', 'Earl Grey tea'],
    optionsPool: ['Can I', 'get an', 'Earl Grey tea', 'hot', 'want']
  },
  {
    id: 'sp-115',
    moduleTag: 'mod-01',
    promptKR: '[Bos/Barista] 주문하신 카라멜 마키아또 나왔습니다.',
    promptEN: 'Here is your caramel macchiato.',
    promptID: 'Ini karamel makiato pesanan Anda.',
    correctOrder: ['Here is', 'your', 'caramel macchiato'],
    optionsPool: ['Here is', 'your', 'caramel macchiato', 'drink', 'please']
  },

  // ==================== MODUL 2: Customization & Flavors (15 Patterns) ====================
  {
    id: 'sp-201',
    moduleTag: 'mod-02',
    promptKR: '오트 밀크로 변경해 주세요.',
    promptEN: 'Can I get this with oat milk?',
    promptID: 'Bisa minta pakai oat milk?',
    correctOrder: ['Can I', 'get this', 'with', 'oat milk'],
    optionsPool: ['Can I', 'get this', 'with', 'oat milk', 'less', 'sugar']
  },
  {
    id: 'sp-202',
    moduleTag: 'mod-02',
    promptKR: '설탕은 적게 넣어주세요.',
    promptEN: 'Please make it with less sugar.',
    promptID: 'Tolong buat dengan sedikit gula.',
    correctOrder: ['Please', 'make it', 'with', 'less sugar'],
    optionsPool: ['Please', 'make it', 'with', 'less sugar', 'more', 'ice']
  },
  {
    id: 'sp-203',
    moduleTag: 'mod-02',
    promptKR: '[Bos/Barista] 얼음 많이 해드릴까요 적게 해드릴까요?',
    promptEN: 'Would you like extra ice or light ice?',
    promptID: 'Apakah Anda mau es banyak atau sedikit?',
    correctOrder: ['Would you', 'like', 'extra ice', 'or', 'light ice'],
    optionsPool: ['Would you', 'like', 'extra ice', 'or', 'light ice', 'no', 'sugar']
  },
  {
    id: 'sp-204',
    moduleTag: 'mod-02',
    promptKR: '[Bos/Barista] 위에 휘핑 크림 올려드릴까요?',
    promptEN: 'Do you want whipped cream on top?',
    promptID: 'Apakah Anda ingin whipped cream di atasnya?',
    correctOrder: ['Do you', 'want', 'whipped cream', 'on top'],
    optionsPool: ['Do you', 'want', 'whipped cream', 'on top', 'extra', 'shot']
  },
  {
    id: 'sp-205',
    moduleTag: 'mod-02',
    promptKR: '샷 추가해 주시겠어요?',
    promptEN: 'Can you add an extra shot please?',
    promptID: 'Bisa tolong tambahkan extra shot espresso?',
    correctOrder: ['Can you', 'add an', 'extra shot', 'please'],
    optionsPool: ['Can you', 'add an', 'extra shot', 'please', 'milk', 'less']
  },
  {
    id: 'sp-206',
    moduleTag: 'mod-02',
    promptKR: '제 라떼에 아몬드 밀크를 선호해요.',
    promptEN: 'I prefer almond milk for my latte.',
    promptID: 'Saya lebih suka susu almond untuk latte saya.',
    correctOrder: ['I prefer', 'almond milk', 'for my', 'latte'],
    optionsPool: ['I prefer', 'almond milk', 'for my', 'latte', 'oat', 'sugar']
  },
  {
    id: 'sp-207',
    moduleTag: 'mod-02',
    promptKR: '제 음료 아주 따뜻하게 해주세요.',
    promptEN: 'Please make my drink extra hot.',
    promptID: 'Tolong buat minuman saya sangat panas.',
    correctOrder: ['Please', 'make my', 'drink', 'extra hot'],
    optionsPool: ['Please', 'make my', 'drink', 'extra hot', 'iced', 'less']
  },
  {
    id: 'sp-208',
    moduleTag: 'mod-02',
    promptKR: '[Bos/Barista] 바닐라 시럽이나 카라멜 시럽을 넣어드릴까요?',
    promptEN: 'Would you like vanilla syrup or caramel syrup?',
    promptID: 'Mau ditambah sirup vanila atau sirup karamel?',
    correctOrder: ['Would you', 'like', 'vanilla syrup', 'or', 'caramel syrup'],
    optionsPool: ['Would you', 'like', 'vanilla syrup', 'or', 'caramel syrup', 'no']
  },
  {
    id: 'sp-209',
    moduleTag: 'mod-02',
    promptKR: '제 커피에 설탕 빼주세요.',
    promptEN: 'Can I have no sugar in my coffee?',
    promptID: 'Bisa buatkan kopi saya tanpa gula?',
    correctOrder: ['Can I', 'have no', 'sugar', 'in my coffee'],
    optionsPool: ['Can I', 'have no', 'sugar', 'in my coffee', 'extra', 'ice']
  },
  {
    id: 'sp-210',
    moduleTag: 'mod-02',
    promptKR: '[Bos/Barista] 두유로 무료 변경 가능합니다.',
    promptEN: 'We can substitute soy milk for free.',
    promptID: 'Kami bisa ganti ke susu kedelai secara gratis.',
    correctOrder: ['We can', 'substitute', 'soy milk', 'for free'],
    optionsPool: ['We can', 'substitute', 'soy milk', 'for free', 'oat', 'syrup']
  },
  {
    id: 'sp-211',
    moduleTag: 'mod-02',
    promptKR: '위에 시나몬 가루 조금 뿌려주세요.',
    promptEN: 'Please sprinkle some cinnamon powder on top.',
    promptID: 'Tolong taburkan sedikit bubuk kayu manis di atasnya.',
    correctOrder: ['Please', 'sprinkle some', 'cinnamon powder', 'on top'],
    optionsPool: ['Please', 'sprinkle some', 'cinnamon powder', 'on top', 'cocoa']
  },
  {
    id: 'sp-212',
    moduleTag: 'mod-02',
    promptKR: '[Bos/Barista] 어떤 당도를 선호하시나요?',
    promptEN: 'What sweetness level do you prefer?',
    promptID: 'Tingkat kemanisan seperti apa yang Anda suka?',
    correctOrder: ['What', 'sweetness level', 'do you', 'prefer'],
    optionsPool: ['What', 'sweetness level', 'do you', 'prefer', 'size', 'hot']
  },
  {
    id: 'sp-213',
    moduleTag: 'mod-02',
    promptKR: '라지 사이즈 아이스 라떼 주세요.',
    promptEN: 'Can I get a large size iced latte?',
    promptID: 'Bisa pesan iced latte ukuran besar?',
    correctOrder: ['Can I', 'get a', 'large size', 'iced latte'],
    optionsPool: ['Can I', 'get a', 'large size', 'iced latte', 'small', 'hot']
  },
  {
    id: 'sp-214',
    moduleTag: 'mod-02',
    promptKR: '락토프리 우유로 주세요.',
    promptEN: 'I would like lactose free milk please.',
    promptID: 'Saya ingin susu bebas laktosa.',
    correctOrder: ['I would', 'like', 'lactose free milk', 'please'],
    optionsPool: ['I would', 'like', 'lactose free milk', 'please', 'soy', 'syrup']
  },
  {
    id: 'sp-215',
    moduleTag: 'mod-02',
    promptKR: '[Bos/Barista] 에스프레소 투샷으로 해드릴까요?',
    promptEN: 'Do you want a double shot of espresso?',
    promptID: 'Apakah Anda ingin double shot espresso?',
    correctOrder: ['Do you', 'want a', 'double shot', 'of espresso'],
    optionsPool: ['Do you', 'want a', 'double shot', 'of espresso', 'extra', 'cream']
  },

  // ==================== MODUL 3: Bakery & Desserts (15 Patterns) ====================
  {
    id: 'sp-301',
    moduleTag: 'mod-03',
    promptKR: '크로와상 하나 데워주세요.',
    promptEN: 'Please warm up one croissant.',
    promptID: 'Tolong panaskan satu croissant.',
    correctOrder: ['Please', 'warm up', 'one', 'croissant'],
    optionsPool: ['Please', 'warm up', 'one', 'croissant', 'cookie', 'coffee']
  },
  {
    id: 'sp-302',
    moduleTag: 'mod-03',
    promptKR: '치즈케이크 한 조각 주세요.',
    promptEN: 'I would like a slice of cheesecake.',
    promptID: 'Saya ingin sepotong kue keju.',
    correctOrder: ['I', 'would like', 'a slice of', 'cheesecake'],
    optionsPool: ['I', 'would like', 'a slice of', 'cheesecake', 'coffee', 'want']
  },
  {
    id: 'sp-303',
    moduleTag: 'mod-03',
    promptKR: '[Bos/Barista] 저희 소금빵은 매일 아침 신선하게 구워냅니다.',
    promptEN: 'Our salt bread is baked fresh every morning.',
    promptID: 'Roti garam kami dipanggang segar setiap pagi.',
    correctOrder: ['Our', 'salt bread', 'is baked fresh', 'every morning'],
    optionsPool: ['Our', 'salt bread', 'is baked fresh', 'every morning', 'cake']
  },
  {
    id: 'sp-304',
    moduleTag: 'mod-03',
    promptKR: '[Bos/Barista] 베이글에 버터 좀 올려드릴까요?',
    promptEN: 'Would you like some butter with your bagel?',
    promptID: 'Mau ditambah mentega untuk bagel Anda?',
    correctOrder: ['Would you', 'like some', 'butter', 'with your bagel'],
    optionsPool: ['Would you', 'like some', 'butter', 'with your bagel', 'jam']
  },
  {
    id: 'sp-305',
    moduleTag: 'mod-03',
    promptKR: '샌드위치 따뜻하게 구워주세요.',
    promptEN: 'Can I get a toasted ham sandwich?',
    promptID: 'Bisa pesan sandwich panggang hangat?',
    correctOrder: ['Can I', 'get a', 'toasted ham', 'sandwich'],
    optionsPool: ['Can I', 'get a', 'toasted ham', 'sandwich', 'cake', 'cookie']
  },
  {
    id: 'sp-306',
    moduleTag: 'mod-03',
    promptKR: '[Bos/Barista] 저희 초콜릿 브라우니 드셔보셨나요?',
    promptEN: 'Have you tried our chocolate brownie?',
    promptID: 'Apakah Anda sudah pernah coba chocolate brownie kami?',
    correctOrder: ['Have you', 'tried our', 'chocolate brownie'],
    optionsPool: ['Have you', 'tried our', 'chocolate brownie', 'waffle', 'cookie']
  },
  {
    id: 'sp-307',
    moduleTag: 'mod-03',
    promptKR: '초코칩 쿠키 두 개 주세요.',
    promptEN: 'I will take two chocolate chip cookies.',
    promptID: 'Saya pesan dua kue cokelat chip.',
    correctOrder: ['I will', 'take two', 'chocolate chip', 'cookies'],
    optionsPool: ['I will', 'take two', 'chocolate chip', 'cookies', 'muffin']
  },
  {
    id: 'sp-308',
    moduleTag: 'mod-03',
    promptKR: '[Bos/Barista] 이 에그타르트는 아메리카노와 잘 어울립니다.',
    promptEN: 'This egg tart goes well with Americano.',
    promptID: 'Egg tart ini sangat cocok dengan Americano.',
    correctOrder: ['This', 'egg tart', 'goes well', 'with Americano'],
    optionsPool: ['This', 'egg tart', 'goes well', 'with Americano', 'latte', 'bagel']
  },
  {
    id: 'sp-309',
    moduleTag: 'mod-03',
    promptKR: '딸기잼과 함께 스콘 주세요.',
    promptEN: 'Can I have a scone with strawberry jam?',
    promptID: 'Bisa pesan scone dengan selai stroberi?',
    correctOrder: ['Can I', 'have a', 'scone with', 'strawberry jam'],
    optionsPool: ['Can I', 'have a', 'scone with', 'strawberry jam', 'butter']
  },
  {
    id: 'sp-310',
    moduleTag: 'mod-03',
    promptKR: '[Bos/Barista] 저희 티라미수는 매우 부드럽고 맛있습니다.',
    promptEN: 'Our tiramisu is very soft and delicious.',
    promptID: 'Tiramisu kami sangat lembut dan lezat.',
    correctOrder: ['Our', 'tiramisu', 'is very', 'soft and delicious'],
    optionsPool: ['Our', 'tiramisu', 'is very', 'soft and delicious', 'sweet']
  },
  {
    id: 'sp-311',
    moduleTag: 'mod-03',
    promptKR: '아이스크림 올린 따뜻한 와플 주세요.',
    promptEN: 'I would like a warm waffle with ice cream.',
    promptID: 'Saya mau waffle hangat dengan es krim.',
    correctOrder: ['I would', 'like a', 'warm waffle', 'with ice cream'],
    optionsPool: ['I would', 'like a', 'warm waffle', 'with ice cream', 'pancake']
  },
  {
    id: 'sp-312',
    moduleTag: 'mod-03',
    promptKR: '[Bos/Barista] 머핀 데워드릴까요?',
    promptEN: 'Would you like your muffin warmed up?',
    promptID: 'Apakah Anda ingin muffinnya dipanaskan?',
    correctOrder: ['Would you', 'like your', 'muffin', 'warmed up'],
    optionsPool: ['Would you', 'like your', 'muffin', 'warmed up', 'scone']
  },
  {
    id: 'sp-313',
    moduleTag: 'mod-03',
    promptKR: '딸기 빙수 하나 주문할 수 있나요?',
    promptEN: 'Can we order a strawberry bingsu?',
    promptID: 'Bisa kami pesan bingsu stroberi?',
    correctOrder: ['Can we', 'order a', 'strawberry bingsu'],
    optionsPool: ['Can we', 'order a', 'strawberry bingsu', 'cake', 'cookie']
  },
  {
    id: 'sp-314',
    moduleTag: 'mod-03',
    promptKR: '[Bos/Barista] 마늘빵은 저희 인기 메뉴 중 하나입니다.',
    promptEN: 'Garlic bread is one of our best sellers.',
    promptID: 'Roti bawang adalah salah satu produk terlaris kami.',
    correctOrder: ['Garlic bread', 'is one of', 'our best sellers'],
    optionsPool: ['Garlic bread', 'is one of', 'our best sellers', 'croissant']
  },
  {
    id: 'sp-315',
    moduleTag: 'mod-03',
    promptKR: '[Bos/Barista] 주문하신 생크림 케이크 나왔습니다.',
    promptEN: 'Here is your fresh cream cake.',
    promptID: 'Ini kue krim segar pesanan Anda.',
    correctOrder: ['Here is', 'your', 'fresh cream cake'],
    optionsPool: ['Here is', 'your', 'fresh cream cake', 'brownie', 'toast']
  },

  // ==================== MODUL 4: Practical Verbs & Boss Casual Talk (15 Patterns) ====================
  {
    id: 'sp-401',
    moduleTag: 'mod-04',
    promptKR: '[Bos/Barista] 오늘 커피 맛있게 즐기고 계신가요?',
    promptEN: 'Are you enjoying your coffee today?',
    promptID: 'Apakah Anda menikmati kopi Anda hari ini?',
    correctOrder: ['Are you', 'enjoying', 'your coffee', 'today'],
    optionsPool: ['Are you', 'enjoying', 'your coffee', 'today', 'waiting', 'working']
  },
  {
    id: 'sp-402',
    moduleTag: 'mod-04',
    promptKR: '[Bos/Barista] 오늘 좋은 하루 보내셨나요?',
    promptEN: 'Did you have a good day today?',
    promptID: 'Apakah hari Anda menyenangkan hari ini?',
    correctOrder: ['Did you', 'have a', 'good day', 'today'],
    optionsPool: ['Did you', 'have a', 'good day', 'today', 'enjoy', 'meet']
  },
  {
    id: 'sp-403',
    moduleTag: 'mod-04',
    promptKR: '[Bos/Barista] 필요하신 것이 있으면 언제든 말씀해 주세요.',
    promptEN: 'Please let me know if you need anything.',
    promptID: 'Beri tahu saya jika Anda memerlukan apa pun.',
    correctOrder: ['Please', 'let me know', 'if you', 'need anything'],
    optionsPool: ['Please', 'let me know', 'if you', 'need anything', 'sit', 'order']
  },
  {
    id: 'sp-404',
    moduleTag: 'mod-04',
    promptKR: '여기서 몇 시간 동안 공부하고 싶어요.',
    promptEN: 'I want to study here for a few hours.',
    promptID: 'Saya ingin belajar di sini selama beberapa jam.',
    correctOrder: ['I want to', 'study here', 'for a', 'few hours'],
    optionsPool: ['I want to', 'study here', 'for a', 'few hours', 'work', 'sit']
  },
  {
    id: 'sp-405',
    moduleTag: 'mod-04',
    promptKR: '지금 친구를 기다리고 있어요.',
    promptEN: 'I am waiting for a friend right now.',
    promptID: 'Saya sedang menunggu teman saat ini.',
    correctOrder: ['I am', 'waiting for', 'a friend', 'right now'],
    optionsPool: ['I am', 'waiting for', 'a friend', 'right now', 'meeting', 'sitting']
  },
  {
    id: 'sp-406',
    moduleTag: 'mod-04',
    promptKR: '[Bos/Barista] 편하신 자리에 자유롭게 앉으세요.',
    promptEN: 'Feel free to sit wherever you like.',
    promptID: 'Silakan duduk di mana saja yang Anda suka.',
    correctOrder: ['Feel free', 'to sit', 'wherever', 'you like'],
    optionsPool: ['Feel free', 'to sit', 'wherever', 'you like', 'order', 'wait']
  },
  {
    id: 'sp-407',
    moduleTag: 'mod-04',
    promptKR: '이 자리 근처에서 핸드폰 충전할 수 있나요?',
    promptEN: 'Can I charge my phone near this seat?',
    promptID: 'Bisa isi baterai hp di dekat tempat duduk ini?',
    correctOrder: ['Can I', 'charge my phone', 'near this', 'seat'],
    optionsPool: ['Can I', 'charge my phone', 'near this', 'seat', 'clean', 'spill']
  },
  {
    id: 'sp-408',
    moduleTag: 'mod-04',
    promptKR: '[Bos/Barista] 천천히 음료를 고르세요.',
    promptEN: 'Take your time to choose your drink.',
    promptID: 'Santai saja saat memilih minuman Anda.',
    correctOrder: ['Take your time', 'to choose', 'your drink'],
    optionsPool: ['Take your time', 'to choose', 'your drink', 'order', 'pay']
  },
  {
    id: 'sp-409',
    moduleTag: 'mod-04',
    promptKR: '[Bos/Barista] 제가 이 테이블을 바로 치워드릴게요.',
    promptEN: 'I will clean up this table right away.',
    promptID: 'Saya akan segera membersihkan meja ini.',
    correctOrder: ['I will', 'clean up', 'this table', 'right away'],
    optionsPool: ['I will', 'clean up', 'this table', 'right away', 'pour', 'mix']
  },
  {
    id: 'sp-410',
    moduleTag: 'mod-04',
    promptKR: '온수 좀 따라주시겠어요?',
    promptEN: 'Can you pour some hot water for me?',
    promptID: 'Bisa tolong tuangkan air panas untuk saya?',
    correctOrder: ['Can you', 'pour some', 'hot water', 'for me'],
    optionsPool: ['Can you', 'pour some', 'hot water', 'for me', 'add', 'remove']
  },
  {
    id: 'sp-411',
    moduleTag: 'mod-04',
    promptKR: '실수로 커피를 조금 쏟았어요.',
    promptEN: 'I accidentally spilled a little bit of coffee.',
    promptID: 'Saya tidak sengaja menumpahkan sedikit kopi.',
    correctOrder: ['I accidentally', 'spilled', 'a little bit of', 'coffee'],
    optionsPool: ['I accidentally', 'spilled', 'a little bit of', 'coffee', 'clean']
  },
  {
    id: 'sp-412',
    moduleTag: 'mod-04',
    promptKR: '[Bos/Barista] 걱정 마세요, 제가 닦을 휴지 가져다드릴게요.',
    promptEN: 'Don’t worry, I will get a napkin for you.',
    promptID: 'Jangan khawatir, saya akan ambilkan tisu untuk Anda.',
    correctOrder: ['Don’t worry,', 'I will get', 'a napkin', 'for you'],
    optionsPool: ['Don’t worry,', 'I will get', 'a napkin', 'for you', 'pour', 'clean']
  },
  {
    id: 'sp-413',
    moduleTag: 'mod-04',
    promptKR: '[Bos/Barista] 쟁반은 저쪽에 반납해 주시면 됩니다.',
    promptEN: 'You can return your tray over there.',
    promptID: 'Anda bisa mengembalikan nampan di sebelah sana.',
    correctOrder: ['You can', 'return your', 'tray', 'over there'],
    optionsPool: ['You can', 'return your', 'tray', 'over there', 'sit', 'pay']
  },
  {
    id: 'sp-414',
    moduleTag: 'mod-04',
    promptKR: '4명 자리를 예약하고 싶어요.',
    promptEN: 'I want to reserve a table for four.',
    promptID: 'Saya ingin memesan tempat untuk 4 orang.',
    correctOrder: ['I want to', 'reserve a', 'table for', 'four'],
    optionsPool: ['I want to', 'reserve a', 'table for', 'four', 'meet', 'sit']
  },
  {
    id: 'sp-415',
    moduleTag: 'mod-04',
    promptKR: '[Bos/Barista] 오늘 저희 카페에 찾아와 주셔서 감사합니다!',
    promptEN: 'Thank you for coming to our cafe today!',
    promptID: 'Terima kasih telah berkunjung ke kafe kami hari ini!',
    correctOrder: ['Thank you', 'for coming to', 'our cafe', 'today'],
    optionsPool: ['Thank you', 'for coming to', 'our cafe', 'today', 'enjoy', 'sit']
  },

  // ==================== MODUL 5: Useful Adjectives & Tastes (15 Patterns) ====================
  {
    id: 'sp-501',
    moduleTag: 'mod-05',
    promptKR: '이 커피 정말 맛있네요!',
    promptEN: 'This coffee is really delicious!',
    promptID: 'Kopi ini benar-benar enak!',
    correctOrder: ['This coffee', 'is', 'really', 'delicious'],
    optionsPool: ['This coffee', 'is', 'really', 'delicious', 'sweet', 'bitter']
  },
  {
    id: 'sp-502',
    moduleTag: 'mod-05',
    promptKR: '[Bos/Barista] 오늘 저희 카페는 매우 아늑하고 조용합니다.',
    promptEN: 'Our cafe is very cozy and quiet today.',
    promptID: 'Kafe kami sangat nyaman dan tenang hari ini.',
    correctOrder: ['Our cafe', 'is very', 'cozy and quiet', 'today'],
    optionsPool: ['Our cafe', 'is very', 'cozy and quiet', 'today', 'crowded', 'busy']
  },
  {
    id: 'sp-503',
    moduleTag: 'mod-05',
    promptKR: '[Bos/Barista] 음료가 너무 달거나 쓴가요?',
    promptEN: 'Is your drink too sweet or bitter?',
    promptID: 'Apakah minuman Anda terlalu manis atau pahit?',
    correctOrder: ['Is your', 'drink too', 'sweet or', 'bitter'],
    optionsPool: ['Is your', 'drink too', 'sweet or', 'bitter', 'salty', 'sour']
  },
  {
    id: 'sp-504',
    moduleTag: 'mod-05',
    promptKR: '소금빵이 정말 바삭하고 쫄깃해요.',
    promptEN: 'The salt bread is very crispy and chewy.',
    promptID: 'Roti garamnya sangat renyah dan kenyal.',
    correctOrder: ['The salt bread', 'is very', 'crispy and', 'chewy'],
    optionsPool: ['The salt bread', 'is very', 'crispy and', 'chewy', 'soft', 'fresh']
  },
  {
    id: 'sp-505',
    moduleTag: 'mod-05',
    promptKR: '저는 진하고 고소한 커피 풍미를 선호해요.',
    promptEN: 'I prefer a strong and rich coffee flavor.',
    promptID: 'Saya lebih suka rasa kopi yang kental dan gurih.',
    correctOrder: ['I prefer', 'a strong and', 'rich coffee', 'flavor'],
    optionsPool: ['I prefer', 'a strong and', 'rich coffee', 'flavor', 'weak', 'mild']
  },
  {
    id: 'sp-506',
    moduleTag: 'mod-05',
    promptKR: '[Bos/Barista] 자리가 편안하신가요?',
    promptEN: 'Is the seat comfortable for you?',
    promptID: 'Apakah tempat duduknya nyaman untuk Anda?',
    correctOrder: ['Is the seat', 'comfortable', 'for you'],
    optionsPool: ['Is the seat', 'comfortable', 'for you', 'spacious', 'cozy']
  },
  {
    id: 'sp-507',
    moduleTag: 'mod-05',
    promptKR: '이 차는 정말 시원하고 따뜻하네요.',
    promptEN: 'This tea is very refreshing and warm.',
    promptID: 'Teh ini sangat menyegarkan dan hangat.',
    correctOrder: ['This tea', 'is very', 'refreshing and', 'warm'],
    optionsPool: ['This tea', 'is very', 'refreshing and', 'warm', 'cold', 'sour']
  },
  {
    id: 'sp-508',
    moduleTag: 'mod-05',
    promptKR: '저는 지금 너무 목마르고 배고파요.',
    promptEN: 'I am feeling very thirsty and hungry.',
    promptID: 'Saya merasa sangat haus dan lapar.',
    correctOrder: ['I am feeling', 'very', 'thirsty and', 'hungry'],
    optionsPool: ['I am feeling', 'very', 'thirsty and', 'hungry', 'full', 'relaxed']
  },
  {
    id: 'sp-509',
    moduleTag: 'mod-05',
    promptKR: '[Bos/Barista] 저희 케이크는 매일 신선하게 만들어집니다.',
    promptEN: 'Our cakes are freshly baked every day.',
    promptID: 'Kue kami dipanggang segar setiap hari.',
    correctOrder: ['Our cakes', 'are freshly', 'baked', 'every day'],
    optionsPool: ['Our cakes', 'are freshly', 'baked', 'every day', 'expensive']
  },
  {
    id: 'sp-510',
    moduleTag: 'mod-05',
    promptKR: '날씨가 뜨거워서 아이스 음료가 마시고 싶어요.',
    promptEN: 'The weather is hot so I want an iced drink.',
    promptID: 'Cuaca panas jadi saya mau minuman dingin.',
    correctOrder: ['The weather', 'is hot so', 'I want an', 'iced drink'],
    optionsPool: ['The weather', 'is hot so', 'I want an', 'iced drink', 'warm']
  },
  {
    id: 'sp-511',
    moduleTag: 'mod-05',
    promptKR: '[Bos/Barista] 이 라운지 공간은 매우 넓고 쾌적합니다.',
    promptEN: 'This lounge space is very wide and spacious.',
    promptID: 'Area santai ini sangat luas dan lapang.',
    correctOrder: ['This lounge', 'space is', 'very wide and', 'spacious'],
    optionsPool: ['This lounge', 'space is', 'very wide and', 'spacious', 'crowded']
  },
  {
    id: 'sp-512',
    moduleTag: 'mod-05',
    promptKR: '여기 가격은 정말 저렴하고 합리적이에요.',
    promptEN: 'The price here is very cheap and affordable.',
    promptID: 'Harga di sini sangat murah dan terjangkau.',
    correctOrder: ['The price', 'here is', 'very cheap and', 'affordable'],
    optionsPool: ['The price', 'here is', 'very cheap and', 'affordable', 'expensive']
  },
  {
    id: 'sp-513',
    moduleTag: 'mod-05',
    promptKR: '[Bos/Barista] 커피가 입맛에 너무 연한가요?',
    promptEN: 'Is the coffee too weak for your taste?',
    promptID: 'Apakah kopinya terlalu encer untuk selera Anda?',
    correctOrder: ['Is the coffee', 'too weak', 'for your', 'taste'],
    optionsPool: ['Is the coffee', 'too weak', 'for your', 'taste', 'strong', 'sweet']
  },
  {
    id: 'sp-514',
    moduleTag: 'mod-05',
    promptKR: '오늘 오후에 카페가 제법 붐볐어요.',
    promptEN: 'The cafe was quite crowded this afternoon.',
    promptID: 'Kafe agak ramai sore hari ini.',
    correctOrder: ['The cafe', 'was quite', 'crowded', 'this afternoon'],
    optionsPool: ['The cafe', 'was quite', 'crowded', 'this afternoon', 'quiet']
  },
  {
    id: 'sp-515',
    moduleTag: 'mod-05',
    promptKR: '[Bos/Barista] 여기서 여유롭고 평화로운 오후 되세요!',
    promptEN: 'Have a relaxed and peaceful afternoon here!',
    promptID: 'Semoga sore Anda santai dan damai di sini!',
    correctOrder: ['Have a', 'relaxed and', 'peaceful afternoon', 'here'],
    optionsPool: ['Have a', 'relaxed and', 'peaceful afternoon', 'here', 'busy']
  },

  // ==================== MODUL 6: Useful Expressions & Facilities (15 Patterns) ====================
  {
    id: 'sp-601',
    moduleTag: 'mod-06',
    promptKR: '포장해 주세요 (To go).',
    promptEN: 'I would like this to go please.',
    promptID: 'Saya ingin ini dibungkus (bawa pulang).',
    correctOrder: ['I would', 'like this', 'to go', 'please'],
    optionsPool: ['I would', 'like this', 'to go', 'please', 'for here', 'want']
  },
  {
    id: 'sp-602',
    moduleTag: 'mod-06',
    promptKR: '영수증 주시겠어요?',
    promptEN: 'Can I get the receipt please?',
    promptID: 'Bisa saya minta struk pembayarannya?',
    correctOrder: ['Can I', 'get the', 'receipt', 'please'],
    optionsPool: ['Can I', 'get the', 'receipt', 'please', 'Wi-Fi', 'where']
  },
  {
    id: 'sp-603',
    moduleTag: 'mod-06',
    promptKR: '화장실이 어디에 있나요?',
    promptEN: 'Where is the restroom located?',
    promptID: 'Di mana letak toiletnya?',
    correctOrder: ['Where is', 'the restroom', 'located'],
    optionsPool: ['Where is', 'the restroom', 'located', 'how', 'much', 'Wi-Fi']
  },
  {
    id: 'sp-604',
    moduleTag: 'mod-06',
    promptKR: '[Bos/Barista] 여기 진동벨 드리겠습니다.',
    promptEN: 'Here is your vibrating pager bell.',
    promptID: 'Ini bel pager pesanan Anda.',
    correctOrder: ['Here is', 'your vibrating', 'pager bell'],
    optionsPool: ['Here is', 'your vibrating', 'pager bell', 'receipt', 'card']
  },
  {
    id: 'sp-605',
    moduleTag: 'mod-06',
    promptKR: '[Bos/Barista] 쿠폰 적립 도와드릴까요?',
    promptEN: 'Would you like to collect stamp card points?',
    promptID: 'Apakah Anda ingin mengumpulkan poin kartu stempel?',
    correctOrder: ['Would you', 'like to collect', 'stamp card', 'points'],
    optionsPool: ['Would you', 'like to collect', 'stamp card', 'points', 'receipt']
  },
  {
    id: 'sp-606',
    moduleTag: 'mod-06',
    promptKR: '[Bos/Barista] 와이파이 비밀번호는 영수증에 있습니다.',
    promptEN: 'The Wi-Fi password is on the receipt.',
    promptID: 'Kata sandi Wi-Fi ada di struk pembayaran.',
    correctOrder: ['The Wi-Fi', 'password is', 'on the receipt'],
    optionsPool: ['The Wi-Fi', 'password is', 'on the receipt', 'key', 'table']
  },
  {
    id: 'sp-607',
    moduleTag: 'mod-06',
    promptKR: '신용카드로 결제할 수 있나요?',
    promptEN: 'Can we pay with a credit card?',
    promptID: 'Apakah kita bisa bayar dengan kartu kredit?',
    correctOrder: ['Can we', 'pay with', 'a credit card'],
    optionsPool: ['Can we', 'pay with', 'a credit card', 'cash', 'receipt']
  },
  {
    id: 'sp-608',
    moduleTag: 'mod-06',
    promptKR: '[Bos/Barista] 카운터 픽업대에서 음료를 찾아가시면 됩니다.',
    promptEN: 'You can pick up your drink at the counter.',
    promptID: 'Anda bisa mengambil minuman di counter pendaftaran.',
    correctOrder: ['You can', 'pick up', 'your drink', 'at the counter'],
    optionsPool: ['You can', 'pick up', 'your drink', 'at the counter', 'table']
  },
  {
    id: 'sp-609',
    moduleTag: 'mod-06',
    promptKR: '[Bos/Barista] 텀블러를 가져오시면 할인이 적용됩니다.',
    promptEN: 'We offer a discount if you bring a tumbler.',
    promptID: 'Kami berikan diskon jika Anda membawa tumbler.',
    correctOrder: ['We offer', 'a discount', 'if you bring', 'a tumbler'],
    optionsPool: ['We offer', 'a discount', 'if you bring', 'a tumbler', 'cup']
  },
  {
    id: 'sp-610',
    moduleTag: 'mod-06',
    promptKR: '각자 따로 계산할 수 있나요?',
    promptEN: 'Can I pay separately for each order?',
    promptID: 'Bisa kita bayar terpisah masing-masing?',
    correctOrder: ['Can I', 'pay separately', 'for each', 'order'],
    optionsPool: ['Can I', 'pay separately', 'for each', 'order', 'cash', 'card']
  },
  {
    id: 'sp-611',
    moduleTag: 'mod-06',
    promptKR: '[Bos/Barista] 음료 캐리어나 종이봉투가 필요하신가요?',
    promptEN: 'Do you need a drink carrier or paper bag?',
    promptID: 'Apakah Anda memerlukan pembawa gelas karton atau kantong kertas?',
    correctOrder: ['Do you need', 'a drink carrier', 'or', 'paper bag'],
    optionsPool: ['Do you need', 'a drink carrier', 'or', 'paper bag', 'sleeve']
  },
  {
    id: 'sp-612',
    moduleTag: 'mod-06',
    promptKR: '[Bos/Barista] 무인 키오스크를 이용하실 수 있습니다.',
    promptEN: 'You can use the self-service kiosk machine.',
    promptID: 'Anda dapat menggunakan mesin kios mandiri.',
    correctOrder: ['You can use', 'the self-service', 'kiosk machine'],
    optionsPool: ['You can use', 'the self-service', 'kiosk machine', 'table']
  },
  {
    id: 'sp-613',
    moduleTag: 'mod-06',
    promptKR: '화장실 열쇠 좀 받을 수 있나요?',
    promptEN: 'Can I get the key for the restroom?',
    promptID: 'Bolehkah saya minta kunci toilet?',
    correctOrder: ['Can I get', 'the key for', 'the restroom'],
    optionsPool: ['Can I get', 'the key for', 'the restroom', 'Wi-Fi', 'receipt']
  },
  {
    id: 'sp-614',
    moduleTag: 'mod-06',
    promptKR: '모바일 페이나 애플페이가 되나요?',
    promptEN: 'Do you accept mobile pay or Apple Pay?',
    promptID: 'Apakah menerima pembayaran mobile pay atau Apple Pay?',
    correctOrder: ['Do you', 'accept', 'mobile pay', 'or Apple Pay'],
    optionsPool: ['Do you', 'accept', 'mobile pay', 'or Apple Pay', 'cash']
  },
  {
    id: 'sp-615',
    moduleTag: 'mod-06',
    promptKR: '[Bos/Barista] 좋은 하루 보내시고 다음에 또 뵙겠습니다!',
    promptEN: 'Have a wonderful day and see you again!',
    promptID: 'Semoga hari Anda menyenangkan dan sampai jumpa lagi!',
    correctOrder: ['Have a', 'wonderful day', 'and see you', 'again'],
    optionsPool: ['Have a', 'wonderful day', 'and see you', 'again', 'please']
  }
];

export const CAFE_FREEWRITE_PROMPTS = [
  {
    id: 'p-1',
    moduleTag: 'mod-01',
    scenarioKR: '바리스타에게 따뜻한 라떼 1잔과 크로와상 1개 주문하기',
    scenarioEN: 'Order 1 hot latte and 1 croissant from the barista in English.',
    scenarioID: 'Pesan 1 latte panas dan 1 croissant ke barista dalam Bahasa Inggris.',
    suggestedVocab: ['latte', 'hot', 'croissant', 'please', 'can I get']
  },
  {
    id: 'p-2',
    moduleTag: 'mod-04',
    scenarioKR: '[Bos/Barista Casual Talk] 손님에게 인사하고 오늘 하루는 어땠는지 물어보기',
    scenarioEN: 'Greet the customer warmly and ask "Did you have a good day today?" in English.',
    scenarioID: 'Sapa pelanggan dengan hangat dan tanyakan apakah harinya menyenangkan.',
    suggestedVocab: ['did you', 'have a', 'good day', 'today', 'enjoying']
  },
  {
    id: 'p-3',
    moduleTag: 'mod-05',
    scenarioKR: '음료의 맛(sweet/bitter)과 분위기(cozy/quiet)를 표현하기',
    scenarioEN: 'Express how delicious the coffee is and mention the cozy atmosphere.',
    scenarioID: 'Ungkapkan betapa enaknya kopi dan betapa nyamannya suasana kafe.',
    suggestedVocab: ['delicious', 'cozy', 'sweet', 'really', 'this coffee is']
  }
];
