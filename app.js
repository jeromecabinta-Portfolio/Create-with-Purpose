// ==========================================================================
// PURPOSE VAULT | Official Nike & ANTA Footwear E-Commerce Store
// Full Interactive E-Commerce Architecture
// ==========================================================================

const PRODUCTS_DATA = [
  {
    id: 'nike-vaporfly-3',
    sku: 'NK-VF3-001',
    brand: 'Nike',
    brandBadge: 'Nike Performance',
    brandColor: 'emerald',
    name: 'Nike ZoomX Vaporfly 3',
    subtitle: 'Elite Marathon Carbon Racing Shoe',
    price: 260.00,
    originalPrice: 260.00,
    rating: 4.9,
    reviewsCount: 184,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Electric Mint / White / Black',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 14,
    badge: 'Best Seller',
    image: 'assets/nike_zoomx_vaporfly.jpg',
    video: 'assets/nike_zoomx_vaporfly.webm',
    description: 'Catch them if you can. Giving you race-day speed to conquer any marathon distance, the Nike Vaporfly 3 is made for the chasers, the racers and the elevated pacers who cannot turn down the thrill of the pursuit. Packed with ultra-responsive ZoomX foam and a full-length carbon fiber Flyplate.',
    specs: {
      cushioning: 'Full-Length ZoomX Superfoam (85% Energy Return)',
      plate: 'Rigid Curved Carbon Fiber Flyplate',
      weight: '6.9 oz / 195 g (Men\'s Size 10)',
      offset: '8 mm heel-to-toe drop',
      upper: 'Engineered Flyknit Breathable Mesh',
      terrain: 'Road Marathon / Elite Racing'
    },
    reviews: [
      { author: 'Marcus V.', rating: 5, date: '2 days ago', title: 'Sub-3 Hour Marathon PR achieved!', text: 'The energy return from the ZoomX and Flyplate is unmatched. Smashed my previous PR by 6 minutes in Berlin.' },
      { author: 'Elena R.', rating: 5, date: '1 week ago', title: 'Worth every single penny', text: 'Incredibly lightweight, breathable, and propulsive. Fits true to size.' }
    ]
  },
  {
    id: 'nike-alphafly-3',
    sku: 'NK-AF3-002',
    brand: 'Nike',
    brandBadge: 'Nike World Record',
    brandColor: 'emerald',
    name: 'Nike Alphafly 3',
    subtitle: 'World Record Marathon Propulsion Shoe',
    price: 285.00,
    originalPrice: 285.00,
    rating: 5.0,
    reviewsCount: 219,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Prototype White / Clear Jade / Volt',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 8,
    badge: 'World Record Drop',
    image: 'assets/nike_alphafly_3.jpg',
    video: 'assets/nike_alphafly_3.webm',
    description: 'Fine-tuned for marathon speed, the Alphafly 3 helps push you beyond what you thought possible. Three innovative technologies power your run: a double dose of dual forefoot Air Zoom units, a full-length carbon fiber plate, and a continuous ZoomX foam midsole from heel to toe.',
    specs: {
      cushioning: 'Continuous ZoomX Foam + Dual Forefoot Zoom Air Pods',
      plate: 'Wider Full-Length Carbon Fiber Flyplate',
      weight: '7.7 oz / 218 g (Men\'s Size 10)',
      offset: '8 mm heel-to-toe drop',
      upper: 'AtomKnit 3.0 Ultra-Lightweight Matrix',
      terrain: 'World Championship Road Racing'
    },
    reviews: [
      { author: 'David K.', rating: 5, date: '3 days ago', title: 'The ultimate race-day weapon', text: 'Propulsion off the toe is unbelievable. Dual Air pods give an explosive bounce.' },
      { author: 'Liam S.', rating: 5, date: '2 weeks ago', title: 'The gold standard of super-shoes', text: 'Stable, cushioned, and lightning-fast. Best shoe Nike has ever engineered.' }
    ]
  },
  {
    id: 'anta-kai-1',
    sku: 'AN-KAI1-003',
    brand: 'ANTA',
    brandBadge: 'ANTA Kyrie Signature',
    brandColor: 'cyan',
    name: 'ANTA KAI 1 "Artist on Court"',
    subtitle: 'Kyrie Irving Official Signature Basketball Shoe',
    price: 125.00,
    originalPrice: 125.00,
    rating: 4.9,
    reviewsCount: 312,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Deep Obsidian / Multi-Color / Native Gold',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 19,
    badge: 'Hot Release',
    image: 'assets/anta_kai_1.jpg',
    video: 'assets/anta_kai_1.webm',
    description: 'Designed in collaboration with 8x NBA All-Star Kyrie Irving. The ANTA KAI 1 embodies court wizardry, featuring indigenous hieroglyphic storytelling embroidery, lockdown midfoot strap, and full-length NitroEdge nitrogen-infused supercritical foam for hyper-responsive court feel.',
    specs: {
      cushioning: 'Full-Length Supercritical NitroEdge Nitrogen Foam',
      plate: 'Carbon Fiber Midfoot Torsion Shank',
      lockdown: 'Dynamic Midfoot Stabilization Strap',
      outsole: 'Radial Multi-Directional Traction Rubber',
      upper: 'Engineered Jacquard Knit with Cultural Embroidery',
      position: 'Guards / Elite Playmakers'
    },
    reviews: [
      { author: 'Jordan M.', rating: 5, date: 'Yesterday', title: 'Best guard shoe on the market!', text: 'Traction stops on a dime. NitroEdge foam is plush yet super court-responsive. Kyrie cooked with this one!' },
      { author: 'Tyler B.', rating: 5, date: '4 days ago', title: 'Quality blows other signature shoes away', text: 'Materials and details are insane for $125. Incredible value.' }
    ]
  },
  {
    id: 'anta-kt9',
    sku: 'AN-KT9-004',
    brand: 'ANTA',
    brandBadge: 'ANTA Klay Signature',
    brandColor: 'amber',
    name: 'ANTA KT9 "Gold Standard"',
    subtitle: 'Klay Thompson Championship Edition',
    price: 130.00,
    originalPrice: 130.00,
    rating: 4.8,
    reviewsCount: 156,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Championship White / Metallic Gold / Obsidian',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 11,
    badge: 'Championship Edition',
    image: 'assets/anta_kt9.jpg',
    video: 'assets/anta_kt9.webm',
    description: 'Engineered for the lethal sharpshooter and perimeter lockdown defender. Klay Thompson\'s 9th signature sneaker integrates 3D FLOW stability architecture, SMART S.A.M shock absorption in the heel, and high-rebound NitroEdge midsole.',
    specs: {
      cushioning: 'Dual-Density NitroEdge + Heel SMART S.A.M Absorption',
      plate: 'Full TPU & Carbon Bridge Torsion System',
      support: '3D FLOW Wrap-Around Heel Counter',
      outsole: 'Water-Ripple Deep Groove Traction',
      upper: 'High-Tensile Reinforced Breathable Weave',
      position: 'Shooting Guards / Wings'
    },
    reviews: [
      { author: 'Chris P.', rating: 5, date: '5 days ago', title: 'Ankle support is incredible', text: 'Solid as a rock when pulling up from three. Cushioning protects my knees during long runs.' }
    ]
  },
  {
    id: 'nike-kobe-8-protro',
    sku: 'NK-KB8-005',
    brand: 'Nike',
    brandBadge: 'Nike Mamba Legacy',
    brandColor: 'purple',
    name: 'Nike Kobe 8 Protro "Venom Strike"',
    subtitle: 'Kobe Bryant Mamba Mentality Basketball Shoe',
    price: 190.00,
    originalPrice: 190.00,
    rating: 5.0,
    reviewsCount: 420,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Court Purple / Metallic Gold / White',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 6,
    badge: 'Mamba Day Drop',
    image: 'assets/nike_kobe_8_protro.jpg',
    video: 'assets/nike_kobe_8_protro.webm',
    description: 'Relive the legacy of the Black Mamba. The Kobe 8 Protro updates the iconic 2012 silhouette with modern Nike React foam drop-in midsole, replacing traditional Lunarlon for superior longevity, court feel, and explosive first-step reaction.',
    specs: {
      cushioning: 'Full Drop-in Nike React Foam Midsole',
      plate: 'Glass-Composite Midfoot Shank',
      weight: '11.2 oz (Ultra-Light Low-Top)',
      outsole: 'Herringbone & Diamond Grip Micro-Tread',
      upper: 'Engineered Snake-Scale Seamless Mesh',
      position: 'Speed Guards / Mamba Disciples'
    },
    reviews: [
      { author: 'Brandon K.', rating: 5, date: '1 day ago', title: 'Mamba Forever 🐍', text: 'React foam drop-in is a massive upgrade. The fit, court feel, and aesthetic are perfection.' },
      { author: 'Derek W.', rating: 5, date: '1 week ago', title: 'Instant classic', text: 'Lightest hoop shoe in my rotation. Unbeatable grip.' }
    ]
  },
  {
    id: 'jordan-1-chicago',
    sku: 'JB-AJ1-006',
    brand: 'Jordan',
    brandBadge: 'Jordan Heritage',
    brandColor: 'red',
    name: 'Air Jordan 1 High OG "Chicago"',
    subtitle: 'Legendary 1985 Heritage Basketball Sneaker',
    price: 180.00,
    originalPrice: 180.00,
    rating: 4.9,
    reviewsCount: 512,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Varsity Red / Black / White',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 16,
    badge: 'Iconic Heritage',
    image: 'assets/nike_jordan_1_chicago.jpg',
    video: 'assets/nike_jordan_1_chicago.webm',
    description: 'The shoe that started it all. Michael Jordan\'s rookie icon returns in authentic 1985 Chicago specifications. Premium full-grain leather upper, encapsulated Air-Sole heel unit, signature Wings logo on ankle collar, and timeless high-top silhouette.',
    specs: {
      cushioning: 'Encapsulated Nike Air-Sole Heel Unit',
      construction: 'Cupsole with Stitched Sidewall',
      materials: 'Premium Genuine Full-Grain Leather',
      outsole: 'Solid Rubber with Concentric Pivot Circle',
      style: 'High-Top Lifestyle & Hardwood Icon'
    },
    reviews: [
      { author: 'Anthony T.', rating: 5, date: '3 days ago', title: 'The greatest sneaker ever made', text: 'Leather quality is supple and thick. Chicago colorway is unbeatable streetwear perfection.' }
    ]
  },
  {
    id: 'nike-ja-2',
    sku: 'NK-JA2-007',
    brand: 'Nike',
    brandBadge: 'Nike Ja Morant Signature',
    brandColor: 'cyan',
    name: 'Nike Ja 2 "Indomitable"',
    subtitle: 'Ja Morant Explosive Guard Signature Shoe',
    price: 120.00,
    originalPrice: 120.00,
    rating: 4.8,
    reviewsCount: 178,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Cyber Blue / Volt Lightning / Black',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13],
    inStock: true,
    stockCount: 22,
    badge: 'New Arrival',
    image: 'assets/nike_ja_2.jpg',
    video: 'assets/nike_ja_2.webm',
    description: 'Channel Ja Morant\'s gravity-defying bounce and relentless energy. The Nike Ja 2 features forefoot Zoom Air for maximum vertical launch, supportive midfoot containment sidewalls, and an ultra-sticky multidirectional traction pattern.',
    specs: {
      cushioning: 'Forefoot Zoom Air Unit + Cushlon Midsole',
      containment: 'Reinforced Lateral TPU Guard Wings',
      outsole: 'Tractor-Tread Radial Traction',
      upper: 'Ripstop Mesh with Molded Ankle Collar',
      position: 'Explosive Guards & Slashers'
    },
    reviews: [
      { author: 'Jalen H.', rating: 5, date: '4 days ago', title: 'Insane bounce for dunkers', text: 'Forefoot Zoom Air gives huge launch off two feet. Super snug lockdown.' }
    ]
  },
  {
    id: 'nike-lebron-21',
    sku: 'NK-LB21-008',
    brand: 'Nike',
    brandBadge: 'Nike King Signature',
    brandColor: 'amber',
    name: 'Nike LeBron 21 "Dragon Pearl"',
    subtitle: 'LeBron James 21st Season Signature Shoe',
    price: 200.00,
    originalPrice: 200.00,
    rating: 4.9,
    reviewsCount: 194,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Oyster Pearl / Iridescent Melon Tint / Emerald',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 12,
    badge: 'Luxury Performance',
    image: 'assets/nike_lebron_21.jpg',
    video: 'assets/nike_lebron_21.webm',
    description: 'Shielding your athleticism with shell-like luxury containment. Inspired by an oyster shell protecting a precious pearl, the LeBron 21 pairs a 360-degree zonal cabling system with top-loaded Zoom Turbo in the forefoot and 13mm bottom-loaded Zoom Air in the heel.',
    specs: {
      cushioning: 'Forefoot Zoom Turbo + 13mm Heel Bottom-Loaded Zoom Air',
      plate: 'Carbon Fiber Midfoot Shank',
      containment: '360° Zonal Flywire Cable Harness',
      upper: 'Lustrous Iridescent Dimensional Textile',
      position: 'Forwards / Power Athletes'
    },
    reviews: [
      { author: 'Darius C.', rating: 5, date: '1 week ago', title: 'King James delivered', text: 'Maximum impact protection. Landings feel like clouds, yet responsiveness is instant.' }
    ]
  },
  {
    id: 'nike-sabrina-2',
    sku: 'NK-SB2-009',
    brand: 'Nike',
    brandBadge: 'Nike Sabrina Signature',
    brandColor: 'purple',
    name: 'Nike Sabrina 2 "Conductor"',
    subtitle: 'Sabrina Ionescu WNBA Precision Shoe',
    price: 130.00,
    originalPrice: 130.00,
    rating: 4.9,
    reviewsCount: 230,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Lilac Lavender / Metallic Silver / White',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 18,
    badge: 'Top Rated',
    image: 'assets/nike_sabrina_2.jpg',
    video: 'assets/nike_sabrina_2.webm',
    description: 'Orchestrate the court with precision and flow. Sabrina Ionescu\'s second signature sneaker features plush Cushlon 3.0 foam wrapped in a firmer carrier, forefoot Zoom Air, and modified herringbone traction engineered for rapid cuts and pinpoint passes.',
    specs: {
      cushioning: 'Plush Cushlon 3.0 Foam + Forefoot Zoom Air',
      fit: 'Dynamic Midfoot Band System',
      weight: '9.8 oz (Super Lightweight)',
      upper: 'Embroidered S-Crown Monogram Mesh',
      position: 'Playmakers / Sharpshooters'
    },
    reviews: [
      { author: 'Maya L.', rating: 5, date: '2 days ago', title: 'Favorite basketball shoe ever', text: 'Fits my foot like a glove. The lilac colorway turns heads every time I step on the court.' }
    ]
  },
  {
    id: 'nike-gt-cut-3',
    sku: 'NK-GTC3-010',
    brand: 'Nike',
    brandBadge: 'Nike Greater Than',
    brandColor: 'cyan',
    name: 'Nike GT Cut 3',
    subtitle: 'Full ZoomX Separation Basketball Shoe',
    price: 190.00,
    originalPrice: 190.00,
    rating: 4.9,
    reviewsCount: 167,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Summit White / Picante Red / Ashen Slate',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 9,
    badge: 'Innovation Drop',
    image: 'assets/nike_gt_cut_3.jpg',
    video: 'assets/nike_gt_cut_3.webm',
    description: 'The first basketball shoe powered by full-length exposed ZoomX foam. Designed to help you create instant separation from defenders with lightning stop-and-go acceleration and razor-sharp change of direction.',
    specs: {
      cushioning: 'Full-Length Exposed ZoomX Foam Core',
      containment: 'Modified Flywire Cables + Lateral Outrigger',
      outsole: 'Herringbone Modified Traction Pods',
      upper: 'Reinforced Breathable Textile',
      position: 'Elite Isolation Guards'
    },
    reviews: [
      { author: 'Kevin N.', rating: 5, date: '3 days ago', title: 'Instant first step!', text: 'ZoomX in a basketball shoe is game-changing. The bounce back on crossovers is ridiculous.' }
    ]
  },
  {
    id: 'nike-book-1',
    sku: 'NK-BK1-011',
    brand: 'Nike',
    brandBadge: 'Nike Book 1 Signature',
    brandColor: 'amber',
    name: 'Nike Book 1 "Chapter One"',
    subtitle: 'Devin Booker Lifestyle-Hoops Hybrid Shoe',
    price: 140.00,
    originalPrice: 140.00,
    rating: 4.8,
    reviewsCount: 142,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Clay Orange / Campfire Suede / Sail',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 15,
    badge: 'Popular',
    image: 'assets/nike_book_1.jpg',
    video: 'assets/nike_book_1.webm',
    description: 'Classic workwear styling meets modern hardwood performance. Devin Booker\'s debut signature shoe merges premium suede and canvas uppers with top-loaded heel Zoom Air and full-length Cushlon 2.0 foam.',
    specs: {
      cushioning: 'Top-Loaded Heel Zoom Air + Full Cushlon 2.0 Midsole',
      plate: 'Rigid TPU Midfoot Shank',
      materials: 'Workwear Heavy-Duty Canvas & Suede',
      outsole: 'Full Herringbone Traction Grip',
      style: 'Hardwood Ready & Streetwear Essential'
    },
    reviews: [
      { author: 'Sam T.', rating: 5, date: '6 days ago', title: 'Seamless transition from court to street', text: 'Looks like an Air Force 1 or Blazer but performs like a modern hoop shoe. Love the materials.' }
    ]
  },
  {
    id: 'nike-air-max-dn',
    sku: 'NK-DN-012',
    brand: 'Nike',
    brandBadge: 'Nike Dynamic Air',
    brandColor: 'purple',
    name: 'Nike Air Max Dn',
    subtitle: '4-Tube Dynamic Air Next-Gen Streetwear',
    price: 160.00,
    originalPrice: 160.00,
    rating: 4.8,
    reviewsCount: 189,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'All Night / Dark Smoke Grey / Light Crimson',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 25,
    badge: 'Air Max Day',
    image: 'assets/nike_air_max_dn.jpg',
    video: 'assets/nike_air_max_dn.webm',
    description: 'Say hello to the next generation of Air technology. The Air Max Dn features our Dynamic Air unit system of dual-pressure tubes, creating a reactive sensation with every step. This results in a futuristic design that\'s comfortable enough to wear from day to night.',
    specs: {
      cushioning: 'Dynamic Air 4-Tube Dual-Pressure Chamber (15psi & 5psi)',
      midsole: 'Phylon Foam Carrier',
      upper: 'Multi-Layered Textured Mesh with Haptic Print',
      outsole: 'Durable Waffle-Inspired Rubber',
      style: 'Futuristic Daily Lifestyle / Streetwear'
    },
    reviews: [
      { author: 'Austin G.', rating: 5, date: '5 days ago', title: 'Feels unreal to walk in', text: 'You can actually feel the air shifting as you walk. Super comfortable for all-day wear.' }
    ]
  },
  {
    id: 'nike-air-max-pulse',
    sku: 'NK-AMP-013',
    brand: 'Nike',
    brandBadge: 'Nike Air Max',
    brandColor: 'cyan',
    name: 'Nike Air Max Pulse',
    subtitle: 'Point-Loaded Air Cushioning Streetwear',
    price: 150.00,
    originalPrice: 150.00,
    rating: 4.7,
    reviewsCount: 135,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Particle Grey / Sport Red / Cyber Volt',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 20,
    badge: 'Everyday Heat',
    image: 'assets/nike_air_max_pulse.jpg',
    video: 'assets/nike_air_max_pulse.webm',
    description: 'Pulling inspiration from the London music scene, the Air Max Pulse brings an underground touch to the iconic Air Max line. Point-loaded Air cushioning—revamped from the incredibly plush Air Max 270—delivers better bounce.',
    specs: {
      cushioning: 'Point-Loaded 270 Air Chamber + Foam Wrap',
      upper: 'Textile-Wrapped Foam Midsole + Breathable Mesh',
      outsole: 'Waffle Rubber Traction',
      style: 'Urban Underground Streetwear'
    },
    reviews: [
      { author: 'Noah B.', rating: 5, date: '1 week ago', title: 'Clean silhouette and comfortable', text: 'Great daily beater. The red and grey colorway pops nicely with baggy denim.' }
    ]
  },
  {
    id: 'nike-pegasus-41',
    sku: 'NK-PEG41-014',
    brand: 'Nike',
    brandBadge: 'Nike Daily Runner',
    brandColor: 'cyan',
    name: 'Nike Air Zoom Pegasus 41',
    subtitle: 'ReactX Foam + Dual Zoom Air Workhorse Runner',
    price: 140.00,
    originalPrice: 140.00,
    rating: 4.9,
    reviewsCount: 388,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Blueprint Volt / Pure Platinum / Black',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 30,
    badge: 'Workhorse Runner',
    image: 'assets/nike_pegasus_41.jpg',
    video: 'assets/nike_pegasus_41.webm',
    description: 'Responsive cushioning in the Pegasus provides an energized ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units and an upgraded ReactX foam midsole.',
    specs: {
      cushioning: 'ReactX Foam (+13% Energy Return) + Forefoot & Heel Zoom Air',
      offset: '10 mm heel-to-toe drop',
      upper: 'Upgraded Engineered Mesh Breathability',
      outsole: 'Signature Waffle Lug Rubber',
      terrain: 'Daily Road Training / 5K to Marathon'
    },
    reviews: [
      { author: 'Rachel H.', rating: 5, date: '3 days ago', title: 'The Pegasus never disappoints', text: 'Logged 150 miles so far, feels brand new. The ReactX upgrade is noticeably springier.' }
    ]
  },
  {
    id: 'anta-shockwave-5',
    sku: 'AN-SW5-015',
    brand: 'ANTA',
    brandBadge: 'ANTA Cyber Hoops',
    brandColor: 'purple',
    name: 'ANTA Shock Wave 5 Pro',
    subtitle: 'Outdoor Cyber Battle Nitrogen Basketball Shoe',
    price: 140.00,
    originalPrice: 140.00,
    rating: 4.8,
    reviewsCount: 162,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Cyber Battle Black / Neon Green / Royal Purple',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 14,
    badge: 'Outdoor Beast',
    image: 'assets/anta_shockwave_5.jpg',
    video: 'assets/anta_shockwave_5.webm',
    description: 'Built for relentless high-intensity outdoor basketball battles. Features a full-length drop-in nitrogen supercritical NitroEdge midsole, wrap-around lateral TPU armor, and indestructible cement-killer rubber compound.',
    specs: {
      cushioning: 'Drop-In Nitrogen Supercritical NitroEdge Midsole',
      reinforcement: 'Multi-Directional Lateral TPU Cyber Armor',
      outsole: 'Cement-Killer High-Abrasion Rubber Outsole',
      upper: 'High-Density Breathable Jacquard Shield',
      court: 'Indoor Hardwood & Outdoor Concrete Courts'
    },
    reviews: [
      { author: 'Devon W.', rating: 5, date: '4 days ago', title: 'Best outdoor shoe ever made', text: 'Played on rough blacktop for 3 months, soles still have 100% of their tread. Indestructible.' }
    ]
  },
  {
    id: 'anta-c202-gt',
    sku: 'AN-C202-016',
    brand: 'ANTA',
    brandBadge: 'ANTA Nitrogen Racing',
    brandColor: 'red',
    name: 'ANTA C202 5 GT Pro',
    subtitle: 'Bionic Carbon Elite Marathon Racing Shoe',
    price: 220.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 140,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Flame Red / Cyber Volt / Carbon Black',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 10,
    badge: 'Pro Marathoner',
    image: 'assets/anta_c202_gt_pro.jpg',
    video: 'assets/anta_c202_gt_pro.webm',
    description: 'ANTA\'s flagship marathon racing super-shoe. Equipped with dual-layer NitroEdge supercritical nitrogen foam and a 3D bionic full-palm curved carbon plate for maximum biomechanical propulsion and fatigue reduction.',
    specs: {
      cushioning: 'Dual-Layer Supercritical Nitrogen NitroEdge Foam',
      plate: '3D Bionic Curved Full-Foot Carbon Fiber Plate',
      weight: '7.1 oz / 202 g',
      outsole: 'Liquid Grip Space Rubber Traction',
      upper: 'Mono-Mesh Ultralight Race Upper',
      terrain: 'Sub-2:30 Elite Marathon Racing'
    },
    reviews: [
      { author: 'Victor Z.', rating: 5, date: '1 week ago', title: 'Comparable to shoes twice the price', text: 'Snappy toe-off and extremely stable in corners. Ran a 2:42 marathon in these effortlessly.' }
    ]
  },
  {
    id: 'nike-dunk-low',
    sku: 'NK-DNK-017',
    brand: 'Nike',
    brandBadge: 'Nike Streetwear',
    brandColor: 'white',
    name: 'Nike Dunk Low Retro "Panda"',
    subtitle: 'Iconic Two-Tone Hardwood Streetwear Classic',
    price: 115.00,
    originalPrice: 115.00,
    rating: 4.8,
    reviewsCount: 680,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'White / Black Panda Classic',
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 35,
    badge: 'Streetwear Essential',
    image: 'assets/nike_dunk_low.jpg',
    video: 'assets/nike_dunk_low.webm',
    description: 'Created for the hardwood but taken to the streets, the \'80s b-ball icon returns with classic details and throwback hoops flair. Channeling vintage style back onto the streets, its padded, low-cut collar lets you comfortably take your game anywhere.',
    specs: {
      cushioning: 'Soft Foam Midsole',
      materials: 'Crisp Full-Grain Leather Upper',
      collar: 'Padded Low-Cut Ankle Collar',
      outsole: 'Rubber Outsole with Classic Pivot Circle',
      style: 'Timeless Everyday Streetwear'
    },
    reviews: [
      { author: 'Lucas M.', rating: 5, date: '2 days ago', title: 'Matches with every outfit', text: 'The ultimate versatile sneaker. Super clean look, durable leather.' }
    ]
  },
  {
    id: 'nike-af1-white',
    sku: 'NK-AF1-018',
    brand: 'Nike',
    brandBadge: 'Nike Air Force 1',
    brandColor: 'white',
    name: 'Nike Air Force 1 \'07',
    subtitle: 'Triple-White All-Time Streetwear Legend',
    price: 115.00,
    originalPrice: 115.00,
    rating: 4.9,
    reviewsCount: 920,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Triple White Classic Monochrome',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 40,
    badge: 'All-Time Classic',
    image: 'assets/nike_air_force_1_white.jpg',
    video: 'assets/nike_air_force_1_white.webm',
    description: 'The radiance lives on in the Nike Air Force 1 \'07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold details and the perfect amount of flash to make you shine.',
    specs: {
      cushioning: 'Full Encapsulated Nike Air-Sole Cushioning',
      materials: 'Pristine Stitched Leather Overlays',
      details: 'Metal AF-1 Dubrae Lace Charm',
      outsole: 'Non-Marking Rubber Pivot Outsole',
      style: 'The Legendary White-on-White Icon'
    },
    reviews: [
      { author: 'Jordan S.', rating: 5, date: 'Yesterday', title: 'Fresh out the box', text: 'You can never have too many pairs of white AF1s. Cleanest sneaker on earth.' }
    ]
  },
  {
    id: 'nike-acg-mountain-fly',
    sku: 'NK-ACG-019',
    brand: 'Nike',
    brandBadge: 'Nike ACG All-Conditions',
    brandColor: 'emerald',
    name: 'Nike ACG Mountain Fly GORE-TEX',
    subtitle: 'Weatherproof Trail & Outdoor Armor',
    price: 220.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 165,
    category: 'outdoor',
    categoryName: 'Outdoor / Trail ACG',
    colorway: 'Clay Green / Anthracite / Reflective Silver',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 11,
    badge: 'Weatherproof Armor',
    image: 'assets/nike_acg_mountain_fly.jpg',
    video: 'assets/nike_acg_mountain_fly.webm',
    description: 'Engineered and tested in Oregon\'s toughest wilderness. Fast, rugged, and completely waterproof with GORE-TEX membrane, sticky chevron lug traction, and plush React foam with trail carbon Flyplate for supreme rocky terrain comfort.',
    specs: {
      weatherproofing: 'GORE-TEX Waterproof Breathable Bootie',
      cushioning: 'Nike React Foam + Full-Length Trail Carbon Flyplate',
      outsole: 'Chevron Lug Hard Rubber All-Terrain Compound',
      lacing: 'Speed Cinch Drawcord Lacing',
      terrain: 'Technical Mountain Hiking / Heavy Rain & Snow'
    },
    reviews: [
      { author: 'Trevor B.', rating: 5, date: '3 days ago', title: 'Keeps feet 100% dry in blizzards', text: 'Unbeatable grip on wet rocks and snow. Feels like wearing a tank with superfoam cushioning.' }
    ]
  },
  {
    id: 'anta-kai-1-warrior',
    sku: 'AN-KAI1-020',
    brand: 'ANTA',
    brandBadge: 'ANTA Kyrie Signature',
    brandColor: 'cyan',
    name: 'ANTA KAI 1 "Enlightened Warrior"',
    subtitle: 'Kyrie Irving Mystic Edition Basketball Shoe',
    price: 125.00,
    originalPrice: 125.00,
    rating: 5.0,
    reviewsCount: 245,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Pure Platinum / Psychic Purple / Gold Hieroglyphics',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 16,
    badge: 'Limited Drop',
    image: 'assets/anta_kai_1_warrior.jpg',
    video: 'assets/anta_kai_1_warrior.webm',
    description: 'The Enlightened Warrior edition celebrates Kyrie Irving\'s spiritual focus and creative artistry on hardwood. Features full-length NitroEdge nitrogen-infused foam, embroidered talisman hieroglyphs, and precision forefoot containment for ankle-breaking crossovers.',
    specs: {
      cushioning: 'Full-Length Supercritical NitroEdge Nitrogen Foam',
      plate: 'Carbon Fiber Midfoot Torsion Shank',
      lockdown: 'Dynamic Forefoot & Midfoot Stabilizer Strap',
      outsole: 'Sticky Radial Traction Pattern',
      upper: 'Engineered Jacquard Knit with Gold Threading',
      position: 'Guards / Elite Ball Handlers'
    },
    reviews: [
      { author: 'Desmond K.', rating: 5, date: 'Yesterday', title: 'The cleanest KAI 1 colorway yet', text: 'Platinum and psychic purple details are breathtaking in person. Traction is squeaky clean.' }
    ]
  },
  {
    id: 'anta-kt9-captain',
    sku: 'AN-KT9-021',
    brand: 'ANTA',
    brandBadge: 'ANTA Klay Signature',
    brandColor: 'amber',
    name: 'ANTA KT9 "Captain Klay"',
    subtitle: 'Klay Thompson Bay Area Championship Edition',
    price: 130.00,
    originalPrice: 130.00,
    rating: 4.9,
    reviewsCount: 172,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Royal Blue / Golden State Yellow / Sail White',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 14,
    badge: 'Championship Legacy',
    image: 'assets/anta_kt9_captain.jpg',
    video: 'assets/anta_kt9_captain.webm',
    description: 'Honoring Klay Thompson\'s nautical love and 4 NBA championships. Equipped with 3D FLOW stability chassis, dual-density NitroEdge midsole, and SMART S.A.M shock-absorbing heel material for long-range marksmanship.',
    specs: {
      cushioning: 'Dual-Density NitroEdge + SMART S.A.M Heel Module',
      stability: '3D FLOW Wrap-Around Carbon Frame',
      outsole: 'Nautical Wave Multi-Surface Traction',
      upper: 'High-Tensile Reinforced Breathable Weave',
      position: 'Shooting Guards / Perimeter Defenders'
    },
    reviews: [
      { author: 'Brandon S.', rating: 5, date: '3 days ago', title: 'Pure shooter shoe', text: 'Landing from jumpers is effortless. The yellow and royal blue color pop is amazing.' }
    ]
  },
  {
    id: 'nike-kobe-8-halo',
    sku: 'NK-KB8-022',
    brand: 'Nike',
    brandBadge: 'Nike Mamba Legacy',
    brandColor: 'purple',
    name: 'Nike Kobe 8 Protro "Halo"',
    subtitle: 'Kobe Bryant Memorial All-White Edition',
    price: 190.00,
    originalPrice: 190.00,
    rating: 5.0,
    reviewsCount: 380,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Triple White Halo / Embroidered Sheath',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 7,
    badge: 'Mamba Memorial',
    image: 'assets/nike_kobe_8_halo.jpg',
    video: 'assets/nike_kobe_8_halo.webm',
    description: 'Created in partnership with the Bryant family to honor Kobe\'s birthday. Featuring an angelic triple-white aesthetic, modern drop-in Nike React foam core, and engineered snakeskin mesh upper with embroidered Mamba sheath logos.',
    specs: {
      cushioning: 'Drop-In Full-Length Nike React Foam Midsole',
      plate: 'Glass-Composite Midfoot Shank',
      weight: '11.0 oz (Featherweight Performance)',
      outsole: 'Solid White Herringbone Tread',
      upper: 'Seamless Engineered Snakeskin Mesh',
      position: 'Speed Guards & Mamba Disciples'
    },
    reviews: [
      { author: 'Julian C.', rating: 5, date: '2 days ago', title: 'Masterpiece tribute', text: 'Cleanest shoe in my entire collection. React foam makes it so comfortable on hardwood.' }
    ]
  },
  {
    id: 'nike-lebron-20-trinity',
    sku: 'NK-LB20-023',
    brand: 'Nike',
    brandBadge: 'Nike King Signature',
    brandColor: 'red',
    name: 'Nike LeBron 20 "Trinity"',
    subtitle: 'LeBron James Championship Low-Top Edition',
    price: 200.00,
    originalPrice: 200.00,
    rating: 4.9,
    reviewsCount: 295,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Black / University Red / Metallic Gold / Smoke Grey',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 10,
    badge: 'King Milestone',
    image: 'assets/nike_lebron_20_trinity.jpg',
    video: 'assets/nike_lebron_20_trinity.webm',
    description: 'The shoe that redefined King James\' signature series into a fast, low-profile performance weapon. Top-loaded Zoom Turbo in the forefoot, 13mm bottom-loaded Zoom Air in the heel, and double-stacked Swoosh branding celebrate LeBron\'s historic career.',
    specs: {
      cushioning: 'Top-Loaded Forefoot Zoom Turbo + 13mm Heel Zoom Air',
      plate: 'Carbon Fiber Midfoot Shank',
      upper: 'Dimensional Knit with Double Swoosh Overlays',
      outsole: 'Multidirectional Hardwood Traction Pods',
      position: 'All Positions / High-Speed Power Athletes'
    },
    reviews: [
      { author: 'Anthony V.', rating: 5, date: '4 days ago', title: 'Top 3 LeBron shoe of all time', text: 'Low-cut mobility with max cushioning. Double-stacked Swoosh is fire.' }
    ]
  },
  {
    id: 'nike-invincible-3',
    sku: 'NK-INV3-024',
    brand: 'Nike',
    brandBadge: 'Nike Max Cushion',
    brandColor: 'emerald',
    name: 'Nike Invincible 3 "Volt ZoomX"',
    subtitle: 'Maximum Stack ZoomX Distance Runner',
    price: 180.00,
    originalPrice: 180.00,
    rating: 4.9,
    reviewsCount: 215,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Black / Cyber Volt / Hyper Pink / White',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 18,
    badge: 'Max Cushion',
    image: 'assets/nike_invincible_3.jpg',
    video: 'assets/nike_invincible_3.webm',
    description: 'With maximum ZoomX cushioning underfoot to support every mile, the Invincible 3 gives you our highest level of comfort. Experience an ultra-bouncy, responsive ride designed to keep you on the run and absorb impact on long marathon training blocks.',
    specs: {
      cushioning: 'Full-Stack High-Volume ZoomX Superfoam (85% Energy Return)',
      stability: 'Wider Forefoot & Heel Base Support Geometry',
      upper: 'Engineered High-Breathability Flyknit',
      offset: '9 mm heel-to-toe drop',
      terrain: 'Long Recovery Runs / Marathon Base Miles'
    },
    reviews: [
      { author: 'Eric G.', rating: 5, date: '5 days ago', title: 'Saves your legs on 20-mile long runs', text: 'Pure cloud under your feet. ZoomX bounce is endless and protects joints.' }
    ]
  },
  {
    id: 'nike-vomero-5',
    sku: 'NK-VOM5-025',
    brand: 'Nike',
    brandBadge: 'Nike 2000s Classic',
    brandColor: 'cyan',
    name: 'Nike Zoom Vomero 5 "Supersonic"',
    subtitle: 'Y2K Dynamic Dual Zoom Air Retro Runner',
    price: 160.00,
    originalPrice: 160.00,
    rating: 4.8,
    reviewsCount: 310,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Light Bone / Cyber Volt / Metallic Silver / Black',
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 22,
    badge: 'Y2K Streetwear Heat',
    image: 'assets/nike_vomero_5.jpg',
    video: 'assets/nike_vomero_5.webm',
    description: 'Carve a new lane for yourself in the Zoom Vomero 5. A richly layered design that includes breathable textiles, synthetic leather and plastic accents comes together to create one of the coolest sneakers of the season with dual Zoom Air units.',
    specs: {
      cushioning: 'Dual Zoom Air Units (Forefoot & Heel) + Cushlon Foam',
      ventilation: 'TecTuff Leather & Plastic Ribbed Midfoot Cage',
      outsole: 'Durable Rubber Waffle Lug Pattern',
      style: 'Y2K Retro Tech Runner / Streetwear Essential'
    },
    reviews: [
      { author: 'Nathan D.', rating: 5, date: '3 days ago', title: 'Most comfortable lifestyle sneaker', text: 'Can wear these all day walking around the city. Super breathable and Y2K aesthetic is peak.' }
    ]
  },
  {
    id: 'jordan-4-bred-reimagined',
    sku: 'JB-AJ4-026',
    brand: 'Jordan',
    brandBadge: 'Jordan Heritage',
    brandColor: 'red',
    name: 'Air Jordan 4 Retro "Bred Reimagined"',
    subtitle: 'Full-Grain Leather 1989 Hardwood Icon',
    price: 215.00,
    originalPrice: 215.00,
    rating: 5.0,
    reviewsCount: 450,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Fire Red / Cement Grey / Summit White',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 12,
    badge: 'Grail Drop',
    image: 'assets/jordan_4_bred.jpg',
    video: 'assets/jordan_4_bred.webm',
    description: 'The definitive 1989 Tinker Hatfield classic reimagined in supple, premium black tumbled leather. Features the legendary molded eyelet support wings, side quarter mesh netting, visible heel Air-Sole unit, and authentic Nike Air branding on the heel tab.',
    specs: {
      cushioning: 'Visible Heel Air-Sole + Encapsulated Forefoot Air Unit',
      materials: 'Premium Soft Tumbled Genuine Leather Upper',
      details: 'Original Stitched Nike Air Heel Tab & Flight Tongue Logo',
      outsole: 'Solid Rubber with Multi-Directional Herringbone Tread',
      style: 'All-Time Hardwood Grail & Streetwear Essential'
    },
    reviews: [
      { author: 'Dominic F.', rating: 5, date: 'Yesterday', title: 'Leather quality is magnificent', text: 'The tumbled leather upgrade makes these 10x better than nubuck. No creasing anxiety and classic Bred colors.' },
      { author: 'Tariq W.', rating: 5, date: '3 days ago', title: 'Shoe of the year', text: 'Nike Air on the back is timeless. Fits true to size.' }
    ]
  },
  {
    id: 'jordan-11-gratitude',
    sku: 'JB-AJ11-027',
    brand: 'Jordan',
    brandBadge: 'Jordan Championship',
    brandColor: 'amber',
    name: 'Air Jordan 11 Retro "Gratitude DMP"',
    subtitle: 'Championship Patent Leather & Gold Luxury Edition',
    price: 230.00,
    originalPrice: 230.00,
    rating: 5.0,
    reviewsCount: 520,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'White / Black Patent / Metallic Gold / Ice Blue',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 9,
    badge: 'Championship Grail',
    image: 'assets/jordan_11_gratitude.jpg',
    video: 'assets/jordan_11_gratitude.webm',
    description: 'Dedicated to the community that made Michael Jordan\'s 11th signature a global cultural phenomenon. Crafted with ultra-glossy black patent leather mudguard, luxe full-grain white leather upper, 3D metallic gold Jumpman emblem, and full-length carbon fiber shank plate.',
    specs: {
      cushioning: 'Full-Length Encapsulated Nike Air-Sole Cushioning',
      plate: 'High-Tensile Full-Length Carbon Fiber Shank',
      materials: 'High-Gloss Patent Leather Rand + Full-Grain Leather Collar',
      outsole: 'Translucent Icy Blue Rubber with Solid Traction Pods',
      style: 'Tuxedo & Hardwood Championship Legend'
    },
    reviews: [
      { author: 'Malik J.', rating: 5, date: '2 days ago', title: 'Flawless patent leather gloss', text: 'Looks incredible with formal attire or streetwear. Carbon plate gives insane arch support.' }
    ]
  },
  {
    id: 'nike-kobe-6-reverse-grinch',
    sku: 'NK-KB6-028',
    brand: 'Nike',
    brandBadge: 'Nike Mamba Legacy',
    brandColor: 'red',
    name: 'Nike Kobe 6 Protro "Reverse Grinch"',
    subtitle: 'Bright Crimson Snakeskin Christmas Masterpiece',
    price: 190.00,
    originalPrice: 190.00,
    rating: 5.0,
    reviewsCount: 610,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Bright Crimson / Black / Electric Green',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 5,
    badge: 'Mamba Grail Drop',
    image: 'assets/nike_kobe_6_grinch.jpg',
    video: 'assets/nike_kobe_6_grinch.webm',
    description: 'The inversion of the most celebrated basketball sneaker in history. Kobe Bryant\'s Kobe 6 Protro pairs a vibrant crimson polyurethane snakeskin scale upper with electric neon green laces, responsive forefoot Air Zoom Turbo, and refined traction geometry.',
    specs: {
      cushioning: 'Large Flexible Forefoot Nike Air Zoom Turbo + Cushlon Midsole',
      plate: 'Carbon Fiber Arch Support Shank',
      upper: 'Molded Dual-Layer Island Polyurethane Snakeskin Scales',
      outsole: 'High-Contact Mamba Geometric Traction Pattern',
      position: 'Elite Shot-Makers & Speed Guards'
    },
    reviews: [
      { author: 'Kobe Fan 24', rating: 5, date: '1 day ago', title: 'Absolute perfection on court', text: 'The court grip is lethal. Zoom Turbo gives an explosive first step. Long live the Mamba.' }
    ]
  },
  {
    id: 'nike-foamposite-red',
    sku: 'NK-FOAM-029',
    brand: 'Nike',
    brandBadge: 'Nike Hardwood Legend',
    brandColor: 'red',
    name: 'Nike Air Foamposite One "Metallic Red"',
    subtitle: 'Liquid Polyurethane Molded Hardwood Armor',
    price: 240.00,
    originalPrice: 240.00,
    rating: 4.9,
    reviewsCount: 235,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Varsity Metallic Red / Black / Translucent Ice',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 8,
    badge: 'Liquid Metal Armor',
    image: 'assets/nike_foamposite_red.jpg',
    video: 'assets/nike_foamposite_red.webm',
    description: 'A revolutionary design that melted traditional footwear manufacturing into a liquid mold. The Air Foamposite One features seamless aerodynamic metallic red polyurethane, full-length double-stacked Zoom Air cushioning, and 1-Cent heel insignia.',
    specs: {
      cushioning: 'Full-Length Double-Stacked Nike Zoom Air Units',
      chassis: 'Seamless Liquid Molded Polyurethane Foamposite Shell',
      plate: 'Enlarged High-Torsional Carbon Fiber Shank',
      outsole: 'Icy Translucent Herringbone Tread',
      style: 'Futuristic Y2K Hardwood & Streetwear Icon'
    },
    reviews: [
      { author: 'Ray C.', rating: 5, date: '4 days ago', title: 'Indestructible tank of a shoe', text: 'Metallic red shine is gorgeous. Molded foam shapes to your foot over time.' }
    ]
  },
  {
    id: 'anta-kai-1-pink',
    sku: 'AN-KAI1-030',
    brand: 'ANTA',
    brandBadge: 'ANTA Kyrie Signature',
    brandColor: 'purple',
    name: 'ANTA KAI 1 "Secret Garden"',
    subtitle: 'Kyrie Irving Mother\'s Day Floral Edition',
    price: 125.00,
    originalPrice: 125.00,
    rating: 4.9,
    reviewsCount: 180,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Petal Pink / Feathery Lavender / Mint Gold',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 15,
    badge: 'Special Edition',
    image: 'assets/anta_kai_1_pink.jpg',
    video: 'assets/anta_kai_1_pink.webm',
    description: 'Kyrie Irving\'s touching tribute to the maternal energy that guides his life and court wizardry. Features blooming floral embroidery interwoven with indigenous talisman runes, full-length supercritical NitroEdge nitrogen foam, and lockdown midfoot strap.',
    specs: {
      cushioning: 'Full-Length Supercritical NitroEdge Nitrogen Foam',
      plate: 'Carbon Fiber Midfoot Torsion Shank',
      lockdown: 'Embroidered Floral Midfoot Harness Strap',
      outsole: 'Multi-Directional Radial Traction Compound',
      position: 'Precision Guards & Creative Playmakers'
    },
    reviews: [
      { author: 'Jerome P.', rating: 5, date: 'Yesterday', title: 'The color details are unreal', text: 'Soft petal pink with gold accents looks amazing on foot. Super plush and bouncy court feel.' }
    ]
  },
  {
    id: 'anta-shockwave-stealth',
    sku: 'AN-SW5-031',
    brand: 'ANTA',
    brandBadge: 'ANTA Outdoor Beast',
    brandColor: 'amber',
    name: 'ANTA Shock Wave 5 "Cement Killer Stealth"',
    subtitle: 'Triple Black High-Abrasion Outdoor Nitrogen Shoe',
    price: 140.00,
    originalPrice: 140.00,
    rating: 4.8,
    reviewsCount: 195,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Stealth Triple Black / Solar Yellow / Carbon Weave',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 20,
    badge: 'Cement Killer',
    image: 'assets/anta_shockwave_stealth.jpg',
    video: 'assets/anta_shockwave_stealth.webm',
    description: 'Engineered specifically to survive rough outdoor concrete and asphalt courts without wearing down. Packed with drop-in nitrogen NitroEdge foam, heavy-duty TPU side armor, and cement-killer high-abrasion rubber.',
    specs: {
      cushioning: 'Drop-In Full-Length Supercritical Nitrogen Midsole',
      armor: 'Wrap-Around Lateral & Medial TPU Cyber Reinforcement',
      outsole: 'Cement-Killer Extra-Deep Grooved Outdoor Rubber',
      upper: 'Ripstop High-Tensile Mesh Shield',
      court: 'Concrete, Asphalt & Rough Outdoor Courts'
    },
    reviews: [
      { author: 'Marcus D.', rating: 5, date: '4 days ago', title: 'Indestructible outdoor traction', text: 'Played on rough street courts for 6 months, zero visible wear on tread. Cushion is super responsive.' }
    ]
  },
  {
    id: 'nike-streakfly-road',
    sku: 'NK-STRK-032',
    brand: 'Nike',
    brandBadge: 'Nike 5K/10K Speed',
    brandColor: 'emerald',
    name: 'Nike ZoomX Streakfly',
    subtitle: 'Ultra-Lightweight 5K & 10K Road Racing Super-Shoe',
    price: 170.00,
    originalPrice: 170.00,
    rating: 4.9,
    reviewsCount: 230,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'White / Flash Crimson / Hyper Orange / Black',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 14,
    badge: 'Speed Demon',
    image: 'assets/nike_streakfly.jpg',
    video: 'assets/nike_streakfly.webm',
    description: 'Our lightest road racing shoe, the Nike ZoomX Streakfly is all about the speed you need to take on the competition in 5K, 10K, or tempo track workouts. Low-profile ZoomX foam core and midfoot Pebax plate deliver supreme agility.',
    specs: {
      cushioning: 'Low-Profile Responsive ZoomX Superfoam',
      plate: 'Midfoot Pebax Propulsion Shank',
      weight: '5.5 oz / 156 g (Ultra-Featherweight)',
      offset: '6 mm heel-to-toe drop',
      upper: 'Ultra-Thin Translucent Engineered Mono-Mesh',
      terrain: 'Road 5K / 10K Racing & Interval Speedwork'
    },
    reviews: [
      { author: 'Sammy R.', rating: 5, date: '2 days ago', title: 'Fastest 5K shoe ever made', text: 'Feels like running barefoot on trampolines. Lightest racing shoe I have ever owned.' }
    ]
  },
  {
    id: 'nike-kobe-6-mambacita',
    sku: 'NK-KB6-033',
    brand: 'Nike',
    brandBadge: 'Nike Mamba Legacy',
    brandColor: 'purple',
    name: 'Nike Kobe 6 Protro "Mambacita Sweet 16"',
    subtitle: 'Gigi Bryant Memorial Tribute Basketball Shoe',
    price: 190.00,
    originalPrice: 190.00,
    rating: 5.0,
    reviewsCount: 480,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Black / White / Metallic Gold / Gigi #2',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 6,
    badge: 'Mambacita Legacy',
    image: 'assets/nike_kobe_6_mambacita.jpg',
    video: 'assets/nike_kobe_6_mambacita.webm',
    description: 'Honoring Gianna "Gigi" Bryant and the Mamba & Mambacita Sports Foundation. Featuring black and white snakeskin scales, Gigi\'s #2 emblem on the lateral heel, gold Kobe sheath logos, and full forefoot Zoom Turbo cushioning.',
    specs: {
      cushioning: 'Forefoot Nike Air Zoom Turbo + Soft Cushlon Midsole',
      plate: 'Carbon Fiber Arch Stability Shank',
      upper: 'Molded Dual-Layer Polyurethane Snakeskin Scale Shell',
      tribute: 'Gigi #2 Gold Ankle Emblem & Mambacita Crest',
      position: 'Guards / Sharpshooters / Mamba Family'
    },
    reviews: [
      { author: 'Vanessa M.', rating: 5, date: '1 day ago', title: 'A beautiful tribute to Gigi', text: 'The details on the #2 and snakeskin scales are so meaningful. Court performance is top tier.' }
    ]
  },
  {
    id: 'nike-kobe-4-gift-of-mamba',
    sku: 'NK-KB4-034',
    brand: 'Nike',
    brandBadge: 'Nike Mamba Legacy',
    brandColor: 'purple',
    name: 'Nike Kobe 4 Protro "Gift of Mamba"',
    subtitle: 'Triple Black Textured Snakeskin Hardwood Classic',
    price: 190.00,
    originalPrice: 190.00,
    rating: 4.9,
    reviewsCount: 395,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Triple Black / Suede Snakeskin / Laser Etched Signature',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 8,
    badge: 'Triple Black Mamba',
    image: 'assets/nike_kobe_4_black.jpg',
    video: 'assets/nike_kobe_4_black.webm',
    description: 'A luxurious triple-black tribute to Kobe Bryant\'s relentless work ethic. Designed with premium nubuck, textured snakeskin leather overlays, responsive heel Zoom Air, and full-length Phylon foam.',
    specs: {
      cushioning: 'Heel Nike Zoom Air + Full-Length Phylon Foam',
      plate: 'Carbon Fiber Midfoot Torsion Shank',
      upper: 'Textured Snakeskin Leather & Premium Suede Rand',
      collar: 'Padded Low-Cut Hardwood Ankle Collar',
      position: 'Playmakers & All-Around Hardwood Competitors'
    },
    reviews: [
      { author: 'Derrick L.', rating: 5, date: '2 days ago', title: 'Best all-black basketball sneaker ever', text: 'The suede and snakeskin texture feel premium. Lockdown is phenomenal.' }
    ]
  },
  {
    id: 'nike-gt-jump-2',
    sku: 'NK-GTJ2-035',
    brand: 'Nike',
    brandBadge: 'Nike Greater Than',
    brandColor: 'cyan',
    name: 'Nike Air Zoom GT Jump 2 "Enigma"',
    subtitle: 'Dual Zoom Air Pods + Nike React Vertical Bounce Shoe',
    price: 180.00,
    originalPrice: 180.00,
    rating: 4.9,
    reviewsCount: 165,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Enigma Stone / Cyber Volt / Hyper Pink / Black',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 12,
    badge: 'Max Vertical Bounce',
    image: 'assets/nike_gt_jump_2.jpg',
    video: 'assets/nike_gt_jump_2.webm',
    description: 'Engineered for players who play above the rim. Packed with 3 separate Zoom Air units (two forefoot pods + heel Zoom unit), a full-length JumpFrame propulsion plate, and ultra-plush React foam heel.',
    specs: {
      cushioning: 'Dual Forefoot Zoom Pods + Heel Zoom Air + React Foam Core',
      plate: 'Full-Length JumpFrame Composite Propulsion System',
      upper: 'Engineered High-Tensile Mesh with Molded Collar',
      outsole: 'Herringbone Modified High-Grip Rubber',
      position: 'High-Flying Dunkers & Shot Blockers'
    },
    reviews: [
      { author: 'Zion P.', rating: 5, date: '3 days ago', title: 'Trampoline on hardwood', text: 'You feel the dual Air pods launch you on every jump. Knee impact protection is 10/10.' }
    ]
  },
  {
    id: 'nike-sabrina-2-mirrored',
    sku: 'NK-SB2-036',
    brand: 'Nike',
    brandBadge: 'Nike Sabrina Signature',
    brandColor: 'purple',
    name: 'Nike Sabrina 2 "Mirrored"',
    subtitle: 'WNBA All-Star Precision Floor General Shoe',
    price: 130.00,
    originalPrice: 130.00,
    rating: 4.9,
    reviewsCount: 210,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Black / Metallic Silver / Ocean Fog / Smoke Grey',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 16,
    badge: 'Floor General',
    image: 'assets/nike_sabrina_2_mirrored.jpg',
    video: 'assets/nike_sabrina_2_mirrored.webm',
    description: 'Inspired by Sabrina\'s relentless drive to outwork anyone on court. Features metallic chrome mirror accents, plush dual-density Cushlon 3.0 midsole, forefoot Zoom Air, and S-Crown herringbone multidirectional traction.',
    specs: {
      cushioning: 'Dual-Density Cushlon 3.0 Foam + Forefoot Zoom Air',
      accents: 'Metallic Chrome Mirror Finished Swoosh Overlays',
      weight: '9.8 oz (Ultra-Light Precision)',
      outsole: 'Modified Herringbone Multidirectional Floor Grip',
      position: 'Precision Guards & Floor Generals'
    },
    reviews: [
      { author: 'Chloe T.', rating: 5, date: 'Yesterday', title: 'Mirror chrome details shine on court', text: 'Traction bites so hard. Super comfortable and stylish.' }
    ]
  },
  {
    id: 'nike-book-1-haven',
    sku: 'NK-BK1-037',
    brand: 'Nike',
    brandBadge: 'Nike Book 1 Signature',
    brandColor: 'amber',
    name: 'Nike Book 1 "Haven"',
    subtitle: 'Devin Booker Cane Corso Canine Tribute Edition',
    price: 140.00,
    originalPrice: 140.00,
    rating: 4.8,
    reviewsCount: 155,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Dark Charcoal Black / Hemp / Metallic Red Bronze',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 14,
    badge: 'Workwear Luxury',
    image: 'assets/nike_book_1_haven.jpg',
    video: 'assets/nike_book_1_haven.webm',
    description: 'Dedicated to Devin Booker\'s Cane Corso pet dog, Haven. Crafted with rich dark canvas, luxurious suede collars, top-loaded heel Zoom Air cushioning, and full-length Cushlon 2.0 foam.',
    specs: {
      cushioning: 'Top-Loaded Heel Zoom Air + Full Cushlon 2.0 Midsole',
      materials: 'Heavyweight Workwear Canvas & Suede Collar Rand',
      outsole: 'Solid Gum Rubber Herringbone Tread',
      style: 'Hardwood Ready & Streetwear Staple'
    },
    reviews: [
      { author: 'Brandon G.', rating: 5, date: '4 days ago', title: 'Dark charcoal colorway is clean', text: 'Materials feel like a premium lifestyle sneaker but it hoops great.' }
    ]
  },
  {
    id: 'nike-ja-2-stargazer',
    sku: 'NK-JA2-038',
    brand: 'Nike',
    brandBadge: 'Nike Ja Morant Signature',
    brandColor: 'cyan',
    name: 'Nike Ja 2 "Stargazer"',
    subtitle: 'Cosmic Purple Explosive Guard Hardwood Shoe',
    price: 120.00,
    originalPrice: 120.00,
    rating: 4.9,
    reviewsCount: 205,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Bold Berry / Light Lemon Twist / Astronomy Blue',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 20,
    badge: 'Cosmic Explosive',
    image: 'assets/nike_ja_2_stargazer.jpg',
    video: 'assets/nike_ja_2_stargazer.webm',
    description: 'Inspired by Ja Morant\'s childhood nights shooting hoops under the South Carolina stars. Features forefoot Zoom Air for vertical lift, lateral TPU stabilizer outriggers, and tractor-tread radial grip.',
    specs: {
      cushioning: 'Forefoot Air Zoom Unit + Responsive Cushlon Midsole',
      containment: 'Lateral TPU Outrigger Wings for Hard Cuts',
      outsole: 'High-Contact Tractor Radial Tread',
      position: 'Explosive Guards & Slashers'
    },
    reviews: [
      { author: 'Trevor K.', rating: 5, date: '2 days ago', title: 'Unbelievable energy on takeoffs', text: 'The bold berry purple and neon accents look electric on hardwood.' }
    ]
  },
  {
    id: 'nike-lebron-21-akoya',
    sku: 'NK-LB21-039',
    brand: 'Nike',
    brandBadge: 'Nike King Signature',
    brandColor: 'amber',
    name: 'Nike LeBron 21 "Akoya"',
    subtitle: 'Lustrous Pearl Luxury Basketball Shoe',
    price: 200.00,
    originalPrice: 200.00,
    rating: 4.9,
    reviewsCount: 180,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Light Bone / Campfire Orange / Coconut Milk',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 11,
    badge: 'Pearl Armor',
    image: 'assets/nike_lebron_21_akoya.jpg',
    video: 'assets/nike_lebron_21_akoya.webm',
    description: 'Inspired by the Akoya oyster pearl\'s luminous sheen and defensive shell. Top-loaded forefoot Zoom Turbo, 13mm bottom-loaded heel Zoom Air, and 360-degree zonal cabling ensure maximum power containment.',
    specs: {
      cushioning: 'Forefoot Zoom Turbo + 13mm Bottom-Loaded Heel Zoom Air',
      containment: '360° Zonal Flywire Cable Harness Underlay',
      upper: 'Lustrous Akoya Pearl Textured Dimensional Canvas',
      position: 'Power Forwards & Heavy Drivers'
    },
    reviews: [
      { author: 'Kendrick W.', rating: 5, date: '3 days ago', title: 'Top-of-the-line impact cushioning', text: 'Akoya cream color is stunning in person. Super supportive during heavy drives.' }
    ]
  },
  {
    id: 'nike-pegasus-trail-5-gtx',
    sku: 'NK-TR5-040',
    brand: 'Nike',
    brandBadge: 'Nike Trail All-Weather',
    brandColor: 'emerald',
    name: 'Nike Pegasus Trail 5 GORE-TEX',
    subtitle: 'ReactX Foam All-Terrain Waterproof Runner',
    price: 160.00,
    originalPrice: 160.00,
    rating: 4.9,
    reviewsCount: 240,
    category: 'outdoor',
    categoryName: 'Outdoor / Trail ACG',
    colorway: 'Cargo Khaki / Jade Horizon / Bright Mandarin',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 15,
    badge: 'GORE-TEX Trail',
    image: 'assets/nike_pegasus_trail_5.jpg',
    video: 'assets/nike_pegasus_trail_5.webm',
    description: 'Take your running off-road in rain, mud, and snow. Built with a full GORE-TEX waterproof upper, high-energy ReactX foam midsole, and generative all-terrain rubber traction lugs.',
    specs: {
      weatherproofing: 'GORE-TEX Invisible Fit Waterproof Bootie Membrane',
      cushioning: 'ReactX Super-Responsive Foam Midsole (+13% Energy Return)',
      outsole: 'Generative All-Terrain Lug Traction with Nike Trail Rubber',
      terrain: 'Off-Road Trail Running / Mountain Mud / Heavy Rain'
    },
    reviews: [
      { author: 'Colby H.', rating: 5, date: '1 week ago', title: 'Keeps feet bone dry in torrential rain', text: 'ReactX cushioning feels springy on rocky trails. Outstanding waterproof barrier.' }
    ]
  },
  {
    id: 'nike-air-max-1-86-big-bubble',
    sku: 'NK-AM1-041',
    brand: 'Nike',
    brandBadge: 'Nike Air Max Origin',
    brandColor: 'red',
    name: 'Nike Air Max 1 \'86 OG "Big Bubble"',
    subtitle: 'The Original 1986 Visible Air Prototype Grail',
    price: 150.00,
    originalPrice: 150.00,
    rating: 4.9,
    reviewsCount: 410,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'White / University Red / Light Neutral Grey',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 17,
    badge: '1986 Origin Grail',
    image: 'assets/nike_air_max_1_86.jpg',
    video: 'assets/nike_air_max_1_86.webm',
    description: 'The holy grail of sneaker design. Replicating Tinker Hatfield\'s authentic 1986 original oversized 4-chamber visible Air window before production modifications, complete with OG mesh and red suede mudguard.',
    specs: {
      cushioning: '1986 Prototype Oversized Visible Max Air Chamber',
      materials: 'Vintage Nylon Mesh + University Red Suede Rand',
      details: 'Original 1986 Packaging & Retro Box Insole Branding',
      outsole: 'Classic Waffle Lug Traction Rubber',
      style: 'The Genesis of Visible Air History'
    },
    reviews: [
      { author: 'Arturo N.', rating: 5, date: '2 days ago', title: 'A dream sneaker for any collector', text: 'The Big Bubble window looks incredible on foot. OG shape and colors are 1:1 identical to 1986.' }
    ]
  },
  {
    id: 'nike-air-max-95-neon',
    sku: 'NK-AM95-042',
    brand: 'Nike',
    brandBadge: 'Nike Air Max 95',
    brandColor: 'emerald',
    name: 'Nike Air Max 95 OG "Neon"',
    subtitle: 'Human Anatomy Dual Air Chamber Streetwear Legend',
    price: 175.00,
    originalPrice: 175.00,
    rating: 5.0,
    reviewsCount: 650,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Neon Yellow / Medium Ash / Dark Charcoal',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 19,
    badge: 'Y2K Streetwear Legend',
    image: 'assets/nike_air_max_95_neon.jpg',
    video: 'assets/nike_air_max_95_neon.webm',
    description: 'Designed by Sergio Lozano inspired by human ribs, vertebrae, and muscle fibers. Dual forefoot and heel visible neon Air chambers, graduated grey suede gradients, and quick-lace nylon loops.',
    specs: {
      cushioning: 'Dual Visible Air Chambers (Forefoot & Heel High-Pressure Units)',
      construction: 'Graduated Grey Suede Layered Panels',
      lacing: 'Speed-Lacing Ribbed Nylon Eyelet Loops',
      outsole: 'Original Waffle Flex-Grooved Hard Rubber',
      style: 'The Iconic 1995 Japanese & London Streetwear Icon'
    },
    reviews: [
      { author: 'Keisuke T.', rating: 5, date: 'Yesterday', title: 'The definitive sneaker silhouette', text: 'Neon yellow pops against the grey suede tiers. Unmistakable 90s aesthetic.' }
    ]
  },
  {
    id: 'jordan-3-white-cement',
    sku: 'JB-AJ3-043',
    brand: 'Jordan',
    brandBadge: 'Jordan Heritage',
    brandColor: 'red',
    name: 'Air Jordan 3 Retro "White Cement Reimagined"',
    subtitle: '1988 Slam Dunk Contest Elephant Print Masterpiece',
    price: 210.00,
    originalPrice: 210.00,
    rating: 5.0,
    reviewsCount: 720,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Summit White / Fire Red / Black / Cement Grey',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 10,
    badge: '1988 Dunk Contest Grail',
    image: 'assets/jordan_3_white_cement.jpg',
    video: 'assets/jordan_3_white_cement.webm',
    description: 'The shoe Michael Jordan wore when he took flight from the free-throw line in the 1988 Dunk Contest. Features authentic 1988 elephant print cuts, visible heel Air-Sole unit, and Nike Air heel badge.',
    specs: {
      cushioning: 'Visible Heel Air-Sole + Encapsulated Forefoot Air Unit',
      materials: 'Premium Full-Grain Summit White Leather',
      details: 'Original 1988 Cut Elephant Print & Molded Nike Air Heel Tab',
      outsole: 'Solid Rubber with Circular Pivot Forefoot Pod',
      style: 'Tinker Hatfield\'s First Jordan Masterpiece'
    },
    reviews: [
      { author: 'Marcus B.', rating: 5, date: '2 days ago', title: 'Flawless 1988 shape', text: 'Nike Air on the back is so satisfying. Leather is soft and pliable right out of the box.' }
    ]
  },
  {
    id: 'jordan-1-low-travis',
    sku: 'JB-AJ1L-044',
    brand: 'Jordan',
    brandBadge: 'Jordan Collab Grail',
    brandColor: 'amber',
    name: 'Air Jordan 1 Low OG "Reverse Mocha"',
    subtitle: 'Cactus Jack Backward Swoosh Earth-Tone Grail',
    price: 150.00,
    originalPrice: 150.00,
    rating: 5.0,
    reviewsCount: 890,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Sail / Dark Mocha / University Red / Muslin',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 5,
    badge: 'Cactus Jack Grail',
    image: 'assets/jordan_1_low_reverse_mocha.jpg',
    video: 'assets/jordan_1_low_reverse_mocha.webm',
    description: 'The most coveted streetwear low-top in modern history. Features oversized backward leather Swoosh on lateral side, premium dark mocha nubuck base, aged muslin midsole, and red Cactus Jack face embroidery.',
    specs: {
      cushioning: 'Encapsulated Nike Air-Sole Heel Unit',
      materials: 'Dark Mocha Nubuck Suede + Crisp Sail Leather Overlays',
      details: 'Oversized Backward Lateral Swoosh & Cactus Jack Face Embroidery',
      outsole: 'Vintage Muslin Rubber Cupsole',
      style: 'Modern Hype Culture & Streetwear Grail'
    },
    reviews: [
      { author: 'Julian S.', rating: 5, date: 'Yesterday', title: 'The crown jewel of my collection', text: 'Mocha nubuck texture is buttery soft. Looks incredible with baggy cargo pants.' }
    ]
  },
  {
    id: 'anta-kai-1-speed',
    sku: 'AN-KAI1S-045',
    brand: 'ANTA',
    brandBadge: 'ANTA Kyrie Signature',
    brandColor: 'purple',
    name: 'ANTA KAI 1 Speed "Twin Flame"',
    subtitle: 'Kyrie Irving Low-Profile Fast Break Basketball Shoe',
    price: 125.00,
    originalPrice: 125.00,
    rating: 4.9,
    reviewsCount: 220,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Deep Violet Purple / Solar Infrared / Gold Flame',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 16,
    badge: 'Speed Edition',
    image: 'assets/anta_kai_1_speed.jpg',
    video: 'assets/anta_kai_1_speed.webm',
    description: 'Stripped-down low-cut speed edition designed for Kyrie\'s lightning-fast crossover transitions. Full-length NitroEdge nitrogen supercritical foam, low center of gravity chassis, and sticky herringbone pivot traction.',
    specs: {
      cushioning: 'Low-Center Nitrogen Supercritical NitroEdge Foam',
      plate: 'Carbon Fiber Midfoot Torsion Bridge',
      lockdown: 'Low-Cut Agile Speed Collar & Forefoot Wrap',
      outsole: 'Squeaky Sticky Multi-Directional Court Tread',
      position: 'Speed Guards & Isolation Scorers'
    },
    reviews: [
      { author: 'Kyrie Disciple', rating: 5, date: '3 days ago', title: 'Low cut makes you feel so fast', text: 'First step responsiveness is immediate. Colorway looks fierce on hardwood.' }
    ]
  },
  {
    id: 'anta-kai-1-playoffs',
    sku: 'AN-KAI1P-046',
    brand: 'ANTA',
    brandBadge: 'ANTA Kyrie Signature',
    brandColor: 'cyan',
    name: 'ANTA KAI 1 "Playoffs Home"',
    subtitle: 'Kyrie Irving NBA Finals Championship Edition',
    price: 125.00,
    originalPrice: 125.00,
    rating: 5.0,
    reviewsCount: 275,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Dallas Royal Blue / Pure White / Solar Orange',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 14,
    badge: 'Finals Drop',
    image: 'assets/anta_kai_1_playoffs.jpg',
    video: 'assets/anta_kai_1_playoffs.webm',
    description: 'Worn by Kyrie Irving during the 2024 NBA Finals run. Clean royal blue and white color-blocking, talisman stitch embroidery, dynamic midfoot strap, and high-energy NitroEdge nitrogen foam.',
    specs: {
      cushioning: 'Full-Length Supercritical NitroEdge Nitrogen Foam',
      plate: 'Carbon Fiber Midfoot Torsion Shank',
      lockdown: 'Dynamic Forefoot & Midfoot Stabilizer Strap',
      upper: 'Reinforced Jacquard Weave with Talisman Runes',
      position: 'Guards & Hardwood Magicians'
    },
    reviews: [
      { author: 'Dallas M.', rating: 5, date: '2 days ago', title: 'Championship caliber sneaker', text: 'Royal blue and white pop so cleanly. Lockdown strap locks your foot completely in place.' }
    ]
  },
  {
    id: 'anta-kt9-splash',
    sku: 'AN-KT9-047',
    brand: 'ANTA',
    brandBadge: 'ANTA Klay Signature',
    brandColor: 'cyan',
    name: 'ANTA KT9 "Splash Town"',
    subtitle: 'Klay Thompson Coastal Ocean Sharpshooter Shoe',
    price: 130.00,
    originalPrice: 130.00,
    rating: 4.8,
    reviewsCount: 145,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Coastal Aqua / Splash Cyan / Sunshine Gold',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 12,
    badge: 'Splash Edition',
    image: 'assets/anta_kt9_splash.jpg',
    video: 'assets/anta_kt9_splash.webm',
    description: 'Celebrating Klay Thompson\'s historic 3-point shooting brilliance and oceanic spirit. Packed with SMART S.A.M heel shock absorption, 3D FLOW stability frame, and high-traction aqua wave rubber.',
    specs: {
      cushioning: 'Dual-Density NitroEdge Midsole + Heel SMART S.A.M Module',
      stability: '3D FLOW Wrap-Around Carbon Chassis',
      outsole: 'Aqua Wave Multi-Directional Hardwood Grip',
      upper: 'Breathable High-Tensile Water-Resistant Engineered Mesh',
      position: 'Shooting Guards & Perimeter Marksmen'
    },
    reviews: [
      { author: 'Klay Fan 11', rating: 5, date: '4 days ago', title: 'Pure marksmanship shoe', text: 'Cushioning saves knees on landing after high jumper volume. Aqua colorway is awesome.' }
    ]
  },
  {
    id: 'anta-c202-gt-olympic',
    sku: 'AN-C202-048',
    brand: 'ANTA',
    brandBadge: 'ANTA Nitrogen Racing',
    brandColor: 'amber',
    name: 'ANTA C202 5 GT Pro "Olympic Flash"',
    subtitle: 'World-Class Bionic Carbon Marathon Super-Shoe',
    price: 220.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 160,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Olympic Neon Citron / Carbon Black / Flash Gold',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 9,
    badge: 'Olympic Elite',
    image: 'assets/anta_c202_gt_olympic.jpg',
    video: 'assets/anta_c202_gt_olympic.webm',
    description: 'Engineered for elite marathoners on the Olympic stage. Dual-layer nitrogen NitroEdge supercritical foam, 3D bionic full-palm curved carbon plate, and featherweight mono-mesh for effortless 26.2 mile speed.',
    specs: {
      cushioning: 'Dual-Layer Supercritical Nitrogen NitroEdge Foam (86% Energy Return)',
      plate: '3D Bionic Full-Foot Curved Carbon Fiber Plate',
      weight: '7.0 oz / 199 g',
      outsole: 'Liquid Grip Space Rubber Traction',
      upper: 'Featherweight Mono-Mesh Race Upper',
      terrain: 'Sub-2:25 World Marathon Majors'
    },
    reviews: [
      { author: 'Lucas B.', rating: 5, date: '1 day ago', title: 'World-class energy return', text: 'Comparable to any marathon super-shoe on the planet. Neon color turns heads at race day.' }
    ]
  }
];

// ==========================================================================
// E-COMMERCE STATE MANAGEMENT (LocalStorage Persisted)
// ==========================================================================
class StoreState {
  constructor() {
    this.cart = this.load('purpose_cart', []);
    this.wishlist = this.load('purpose_wishlist', []);
    this.currency = this.load('purpose_currency', 'USD');
    this.currencyRates = { USD: 1, EUR: 0.92, GBP: 0.79, JPY: 155, PHP: 58.5 };
    this.currencySymbols = { USD: '$', EUR: '€', GBP: '£', JPY: '¥', PHP: '₱' };
    this.promoDiscount = this.load('purpose_discount', 0);
    this.promoCode = this.load('purpose_promo', '');
    this.freeShippingThreshold = 150;
  }

  load(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch {
      return fallback;
    }
  }

  save(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.error('Storage error', e);
    }
  }

  addToCart(productId, size, quantity = 1) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return false;

    const existingIndex = this.cart.findIndex(
      item => item.id === productId && item.selectedSize === size
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        id: product.id,
        sku: product.sku,
        name: product.name,
        brand: product.brand,
        colorway: product.colorway,
        price: product.price,
        image: product.image,
        selectedSize: size,
        quantity: quantity
      });
    }

    this.save('purpose_cart', this.cart);
    this.notifyCartUpdated();
    return true;
  }

  updateCartQty(productId, size, newQty) {
    const idx = this.cart.findIndex(i => i.id === productId && i.selectedSize === size);
    if (idx > -1) {
      if (newQty <= 0) {
        this.cart.splice(idx, 1);
      } else {
        this.cart[idx].quantity = newQty;
      }
      this.save('purpose_cart', this.cart);
      this.notifyCartUpdated();
    }
  }

  removeFromCart(productId, size) {
    this.cart = this.cart.filter(i => !(i.id === productId && i.selectedSize === size));
    this.save('purpose_cart', this.cart);
    this.notifyCartUpdated();
  }

  clearCart() {
    this.cart = [];
    this.promoDiscount = 0;
    this.promoCode = '';
    this.save('purpose_cart', this.cart);
    this.save('purpose_discount', 0);
    this.save('purpose_promo', '');
    this.notifyCartUpdated();
  }

  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    let added = false;
    if (index > -1) {
      this.wishlist.splice(index, 1);
    } else {
      this.wishlist.push(productId);
      added = true;
    }
    this.save('purpose_wishlist', this.wishlist);
    this.notifyWishlistUpdated();
    return added;
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  applyPromo(code) {
    const upper = code.trim().toUpperCase();
    if (upper === 'PURPOSE10' || upper === 'NIKE10') {
      this.promoDiscount = 0.10; // 10% off
      this.promoCode = upper;
      this.save('purpose_discount', this.promoDiscount);
      this.save('purpose_promo', this.promoCode);
      this.notifyCartUpdated();
      return { success: true, message: '10% Promo Discount Applied!' };
    } else if (upper === 'ANTA20' || upper === 'VIP20') {
      this.promoDiscount = 0.20; // 20% off
      this.promoCode = upper;
      this.save('purpose_discount', this.promoDiscount);
      this.save('purpose_promo', this.promoCode);
      this.notifyCartUpdated();
      return { success: true, message: '20% VIP Vault Discount Applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try "PURPOSE10"' };
    }
  }

  removePromo() {
    this.promoDiscount = 0;
    this.promoCode = '';
    this.save('purpose_discount', 0);
    this.save('purpose_promo', '');
    this.notifyCartUpdated();
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getCartTotal() {
    const subtotal = this.getCartSubtotal();
    const discountAmt = subtotal * this.promoDiscount;
    const discountedSubtotal = Math.max(0, subtotal - discountAmt);
    const shipping = discountedSubtotal >= this.freeShippingThreshold || discountedSubtotal === 0 ? 0 : 15;
    const tax = discountedSubtotal * 0.08; // 8% estimated tax
    return {
      subtotal,
      discountAmt,
      discountedSubtotal,
      shipping,
      tax,
      grandTotal: discountedSubtotal + shipping + tax
    };
  }

  getCartItemCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  formatPrice(amountInUSD) {
    const rate = this.currencyRates[this.currency] || 1;
    const symbol = this.currencySymbols[this.currency] || '$';
    const converted = amountInUSD * rate;
    if (this.currency === 'JPY') {
      return `${symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${symbol}${converted.toFixed(2)}`;
  }

  notifyCartUpdated() {
    window.dispatchEvent(new CustomEvent('cart:updated'));
  }

  notifyWishlistUpdated() {
    window.dispatchEvent(new CustomEvent('wishlist:updated'));
  }
}

const Store = new StoreState();

// ==========================================================================
// TOAST NOTIFICATION SYSTEM
// ==========================================================================
function showStoreToast(message, icon = 'check-circle-2', type = 'success') {
  const existing = document.querySelectorAll('.store-toast');
  existing.forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = `store-toast store-toast-${type}`;
  toast.innerHTML = `
    <i data-lucide="${icon}"></i>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => toast.classList.add('show'), 30);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ==========================================================================
// RENDER PRODUCT CATALOG GRID
// ==========================================================================
let currentBrandFilter = 'all';
let currentCategoryFilter = 'all';
let currentSort = 'featured';
let currentSearchQuery = '';
let currentPriceFilter = 'all';
let currentSizeFilter = 'all';

function getFilteredProducts() {
  return PRODUCTS_DATA.filter(p => {
    // Brand filter
    if (currentBrandFilter !== 'all') {
      if (currentBrandFilter === 'jordan' && p.brand !== 'Jordan') return false;
      if (currentBrandFilter === 'nike' && (p.brand !== 'Nike' && p.brand !== 'Jordan')) return false;
      if (currentBrandFilter === 'anta' && p.brand !== 'ANTA') return false;
    }

    // Category filter
    if (currentCategoryFilter !== 'all' && p.category !== currentCategoryFilter) {
      return false;
    }

    // Price filter
    if (currentPriceFilter !== 'all') {
      if (currentPriceFilter === 'under-130' && p.price >= 130) return false;
      if (currentPriceFilter === '130-180' && (p.price < 130 || p.price > 180)) return false;
      if (currentPriceFilter === '180-220' && (p.price < 180 || p.price > 220)) return false;
      if (currentPriceFilter === '220-plus' && p.price < 220) return false;
    }

    // Size filter
    if (currentSizeFilter !== 'all') {
      const numSize = parseFloat(currentSizeFilter);
      if (!p.sizes.includes(numSize)) return false;
    }

    // Search query
    if (currentSearchQuery.trim() !== '') {
      const q = currentSearchQuery.toLowerCase();
      const match = p.name.toLowerCase().includes(q) ||
                    p.brand.toLowerCase().includes(q) ||
                    p.subtitle.toLowerCase().includes(q) ||
                    p.colorway.toLowerCase().includes(q) ||
                    p.categoryName.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  }).sort((a, b) => {
    if (currentSort === 'price-low') return a.price - b.price;
    if (currentSort === 'price-high') return b.price - a.price;
    if (currentSort === 'rating') return b.rating - a.rating;
    if (currentSort === 'newest') return b.reviewsCount - a.reviewsCount;
    return 0; // featured default
  });
}

function renderProductGrid() {
  const gridEl = document.getElementById('products-grid');
  const countEl = document.getElementById('products-count');
  if (!gridEl) return;

  const products = getFilteredProducts();
  if (countEl) {
    countEl.textContent = `${products.length} Authentic Footwear Drops Available`;
  }

  if (products.length === 0) {
    gridEl.innerHTML = `
      <div class="empty-products-state">
        <i data-lucide="package-x"></i>
        <h3>No matching sneakers found</h3>
        <p>Try adjusting your search terms, brand filters, or price brackets.</p>
        <button class="btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  gridEl.innerHTML = products.map(product => {
    const isWished = Store.isInWishlist(product.id);
    const starHtml = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 !== 0 ? '½' : '');
    
    // Quick sizes selector buttons (first 6 available sizes)
    const quickSizesHtml = product.sizes.slice(0, 6).map(sz => 
      `<button class="card-quick-size-btn" data-product-id="${product.id}" data-size="${sz}" title="Select US ${sz}">US ${sz}</button>`
    ).join('');

    return `
      <div class="product-card" data-product-id="${product.id}">
        
        <!-- Media Container (Image & Hover Video) -->
        <div class="product-media-wrap">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy" />
          <video src="${product.video}" class="product-hover-video" loop muted playsinline preload="none" poster="${product.image}"></video>
          
          <!-- Badges & Overlays -->
          <div class="product-badges-top">
            <span class="product-brand-tag brand-${product.brand.toLowerCase()}">${product.brandBadge}</span>
            ${product.badge ? `<span class="product-promo-tag">${product.badge}</span>` : ''}
          </div>

          <!-- Wishlist Heart Action -->
          <button class="wishlist-toggle-btn ${isWished ? 'active' : ''}" data-product-id="${product.id}" title="${isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            <i data-lucide="heart"></i>
          </button>

          <!-- Floating Price Badge -->
          <div class="product-floating-price">
            ${Store.formatPrice(product.price)}
          </div>

          <!-- Quick View Trigger -->
          <button class="card-quick-view-btn" data-product-id="${product.id}">
            <i data-lucide="eye"></i>
            <span>Quick View & Specs</span>
          </button>
        </div>

        <!-- Product Details -->
        <div class="product-content">
          <div class="product-meta-row">
            <span class="product-category-text">${product.categoryName}</span>
            <div class="product-rating-stars" title="${product.rating} / 5.0 (${product.reviewsCount} verified reviews)">
              <span class="stars">${starHtml}</span>
              <span class="reviews-num">(${product.reviewsCount})</span>
            </div>
          </div>

          <h3 class="product-title" data-product-id="${product.id}">${product.name}</h3>
          <p class="product-colorway">${product.colorway}</p>

          <!-- Inline Quick Size Selector -->
          <div class="card-quick-sizes-container">
            <span class="quick-size-label">Select US Size:</span>
            <div class="card-quick-sizes-strip">
              ${quickSizesHtml}
            </div>
          </div>

          <!-- Price & Add To Cart Button -->
          <div class="product-bottom-action">
            <div class="product-price-block">
              <span class="current-price">${Store.formatPrice(product.price)}</span>
              <span class="shipping-tag"><i data-lucide="shield-check"></i> 100% Deadstock</span>
            </div>
            
            <button class="btn-card-add-cart" data-product-id="${product.id}" data-default-size="${product.sizes[2] || product.sizes[0]}">
              <i data-lucide="shopping-bag"></i>
              <span>Add to Bag</span>
            </button>
          </div>
        </div>

      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
  attachProductCardEvents();
}

function resetAllFilters() {
  currentBrandFilter = 'all';
  currentCategoryFilter = 'all';
  currentSort = 'featured';
  currentSearchQuery = '';
  currentPriceFilter = 'all';
  currentSizeFilter = 'all';

  document.querySelectorAll('.brand-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.brand-tab-btn[data-brand="all"]')?.classList.add('active');

  document.querySelectorAll('.category-filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.category-filter-btn[data-category="all"]')?.classList.add('active');

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) sortSelect.value = 'featured';

  const priceSelect = document.getElementById('catalog-price-select');
  if (priceSelect) priceSelect.value = 'all';

  document.querySelectorAll('.size-filter-chip').forEach(c => c.classList.remove('active'));
  document.querySelector('.size-filter-chip[data-size="all"]')?.classList.add('active');

  renderProductGrid();
}

// ==========================================================================
// ATTACH CARD EVENTS & HOVERS
// ==========================================================================
function attachProductCardEvents() {
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    const video = card.querySelector('video');
    const productId = card.getAttribute('data-product-id');

    // Video hover auto-playback
    if (video) {
      card.addEventListener('mouseenter', () => {
        video.muted = true;
        video.play().catch(() => {});
      });
      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    }

    // Quick View click on image or title or button
    const quickViewBtn = card.querySelector('.card-quick-view-btn');
    const title = card.querySelector('.product-title');
    const imgWrap = card.querySelector('.product-media-wrap');

    const openModal = () => openProductModal(productId);
    if (quickViewBtn) quickViewBtn.addEventListener('click', (e) => { e.stopPropagation(); openModal(); });
    if (title) title.addEventListener('click', openModal);

    // Wishlist Toggle
    const wishBtn = card.querySelector('.wishlist-toggle-btn');
    if (wishBtn) {
      wishBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const added = Store.toggleWishlist(productId);
        wishBtn.classList.toggle('active', added);
        const p = PRODUCTS_DATA.find(item => item.id === productId);
        showStoreToast(
          added ? `Added <strong>${p.name}</strong> to your Wishlist!` : `Removed <strong>${p.name}</strong> from Wishlist`,
          'heart',
          added ? 'success' : 'info'
        );
      });
    }

    // Quick Size selection
    let selectedSize = card.querySelector('.btn-card-add-cart')?.getAttribute('data-default-size');
    const sizeBtns = card.querySelectorAll('.card-quick-size-btn');
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        sizeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = parseFloat(btn.getAttribute('data-size'));
      });
    });

    // Add to Bag Button
    const addCartBtn = card.querySelector('.btn-card-add-cart');
    if (addCartBtn) {
      addCartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const numSize = selectedSize ? parseFloat(selectedSize) : 9.5;
        const p = PRODUCTS_DATA.find(item => item.id === productId);
        
        // Button animation feedback
        addCartBtn.classList.add('adding');
        addCartBtn.innerHTML = `<i data-lucide="check"></i> <span>Added US ${numSize}!</span>`;
        if (window.lucide) window.lucide.createIcons();

        Store.addToCart(productId, numSize, 1);
        showStoreToast(`Added <strong>${p.name}</strong> (Size US ${numSize}) to Cart!`, 'shopping-bag');
        openCartDrawer();

        setTimeout(() => {
          addCartBtn.classList.remove('adding');
          addCartBtn.innerHTML = `<i data-lucide="shopping-bag"></i> <span>Add to Bag</span>`;
          if (window.lucide) window.lucide.createIcons();
        }, 1500);
      });
    }
  });
}

// ==========================================================================
// CART DRAWER SYSTEM
// ==========================================================================
function initCartDrawer() {
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartCloseBtn = document.getElementById('cart-drawer-close');
  const cartTriggers = document.querySelectorAll('[data-action="open-cart"]');
  const checkoutTrigger = document.getElementById('cart-checkout-btn');
  const promoApplyBtn = document.getElementById('cart-promo-apply-btn');
  const promoInput = document.getElementById('cart-promo-input');

  cartTriggers.forEach(btn => btn.addEventListener('click', openCartDrawer));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  if (checkoutTrigger) {
    checkoutTrigger.addEventListener('click', () => {
      if (Store.cart.length === 0) {
        showStoreToast('Your shopping bag is empty!', 'alert-circle', 'info');
        return;
      }
      closeCartDrawer();
      openCheckoutModal();
    });
  }

  if (promoApplyBtn && promoInput) {
    promoApplyBtn.addEventListener('click', () => {
      const res = Store.applyPromo(promoInput.value);
      showStoreToast(res.message, res.success ? 'tag' : 'alert-circle', res.success ? 'success' : 'error');
      if (res.success) promoInput.value = '';
    });
  }

  window.addEventListener('cart:updated', renderCartDrawer);
  renderCartDrawer();
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    renderCartDrawer();
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderCartDrawer() {
  const cartItemsList = document.getElementById('cart-items-list');
  const cartBadge = document.querySelectorAll('.cart-badge-count');
  const cartSubtotalEl = document.getElementById('cart-subtotal-val');
  const cartDiscountRow = document.getElementById('cart-discount-row');
  const cartDiscountEl = document.getElementById('cart-discount-val');
  const cartShippingEl = document.getElementById('cart-shipping-val');
  const cartTaxEl = document.getElementById('cart-tax-val');
  const cartTotalEl = document.getElementById('cart-total-val');
  const shippingProgressText = document.getElementById('shipping-progress-text');
  const shippingProgressBar = document.getElementById('shipping-progress-bar');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartFooter = document.getElementById('cart-drawer-footer');

  const count = Store.getCartItemCount();
  cartBadge.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });

  const totals = Store.getCartTotal();

  // Free shipping bar calculation
  if (shippingProgressText && shippingProgressBar) {
    if (totals.discountedSubtotal >= Store.freeShippingThreshold) {
      shippingProgressText.innerHTML = `🎉 You unlocked <strong>FREE Worldwide Express Shipping!</strong>`;
      shippingProgressBar.style.width = '100%';
      shippingProgressBar.style.background = '#10b981';
    } else {
      const remaining = Store.freeShippingThreshold - totals.discountedSubtotal;
      shippingProgressText.innerHTML = `Add <strong>${Store.formatPrice(remaining)}</strong> more to get <strong>FREE Express Shipping!</strong>`;
      const pct = Math.min(100, Math.max(0, (totals.discountedSubtotal / Store.freeShippingThreshold) * 100));
      shippingProgressBar.style.width = `${pct}%`;
      shippingProgressBar.style.background = 'var(--gradient-accent)';
    }
  }

  // Subtotal & Financial Breakdown
  if (cartSubtotalEl) cartSubtotalEl.textContent = Store.formatPrice(totals.subtotal);
  if (cartShippingEl) cartShippingEl.textContent = totals.shipping === 0 ? 'FREE' : Store.formatPrice(totals.shipping);
  if (cartTaxEl) cartTaxEl.textContent = Store.formatPrice(totals.tax);
  if (cartTotalEl) cartTotalEl.textContent = Store.formatPrice(totals.grandTotal);

  if (cartDiscountRow && cartDiscountEl) {
    if (totals.discountAmt > 0) {
      cartDiscountRow.style.display = 'flex';
      cartDiscountEl.textContent = `-${Store.formatPrice(totals.discountAmt)} (${Store.promoCode})`;
    } else {
      cartDiscountRow.style.display = 'none';
    }
  }

  if (Store.cart.length === 0) {
    if (cartEmptyState) cartEmptyState.style.display = 'flex';
    if (cartItemsList) cartItemsList.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  if (cartEmptyState) cartEmptyState.style.display = 'none';
  if (cartItemsList) cartItemsList.style.display = 'flex';
  if (cartFooter) cartFooter.style.display = 'block';

  // Render items
  if (cartItemsList) {
    cartItemsList.innerHTML = Store.cart.map(item => `
      <div class="cart-item-card" data-product-id="${item.id}" data-size="${item.selectedSize}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        
        <div class="cart-item-details">
          <div class="cart-item-top">
            <span class="cart-item-brand">${item.brand}</span>
            <button class="cart-item-remove-btn" onclick="Store.removeFromCart('${item.id}', ${item.selectedSize})" title="Remove item">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
          
          <h4 class="cart-item-title">${item.name}</h4>
          <p class="cart-item-size">Size: <strong>US ${item.selectedSize}</strong></p>
          
          <div class="cart-item-bottom">
            <div class="cart-qty-stepper">
              <button class="qty-btn" onclick="Store.updateCartQty('${item.id}', ${item.selectedSize}, ${item.quantity - 1})">-</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn" onclick="Store.updateCartQty('${item.id}', ${item.selectedSize}, ${item.quantity + 1})">+</button>
            </div>
            
            <span class="cart-item-price">${Store.formatPrice(item.price * item.quantity)}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================================================
// PRODUCT DETAIL MODAL (QUICK VIEW & FULL SPECS)
// ==========================================================================
let activeModalProduct = null;
let activeModalSize = null;

function initProductModal() {
  const modal = document.getElementById('product-detail-modal');
  const closeBtn = document.getElementById('product-modal-close');
  const overlay = document.getElementById('product-modal-overlay');
  const addToBagBtn = document.getElementById('modal-add-to-bag-btn');
  const buyNowBtn = document.getElementById('modal-buy-now-btn');
  const mediaTabs = document.querySelectorAll('.modal-media-tab');

  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
  if (overlay) overlay.addEventListener('click', closeProductModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeProductModal();
    }
  });

  // Media Tab switcher (Photo vs 4K Motion Video)
  mediaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      mediaTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const mode = tab.getAttribute('data-mode');
      const imgEl = document.getElementById('modal-product-img');
      const videoEl = document.getElementById('modal-product-video');

      if (mode === 'video') {
        if (imgEl) imgEl.style.display = 'none';
        if (videoEl) {
          videoEl.style.display = 'block';
          videoEl.play().catch(() => {});
        }
      } else {
        if (videoEl) {
          videoEl.pause();
          videoEl.style.display = 'none';
        }
        if (imgEl) imgEl.style.display = 'block';
      }
    });
  });

  // Modal Add to Bag
  if (addToBagBtn) {
    addToBagBtn.addEventListener('click', () => {
      if (!activeModalProduct) return;
      const sizeToUse = activeModalSize || activeModalProduct.sizes[2] || activeModalProduct.sizes[0];
      const qty = parseInt(document.getElementById('modal-qty-input')?.value || '1', 10);
      
      Store.addToCart(activeModalProduct.id, sizeToUse, qty);
      showStoreToast(`Added <strong>${activeModalProduct.name}</strong> (US ${sizeToUse}) to Cart!`, 'shopping-bag');
      closeProductModal();
      openCartDrawer();
    });
  }

  // Modal 1-Click Buy Now
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      if (!activeModalProduct) return;
      const sizeToUse = activeModalSize || activeModalProduct.sizes[2] || activeModalProduct.sizes[0];
      const qty = parseInt(document.getElementById('modal-qty-input')?.value || '1', 10);
      
      Store.addToCart(activeModalProduct.id, sizeToUse, qty);
      closeProductModal();
      openCheckoutModal();
    });
  }
}

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  activeModalProduct = product;
  activeModalSize = product.sizes[2] || product.sizes[0];

  const modal = document.getElementById('product-detail-modal');
  const titleEl = document.getElementById('modal-product-title');
  const brandEl = document.getElementById('modal-product-brand');
  const priceEl = document.getElementById('modal-product-price');
  const klarnaEl = document.getElementById('modal-klarna-price');
  const colorwayEl = document.getElementById('modal-product-colorway');
  const descEl = document.getElementById('modal-product-desc');
  const imgEl = document.getElementById('modal-product-img');
  const videoEl = document.getElementById('modal-product-video');
  const sizesContainer = document.getElementById('modal-sizes-grid');
  const specsList = document.getElementById('modal-specs-list');
  const reviewsList = document.getElementById('modal-reviews-list');
  const ratingStarsEl = document.getElementById('modal-rating-stars');
  const ratingValEl = document.getElementById('modal-rating-val');

  if (titleEl) titleEl.textContent = product.name;
  if (brandEl) brandEl.textContent = `${product.brand} • ${product.categoryName}`;
  if (priceEl) priceEl.textContent = Store.formatPrice(product.price);
  if (klarnaEl) klarnaEl.textContent = Store.formatPrice(product.price / 4);
  if (colorwayEl) colorwayEl.textContent = product.colorway;
  if (descEl) descEl.textContent = product.description;

  if (imgEl) {
    imgEl.src = product.image;
    imgEl.style.display = 'block';
  }
  if (videoEl) {
    videoEl.src = product.video;
    videoEl.poster = product.image;
    videoEl.style.display = 'none';
  }

  // Reset media tab to Photo
  document.querySelectorAll('.modal-media-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.modal-media-tab[data-mode="photo"]')?.classList.add('active');

  // Rating Stars
  if (ratingStarsEl) ratingStarsEl.innerHTML = '★'.repeat(Math.floor(product.rating));
  if (ratingValEl) ratingValEl.textContent = `${product.rating} (${product.reviewsCount} verified reviews)`;

  // Sizes Grid
  if (sizesContainer) {
    sizesContainer.innerHTML = product.sizes.map(sz => `
      <button class="modal-size-chip ${sz === activeModalSize ? 'active' : ''}" data-size="${sz}">
        <span>US ${sz}</span>
      </button>
    `).join('');

    sizesContainer.querySelectorAll('.modal-size-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        sizesContainer.querySelectorAll('.modal-size-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeModalSize = parseFloat(chip.getAttribute('data-size'));
      });
    });
  }

  // Tech Specs Key-Value Table
  if (specsList) {
    specsList.innerHTML = Object.entries(product.specs).map(([k, v]) => `
      <div class="modal-spec-item">
        <span class="spec-k">${k.toUpperCase()}</span>
        <span class="spec-v">${v}</span>
      </div>
    `).join('');
  }

  // Reviews list
  if (reviewsList) {
    reviewsList.innerHTML = product.reviews.map(r => `
      <div class="modal-review-card">
        <div class="review-card-top">
          <div class="review-author">
            <strong>${r.author}</strong>
            <span class="verified-badge"><i data-lucide="check-circle-2"></i> Verified Buyer</span>
          </div>
          <span class="review-date">${r.date}</span>
        </div>
        <div class="review-stars">${'★'.repeat(r.rating)}</div>
        <h5 class="review-title">${r.title}</h5>
        <p class="review-text">${r.text}</p>
      </div>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeProductModal() {
  const modal = document.getElementById('product-detail-modal');
  const videoEl = document.getElementById('modal-product-video');
  if (videoEl) videoEl.pause();
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// CHECKOUT MODAL SYSTEM (3-STEP E-COMMERCE CHECKOUT)
// ==========================================================================
function initCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const closeBtn = document.getElementById('checkout-modal-close');
  const overlay = document.getElementById('checkout-overlay');
  const stepTabs = document.querySelectorAll('.checkout-step-indicator');
  const toStep2Btn = document.getElementById('checkout-to-step-2');
  const backToStep1Btn = document.getElementById('checkout-back-to-step-1');
  const toStep3Btn = document.getElementById('checkout-to-step-3');
  const backToStep2Btn = document.getElementById('checkout-back-to-step-2');
  const placeOrderBtn = document.getElementById('checkout-place-order-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeCheckoutModal);
  if (overlay) overlay.addEventListener('click', closeCheckoutModal);

  if (toStep2Btn) toStep2Btn.addEventListener('click', () => switchCheckoutStep(2));
  if (backToStep1Btn) backToStep1Btn.addEventListener('click', () => switchCheckoutStep(1));
  if (toStep3Btn) toStep3Btn.addEventListener('click', () => switchCheckoutStep(3));
  if (backToStep2Btn) backToStep2Btn.addEventListener('click', () => switchCheckoutStep(2));

  if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', executeOrderPlacement);
  }
}

function openCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;

  switchCheckoutStep(1);
  renderCheckoutSummary();

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function switchCheckoutStep(stepNumber) {
  document.querySelectorAll('.checkout-step-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.checkout-step-indicator').forEach(ind => ind.classList.remove('active', 'completed'));

  const activePanel = document.getElementById(`checkout-step-${stepNumber}`);
  if (activePanel) activePanel.classList.add('active');

  for (let i = 1; i <= 3; i++) {
    const indicator = document.querySelector(`.checkout-step-indicator[data-step="${i}"]`);
    if (!indicator) continue;
    if (i < stepNumber) indicator.classList.add('completed');
    if (i === stepNumber) indicator.classList.add('active');
  }

  if (window.lucide) window.lucide.createIcons();
}

function renderCheckoutSummary() {
  const listEl = document.getElementById('checkout-items-summary-list');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const discountRow = document.getElementById('checkout-discount-row');
  const discountEl = document.getElementById('checkout-discount');
  const shippingEl = document.getElementById('checkout-shipping');
  const taxEl = document.getElementById('checkout-tax');
  const grandTotalEl = document.getElementById('checkout-grand-total');

  const totals = Store.getCartTotal();

  if (listEl) {
    listEl.innerHTML = Store.cart.map(item => `
      <div class="checkout-item-summary">
        <img src="${item.image}" alt="${item.name}" />
        <div class="checkout-item-summary-info">
          <h6>${item.name}</h6>
          <p>Size: US ${item.selectedSize} × ${item.quantity}</p>
        </div>
        <span class="checkout-item-summary-price">${Store.formatPrice(item.price * item.quantity)}</span>
      </div>
    `).join('');
  }

  if (subtotalEl) subtotalEl.textContent = Store.formatPrice(totals.subtotal);
  if (shippingEl) shippingEl.textContent = totals.shipping === 0 ? 'FREE' : Store.formatPrice(totals.shipping);
  if (taxEl) taxEl.textContent = Store.formatPrice(totals.tax);
  if (grandTotalEl) grandTotalEl.textContent = Store.formatPrice(totals.grandTotal);

  if (discountRow && discountEl) {
    if (totals.discountAmt > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `-${Store.formatPrice(totals.discountAmt)} (${Store.promoCode})`;
    } else {
      discountRow.style.display = 'none';
    }
  }
}

function executeOrderPlacement() {
  const placeOrderBtn = document.getElementById('checkout-place-order-btn');
  const orderSuccessScreen = document.getElementById('checkout-success-screen');
  const checkoutMainFlow = document.getElementById('checkout-main-flow');

  if (placeOrderBtn) {
    placeOrderBtn.disabled = true;
    placeOrderBtn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> <span>Securing Vault Inventory...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  setTimeout(() => {
    const orderNum = 'PV-' + Math.floor(100000 + Math.random() * 900000);
    const orderNumEl = document.getElementById('order-confirmed-number');
    if (orderNumEl) orderNumEl.textContent = orderNum;

    if (checkoutMainFlow) checkoutMainFlow.style.display = 'none';
    if (orderSuccessScreen) orderSuccessScreen.style.display = 'flex';

    Store.clearCart();
    showStoreToast(`Order <strong>${orderNum}</strong> confirmed! Confirmation emailed.`, 'check-circle-2', 'success');

    if (window.lucide) window.lucide.createIcons();
  }, 1800);
}

// ==========================================================================
// WISHLIST DRAWER SYSTEM
// ==========================================================================
function initWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  const overlay = document.getElementById('wishlist-overlay');
  const closeBtn = document.getElementById('wishlist-drawer-close');
  const triggers = document.querySelectorAll('[data-action="open-wishlist"]');

  triggers.forEach(t => t.addEventListener('click', openWishlistDrawer));
  if (closeBtn) closeBtn.addEventListener('click', closeWishlistDrawer);
  if (overlay) overlay.addEventListener('click', closeWishlistDrawer);

  window.addEventListener('wishlist:updated', () => {
    renderWishlistDrawer();
    renderProductGrid(); // update heart icons
  });

  renderWishlistDrawer();
}

function openWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  const overlay = document.getElementById('wishlist-overlay');
  if (drawer && overlay) {
    renderWishlistDrawer();
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  const overlay = document.getElementById('wishlist-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderWishlistDrawer() {
  const listEl = document.getElementById('wishlist-items-list');
  const countBadges = document.querySelectorAll('.wishlist-badge-count');
  const emptyState = document.getElementById('wishlist-empty-state');

  const count = Store.wishlist.length;
  countBadges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });

  if (count === 0) {
    if (emptyState) emptyState.style.display = 'flex';
    if (listEl) listEl.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (listEl) listEl.style.display = 'flex';

  const wishedProducts = PRODUCTS_DATA.filter(p => Store.isInWishlist(p.id));

  if (listEl) {
    listEl.innerHTML = wishedProducts.map(p => `
      <div class="wishlist-item-card" data-product-id="${p.id}">
        <img src="${p.image}" alt="${p.name}" class="wishlist-item-img" />
        <div class="wishlist-item-info">
          <span class="wishlist-item-brand">${p.brand}</span>
          <h5 class="wishlist-item-title">${p.name}</h5>
          <span class="wishlist-item-price">${Store.formatPrice(p.price)}</span>
          
          <div class="wishlist-item-actions">
            <button class="btn-primary btn-sm" onclick="Store.addToCart('${p.id}', ${p.sizes[2] || p.sizes[0]}); showStoreToast('Added to bag!', 'shopping-bag');">
              <i data-lucide="shopping-bag"></i> Move to Bag
            </button>
            <button class="btn-ghost-sm" onclick="Store.toggleWishlist('${p.id}')">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================================================
// CURRENCY SWITCHER
// ==========================================================================
function initCurrencySwitcher() {
  const selects = document.querySelectorAll('.currency-selector-select');
  selects.forEach(sel => {
    sel.value = Store.currency;
    sel.addEventListener('change', (e) => {
      Store.currency = e.target.value;
      Store.save('purpose_currency', Store.currency);
      selects.forEach(s => s.value = Store.currency);
      renderProductGrid();
      renderCartDrawer();
      renderCheckoutSummary();
      showStoreToast(`Currency converted to ${Store.currency}`, 'dollar-sign', 'info');
    });
  });
}

// ==========================================================================
// SEARCH & FILTER CONTROLS
// ==========================================================================
function initCatalogFilters() {
  // Brand Tabs
  const brandTabs = document.querySelectorAll('.brand-tab-btn');
  brandTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      brandTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentBrandFilter = tab.getAttribute('data-brand');
      renderProductGrid();
    });
  });

  // Category Pills
  const catPills = document.querySelectorAll('.category-filter-btn');
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategoryFilter = pill.getAttribute('data-category');
      renderProductGrid();
    });
  });

  // Size Filter Chips
  const sizeChips = document.querySelectorAll('.size-filter-chip');
  sizeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      sizeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSizeFilter = chip.getAttribute('data-size');
      renderProductGrid();
    });
  });

  // Search Input with Debounce
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderProductGrid();
    });
  }

  // Header Global Search Input
  const headerSearchInput = document.getElementById('header-search-input');
  if (headerSearchInput) {
    headerSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (searchInput) searchInput.value = currentSearchQuery;
      renderProductGrid();
      const catalogSection = document.getElementById('catalog');
      if (catalogSection && e.target.value.trim().length > 1) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProductGrid();
    });
  }

  // Price Dropdown
  const priceSelect = document.getElementById('catalog-price-select');
  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      currentPriceFilter = e.target.value;
      renderProductGrid();
    });
  }
}

// ==========================================================================
// HERO FEATURED QUICK ADD
// ==========================================================================
function initHeroQuickBuy() {
  const heroAddBtn = document.getElementById('hero-quick-add-btn');
  const heroSizeBtns = document.querySelectorAll('.hero-quick-size-btn');
  let selectedHeroSize = 10;

  heroSizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      heroSizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedHeroSize = parseFloat(btn.getAttribute('data-size'));
    });
  });

  if (heroAddBtn) {
    heroAddBtn.addEventListener('click', () => {
      const pId = heroAddBtn.getAttribute('data-product-id') || 'nike-vaporfly-3';
      Store.addToCart(pId, selectedHeroSize, 1);
      showStoreToast(`Added <strong>Nike ZoomX Vaporfly 3</strong> (US ${selectedHeroSize}) to Bag!`, 'shopping-bag');
      openCartDrawer();
    });
  }
}

// ==========================================================================
// NEWSLETTER SIGNUP
// ==========================================================================
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  const input = document.getElementById('newsletter-email');
  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (val) {
        showStoreToast(`Welcome to the Vault! Use code <strong>PURPOSE10</strong> for 10% off.`, 'tag', 'success');
        input.value = '';
      }
    });
  }
}

// ==========================================================================
// MOBILE MENU TOGGLE
// ==========================================================================
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const closeBtn = document.getElementById('mobile-nav-close');
  const links = document.querySelectorAll('.mobile-nav-link');
  const mobileSearchInput = document.getElementById('mobile-search-input');

  function openMobileMenu() {
    menu?.classList.add('active');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    menu?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggle) toggle.addEventListener('click', openMobileMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
  if (overlay) overlay.addEventListener('click', closeMobileMenu);

  links.forEach(l => l.addEventListener('click', closeMobileMenu));

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      const catalogInput = document.getElementById('catalog-search-input');
      const headerInput = document.getElementById('header-search-input');
      if (catalogInput) catalogInput.value = currentSearchQuery;
      if (headerInput) headerInput.value = currentSearchQuery;
      renderProductGrid();
    });

    mobileSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        closeMobileMenu();
        document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

// ==========================================================================
// DOM READY INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid();
  initCartDrawer();
  initProductModal();
  initCheckoutModal();
  initWishlistDrawer();
  initCurrencySwitcher();
  initCatalogFilters();
  initHeroQuickBuy();
  initNewsletter();
  initMobileMenu();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
