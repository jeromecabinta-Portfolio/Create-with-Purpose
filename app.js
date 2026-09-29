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
  },
  {
    id: 'converse-chuck-70',
    sku: 'CV-C70-049',
    brand: 'Converse',
    brandBadge: 'Converse Heritage',
    brandColor: 'amber',
    name: 'Converse Chuck 70 Vintage Canvas',
    subtitle: '1970s Heavyweight 12oz Duck Canvas High Top',
    price: 90.00,
    originalPrice: 90.00,
    rating: 4.9,
    reviewsCount: 480,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Egret / Garnet Red / Vintage Sail',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 45,
    badge: 'Timeless Icon',
    image: 'assets/converse_chuck_70.jpg',
    video: 'assets/converse_chuck_70.webm',
    description: 'Built from that original 1970s design with premium materials, deliberate nuance and an extraordinary attention to detail. 12oz heavyweight organic duck canvas upper, vintage license plate branding on the heel, varnished egret foxing tape, and OrthoLite cushioning for all-day comfort.',
    specs: {
      cushioning: 'Plush OrthoLite Insole Cushioning',
      materials: '12oz Heavyweight Organic Duck Canvas',
      midsole: 'Glossy 1970s Egret Vulcanized Rubber Tape',
      details: 'Winged Tongue Stitching & Vintage All Star License Plate',
      style: 'The All-Time Counter-Culture & Streetwear Legend'
    },
    reviews: [
      { author: 'Julian M.', rating: 5, date: 'Yesterday', title: 'Way better than standard Chucks', text: 'Thicker canvas, cushioned insole, and the vintage off-white sole looks so clean.' },
      { author: 'Maya K.', rating: 5, date: '4 days ago', title: 'My daily staple', text: 'Goes with literally everything in my wardrobe. Super durable.' }
    ]
  },
  {
    id: 'converse-weapon-cx',
    sku: 'CV-WPN-050',
    brand: 'Converse',
    brandBadge: 'Converse Hardwood Legend',
    brandColor: 'purple',
    name: 'Converse Weapon CX "Showtime Heritage"',
    subtitle: '1986 Hardwood Rivalry Icon Revamped with CX Foam',
    price: 120.00,
    originalPrice: 120.00,
    rating: 4.8,
    reviewsCount: 215,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Vintage White / Court Purple / Gold Foil',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 18,
    badge: 'Showtime Drop',
    image: 'assets/converse_weapon_cx.jpg',
    video: 'assets/converse_weapon_cx.webm',
    description: 'The sneaker that ruled 1980s basketball courts on the feet of all-time hardwood rivals. Reimagined with innovative CX foam midsole and exaggerated collar proportions, delivering modern court comfort wrapped in authentic Showtime nostalgia.',
    specs: {
      cushioning: 'High-Rebound CX Foam Drop-In Midsole',
      materials: 'Premium Genuine Leather & Suede Layered Panels',
      collar: 'Exaggerated Y-Bar Ankle Lockout Stability Collar',
      outsole: 'Multidirectional Hardwood Traction Herringbone Tread',
      position: 'Hardwood Guards, Wings & 80s Streetwear Enthusiasts'
    },
    reviews: [
      { author: 'Magic Fan 32', rating: 5, date: '2 days ago', title: '80s hardwood perfection', text: 'CX foam makes this 10x more comfortable than vintage retros. Leather is soft and thick.' }
    ]
  },
  {
    id: 'converse-bb-prototype',
    sku: 'CV-BB-051',
    brand: 'Converse',
    brandBadge: 'Converse Hoops Innovation',
    brandColor: 'cyan',
    name: 'Converse All Star BB Prototype CX',
    subtitle: 'Forefoot Nike Zoom Air + Full CX Foam Basketball Shoe',
    price: 120.00,
    originalPrice: 120.00,
    rating: 4.8,
    reviewsCount: 175,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Cyber White / Court Purple / Mystic Teal',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 20,
    badge: 'Hoops Innovation',
    image: 'assets/converse_bb_prototype.jpg',
    video: 'assets/converse_bb_prototype.webm',
    description: 'Designed for fluid positionless players who create on the fly. Pairs responsive Nike Air Zoom cushioning under the forefoot with high-rebound CX foam for explosive first steps and plush court landing absorption.',
    specs: {
      cushioning: 'Forefoot Nike Air Zoom Pod + Full CX Foam Core',
      lacing: 'Hidden Webbed Dynamic Lacing System for Full Containment',
      outsole: 'Radial Multi-Zone Hardwood Floor Grip Rubber',
      upper: 'Engineered High-Tensile Mesh & Suede Forefoot Rand',
      position: 'Positionless Playmakers & Dynamic Slicers'
    },
    reviews: [
      { author: 'Kobe R.', rating: 5, date: '3 days ago', title: 'Zoom Air in a Converse is insane!', text: 'Court feel and bounce are top notch. Squeaky traction on hardwood.' }
    ]
  },
  {
    id: 'converse-run-star-motion',
    sku: 'CV-RSM-052',
    brand: 'Converse',
    brandBadge: 'Converse CX Innovation',
    brandColor: 'purple',
    name: 'Converse Run Star Motion CX Platform',
    subtitle: 'Sculpted Wave Lug High Fashion Streetwear Platform',
    price: 125.00,
    originalPrice: 125.00,
    rating: 4.9,
    reviewsCount: 340,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Egret / Gum Honey / Electric Cyan',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 24,
    badge: 'Futuristic Platform',
    image: 'assets/converse_run_star_motion.jpg',
    video: 'assets/converse_run_star_motion.webm',
    description: 'Taking classic Chuck Taylor DNA and pairing it with an ultra-modern, exaggerated wavy lug platform. Features next-gen CX foam cushioning that absorbs shock with every step and dramatic sculpted saw-tooth rubber tread.',
    specs: {
      cushioning: 'Ultra-Comfortable CX Foam Midsole + Drop-in Sockliner',
      outsole: 'Exaggerated Sculpted Wavy Lug Saw-Tooth Rubber',
      upper: '100% Organic Heavyweight Cotton Canvas',
      details: 'Reflective Pull Loop & High-Gloss Star Heel Patch',
      style: 'Avant-Garde Futuristic Streetwear Platform'
    },
    reviews: [
      { author: 'Sienna V.', rating: 5, date: '1 day ago', title: 'Most comfortable platform shoe ever created', text: 'The CX foam feels like walking on marshmallows. Turns heads everywhere I go.' }
    ]
  },
  {
    id: 'converse-cruise-skate',
    sku: 'CV-CRZ-053',
    brand: 'Converse',
    brandBadge: 'Converse Skate & Street',
    brandColor: 'amber',
    name: 'Converse Chuck Taylor All Star Cruise',
    subtitle: '90s Skate Culture Suede & Canvas Lightweight Midsole',
    price: 75.00,
    originalPrice: 75.00,
    rating: 4.8,
    reviewsCount: 190,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Egret / Classic White / Gum',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 30,
    badge: '90s Skate Heat',
    image: 'assets/converse_cruise_skate.jpg',
    video: 'assets/converse_cruise_skate.webm',
    description: 'Paying homage to 90s skate fashion and counter-culture streetwear. Blends heavy-duty canvas and suede overlay panels with a lightweight EVA-injected midsole for all-day skatepark and sidewalk cruising.',
    specs: {
      cushioning: 'Injected EVA Midsole for Ultra-Lightweight Cushioning',
      materials: '12oz Heavy Canvas Upper + Suede Eyestay Overlays',
      lacing: 'Fat 90s Skate Poly Laces + Extra Classic Laces Included',
      outsole: 'Diamond Lug Skate Traction Rubber',
      style: '90s Grunge & Skateboarding Lifestyle'
    },
    reviews: [
      { author: 'Leo X.', rating: 5, date: '5 days ago', title: 'Super lightweight and stylish', text: 'Way lighter than regular Chucks with that chunky 90s skate shoe look.' }
    ]
  },
  {
    id: 'converse-deluxe-squared',
    sku: 'CV-DLX-054',
    brand: 'Converse',
    brandBadge: 'Converse Avant-Garde',
    brandColor: 'white',
    name: 'Converse Chuck 70 De Luxe Squared',
    subtitle: 'Architectural Angular Toecap Haute Couture Silhouette',
    price: 110.00,
    originalPrice: 110.00,
    rating: 4.9,
    reviewsCount: 165,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Egret / Geometric Monolith',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 15,
    badge: 'High Fashion Drop',
    image: 'assets/converse_deluxe_square.jpg',
    video: 'assets/converse_deluxe_square.webm',
    description: 'Transforming the timeless Chuck 70 into a sharp architectural runway statement. Features an angular square rubber toecap, faceted eyelets, premium twill canvas, and CX foam comfort.',
    specs: {
      cushioning: 'OrthoLite & CX Foam Dual Comfort Cushioning',
      toecap: 'Sculpted Geometric Square Rubber Toecap',
      materials: 'Premium Heavyweight Diagonal Twill Canvas',
      details: 'Angular Eyestay & Faceted Chuck Taylor Patch',
      style: 'High-Fashion Runway & Avant-Garde Modernism'
    },
    reviews: [
      { author: 'Camille D.', rating: 5, date: '2 days ago', title: 'Architectural masterpiece', text: 'The square toe box looks incredible with wide-leg tailored trousers.' }
    ]
  },
  {
    id: 'converse-weapon-retro-magic',
    sku: 'CV-WPN-055',
    brand: 'Converse',
    brandBadge: 'Converse Hardwood Legend',
    brandColor: 'purple',
    name: 'Converse Weapon Retro "Lakers Showtime"',
    subtitle: 'Classic 1986 Hardwood Championship Vintage Edition',
    price: 130.00,
    originalPrice: 130.00,
    rating: 4.9,
    reviewsCount: 280,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Forum Gold / Purple Rain / Vintage Sail',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 16,
    badge: 'Championship Vault',
    image: 'assets/converse_weapon_cx.jpg',
    video: 'assets/converse_weapon_cx.webm',
    description: 'Celebrating the golden era of basketball rivalry in Los Angeles. Premium leather construction, vintage aged midsole, padded high-top collar, and original Star Chevron logos evoke the swagger of 80s hardwood royalty.',
    specs: {
      cushioning: 'Vintage Molded Rubber Cupsole with CX Cushioning',
      materials: 'Butter-Soft Genuine Leather Upper & Collar',
      details: 'Padded Ankle Collar & Support Y-Bar Architecture',
      tongue: 'Original 1986 Converse Basketball Woven Tongue Label',
      style: '80s Hardwood Nostalgia & Vintage Streetwear'
    },
    reviews: [
      { author: 'Darren P.', rating: 5, date: '3 days ago', title: 'The real 80s vibe', text: 'Colors are spot on. Super comfortable padded ankle support.' }
    ]
  },
  {
    id: 'converse-run-star-cyber',
    sku: 'CV-RSM-056',
    brand: 'Converse',
    brandBadge: 'Converse CX Innovation',
    brandColor: 'cyan',
    name: 'Converse Run Star Motion "Cyber Matrix"',
    subtitle: 'Futuristic High-Top Platform with Ultra-Bouncy CX Foam',
    price: 130.00,
    originalPrice: 130.00,
    rating: 4.9,
    reviewsCount: 210,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Cyber White / Acid Aqua / Black Waves',
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 19,
    badge: 'Cyberpunk Edition',
    image: 'assets/converse_run_star_motion.jpg',
    video: 'assets/converse_run_star_motion.webm',
    description: 'A fearless futuristic evolution of canvas sneakers. Massive sculpted wavy foam midsole gives unbelievable step-in rebound, while lugged traction outsoles provide unshakeable street grip.',
    specs: {
      cushioning: 'High-Energy CX Super-Plush Midsole Carrier',
      outsole: 'Chunky Wavy Lugged Rubber Traction Pods',
      upper: 'Durable Heavyweight Organic Canvas',
      pullTab: 'Webbed Heel Pull Tab for Instant Slip-On Entry',
      style: 'Cyberpunk & Future-Forward Street Culture'
    },
    reviews: [
      { author: 'Nova Z.', rating: 5, date: '1 day ago', title: 'Crazy design and absurdly comfortable', text: 'You bounce with every stride. Best avant-garde sneaker in my collection.' }
    ]
  },
  {
    id: 'nike-speedform-zoomx-prototype',
    sku: 'NK-SFX-057',
    brand: 'Nike',
    brandBadge: 'Nike Innovation Lab',
    brandColor: 'cyan',
    name: 'Nike ZoomX SpeedForm Concept',
    subtitle: 'Split-Sole Bionic Carbon Marathon Racing Prototype',
    price: 290.00,
    originalPrice: 290.00,
    rating: 5.0,
    reviewsCount: 145,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Electroluminescent Cyan / Carbon Black / Volt Glow',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 7,
    badge: 'Concept Lab Drop',
    image: 'assets/ecom_sneaker_motion.jpg',
    video: 'assets/ecom_sneaker_motion.webm',
    description: 'Straight from the Nike Innovation Kitchen in Beaverton. Featuring an aerodynamic split-sole decoupled chassis, full-length curved carbon Flyplate, exposed hyper-rebound ZoomX supercritical foam, and electroluminescent fiber weave.',
    specs: {
      cushioning: 'Decoupled Split-Sole Dual ZoomX Superfoam (+88% Energy Return)',
      plate: '3D Curved Bionic Carbon Fiber Flyplate',
      weight: '6.4 oz / 181 g (Extreme Ultralight)',
      upper: 'Electroluminescent High-Tensile AtomKnit Mesh',
      terrain: 'World Record Marathon & 10K Road Attempts'
    },
    reviews: [
      { author: 'Eliud Fan', rating: 5, date: 'Yesterday', title: 'The future of running technology', text: 'Energy return feels like cheating. The split sole and carbon plate launch you forward effortlessly.' }
    ]
  },
  {
    id: 'nike-kobe-6-og-grinch',
    sku: 'NK-KB6-058',
    brand: 'Nike',
    brandBadge: 'Nike Mamba Legacy',
    brandColor: 'emerald',
    name: 'Nike Kobe 6 Protro "OG Grinch"',
    subtitle: 'The Legendary 2010 Christmas Day Kobe Bryant Grail',
    price: 190.00,
    originalPrice: 190.00,
    rating: 5.0,
    reviewsCount: 980,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Green Apple / Volt / Crimson Red / Black',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 5,
    badge: 'The Holy Grail',
    image: 'assets/nike_kobe_6_grinch.jpg',
    video: 'assets/nike_kobe_6_grinch.webm',
    description: 'The most recognizable basketball sneaker of the 21st century. Originally worn by Kobe on Christmas Day 2010 against Miami, updated with snappy forefoot Air Zoom Turbo and refined snakeskin scale upper.',
    specs: {
      cushioning: 'Large Flexible Forefoot Zoom Turbo Unit + Cushlon Midsole',
      upper: 'Polyurethane Snakeskin Scale Molded Island Shell',
      plate: 'Carbon Fiber Arch Support & Torsion Shank',
      outsole: 'Mamba Micro-Tread High-Friction Court Rubber',
      position: 'Precision Guards & Kobe Collectors Worldwide'
    },
    reviews: [
      { author: 'Mamba Forever', rating: 5, date: '1 day ago', title: 'Greatest basketball shoe ever designed', text: 'Court traction is sticky like glue. The green apple scale glow is iconic. RIP Kobe 🐍' }
    ]
  },
  {
    id: 'nike-kobe-5-bruce-lee',
    sku: 'NK-KB5-059',
    brand: 'Nike',
    brandBadge: 'Nike Mamba Legacy',
    brandColor: 'amber',
    name: 'Nike Kobe 5 Protro "Bruce Lee"',
    subtitle: 'Jeet Kune Do Game of Death Yellow & Red Scratch Grail',
    price: 190.00,
    originalPrice: 190.00,
    rating: 5.0,
    reviewsCount: 760,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Del Sol Yellow / Metallic Silver / Comet Red / Black',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 6,
    badge: 'Bruce Lee Grail',
    image: 'assets/nike_kobe_4_black.jpg',
    video: 'assets/nike_kobe_4_black.webm',
    description: 'Inspired by Bruce Lee\'s iconic yellow jumpsuit and claw scratches from Enter the Dragon. Low-profile Flywire lockdown, forefoot Zoom Turbo, and tuned Mamba hardwood agility.',
    specs: {
      cushioning: 'Forefoot Nike Air Zoom Turbo + Cushlon Heel Foam',
      containment: 'Flywire 2.0 High-Tensile Tensile Cables',
      details: 'Embroidered Lateral Claw Scratch Marks & Sheath Heel Tab',
      outsole: 'Heartbeat Hardwood Multidirectional Tread',
      position: 'Elite Playmakers & Mamba Disciples'
    },
    reviews: [
      { author: 'Brandon K.', rating: 5, date: '3 days ago', title: 'Flawless execution', text: 'The yellow and red claw scratch details are insane in person. Unmatched court feel.' }
    ]
  },
  {
    id: 'nike-vaporfly-3-eliud',
    sku: 'NK-VF3-060',
    brand: 'Nike',
    brandBadge: 'Nike Marathon Elite',
    brandColor: 'red',
    name: 'Nike ZoomX Vaporfly 3 "Kipchoge EK"',
    subtitle: 'Eliud Kipchoge 1:59:40 Marathon Tribute Edition',
    price: 260.00,
    originalPrice: 260.00,
    rating: 5.0,
    reviewsCount: 310,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'White / Chile Red / Coconut Milk / EK Gold',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 11,
    badge: 'Kipchoge Signature',
    image: 'assets/nike_zoomx_vaporfly.jpg',
    video: 'assets/nike_zoomx_vaporfly.webm',
    description: 'Celebrating the greatest marathoner in human history. Features Eliud Kipchoge\'s personal motto "No Human Is Limited" stamped on the midsole, full carbon Flyplate, and ultra-light ZoomX foam.',
    specs: {
      cushioning: 'Full-Stack ZoomX Superfoam + Full-Length Carbon Flyplate',
      details: 'Custom "No Human Is Limited" Insole & Midsole Graphics',
      weight: '6.8 oz / 192 g',
      offset: '8 mm heel-to-toe drop',
      terrain: 'Elite Marathon Racing & PR Breaking'
    },
    reviews: [
      { author: 'Marathoner Dan', rating: 5, date: '2 days ago', title: 'Broke 2:50 marathon in these!', text: 'Propulsion off the toe is effortless. The Kipchoge signature details make it extra special.' }
    ]
  },
  {
    id: 'nike-alphafly-3-volt',
    sku: 'NK-AF3-061',
    brand: 'Nike',
    brandBadge: 'Nike World Record',
    brandColor: 'emerald',
    name: 'Nike Alphafly 3 "Volt Record Breaker"',
    subtitle: 'Dual Air Zoom Pods + Continuous ZoomX Foam Super-Shoe',
    price: 285.00,
    originalPrice: 285.00,
    rating: 5.0,
    reviewsCount: 420,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Electric Volt / Dusty Cactus / Total Orange',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 8,
    badge: 'World Major Weapon',
    image: 'assets/nike_alphafly_3.jpg',
    video: 'assets/nike_alphafly_3.webm',
    description: 'The pinnacle of marathon propulsion. Two forefoot Air Zoom pods paired with a full-length carbon Flyplate and uninterrupted ZoomX foam heel-to-toe transition.',
    specs: {
      cushioning: 'Dual Forefoot Air Zoom Units + Continuous ZoomX Midsole',
      plate: 'Wider Full Carbon Fiber Flyplate for Maximum Stability',
      upper: 'AtomKnit 3.0 Ultra-Breathable Featherweight Matrix',
      weight: '7.6 oz / 215 g',
      terrain: 'World Marathon Majors & Championship Road Racing'
    },
    reviews: [
      { author: 'Kevin L.', rating: 5, date: '1 week ago', title: 'Unbeatable bounce', text: 'Dual Zoom pods give a spring-like feeling every stride. Best running shoe ever engineered.' }
    ]
  },
  {
    id: 'nike-gt-cut-3-infrared',
    sku: 'NK-GTC3-062',
    brand: 'Nike',
    brandBadge: 'Nike Greater Than',
    brandColor: 'cyan',
    name: 'Nike GT Cut 3 "Infrared Spark"',
    subtitle: 'Full-Length ZoomX Speed & Separation Basketball Shoe',
    price: 190.00,
    originalPrice: 190.00,
    rating: 4.9,
    reviewsCount: 210,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Black / Infrared 23 / Clear Jade / Metallic Silver',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 14,
    badge: 'Separation Weapon',
    image: 'assets/nike_gt_cut_3.jpg',
    video: 'assets/nike_gt_cut_3.webm',
    description: 'Engineered to generate instant space on perimeter step-backs and explosive drives. Packed with exposed ZoomX foam and reinforced lateral TPU stability walls.',
    specs: {
      cushioning: 'Full-Length Exposed Nike ZoomX Foam Midsole',
      containment: 'Lateral Flywire Reinforcement Cables & TPU Outrigger',
      outsole: 'Modified Herringbone Floor Suction Traction',
      position: 'Fast Separation Guards & Ball-Handlers'
    },
    reviews: [
      { author: 'Jordan R.', rating: 5, date: '4 days ago', title: 'Infrared colorway goes crazy', text: 'The ZoomX bounce on court is unreal. Instant stop and go.' }
    ]
  },
  {
    id: 'nike-acg-mountain-black',
    sku: 'NK-ACG-063',
    brand: 'Nike',
    brandBadge: 'Nike ACG All-Conditions',
    brandColor: 'emerald',
    name: 'Nike ACG Mountain Fly 2 Low GORE-TEX',
    subtitle: 'Stealth Weatherproof Trail & Mountain Beast',
    price: 210.00,
    originalPrice: 210.00,
    rating: 4.9,
    reviewsCount: 195,
    category: 'outdoor',
    categoryName: 'Outdoor / Trail ACG',
    colorway: 'Triple Black / Dark Anthracite / Reflective ACG',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 13,
    badge: 'Weatherproof Tank',
    image: 'assets/nike_acg_mountain_fly.jpg',
    video: 'assets/nike_acg_mountain_fly.webm',
    description: 'Built to conquer rocky mountain peaks, torrential downpours, and urban blizzards. Features a full GORE-TEX waterproof liner, responsive React foam, and sticky mountain bike tire-inspired chevron lugs.',
    specs: {
      weatherproofing: 'GORE-TEX Waterproof Invisible-Fit Bootie',
      cushioning: 'Full React Foam Midsole + Semi-Rigid Trail Flyplate',
      outsole: 'Mountain-Climbing High-Traction Rubber Lugs',
      lacing: 'Quick-Lace Bungee Toggle System',
      terrain: 'Mountain Trails, Mud, Rain & Snow'
    },
    reviews: [
      { author: 'Gabe T.', rating: 5, date: '3 days ago', title: 'Best all-weather sneaker I have ever owned', text: 'Hiked through rain and mud in the Rockies, feet stayed 100% dry and comfortable.' }
    ]
  },
  {
    id: 'nike-air-force-1-utility',
    sku: 'NK-AF1-064',
    brand: 'Nike',
    brandBadge: 'Nike Air Force 1',
    brandColor: 'white',
    name: 'Nike Air Force 1 \'07 LV8 "Double Swoosh"',
    subtitle: 'Layered Leather & Reflective Chrome Dubrae Streetwear',
    price: 125.00,
    originalPrice: 125.00,
    rating: 4.8,
    reviewsCount: 510,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Summit White / Industrial Blue / Black / Metallic Silver',
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 32,
    badge: 'Streetwear LV8',
    image: 'assets/nike_air_force_1_white.jpg',
    video: 'assets/nike_air_force_1_white.webm',
    description: 'A bold, layered evolution of the iconic 1982 hardwood silhouette. Double-stacked leather Swooshes, miniature embroidered toe check, encapsulated Air cushioning, and premium tumbled leather.',
    specs: {
      cushioning: 'Encapsulated Nike Air-Sole Cushioning Unit',
      details: 'Layered Dual Leather Swoosh Overlays & Metallic Dubrae',
      materials: 'Tumbled Genuine Full-Grain Leather Upper',
      outsole: 'Non-Marking Rubber Pivot Cupsole',
      style: 'Timeless Streetwear Statement'
    },
    reviews: [
      { author: 'Chris M.', rating: 5, date: '2 days ago', title: 'Clean details and comfortable', text: 'The double swoosh adds just the right amount of spice to the classic AF1.' }
    ]
  },
  {
    id: 'jordan-1-retro-high-bred',
    sku: 'JB-AJ1-065',
    brand: 'Jordan',
    brandBadge: 'Jordan Heritage',
    brandColor: 'red',
    name: 'Air Jordan 1 High OG "Bred Banned"',
    subtitle: 'The Legendary 1985 NBA Banned Black & Red Icon',
    price: 180.00,
    originalPrice: 180.00,
    rating: 5.0,
    reviewsCount: 920,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Varsity Red / Summit White',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 8,
    badge: 'Banned 1985 Grail',
    image: 'assets/nike_jordan_1_chicago.jpg',
    video: 'assets/nike_jordan_1_chicago.webm',
    description: 'The shoe that changed footwear culture forever. Recreated in exact 1985 high-cut specifications with premium varsity red and black full-grain leather, encapsulated Air cushioning, and Wings logo.',
    specs: {
      cushioning: 'Encapsulated Nike Air Heel Unit',
      materials: 'Premium Heavyweight Full-Grain Leather',
      details: 'Original 1985 High-Top Ankle Cut & Wings Emblem',
      outsole: 'Solid Rubber Pivot Outsole',
      style: 'The Most Famous Sneaker in History'
    },
    reviews: [
      { author: 'Marcus B.', rating: 5, date: 'Yesterday', title: 'The ultimate grail', text: 'Black and red leather quality is buttery soft. Absolute perfection.' }
    ]
  },
  {
    id: 'jordan-4-military-black',
    sku: 'JB-AJ4-066',
    brand: 'Jordan',
    brandBadge: 'Jordan Flight Series',
    brandColor: 'white',
    name: 'Air Jordan 4 Retro "Military Black"',
    subtitle: 'Smooth White Leather & Neutral Grey Suede Hardwood Grail',
    price: 210.00,
    originalPrice: 210.00,
    rating: 5.0,
    reviewsCount: 830,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'White / Black / Neutral Grey / Fire Red',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 11,
    badge: 'Modern Classic',
    image: 'assets/jordan_4_bred.jpg',
    video: 'assets/jordan_4_bred.webm',
    description: 'One of the most universally acclaimed modern Jordan colorways. Clean white leather base with grey suede mudguard, black molded eyelet wings, side quarter mesh netting, and visible heel Air unit.',
    specs: {
      cushioning: 'Visible Heel Air-Sole + Encapsulated Forefoot Air Unit',
      materials: 'Smooth Full-Grain Leather with Suede Toe Overlay',
      details: 'Molded TPU Eyelet Wings & Flight Tongue Logo',
      outsole: 'Multi-Directional Herringbone Tread',
      style: 'Modern Grail & Streetwear Staple'
    },
    reviews: [
      { author: 'Julian S.', rating: 5, date: '2 days ago', title: 'Cleanest Jordan 4 ever made', text: 'Goes with every single fit. Leather is super supple and comfortable.' }
    ]
  },
  {
    id: 'jordan-11-concord',
    sku: 'JB-AJ11-067',
    brand: 'Jordan',
    brandBadge: 'Jordan Championship',
    brandColor: 'purple',
    name: 'Air Jordan 11 Retro "Concord 1995"',
    subtitle: 'Michael Jordan\'s 72-10 Championship Patent Leather Grail',
    price: 225.00,
    originalPrice: 225.00,
    rating: 5.0,
    reviewsCount: 890,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'White / Black Patent Leather / Dark Concord / Icy Blue',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 7,
    badge: '72-10 Championship',
    image: 'assets/jordan_11_gratitude.jpg',
    video: 'assets/jordan_11_gratitude.webm',
    description: 'Tinker Hatfield\'s masterpiece that broke all boundaries between performance and tuxedo luxury. High-cut gleaming black patent leather, ballistic mesh upper, full-length carbon fiber shank, and icy translucent outsole.',
    specs: {
      cushioning: 'Full-Length Encapsulated Nike Air-Sole Cushioning',
      plate: 'Real Carbon Fiber Midfoot Arch Shank Plate',
      materials: 'High-Cut Glossy Black Patent Leather Mudguard',
      outsole: 'Translucent Icy Blue Outsole with Dark Concord Pods',
      style: '72-10 Championship Legend'
    },
    reviews: [
      { author: 'Anthony T.', rating: 5, date: '1 day ago', title: 'The greatest sneaker in existence', text: 'Concord 11s are pure royalty. Patent leather shine and icy blue soles are unbeatable.' }
    ]
  },
  {
    id: 'jordan-3-retro-black-cement',
    sku: 'JB-AJ3-068',
    brand: 'Jordan',
    brandBadge: 'Jordan Heritage',
    brandColor: 'red',
    name: 'Air Jordan 3 Retro OG "Black Cement"',
    subtitle: '1988 All-Star Game MVP Elephant Print Masterpiece',
    price: 210.00,
    originalPrice: 210.00,
    rating: 5.0,
    reviewsCount: 780,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Fire Red / Cement Grey / White',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 9,
    badge: '1988 MVP Grail',
    image: 'assets/jordan_3_white_cement.jpg',
    video: 'assets/jordan_3_white_cement.webm',
    description: 'Worn by Michael Jordan during his historic 1988 MVP All-Star Game performance. Premium black tumbled leather, authentic elephant print overlays, fire red accents, visible heel Air, and Nike Air heel tab.',
    specs: {
      cushioning: 'Visible Heel Air-Sole + Encapsulated Forefoot Air Unit',
      materials: 'Premium Soft Tumbled Black Leather Upper',
      details: 'Original 1988 Cut Elephant Print Mudguards & Nike Air Heel Tab',
      outsole: 'Solid Rubber with Concentric Pivot Pods',
      style: 'Hardwood MVP History & Streetwear Icon'
    },
    reviews: [
      { author: 'Derek H.', rating: 5, date: '3 days ago', title: 'Timeless masterpiece', text: 'Nike Air branding on the heel is the cherry on top. Super comfortable leather.' }
    ]
  },
  {
    id: 'anta-kai-1-triple-white',
    sku: 'AN-KAI1-069',
    brand: 'ANTA',
    brandBadge: 'ANTA Kyrie Signature',
    brandColor: 'cyan',
    name: 'ANTA KAI 1 "Talisman White Gold"',
    subtitle: 'Kyrie Irving Pristine Hieroglyphics Championship Shoe',
    price: 125.00,
    originalPrice: 125.00,
    rating: 5.0,
    reviewsCount: 310,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Pure White / Metallic Gold / Ice Clear',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 17,
    badge: 'White Gold Drop',
    image: 'assets/anta_kai_1_warrior.jpg',
    video: 'assets/anta_kai_1_warrior.webm',
    description: 'Kyrie Irving\'s angelic white and gold edition celebrating court enlightenment and creative transcendence. Full-length supercritical NitroEdge nitrogen foam, gold-threaded talisman embroidery, and lockdown strap.',
    specs: {
      cushioning: 'Full-Length Supercritical NitroEdge Nitrogen Foam',
      plate: 'Carbon Fiber Midfoot Torsion Plate',
      lockdown: 'Gold-Threaded Talisman Midfoot Strap',
      outsole: 'Translucent Ice Radial Traction Rubber',
      position: 'Creative Guards & Ball-Handling Wizards'
    },
    reviews: [
      { author: 'Kyrie Fanatic', rating: 5, date: 'Yesterday', title: 'Most beautiful KAI 1 colorway', text: 'White with gold hieroglyphics is stunning. Court grip stops on a dime.' }
    ]
  },
  {
    id: 'anta-kt8-gold-blooded',
    sku: 'AN-KT8-070',
    brand: 'ANTA',
    brandBadge: 'ANTA Klay Signature',
    brandColor: 'amber',
    name: 'ANTA KT8 "Gold Blooded"',
    subtitle: 'Klay Thompson 4x NBA Champion 3D FLOW Hardwood Shoe',
    price: 135.00,
    originalPrice: 135.00,
    rating: 4.9,
    reviewsCount: 240,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Golden State White / Championship Gold / Royal Blue',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 14,
    badge: 'Championship Ring',
    image: 'assets/anta_kt9.jpg',
    video: 'assets/anta_kt9.webm',
    description: 'Engineered for Klay Thompson\'s fourth championship ring. Features dual-density NitroEdge supercritical foam, full-length 3D FLOW carbon stability frame, and SMART S.A.M shock-absorbing heel puck.',
    specs: {
      cushioning: 'Dual NitroEdge Nitrogen Foam + SMART S.A.M Heel Module',
      stability: 'Full-Length 3D FLOW Wrap-Around Carbon Frame',
      collar: 'Foldable High-to-Low Ankle Collar System',
      outsole: 'High-Grip Ripple Hardwood Outsole',
      position: 'Elite Sharpshooters & Wing Defenders'
    },
    reviews: [
      { author: 'Warriors Fan 11', rating: 5, date: '2 days ago', title: 'Championship gold details are glorious', text: 'Landing is super cushioned. Pure shooter shoe.' }
    ]
  },
  {
    id: 'anta-shockwave-5-pro-cement',
    sku: 'AN-SW5-071',
    brand: 'ANTA',
    brandBadge: 'ANTA Cyber Hoops',
    brandColor: 'purple',
    name: 'ANTA Shock Wave 5 Pro "Toxic Neon"',
    subtitle: 'High-Abrasion Outdoor Blacktop Nitrogen Beast',
    price: 140.00,
    originalPrice: 140.00,
    rating: 4.9,
    reviewsCount: 210,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Toxic Electric Volt / Cyber Black / Neon Violet',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 18,
    badge: 'Outdoor Destroyer',
    image: 'assets/anta_shockwave_5.jpg',
    video: 'assets/anta_shockwave_5.webm',
    description: 'Built specifically for brutal asphalt and concrete streetball battles. High-rebound drop-in NitroEdge supercritical foam, 360-degree TPU outrigger armor, and indestructible cement-killer rubber.',
    specs: {
      cushioning: 'Drop-In Supercritical Nitrogen NitroEdge Core',
      armor: 'Wrap-Around Lateral Cyber TPU Armor Shield',
      outsole: 'Extra-Deep Cement-Killer Outdoor Rubber Tread',
      upper: 'High-Tensile Ripstop Breathable Upper',
      court: 'Outdoor Blacktop, Concrete & Rough Hardwood'
    },
    reviews: [
      { author: 'Streetball Legend', rating: 5, date: '3 days ago', title: 'Rubber does not wear down', text: 'Played on rough asphalt courts all month, zero wear. Super bouncy nitrogen cushioning.' }
    ]
  },
  {
    id: 'nike-dunk-low-retro-grey-fog',
    sku: 'NK-DNK-072',
    brand: 'Nike',
    brandBadge: 'Nike Streetwear',
    brandColor: 'white',
    name: 'Nike Dunk Low "Grey Fog"',
    subtitle: 'Clean Minimalist Two-Tone Vintage Hardwood Classic',
    price: 115.00,
    originalPrice: 115.00,
    rating: 4.9,
    reviewsCount: 610,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'White / Grey Fog / Vintage Sail',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 28,
    badge: 'Clean Aesthetic',
    image: 'assets/nike_dunk_low.jpg',
    video: 'assets/nike_dunk_low.webm',
    description: 'A minimalist masterpiece. Crisp white leather base with soft grey fog overlays and vintage sail midsole delivers effortlessly clean styling for any wardrobe rotation.',
    specs: {
      cushioning: 'Lightweight Cushioning Foam Midsole',
      materials: 'Pristine Genuine Full-Grain Leather Overlays',
      collar: 'Padded Low-Cut Ankle Collar',
      outsole: 'Classic Rubber Pivot Traction Circle',
      style: 'Essential Everyday Streetwear'
    },
    reviews: [
      { author: 'Liam S.', rating: 5, date: 'Yesterday', title: 'Cleanest Dunk Low in existence', text: 'Grey fog is subtle and matches everything. Leather quality is great.' }
    ]
  },
  {
    id: 'nike-gt-hustle-3',
    sku: 'NK-GTH3-073',
    brand: 'Nike',
    brandBadge: 'Nike Greater Than',
    brandColor: 'cyan',
    name: 'Nike GT Hustle 3 "Blueprint"',
    subtitle: 'Double-Stacked Forefoot Air Zoom + ZoomX Hoops Shoe',
    price: 190.00,
    originalPrice: 190.00,
    rating: 4.9,
    reviewsCount: 175,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'White / Racer Blue / Total Orange / Sail',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 14,
    badge: 'Double Zoom Air',
    image: 'assets/nike_gt_cut_3.jpg',
    video: 'assets/nike_gt_cut_3.webm',
    description: 'Built for relentless workhorses who outlast everyone down the stretch. Features a full-length ZoomX foam drop-in combined with dual-stacked forefoot Air Zoom units to maximize energy return and prevent late-game fatigue.',
    specs: {
      cushioning: 'Full-Length ZoomX Foam + Dual Forefoot Zoom Air Pods',
      upper: 'Radial Knit with Targeted Breathability Zones',
      containment: 'Reinforced Midfoot Arch Band System',
      outsole: 'Generative Multi-Directional Floor Grip',
      position: 'Relentless Guards, Cutters & Hustle Wings'
    },
    reviews: [
      { author: 'Marcus T.', rating: 5, date: '2 days ago', title: 'Double Zoom Air is explosive', text: 'The double Air Zoom in the forefoot gives unmatched bounce on every drive.' },
      { author: 'Kevin D.', rating: 5, date: '5 days ago', title: 'Softest & most responsive', text: 'ZoomX and Air Zoom together make your legs feel fresh through all 4 quarters.' }
    ]
  },
  {
    id: 'nike-air-flightposite',
    sku: 'NK-FLTP-074',
    brand: 'Nike',
    brandBadge: 'Nike Alpha Project',
    brandColor: 'amber',
    name: 'Nike Air Flightposite One "Metallic Gold"',
    subtitle: 'Zipper Shroud Molded Foamposite Y2K Legend',
    price: 240.00,
    originalPrice: 240.00,
    rating: 4.9,
    reviewsCount: 310,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Metallic Gold / Black / Metallic Silver / Icy Clear',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 9,
    badge: 'Alpha Project Grail',
    image: 'assets/nike_foamposite_red.jpg',
    video: 'assets/nike_foamposite_red.webm',
    description: 'The pinnacle of futuristic Alpha Project footwear. Seamless liquid-molded Foamposite shell with zippered neoprene shroud, encapsulated full-length Zoom Air cushioning, and 5-dot Alpha Project insignia.',
    specs: {
      cushioning: 'Full-Length Zoom Air Cushioning',
      shroud: 'Zipper Neoprene Full Foot Lockout Shroud',
      shell: 'Aerodynamic Liquid-Molded Polyurethane Foamposite',
      plate: 'Carbon Fiber Midfoot Torsion Plate',
      style: 'Iconic Y2K Hardwood & Sci-Fi Streetwear'
    },
    reviews: [
      { author: 'Jason K.', rating: 5, date: '1 day ago', title: 'Metallic Gold finish is breathtaking', text: 'Zipper shroud gives it that unmatched sleek aerodynamic look.' },
      { author: 'Chris L.', rating: 5, date: '4 days ago', title: 'Legendary silhouette', text: 'Molds directly to your foot shape over time. Pure nostalgia.' }
    ]
  },
  {
    id: 'nike-air-max-plus-sunset',
    sku: 'NK-TN-075',
    brand: 'Nike',
    brandBadge: 'Nike Tuned Air',
    brandColor: 'amber',
    name: 'Nike Air Max Plus OG "Sunset / Tiger"',
    subtitle: '1998 Sean McDowell Tuned Air Palm Tree Icon',
    price: 180.00,
    originalPrice: 180.00,
    rating: 5.0,
    reviewsCount: 640,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Pimento Orange / Bright Ceramic / Resin Yellow',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 21,
    badge: 'Tuned Air Legend',
    image: 'assets/nike_air_max_95_neon.jpg',
    video: 'assets/nike_air_max_95_neon.webm',
    description: 'Designed by Sean McDowell inspired by Florida sunsets and swaying palm tree shadows. Features distinctive TPU exo-cage ribbing, whale-tail arch shank, and legendary dual Tuned Air hemispherical cushioning pods.',
    specs: {
      cushioning: 'Tuned Air Dual-Hemisphere Cushioning System',
      upper: 'Sunset Gradient Sublimated Mesh with TPU Ribbed Cage',
      shank: 'Whale-Tail Inspired TPU Midfoot Arch Support',
      outsole: 'High-Traction Waffle Lug Rubber with TN Heel Badge',
      style: 'The UK & European Streetwear Phenomenon'
    },
    reviews: [
      { author: 'Liam G.', rating: 5, date: 'Yesterday', title: 'The OG Sunset colorway is undefeated', text: 'The orange to yellow fade is vibrant and classic.' },
      { author: 'Nathan R.', rating: 5, date: '3 days ago', title: 'Tuned Air arch support is great', text: 'Comfortable for long city walks. Essential silhouette.' }
    ]
  },
  {
    id: 'nike-kobe-9-elite-halo',
    sku: 'NK-KB9-076',
    brand: 'Nike',
    brandBadge: 'Nike Mamba Legacy',
    brandColor: 'white',
    name: 'Nike Kobe 9 Elite Protro "Halo"',
    subtitle: 'High-Cut Flyknit Ankle Armor & Nike React Cushioning',
    price: 210.00,
    originalPrice: 210.00,
    rating: 5.0,
    reviewsCount: 520,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Triple White / Metallic Silver Sheath / Clear Ice',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 6,
    badge: 'Mamba Halo High',
    image: 'assets/nike_kobe_8_halo.jpg',
    video: 'assets/nike_kobe_8_halo.webm',
    description: 'The monumental high-top masterpiece returns. Engineered with ultra-high Flyknit ankle armor, lightweight carbon fiber lateral stabilization wings, and updated full-length Nike React foam drop-in midsole.',
    specs: {
      cushioning: 'Drop-In Full-Length Nike React Foam Midsole',
      upper: 'Seamless Single-Piece Engineered High-Cut Flyknit',
      stability: 'Genuine Carbon Fiber Heel Counter & Outrigger Fins',
      outsole: 'Pressure-Mapped Footprint Geometric Traction Rubber',
      position: 'High-Impact Guards, Wings & Mamba Collectors'
    },
    reviews: [
      { author: 'Jordan M.', rating: 5, date: '2 days ago', title: 'High-cut Flyknit is pure art', text: 'Feels like a compression sock with carbon armor. Incredible court feel.' },
      { author: 'Eric V.', rating: 5, date: '4 days ago', title: 'React drop-in is a massive win', text: '10/10 masterpiece. Mamba Forever 🐍' }
    ]
  },
  {
    id: 'nike-ja-1-scratch',
    sku: 'NK-JA1-077',
    brand: 'Nike',
    brandBadge: 'Nike Ja Morant Signature',
    brandColor: 'cyan',
    name: 'Nike Ja 1 "Scratch / Grizzly Teal"',
    subtitle: 'Vancouver Throwback Claw-Marked Guard Shoe',
    price: 110.00,
    originalPrice: 110.00,
    rating: 4.9,
    reviewsCount: 340,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Rapid Teal / White / University Red / Black',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 18,
    badge: 'Grizzly Scratch',
    image: 'assets/nike_ja_2.jpg',
    video: 'assets/nike_ja_2.webm',
    description: 'Paying tribute to 1990s Vancouver Grizzlies heritage and Ja Morant\'s explosive high-flying dunks. Features claw scratch graphic overlays across the Swoosh, responsive forefoot Air Zoom, and reinforced heel lockdown.',
    specs: {
      cushioning: 'Forefoot Air Zoom Unit + Resilient Phylon Midsole',
      upper: 'Engineered Mesh with Claw-Marked Leather Overlays',
      outsole: 'High-Bite Multi-Directional Court Tread',
      collar: 'Padded Ankle Collar with Ja Morant Signature Logo',
      position: 'Explosive Guards & Slashers'
    },
    reviews: [
      { author: 'Tyler W.', rating: 5, date: '1 day ago', title: 'Best guard shoe for the price', text: 'Forefoot Zoom is snappy and the teal color is electric on court.' },
      { author: 'Devon S.', rating: 5, date: '3 days ago', title: 'Grips clean courts like glue', text: 'Super lightweight, supportive and quick on transitions.' }
    ]
  },
  {
    id: 'nike-giannis-freak-6',
    sku: 'NK-FRK6-078',
    brand: 'Nike',
    brandBadge: 'Nike Greek Freak',
    brandColor: 'emerald',
    name: 'Nike Giannis Freak 6 "Roses & Gold"',
    subtitle: 'Giannis Antetokounmpo Euro-Step High-Traction Shoe',
    price: 140.00,
    originalPrice: 140.00,
    rating: 4.8,
    reviewsCount: 180,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Vintage White / Metallic Gold / University Red / Soft Rose',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 15,
    badge: 'Greek Freak Drop',
    image: 'assets/nike_lebron_21.jpg',
    video: 'assets/nike_lebron_21.webm',
    description: 'Crafted to harness Giannis Antetokounmpo\'s unstoppable momentum and powerful Euro-steps. Features dual-density Cushlon foam, responsive forefoot Air Zoom, and rose flower outsole traction inspired by Giannis\' late father.',
    specs: {
      cushioning: 'Forefoot Nike Air Zoom + Cushlon 3.0 Dual-Density Midsole',
      outsole: 'Generative Rose-Tread Multi-Directional Floor Grip',
      upper: 'Breathable Mono-Mesh with Internal Lockout Strap',
      details: 'Embroidered Rose & Greek Key Gold Accents',
      position: 'Power Forwards & Slashing Playmakers'
    },
    reviews: [
      { author: 'Anthony G.', rating: 5, date: '2 days ago', title: 'Euro-step containment is top notch', text: 'Love the rose details honoring his father. Huge lateral stability.' },
      { author: 'Darius P.', rating: 5, date: '5 days ago', title: 'Bouncy and locked in', text: 'Comfortable forefoot bounce for rim attacks.' }
    ]
  },
  {
    id: 'nike-dunk-low-sb-chicago',
    sku: 'NK-SB-079',
    brand: 'Nike',
    brandBadge: 'Nike SB Skateboard',
    brandColor: 'red',
    name: 'Nike SB Dunk Low Pro "Chicago J-Pack"',
    subtitle: 'Fat Padded Tongue & Zoom Air Streetwear Grail',
    price: 120.00,
    originalPrice: 120.00,
    rating: 5.0,
    reviewsCount: 790,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Varsity Red / White / Black Classic SB',
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 12,
    badge: 'SB Grail',
    image: 'assets/nike_dunk_low.jpg',
    video: 'assets/nike_dunk_low.webm',
    description: 'Blending iconic 1985 Chicago hardwood heritage with pro-spec skateboarding performance. Plush padded mesh tongue, heel Zoom Air sockliner, premium leather overlays, and grippy skate cupsole.',
    specs: {
      cushioning: 'Drop-In Sockliner Heel Nike Zoom Air Unit',
      tongue: 'Fat Padded Mesh Tongue for Impact Protection',
      materials: 'Premium Heavyweight Full-Grain Leather',
      outsole: 'Flexible Skate Rubber Cupsole with Pivot Circle',
      style: 'Grail-Level Skate Culture & Streetwear Classic'
    },
    reviews: [
      { author: 'Brandon S.', rating: 5, date: 'Yesterday', title: 'The fat tongue makes it 10x better', text: 'Chicago colorway is timeless. Leather quality is top notch.' },
      { author: 'Julian C.', rating: 5, date: '3 days ago', title: 'Zoom Air in the heel feels great', text: 'Doesn\'t crease easily and looks fresh with anything.' }
    ]
  },
  {
    id: 'nike-air-structure-triax',
    sku: 'NK-TRX-080',
    brand: 'Nike',
    brandBadge: 'Nike Vintage 90s',
    brandColor: 'cyan',
    name: 'Nike Air Structure Triax 91 "Infrared Heritage"',
    subtitle: 'Geometric 1991 Visible Air Classic Retro Runner',
    price: 130.00,
    originalPrice: 130.00,
    rating: 4.8,
    reviewsCount: 220,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Metallic Summit White / Neo Teal / Infrared 23 / Black',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 17,
    badge: '1991 Archival',
    image: 'assets/nike_air_max_1_86.jpg',
    video: 'assets/nike_air_max_1_86.webm',
    description: 'First released in 1991 as Nike\'s groundbreaking asymmetric stability runner. Features sharp geometric paneling, visible heel Air-Sole unit, contrasting Infrared and Neo Teal accents, and plush padded ankle collar.',
    specs: {
      cushioning: 'Visible Heel Nike Air-Sole Cushioning Unit',
      upper: 'Retro Nylon Mesh with Suede & Leather Angular Overlays',
      outsole: 'Classic 1991 Waffle Multi-Lug Hard Rubber',
      style: 'Early 90s Vintage Runner & Lifestyle Essential'
    },
    reviews: [
      { author: 'Ross M.', rating: 5, date: '2 days ago', title: 'Underrated 90s classic', text: 'The asymmetric teal and infrared color pops look so fresh.' },
      { author: 'Peter K.', rating: 5, date: '6 days ago', title: 'Great everyday walking shoe', text: 'True vintage silhouette with comfortable Air cushioning.' }
    ]
  },
  {
    id: 'jordan-5-retro-black-metallic',
    sku: 'JB-AJ5-081',
    brand: 'Jordan',
    brandBadge: 'Jordan Heritage',
    brandColor: 'red',
    name: 'Air Jordan 5 Retro "Black Metallic 1990"',
    subtitle: 'WWII Mustang Fighter Jet Teeth & Reflective 3M Tongue',
    price: 210.00,
    originalPrice: 210.00,
    rating: 5.0,
    reviewsCount: 710,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Metallic Silver / Fire Red / Translucent Ice',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 9,
    badge: '1990 WWII Grail',
    image: 'assets/jordan_4_bred.jpg',
    video: 'assets/jordan_4_bred.webm',
    description: 'Tinker Hatfield\'s 1990 masterpiece inspired by WWII P-51 Mustang fighter planes. Features shark-tooth midsole graphics, full reflective 3M silver tongue, lace toggle locks, clear side quarter mesh, and translucent icy outsole.',
    specs: {
      cushioning: 'Visible Heel Air-Sole + Encapsulated Forefoot Air Unit',
      tongue: 'High-Visibility Reflective 3M Metallic Silver Tongue',
      details: 'Mustang Shark Teeth Midsole & Clear Lace Lock Toggle',
      outsole: 'Translucent Icy Blue Rubber with Herringbone Pods',
      style: 'Hardwood History & Global Streetwear Grail'
    },
    reviews: [
      { author: 'Malik T.', rating: 5, date: 'Yesterday', title: 'The 3M tongue glowing is unbeatable', text: 'Durabuck is soft and shape is 100% OG.' },
      { author: 'Chris B.', rating: 5, date: '3 days ago', title: 'Top 3 Jordan of all time', text: 'Shark teeth design and icy soles are timeless.' }
    ]
  },
  {
    id: 'jordan-1-low-travis-olive',
    sku: 'JB-AJ1L-082',
    brand: 'Jordan',
    brandBadge: 'Jordan Collab Grail',
    brandColor: 'amber',
    name: 'Air Jordan 1 Low OG "Travis Scott Medium Olive"',
    subtitle: 'Reverse Olive Swoosh & Aged Sail Suede Grail',
    price: 150.00,
    originalPrice: 150.00,
    rating: 5.0,
    reviewsCount: 880,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Medium Olive / Black / Sail / Muslin',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 6,
    badge: 'Cactus Jack Olive',
    image: 'assets/jordan_1_low_reverse_mocha.jpg',
    video: 'assets/jordan_1_low_reverse_mocha.webm',
    description: 'Travis Scott\'s earthy masterpiece combining rich medium olive nubuck underlays with crisp sail white leather and oversized reversed black leather lateral Swoosh. Embellished with red Cactus Jack face embroidery.',
    specs: {
      cushioning: 'Encapsulated Nike Air-Sole Heel Unit',
      details: 'Oversized Reverse Lateral Leather Swoosh & Cactus Jack Emblems',
      materials: 'Medium Olive Nubuck + Premium Tumbled Sail Leather',
      outsole: 'Vintage Muslin Rubber Cupsole',
      style: 'Hyped Modern Streetwear & Sneaker Grail'
    },
    reviews: [
      { author: 'Julian M.', rating: 5, date: '2 days ago', title: 'Color combination is perfection', text: 'Olive nubuck texture is buttery soft. Looks great with earth tones.' },
      { author: 'Marcus F.', rating: 5, date: '4 days ago', title: 'Incredible details', text: 'Cactus Jack embroidery and reversed check are iconic.' }
    ]
  },
  {
    id: 'jordan-12-retro-flu-game',
    sku: 'JB-AJ12-083',
    brand: 'Jordan',
    brandBadge: 'Jordan Championship',
    brandColor: 'red',
    name: 'Air Jordan 12 Retro "Flu Game 1997"',
    subtitle: 'Full-Grain Black Leather & Varsity Red 1997 Finals Icon',
    price: 215.00,
    originalPrice: 215.00,
    rating: 5.0,
    reviewsCount: 690,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Varsity Red / Metallic Silver',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 8,
    badge: '1997 Finals Legend',
    image: 'assets/nike_jordan_1_chicago.jpg',
    video: 'assets/nike_jordan_1_chicago.webm',
    description: 'The immortal sneaker Michael Jordan wore during Game 5 of the 1997 NBA Finals while battling severe illness to score 38 points. Features Japanese rising sun quilted leather stitching, full-length Zoom Air, and carbon fiber shank.',
    specs: {
      cushioning: 'Full-Length Nike Zoom Air Unit (First in Jordan line)',
      plate: 'Full Carbon Fiber Midfoot Arch Shank',
      materials: 'Quilted Black Tumbled Leather + Lizard-Textured Red Mudguards',
      outsole: 'Solid Rubber with Herringbone Pods',
      style: 'Championship Grit & Hardwood Legend'
    },
    reviews: [
      { author: 'Dominic W.', rating: 5, date: '1 day ago', title: 'Full-length Zoom Air is so plush', text: 'Most comfortable retro Jordan in existence. Leather is indestructible.' },
      { author: 'Ray T.', rating: 5, date: '5 days ago', title: 'True championship heritage', text: 'Quilted leather details and silver eyelets look regal.' }
    ]
  },
  {
    id: 'jordan-6-retro-infrared',
    sku: 'JB-AJ6-084',
    brand: 'Jordan',
    brandBadge: 'Jordan Championship',
    brandColor: 'red',
    name: 'Air Jordan 6 Retro OG "Black Infrared"',
    subtitle: 'Michael Jordan\'s 1991 First NBA Championship Shoe',
    price: 210.00,
    originalPrice: 210.00,
    rating: 5.0,
    reviewsCount: 750,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black Durabuck / Infrared 23 / Clear Ice',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 10,
    badge: 'First Ring 1991',
    image: 'assets/jordan_11_gratitude.jpg',
    video: 'assets/jordan_11_gratitude.webm',
    description: 'The sneaker MJ wore when he hoisted his very first Larry O\'Brien championship trophy in 1991. Crafted with black durabuck upper, Porsche-inspired rubber spoiler pull tab, visible heel Air, and authentic Nike Air heel branding.',
    specs: {
      cushioning: 'Visible Heel Air-Sole + Encapsulated Forefoot Air Unit',
      details: 'Porsche 911 Turbo Spoiler Heel Pull Tab & Lace Toggle',
      materials: 'Smooth Black Durabuck Synthetic Nubuck',
      outsole: 'Translucent Icy Blue Outsole with Solid Rubber Pods',
      style: 'The 1991 First Championship Masterpiece'
    },
    reviews: [
      { author: 'Anthony H.', rating: 5, date: '2 days ago', title: 'Infrared pops with intense vibrancy', text: 'Spoiler heel tab makes it so easy to slip on. Authentic Nike Air on heel.' },
      { author: 'Trevor B.', rating: 5, date: '3 days ago', title: 'Centerpiece of my Jordan collection', text: 'Iconic 1991 shape and deep black durabuck finish.' }
    ]
  },
  {
    id: 'jordan-1-retro-travis-mocha-high',
    sku: 'JB-AJ1H-085',
    brand: 'Jordan',
    brandBadge: 'Jordan Collab Grail',
    brandColor: 'amber',
    name: 'Air Jordan 1 High OG "Travis Scott Dark Mocha"',
    subtitle: 'Hidden Ankle Collar Stash Pocket & Inverted Swoosh',
    price: 175.00,
    originalPrice: 175.00,
    rating: 5.0,
    reviewsCount: 940,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Sail / Dark Mocha / University Red / Black',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 5,
    badge: 'All-Time Hype Grail',
    image: 'assets/nike_jordan_1_chicago.jpg',
    video: 'assets/nike_jordan_1_chicago.webm',
    description: 'The groundbreaking 2019 release that reshaped global sneaker collaboration culture. Features oversized backward black leather Swoosh, concealed Velcro stash pouch in the high ankle collar, dark mocha nubuck, and red Cactus Jack branding.',
    specs: {
      cushioning: 'Encapsulated Nike Air-Sole Heel Unit',
      storage: 'Concealed Velcro Stash Pocket in Ankle Collar',
      details: 'Inverted Backward Lateral Leather Swoosh',
      materials: 'Dark Mocha Nubuck Suede + Sail Tumbled Leather',
      style: 'The Ultimate Modern Footwear Grail'
    },
    reviews: [
      { author: 'Jordan K.', rating: 5, date: 'Yesterday', title: 'The sneaker that redefined hype', text: 'Stash pocket is functional and the mocha suede is buttery soft.' },
      { author: 'Brandon E.', rating: 5, date: '4 days ago', title: 'Timeless collab', text: 'Looks amazing with baggy cargo pants or vintage denim.' }
    ]
  },
  {
    id: 'anta-kai-1-speed-tribe',
    sku: 'AN-KAI1S-086',
    brand: 'ANTA',
    brandBadge: 'ANTA Kyrie Signature',
    brandColor: 'purple',
    name: 'ANTA KAI 1 Speed "Tribe & Ancestors"',
    subtitle: 'Kyrie Irving Indigenous Lineage Fast Break Low-Top',
    price: 125.00,
    originalPrice: 125.00,
    rating: 5.0,
    reviewsCount: 260,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Mystic Obsidian / Tribe Copper / Sunburst Orange',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 16,
    badge: 'Kyrie Speed Tribe',
    image: 'assets/anta_kai_1_speed.jpg',
    video: 'assets/anta_kai_1_speed.webm',
    description: 'Kyrie Irving\'s tribute to indigenous ancestral heritage engineered into a low-cut court speed demon. Features low center of gravity NitroEdge supercritical foam, copper talisman threading, and instantaneous court cut traction.',
    specs: {
      cushioning: 'Full-Length Supercritical NitroEdge Nitrogen Midsole',
      plate: 'Carbon Fiber Midfoot Torsion Shank',
      upper: 'Reinforced Jacquard Weave with Copper Talisman Runes',
      outsole: 'Sticky Squeak Radial Court Grip',
      position: 'Speed Guards & Hardwood Playmakers'
    },
    reviews: [
      { author: 'Kyrie Disciple', rating: 5, date: '1 day ago', title: 'Low-cut court speed is insane', text: 'NitroEdge is plush and responsive. Crossover transitions are lightning fast.' },
      { author: 'Tyler M.', rating: 5, date: '3 days ago', title: 'Copper embroidery details are immaculate', text: 'Super lightweight and the traction bites hardwood hard.' }
    ]
  },
  {
    id: 'anta-kt9-sailor-bay',
    sku: 'AN-KT9-087',
    brand: 'ANTA',
    brandBadge: 'ANTA Klay Signature',
    brandColor: 'cyan',
    name: 'ANTA KT9 "Sailor Bay Wave"',
    subtitle: 'Klay Thompson Ocean Mist Championship Sharpshooter',
    price: 130.00,
    originalPrice: 130.00,
    rating: 4.9,
    reviewsCount: 190,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Deep Sea Turquoise / Foam White / Sunset Coral',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 13,
    badge: 'Ocean Sharpshooter',
    image: 'assets/anta_kt9_splash.jpg',
    video: 'assets/anta_kt9_splash.webm',
    description: 'Inspired by Klay Thompson\'s love for boating on San Francisco Bay. Features 3D FLOW stability chassis, dual-density NitroEdge midsole, SMART S.A.M shock-absorbing heel puck, and wave-contoured court grip.',
    specs: {
      cushioning: 'Dual NitroEdge Nitrogen Foam + SMART S.A.M Heel Module',
      stability: '3D FLOW Wrap-Around Carbon Frame',
      outsole: 'Ocean Wave Multidirectional Hardwood Tread',
      upper: 'High-Tensile Reinforced Breathable Weave',
      position: 'Shooting Guards & Perimeter Defenders'
    },
    reviews: [
      { author: 'Golden Shooter', rating: 5, date: '2 days ago', title: 'Landing on jumpers feels effortless', text: 'SMART S.A.M module protects knees during high-volume shooting sessions.' },
      { author: 'Derrick C.', rating: 5, date: '5 days ago', title: 'Unmatched lateral support', text: 'Solid ankle lock when pulling up from deep range.' }
    ]
  },
  {
    id: 'anta-c10-pro-marathon',
    sku: 'AN-C10P-088',
    brand: 'ANTA',
    brandBadge: 'ANTA Nitrogen Racing',
    brandColor: 'red',
    name: 'ANTA C10 Pro Carbon "Speed Master"',
    subtitle: 'Ultra-Featherweight 5K / 10K / Half Marathon Super-Shoe',
    price: 210.00,
    originalPrice: 210.00,
    rating: 4.9,
    reviewsCount: 165,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Hyper Laser Crimson / Cyber Neon / Carbon Black',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 11,
    badge: 'Sub-60 Half Racer',
    image: 'assets/anta_c202_gt_pro.jpg',
    video: 'assets/anta_c202_gt_pro.webm',
    description: 'ANTA\'s sub-60 minute half marathon racing weapon. Features an ultra-responsive single-density supercritical nitrogen NitroEdge foam core, 3D spoon-shaped carbon propulsion plate, and 165g featherweight race mono-mesh.',
    specs: {
      cushioning: 'Supercritical Nitrogen NitroEdge High-Rebound Foam (88% Return)',
      plate: '3D Spoon-Curved Carbon Fiber Flyplate',
      weight: '5.8 oz / 165 g (Ultralight Racing Spec)',
      outsole: 'Liquid Grip Space Rubber Road Traction',
      terrain: 'Road 5K, 10K, Half-Marathon & Marathon PRs'
    },
    reviews: [
      { author: 'Kenji T.', rating: 5, date: 'Yesterday', title: 'Feels lighter than air', text: 'Spoon-shaped carbon plate catapults your stride forward effortlessly.' },
      { author: 'Sarah L.', rating: 5, date: '3 days ago', title: 'Smashed my 10K PR', text: 'Broke my PR by over a minute on first race. Incredible rebound.' }
    ]
  },
  {
    id: 'anta-shockwave-5-white-ice',
    sku: 'AN-SW5-089',
    brand: 'ANTA',
    brandBadge: 'ANTA Outdoor Beast',
    brandColor: 'cyan',
    name: 'ANTA Shock Wave 5 Pro "Glacier Ice"',
    subtitle: 'Cement-Killer Translucent Blue High-Abrasion Outdoor Shoe',
    price: 140.00,
    originalPrice: 140.00,
    rating: 4.9,
    reviewsCount: 220,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Glacier Pure White / Translucent Ice Blue / Silver Metallic',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 18,
    badge: 'Glacier Armor',
    image: 'assets/anta_shockwave_5.jpg',
    video: 'assets/anta_shockwave_5.webm',
    description: 'Built for relentless outdoor battles on sun-baked blacktop. Features a drop-in NitroEdge supercritical nitrogen midsole, full-wrap TPU cyber cage outriggers, and indestructible cement-killer icy blue rubber.',
    specs: {
      cushioning: 'Drop-In Full-Length Supercritical Nitrogen Midsole',
      armor: 'Wrap-Around Lateral Cyber TPU Glacier Armor',
      outsole: 'Cement-Killer Extra-Deep Grooved Outdoor Rubber',
      upper: 'High-Density Breathable Jacquard Ripstop',
      court: 'Outdoor Blacktop, Asphalt & High-Impact Hardwood'
    },
    reviews: [
      { author: 'Streetballer Josh', rating: 5, date: '2 days ago', title: 'Cleanest Shockwave colorway yet', text: 'Soles are genuinely cement-proof. Translucent blue look is fire.' },
      { author: 'Alan G.', rating: 5, date: '4 days ago', title: 'Super bouncy nitrogen cushioning', text: 'Great impact absorption on rough blacktop.' }
    ]
  },
  {
    id: 'anta-kai-1-dallas-maverick',
    sku: 'AN-KAI1-090',
    brand: 'ANTA',
    brandBadge: 'ANTA Kyrie Signature',
    brandColor: 'cyan',
    name: 'ANTA KAI 1 "Deep Sea Navy"',
    subtitle: 'Kyrie Irving Western Conference Championship Navy Edition',
    price: 125.00,
    originalPrice: 125.00,
    rating: 5.0,
    reviewsCount: 290,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Deep Navy Blue / Royal Cyan / Metallic Silver Runes',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 15,
    badge: 'Playoffs Edition',
    image: 'assets/anta_kai_1_playoffs.jpg',
    video: 'assets/anta_kai_1_playoffs.webm',
    description: 'Worn by Kyrie Irving during high-stakes Western Conference playoff showdowns. Features midnight deep navy and royal blue jacquard knit with silver hieroglyphic runes, full-length NitroEdge nitrogen foam, and lockdown strap.',
    specs: {
      cushioning: 'Full-Length Supercritical NitroEdge Nitrogen Foam',
      plate: 'Carbon Fiber Midfoot Torsion Shank',
      lockdown: 'Dynamic Forefoot & Midfoot Stabilizer Strap',
      outsole: 'Radial Multi-Zone Hardwood Floor Grip',
      position: 'Guards & Hardwood Magicians'
    },
    reviews: [
      { author: 'Dallas Hoops', rating: 5, date: 'Yesterday', title: 'Deep navy colorway looks royal', text: 'Looks incredible on court. Best ankle-breaking traction on hardwood.' },
      { author: 'Marcus P.', rating: 5, date: '3 days ago', title: 'Locked down completely', text: 'Midfoot strap ensures zero heel slippage during violent cuts.' }
    ]
  },
  {
    id: 'anta-c202-gt-pro-electric',
    sku: 'AN-C202-091',
    brand: 'ANTA',
    brandBadge: 'ANTA Nitrogen Racing',
    brandColor: 'amber',
    name: 'ANTA C202 5 GT Pro "Hyper Volt"',
    subtitle: 'Bionic Carbon 3D Curved Full-Foot Marathon Super-Shoe',
    price: 220.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 175,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Electric Volt / Cyber Lime / Carbon Weave',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 10,
    badge: 'Sub-2:20 Weapon',
    image: 'assets/anta_c202_gt_olympic.jpg',
    video: 'assets/anta_c202_gt_olympic.webm',
    description: 'The world-record challenging marathon super-shoe in striking high-visibility Hyper Volt. Dual-layer nitrogen NitroEdge supercritical foam, 3D bionic full-palm curved carbon plate, and ultra-breathable race mono-mesh.',
    specs: {
      cushioning: 'Dual-Layer Supercritical Nitrogen NitroEdge Foam (86% Return)',
      plate: '3D Bionic Curved Full-Foot Carbon Fiber Plate',
      weight: '7.0 oz / 199 g',
      outsole: 'Liquid Grip Space Rubber Road Traction',
      terrain: 'World Marathon Majors & Elite PR Chasers'
    },
    reviews: [
      { author: 'Liam W.', rating: 5, date: '2 days ago', title: 'Unreal energy return', text: 'The neon volt pop turns heads and the bounce on 20-mile runs is effortless.' },
      { author: 'Victor Z.', rating: 5, date: '6 days ago', title: 'Extremely stable in corners', text: 'Wide carbon plate geometry prevents ankle roll during fast turns.' }
    ]
  },
  {
    id: 'converse-all-star-bb-shift-cx',
    sku: 'CV-BBS-092',
    brand: 'Converse',
    brandBadge: 'Converse Hoops Innovation',
    brandColor: 'cyan',
    name: 'Converse All Star BB Shift CX',
    subtitle: 'Forefoot Nike Air Zoom + CX Foam Agile Hoops Shoe',
    price: 120.00,
    originalPrice: 120.00,
    rating: 4.8,
    reviewsCount: 195,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Cyber White / Solar Orange / Hyper Cobalt / Black',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 17,
    badge: 'Shift Innovation',
    image: 'assets/converse_bb_prototype.jpg',
    video: 'assets/converse_bb_prototype.webm',
    description: 'Engineered for fluid, positionless basketball players who thrive on sudden shifts and crossover acceleration. Combines a snappy forefoot Nike Air Zoom unit with plush CX foam midsole and breathable mesh upper.',
    specs: {
      cushioning: 'Forefoot Nike Air Zoom Pod + Full CX Foam Core',
      lacing: 'Dynamic Webbed Eyelet Cable Containment',
      outsole: 'Radial Multi-Directional Floor Suction Rubber',
      upper: 'Engineered High-Tensile Mesh with Synthetic Suede Rands',
      position: 'Agile Guards, Slashers & Versatile Wings'
    },
    reviews: [
      { author: 'Carlos N.', rating: 5, date: 'Yesterday', title: 'Zoom Air in a Converse is game-changing', text: 'Unbelievable comfort and bounce. Instant court response.' },
      { author: 'Maya T.', rating: 5, date: '3 days ago', title: 'Best low-top Converse basketball shoe', text: 'Supportive, squeaky grip, and bold modern styling.' }
    ]
  },
  {
    id: 'converse-weapon-ox-low',
    sku: 'CV-WPN-093',
    brand: 'Converse',
    brandBadge: 'Converse Hardwood Legend',
    brandColor: 'purple',
    name: 'Converse Weapon OX Low "Showtime Vintage"',
    subtitle: '1986 Hardwood Rivalry Low-Cut Leather Icon',
    price: 110.00,
    originalPrice: 110.00,
    rating: 4.9,
    reviewsCount: 230,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Vintage White / Court Purple / Gold Foil / Egret',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 19,
    badge: 'Showtime Low',
    image: 'assets/converse_weapon_cx.jpg',
    video: 'assets/converse_weapon_cx.webm',
    description: 'The low-top cut of the most famous basketball sneaker of the 1980s. Premium full-grain leather, CX foam drop-in comfort, vintage aged egret midsole, and iconic Star Chevron leather overlays.',
    specs: {
      cushioning: 'Plush CX Foam Drop-In Cushioning',
      materials: 'Heavyweight Full-Grain Supple Genuine Leather',
      collar: 'Padded Low-Cut Hardwood Ankle Collar',
      outsole: 'Vintage Molded Rubber Herringbone Pivot Outsole',
      style: '80s Showtime Nostalgia & Low-Top Streetwear Staple'
    },
    reviews: [
      { author: 'Darren K.', rating: 5, date: '2 days ago', title: 'Low-top Weapon is so versatile', text: 'Leather is thick and soft, and CX foam makes it wearable all day.' },
      { author: 'Sam L.', rating: 5, date: '4 days ago', title: '80s Showtime vibes', text: 'Purple and gold colorway looks amazing with denim.' }
    ]
  },
  {
    id: 'converse-chuck-70-plus-deconstructed',
    sku: 'CV-C70P-094',
    brand: 'Converse',
    brandBadge: 'Converse Avant-Garde',
    brandColor: 'amber',
    name: 'Converse Chuck 70 Plus "Asymmetrical Split"',
    subtitle: 'Deconstructed Split-Sole 12oz Duck Canvas High Top',
    price: 100.00,
    originalPrice: 100.00,
    rating: 4.9,
    reviewsCount: 310,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Egret / Distorted Canvas Monolith',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 22,
    badge: 'Distorted Canvas',
    image: 'assets/converse_chuck_70.jpg',
    video: 'assets/converse_chuck_70.webm',
    description: 'An unexpected, distorted remix on the iconic Chuck 70. Features sliced and spliced asymmetrical canvas panels, stacked dual-height vulcanized foxing tape, fused Chuck Taylor ankle patch, and OrthoLite cushioning.',
    specs: {
      cushioning: 'Plush Dual-Density OrthoLite Insole Cushioning',
      construction: 'Asymmetrical Spliced 12oz Heavyweight Organic Canvas',
      midsole: 'Distorted Multi-Height Egret Vulcanized Rubber Tape',
      details: 'Split Chuck Taylor All Star Ankle Patch',
      style: 'Deconstructed High-Fashion & Modern Street Art'
    },
    reviews: [
      { author: 'Camille D.', rating: 5, date: '1 day ago', title: 'Looks like a runway designer collab', text: 'The distorted cut lines and split sole look unbelievable on foot.' },
      { author: 'Julian R.', rating: 5, date: '3 days ago', title: 'Super comfortable insole', text: 'Gets compliments everywhere I go. True head turner.' }
    ]
  },
  {
    id: 'converse-run-star-legacy-cx',
    sku: 'CV-RSL-095',
    brand: 'Converse',
    brandBadge: 'Converse CX Innovation',
    brandColor: 'purple',
    name: 'Converse Run Star Legacy CX Platform',
    subtitle: 'Sculpted Angular CX Foam Platform with Winged Tongue',
    price: 120.00,
    originalPrice: 120.00,
    rating: 4.9,
    reviewsCount: 275,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Egret White / Black / Cyber Violet Star',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 20,
    badge: 'Ultra-Light Platform',
    image: 'assets/converse_run_star_motion.jpg',
    video: 'assets/converse_run_star_motion.webm',
    description: 'The latest iteration of the fan-favorite Run Star Hike, merging bold platform styling with lightweight CX foam cushioning. Winged tongue and heel bumper allow for easy on and off, while sculpted lines add futuristic poise.',
    specs: {
      cushioning: 'Lightweight Injected CX Foam Midsole & Sockliner',
      upper: '100% Organic Heavyweight Cotton Canvas',
      collar: 'Winged Tongue & Exaggerated Pinstripe Collar',
      outsole: 'Sculpted Angular Saw-Tooth Rubber Traction',
      style: 'Futuristic Fashion Platform & Daily Comfort'
    },
    reviews: [
      { author: 'Sienna V.', rating: 5, date: 'Yesterday', title: 'Weighs half as much as regular platforms', text: 'CX foam is like walking on clouds. Flattering silhouette.' },
      { author: 'Rachel P.', rating: 5, date: '5 days ago', title: 'Egret off-white tone is gorgeous', text: 'Super easy to slip on with the heel bumper and winged tongue.' }
    ]
  },
  {
    id: 'converse-cons-fastbreak-pro',
    sku: 'CV-FBS-096',
    brand: 'Converse',
    brandBadge: 'Converse CONS Skate',
    brandColor: 'white',
    name: 'Converse CONS Fastbreak Pro "1983 Archival"',
    subtitle: '80s Hardwood Heritage Revamped for Pro Skateboarding',
    price: 85.00,
    originalPrice: 85.00,
    rating: 4.8,
    reviewsCount: 180,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'White / Dark Obsidian / Vintage Gum / Red',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 25,
    badge: 'CONS Skate Pro',
    image: 'assets/converse_cruise_skate.jpg',
    video: 'assets/converse_cruise_skate.webm',
    description: 'Originally introduced on the hardwood in 1983, the Fastbreak was an immediate favorite of basketball champions and underground skateboarders alike. Re-engineered with CX foam impact cushioning, durable rubber-backed leather, and CONS traction gum rubber.',
    specs: {
      cushioning: 'Molded CX Foam Drop-In Sockliner for Impact Protection',
      materials: 'Durable Rubber-Backed Genuine Leather & Nylon Upper',
      outsole: 'CONS High-Grip Traction Gum Rubber Compound',
      style: '1983 Archival Hardwood & Street Skateboarding'
    },
    reviews: [
      { author: 'Leo X.', rating: 5, date: '2 days ago', title: 'Indestructible skate shoe', text: 'Board feel is precise and the 80s vintage look is unbeatable.' },
      { author: 'Dave M.', rating: 5, date: '4 days ago', title: 'Clean retro silhouette', text: 'Gum sole gives awesome grip on boards or pavement.' }
    ]
  },
  {
    id: 'nike-kobe-8-venice-beach',
    sku: 'NK-KB8-097',
    brand: 'Nike',
    brandBadge: 'Nike Mamba Legacy',
    brandColor: 'cyan',
    name: 'Nike Kobe 8 Protro "Venice Beach"',
    subtitle: 'Graffiti Airbrush Multi-Color Venice Boardwalk Classic',
    price: 190.00,
    originalPrice: 190.00,
    rating: 5.0,
    reviewsCount: 460,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Stadium Grey / Metallic Silver / Tour Yellow / Signal Blue',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 8,
    badge: 'Venice Beach Drop',
    image: 'assets/nike_kobe_8_protro.jpg',
    video: 'assets/nike_kobe_8_protro.webm',
    description: 'Celebrating the street basketball culture and colorful graffiti murals of Venice Beach, California. Originally released for the 2013 Houston All-Star Game, modernized with a full-length drop-in Nike React foam midsole.',
    specs: {
      cushioning: 'Drop-In Full-Length Nike React Foam Midsole',
      plate: 'Glass-Composite Midfoot Shank Plate',
      upper: 'Seamless Engineered Mesh with Airbrushed Graffiti',
      outsole: 'Herringbone Multidirectional Grip Rubber',
      position: 'Speed Guards & Mamba Disciples'
    },
    reviews: [
      { author: 'Kobe Fan 24', rating: 5, date: '1 day ago', title: 'Vibrant boardwalk vibes', text: 'Colors are rich and the React foam drop-in is a huge upgrade for court longevity.' },
      { author: 'Marcus D.', rating: 5, date: '3 days ago', title: 'Ultra lightweight', text: 'Fastest shoe in my basketball bag. Unbeatable traction.' }
    ]
  },
  {
    id: 'nike-air-max-plus-drift',
    sku: 'NK-TN-098',
    brand: 'Nike',
    brandBadge: 'Nike Tuned Air',
    brandColor: 'emerald',
    name: 'Nike Air Max Plus Drift "Neon Matrix"',
    subtitle: 'Molded Exoskeleton Gradient Cage Streetwear',
    price: 185.00,
    originalPrice: 185.00,
    rating: 4.9,
    reviewsCount: 290,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Cyber Volt / Anthracite / Black / Bright Cactus',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 16,
    badge: 'Tuned Drift',
    image: 'assets/nike_air_max_95_neon.jpg',
    video: 'assets/nike_air_max_95_neon.webm',
    description: 'A futuristic armored evolution of the legendary Air Max Plus. Features an exaggerated molded TPU exoskeleton cage wrapping over a gradient mesh base, dual Tuned Air chambers, and whale-tail midfoot arch shank.',
    specs: {
      cushioning: 'Dual Tuned Air Cushioning Pods + Phylon Midsole',
      cage: 'High-Relief Sculpted TPU Exoskeleton Armor',
      shank: 'Graduated Whale-Tail Arch Stability Shank',
      outsole: 'Lugged Waffle High-Abrasion Rubber',
      style: 'Cyberpunk Techwear & Aggressive Streetwear'
    },
    reviews: [
      { author: 'Leo X.', rating: 5, date: '2 days ago', title: 'Aggressive futuristic cage', text: 'Looks like armor on foot. Tuned Air cushioning feels sturdy and bouncy.' },
      { author: 'Viktor N.', rating: 5, date: '5 days ago', title: 'Neon green pops hard', text: 'Turns heads in the city. Great arch support.' }
    ]
  },
  {
    id: 'nike-lebron-nxxt-gen-ampd',
    sku: 'NK-NXXT-099',
    brand: 'Nike',
    brandBadge: 'Nike King Signature',
    brandColor: 'cyan',
    name: 'Nike LeBron NXXT Gen AMPD "I Promise"',
    subtitle: 'Double-Layered Swoosh Hardwood Agility Weapon',
    price: 170.00,
    originalPrice: 170.00,
    rating: 4.9,
    reviewsCount: 310,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Multi-Color / Summit White / Metallic Gold / Cobalt',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 14,
    badge: 'King Agility',
    image: 'assets/nike_lebron_20_trinity.jpg',
    video: 'assets/nike_lebron_20_trinity.webm',
    description: 'Tailored specifically for the fast-paced, positionless modern basketball athlete. Top-loaded forefoot Zoom Turbo unit pairs with heel Zoom Air, multi-layered iridescent double Swooshes, and Akron map traction pattern.',
    specs: {
      cushioning: 'Forefoot Zoom Turbo + Heel Zoom Air + Cushlon Foam',
      containment: 'Reinforced Lateral Outrigger with Double Swoosh Overlays',
      outsole: 'Akron Suburb City Map Generative Hardwood Grip',
      upper: 'Open-Hole High-Tensile Dimensional Knit',
      position: 'Versatile Playmakers, Guards & Forward Slashers'
    },
    reviews: [
      { author: 'Darius C.', rating: 5, date: 'Yesterday', title: 'Best LeBron low-top performer', text: 'Zoom Turbo under the forefoot gives instant pop on first steps.' },
      { author: 'Tyler H.', rating: 5, date: '3 days ago', title: 'Double swoosh looks luxury', text: 'Fits true to size with snug ankle lockdown.' }
    ]
  },
  {
    id: 'nike-air-more-uptempo-og',
    sku: 'NK-UPT-100',
    brand: 'Nike',
    brandBadge: 'Nike 90s Hardwood',
    brandColor: 'red',
    name: 'Nike Air More Uptempo \'96 OG "Scottie Pippen"',
    subtitle: 'Graffiti AIR Bold Lettering Full Visible Air Classic',
    price: 170.00,
    originalPrice: 170.00,
    rating: 5.0,
    reviewsCount: 680,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / White / University Red',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 15,
    badge: '1996 72-10 Icon',
    image: 'assets/jordan_4_bred.jpg',
    video: 'assets/jordan_4_bred.webm',
    description: 'The monumental 1996 silhouette Scottie Pippen wore during the historic 72-10 championship season and Atlanta Olympic Games. Giant graffiti-inspired AIR lettering with reflective border and full-length visible Air-Sole bubbles.',
    specs: {
      cushioning: 'Full-Length Multi-Chamber Visible Air-Sole Cushioning',
      upper: 'Heavyweight Black Nubuck with Molded AIR Overlays',
      lacing: 'Elastic Speed-Lacing Retention Straps',
      outsole: 'Solid Rubber with Herringbone Traction Circles',
      style: 'All-Time 90s Hardwood Icon & Global Streetwear Giant'
    },
    reviews: [
      { author: 'Pippen Fan 33', rating: 5, date: '2 days ago', title: 'The boldest sneaker ever made', text: 'The AIR lettering is timeless 90s swagger. Visible Air under the whole foot is super comfortable.' },
      { author: 'Julian S.', rating: 5, date: '4 days ago', title: 'Pristine nubuck quality', text: 'Classic black and white goes with any streetwear fit.' }
    ]
  },
  {
    id: 'nike-acg-air-mowabb',
    sku: 'NK-MOW-101',
    brand: 'Nike',
    brandBadge: 'Nike ACG All-Conditions',
    brandColor: 'amber',
    name: 'Nike ACG Air Mowabb OG "Rattan Birch"',
    subtitle: '1991 Tinker Hatfield Neoprene Trail Huarache Legend',
    price: 160.00,
    originalPrice: 160.00,
    rating: 4.9,
    reviewsCount: 230,
    category: 'outdoor',
    categoryName: 'Outdoor / Trail ACG',
    colorway: 'Rattan / Birch / Mandarin Orange / Royal Blue',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 11,
    badge: '1991 ACG Origin',
    image: 'assets/nike_acg_mountain_fly.jpg',
    video: 'assets/nike_acg_mountain_fly.webm',
    description: 'Designed by Tinker Hatfield in 1991 inspired by the red rocks and mountain trails of Moab, Utah. Features a flexible neoprene Huarache inner bootie, speckled midsole, encapsulated Air cushioning, and trail-ready rubber lugs.',
    specs: {
      cushioning: 'Encapsulated Nike Air Heel Cushioning Unit',
      bootie: 'Dynamic Stretch Neoprene & Spandex Ankle Collar',
      materials: 'Premium Nubuck Leather Overlays + ACG Heel Cage',
      outsole: 'Speckled Trail Rubber Compound with Multi-Lug Grip',
      terrain: 'Mountain Hiking, Trail Trekking & Retro Streetwear'
    },
    reviews: [
      { author: 'Trekker Dave', rating: 5, date: '3 days ago', title: 'Huarache bootie fits like a glove', text: 'Keeps trail debris out of your shoe. The Rattan Birch colorway is 90s perfection.' },
      { author: 'Gabe T.', rating: 5, date: '6 days ago', title: 'Comfortable all-day hiker', text: 'Air cushioning and soft neoprene make long walks effortless.' }
    ]
  },
  {
    id: 'nike-vomero-17-zoomx',
    sku: 'NK-VOM17-102',
    brand: 'Nike',
    brandBadge: 'Nike Daily Runner',
    brandColor: 'cyan',
    name: 'Nike Vomero 17 "Dual Stack ZoomX"',
    subtitle: 'Maximum Plush Everyday Distance Road Runner',
    price: 160.00,
    originalPrice: 160.00,
    rating: 4.9,
    reviewsCount: 215,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Pure Platinum / Hyper Crimson / Coconut Milk',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 20,
    badge: 'Maximum Plush',
    image: 'assets/nike_invincible_3.jpg',
    video: 'assets/nike_invincible_3.webm',
    description: 'The ultimate plush mileage collector. Combines a top layer of ultra-light, springy ZoomX superfoam with a supportive bottom carrier of Cushlon 3.0 foam for luxurious impact absorption on marathon training blocks.',
    specs: {
      cushioning: 'Dual-Stacked Midsole: Premium ZoomX Superfoam + Cushlon 3.0 Carrier',
      offset: '10 mm heel-to-toe drop',
      upper: 'Engineered High-Breathability Mono-Mesh',
      outsole: 'Generative High-Abrasion Waffle Lug Rubber',
      terrain: 'Daily Distance Training / Marathon Long Base Miles'
    },
    reviews: [
      { author: 'Elena R.', rating: 5, date: 'Yesterday', title: 'Saves your knees on long runs', text: 'ZoomX on top of Cushlon gives bounce without feeling too unstable. Best daily trainer.' },
      { author: 'Marcus K.', rating: 5, date: '4 days ago', title: 'Incredible step-in comfort', text: 'Like walking on pillows. Super smooth transition.' }
    ]
  },
  {
    id: 'nike-kobe-4-protro-philly',
    sku: 'NK-KB4-103',
    brand: 'Nike',
    brandBadge: 'Nike Mamba Legacy',
    brandColor: 'red',
    name: 'Nike Kobe 4 Protro "Philly 2024"',
    subtitle: 'Kobe Bryant Hometown Varsity Royal 1776 Tribute',
    price: 190.00,
    originalPrice: 190.00,
    rating: 5.0,
    reviewsCount: 390,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Varsity Royal / White / University Red / Metallic Silver',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 7,
    badge: 'Philly Mamba',
    image: 'assets/nike_kobe_4_black.jpg',
    video: 'assets/nike_kobe_4_black.webm',
    description: 'Honoring Kobe Bryant\'s birthplace of Philadelphia. Features patriotic varsity royal and red color blocking, 8-23-78 Kobe birthdate stamped on the insole, starry ankle collar pattern, responsive heel Zoom Air, and Flywire containment.',
    specs: {
      cushioning: 'Heel Nike Zoom Air + Full-Length Phylon Foam',
      containment: 'Flywire High-Tensile Lateral Support Cables',
      details: 'Patriotic Star Collar Pattern & 8-23-78 Insole Stamp',
      outsole: 'Herringbone Modified High-Grip Court Rubber',
      position: 'Hardwood Speed Guards & Mamba Disciples'
    },
    reviews: [
      { author: 'Philly Hoops', rating: 5, date: '2 days ago', title: 'Royal blue and stars look magnificent', text: 'The tribute to Kobe’s hometown is heartfelt. Low-top mobility is unmatched.' },
      { author: 'Brandon K.', rating: 5, date: '5 days ago', title: 'Heel Zoom Air is snappy', text: 'First step responsiveness is immediate. Classic Kobe silhouette.' }
    ]
  },
  {
    id: 'nike-air-max-1-sc-corduroy',
    sku: 'NK-AM1-104',
    brand: 'Nike',
    brandBadge: 'Nike Air Max',
    brandColor: 'cyan',
    name: 'Nike Air Max 1 SC "Baltic Blue Corduroy"',
    subtitle: 'Textured Ribbed Corduroy Suede Mudguard Icon',
    price: 160.00,
    originalPrice: 160.00,
    rating: 4.8,
    reviewsCount: 240,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Baltic Blue / Sesame / Gridiron / Sail',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    inStock: true,
    stockCount: 16,
    badge: 'Corduroy Luxury',
    image: 'assets/nike_air_max_1_86.jpg',
    video: 'assets/nike_air_max_1_86.webm',
    description: 'Swapping traditional mesh and leather for rich, tactile ribbed corduroy in vivid Baltic Blue. Paired with sesame tan Swooshes, sail vintage midsole, and visible Air-Sole heel unit.',
    specs: {
      cushioning: 'Visible Heel Nike Max Air Cushioning Chamber',
      materials: 'Premium Heavyweight Ribbed Corduroy Textile & Suede',
      midsole: 'Vintage Sail Polyurethane Midsole',
      outsole: 'Original 1987 Waffle Tread Hard Rubber',
      style: 'Textured Luxury Lifestyle & Streetwear Essential'
    },
    reviews: [
      { author: 'Oliver W.', rating: 5, date: '1 day ago', title: 'Corduroy texture is insanely premium', text: 'The baltic blue color is rich in sunlight. Sesame swoosh contrasts beautifully.' },
      { author: 'Nathan C.', rating: 5, date: '3 days ago', title: 'Super unique Air Max 1', text: 'Materials feel expensive and fit is true to size.' }
    ]
  },
  {
    id: 'jordan-4-retro-sb-pine-green',
    sku: 'JB-AJ4-105',
    brand: 'Jordan',
    brandBadge: 'Jordan SB Collab',
    brandColor: 'emerald',
    name: 'Nike SB x Air Jordan 4 "Pine Green"',
    subtitle: 'Flexible Skate Toebox & Gum Rubber Heel Puck Grail',
    price: 225.00,
    originalPrice: 225.00,
    rating: 5.0,
    reviewsCount: 920,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Summit White / Pine Green / Neutral Grey / Gum Light Brown',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 6,
    badge: 'Nike SB Jordan Grail',
    image: 'assets/jordan_4_bred.jpg',
    video: 'assets/jordan_4_bred.webm',
    description: 'The monumental collaboration between Nike SB and Jordan Brand. Re-engineered with flexible 1989 shape toebox, soft rubber eyelet wings that don\'t snap, Nike SB heel badge, and high-grip gum rubber outsole pods.',
    specs: {
      cushioning: 'Heel Air-Sole Unit with Softened Polyurethane Forefoot',
      details: 'Molded Nike SB Heel Tab & Flexible Rubber Eyestay Wings',
      materials: 'Supple White Leather Base with Neutral Grey Suede Mudguard',
      outsole: 'Gum Light Brown Multi-Directional Skate Grip Rubber',
      style: 'The Most Acclaimed Modern Jordan 4 Collab'
    },
    reviews: [
      { author: 'Skater Julian', rating: 5, date: 'Yesterday', title: 'Best Jordan 4 ever engineered', text: 'So much more comfortable than regular 4s. The flexible wings and gum sole make this unmatched.' },
      { author: 'Chris M.', rating: 5, date: '2 days ago', title: 'Pine green accents look royal', text: '10/10 quality. Leather is buttery soft.' }
    ]
  },
  {
    id: 'jordan-1-retro-high-lost-and-found',
    sku: 'JB-AJ1-106',
    brand: 'Jordan',
    brandBadge: 'Jordan Heritage',
    brandColor: 'red',
    name: 'Air Jordan 1 High OG "Lost & Found Chicago"',
    subtitle: '1985 Cracked Leather Vintage Receipt Box Grail',
    price: 180.00,
    originalPrice: 180.00,
    rating: 5.0,
    reviewsCount: 980,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Varsity Red / Black / Muslin / Bleached White',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 7,
    badge: 'Lost & Found Chicago',
    image: 'assets/nike_jordan_1_chicago.jpg',
    video: 'assets/nike_jordan_1_chicago.webm',
    description: 'Replicating an authentic deadstock 1985 Chicago Air Jordan 1 discovered in a mom-and-pop shoe store stockroom. Features cracked black leather collars, aged muslin midsole, retro sales receipt packaging, and pristine red leather overlays.',
    specs: {
      cushioning: 'Encapsulated Nike Air-Sole Heel Unit',
      materials: 'Cracked Leather Ankle Collar + Full-Grain Varsity Red Leather',
      details: 'Vintage Aged Muslin Midsole & Mismatched Box Lid Graphic',
      outsole: 'Solid Rubber Concentric Pivot Outsole',
      style: 'The Ultimate Chicago 1985 Time Capsule'
    },
    reviews: [
      { author: 'Vintage Sneakerhead', rating: 5, date: '1 day ago', title: 'Feels like stepping out of 1985', text: 'Cracked leather collar and aged sole look museum-quality. Flawless execution.' },
      { author: 'Anthony T.', rating: 5, date: '3 days ago', title: 'Greatest Jordan release of the decade', text: 'Shape is 1:1 identical to original 1985 cuts.' }
    ]
  },
  {
    id: 'jordan-11-retro-space-jam',
    sku: 'JB-AJ11-107',
    brand: 'Jordan',
    brandBadge: 'Jordan Championship',
    brandColor: 'purple',
    name: 'Air Jordan 11 Retro "Space Jam 1996"',
    subtitle: 'High-Cut Glossy Patent Leather & Concord Jumpman',
    price: 230.00,
    originalPrice: 230.00,
    rating: 5.0,
    reviewsCount: 860,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Dark Concord / White / Icy Clear Outsole',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 8,
    badge: 'Space Jam Grail',
    image: 'assets/jordan_11_gratitude.jpg',
    video: 'assets/jordan_11_gratitude.webm',
    description: 'First debuted by Michael Jordan in the 1995 Eastern Conference Semifinals and made legendary in the 1996 movie Space Jam. Features high-cut pitch-black patent leather mudguard, dark concord Jumpman emblem, and full carbon fiber shank plate.',
    specs: {
      cushioning: 'Full-Length Encapsulated Nike Air-Sole Cushioning',
      plate: 'Genuine Carbon Fiber Midfoot Arch Shank Plate',
      materials: 'High-Cut Gleaming Black Patent Leather + Ballistic Mesh',
      outsole: 'Icy Translucent Rubber with Concord Herringbone Traction',
      style: 'Pop Culture Icon & Hardwood Legend'
    },
    reviews: [
      { author: 'Malik J.', rating: 5, date: '2 days ago', title: 'Pure movie and hardwood royalty', text: 'The patent leather cut is high and shiny. Dark concord Jumpman is iconic.' },
      { author: 'Derek W.', rating: 5, date: '4 days ago', title: 'Carbon plate arch support is unbeatable', text: 'Comfortable to hoop in or wear with a suit.' }
    ]
  },
  {
    id: 'jordan-3-retro-palomino',
    sku: 'JB-AJ3-108',
    brand: 'Jordan',
    brandBadge: 'Jordan Heritage',
    brandColor: 'amber',
    name: 'Air Jordan 3 Retro "Palomino Earth"',
    subtitle: 'Light Orewood Brown Suede & Metallic Gold Jumpman',
    price: 200.00,
    originalPrice: 200.00,
    rating: 4.9,
    reviewsCount: 340,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Light Orewood Brown / Palomino / Metallic Gold / British Tan',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 14,
    badge: 'Earth Tone Luxury',
    image: 'assets/jordan_3_white_cement.jpg',
    video: 'assets/jordan_3_white_cement.webm',
    description: 'A luxurious earth-tone interpretation of the 1988 Tinker Hatfield classic. Light Orewood Brown suede base complemented by rich Palomino brown elephant print overlays and metallic gold Jumpman tongue branding.',
    specs: {
      cushioning: 'Visible Heel Air-Sole + Encapsulated Forefoot Air Unit',
      materials: 'Light Orewood Suede + Textured Palomino Elephant Print',
      details: 'Embroidered Metallic Gold Jumpman Tongue Logo',
      outsole: 'Solid Rubber with Circular Pivot Forefoot Pod',
      style: 'Luxury Earth-Tone Streetwear & Hardwood Heritage'
    },
    reviews: [
      { author: 'Julian M.', rating: 5, date: 'Yesterday', title: 'Suede quality is magnificent', text: 'Palomino brown elephant print gives it that high-end designer boot aesthetic.' },
      { author: 'Marcus F.', rating: 5, date: '3 days ago', title: 'Super clean neutral colorway', text: 'Goes with cream, brown, and olive outfits effortlessly.' }
    ]
  },
  {
    id: 'jordan-13-retro-playoffs',
    sku: 'JB-AJ13-109',
    brand: 'Jordan',
    brandBadge: 'Jordan Championship',
    brandColor: 'red',
    name: 'Air Jordan 13 Retro "Playoffs 1998"',
    subtitle: 'Black Panther Paw Pods & Holographic Eye Jewel',
    price: 210.00,
    originalPrice: 210.00,
    rating: 5.0,
    reviewsCount: 480,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / True Red / White / Vibrant Yellow',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 10,
    badge: '1998 Last Dance',
    image: 'assets/jordan_4_bred.jpg',
    video: 'assets/jordan_4_bred.webm',
    description: 'Worn by Michael Jordan during his historic 1998 championship playoff run and 1998 All-Star Game. Inspired by the predatory instincts of a black panther, featuring dimpled leather side panels, holographic eye jewel, and paw-like outsole pods.',
    specs: {
      cushioning: 'Dual Zoom Air Units (Forefoot & Heel High-Volume)',
      plate: 'Full Carbon Fiber Midfoot Arch Shank',
      details: 'Signature 3D Holographic 23 Panther Eye Jewel',
      outsole: 'Panther Paw Sculpted Pods with Herringbone Traction',
      style: 'The 1998 Championship Last Dance Icon'
    },
    reviews: [
      { author: 'Dominic W.', rating: 5, date: '2 days ago', title: 'The panther paw sole is genius', text: 'Zoom Air cushioning is so springy. Hologram jewel shines brightly.' },
      { author: 'Ray T.', rating: 5, date: '5 days ago', title: 'True 1998 nostalgic masterpiece', text: 'Dimpled leather and suede mudguard feel top tier.' }
    ]
  },
  {
    id: 'jordan-1-low-og-shadow',
    sku: 'JB-AJ1L-110',
    brand: 'Jordan',
    brandBadge: 'Jordan Heritage',
    brandColor: 'white',
    name: 'Air Jordan 1 Low OG "Shadow Retro"',
    subtitle: 'Medium Grey & Black Full-Grain Leather Everyday Classic',
    price: 140.00,
    originalPrice: 140.00,
    rating: 4.9,
    reviewsCount: 420,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Medium Grey / Summit White',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 22,
    badge: 'OG Shadow Low',
    image: 'assets/jordan_1_low_reverse_mocha.jpg',
    video: 'assets/jordan_1_low_reverse_mocha.webm',
    description: 'The iconic 1985 Shadow colorway rendered in low-top OG specifications. Premium medium grey and black full-grain leather, encapsulated heel Air-Sole unit, embroidered Wings heel logo, and Nike Air tongue tag.',
    specs: {
      cushioning: 'Encapsulated Nike Air-Sole Heel Unit',
      materials: 'Premium Soft Genuine Full-Grain Leather',
      details: 'Embroidered Wings Heel Emblem & Nike Air Woven Tongue',
      outsole: 'Solid Rubber Pivot Outsole',
      style: 'Understated Everyday Streetwear Classic'
    },
    reviews: [
      { author: 'Liam S.', rating: 5, date: 'Yesterday', title: 'The ultimate daily sneaker', text: 'Shadow colorway matches every outfit. Leather is soft and comfortable.' },
      { author: 'Kevin K.', rating: 5, date: '3 days ago', title: 'OG shape is so clean', text: 'Low cut makes it easy to slip on and go.' }
    ]
  },
  {
    id: 'anta-kai-1-speed-mother-nature',
    sku: 'AN-KAI1S-111',
    brand: 'ANTA',
    brandBadge: 'ANTA Kyrie Signature',
    brandColor: 'emerald',
    name: 'ANTA KAI 1 Speed "Mother Nature Green"',
    subtitle: 'Kyrie Irving Earth Energy Supercritical Low-Top',
    price: 125.00,
    originalPrice: 125.00,
    rating: 5.0,
    reviewsCount: 240,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Sage Jade / Earth Green / Solar Citron Gold',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 16,
    badge: 'Earth Energy',
    image: 'assets/anta_kai_1_speed.jpg',
    video: 'assets/anta_kai_1_speed.webm',
    description: 'Inspired by Kyrie Irving\'s deep reverence for the natural world and spiritual groundedness. Low-profile supercritical NitroEdge nitrogen foam chassis, sage jade jacquard knit with leaf rune embroidery, and squeaky radial court traction.',
    specs: {
      cushioning: 'Full-Length Supercritical NitroEdge Nitrogen Foam',
      plate: 'Carbon Fiber Midfoot Torsion Shank',
      upper: 'Reinforced Jacquard Weave with Gold Leaf Runes',
      outsole: 'High-Contact Radial Squeak Hardwood Grip',
      position: 'Agile Speed Guards & Isolation Playmakers'
    },
    reviews: [
      { author: 'Kyrie Disciple', rating: 5, date: '1 day ago', title: 'Jade green colorway is stunning', text: 'Court feel is hyper-responsive. Super sticky traction.' },
      { author: 'Desmond K.', rating: 5, date: '4 days ago', title: 'Bouncy and fast', text: 'NitroEdge nitrogen foam protects joints on hard landings.' }
    ]
  },
  {
    id: 'anta-kt9-bruce-lee',
    sku: 'AN-KT9-112',
    brand: 'ANTA',
    brandBadge: 'ANTA Klay Signature',
    brandColor: 'amber',
    name: 'ANTA KT9 "Dragon Martial Arts"',
    subtitle: 'Klay Thompson Game of Death Yellow & Black Edition',
    price: 135.00,
    originalPrice: 135.00,
    rating: 4.9,
    reviewsCount: 210,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Martial Yellow / Black Dragon / Solar Red Slash',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 12,
    badge: 'Dragon Martial Arts',
    image: 'assets/anta_kt9.jpg',
    video: 'assets/anta_kt9.webm',
    description: 'Honoring Bruce Lee\'s martial philosophy and Klay Thompson\'s lethal championship focus. Packed with 3D FLOW stability chassis, dual-density NitroEdge midsole, SMART S.A.M shock-absorbing heel module, and dragon scratch accents.',
    specs: {
      cushioning: 'Dual NitroEdge Nitrogen Foam + SMART S.A.M Heel Module',
      stability: '3D FLOW Wrap-Around Carbon Frame',
      details: 'Dragon Claw Red Slash Marks & Martial Ribbon',
      outsole: 'High-Traction Ripple Hardwood Grip',
      position: 'Shooting Guards & Perimeter Marksmen'
    },
    reviews: [
      { author: 'Klay Thompson Fan', rating: 5, date: '2 days ago', title: 'Yellow and black pop like crazy', text: 'Landing is super cushioned. Pure shooter shoe with incredible ankle stability.' },
      { author: 'Brandon S.', rating: 5, date: '5 days ago', title: 'Top notch court bite', text: 'Stops on a dime when pulling up from three.' }
    ]
  },
  {
    id: 'anta-shockwave-6-pro-cyber',
    sku: 'AN-SW6-113',
    brand: 'ANTA',
    brandBadge: 'ANTA Cyber Hoops',
    brandColor: 'purple',
    name: 'ANTA Shock Wave 6 Pro "Cyberpunk Mecha"',
    subtitle: 'Next-Gen Lateral Carbon Claws & Nitrogen Armor',
    price: 145.00,
    originalPrice: 145.00,
    rating: 5.0,
    reviewsCount: 180,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Mecha Cyber Purple / Acid Green / Carbon Matrix',
    sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 15,
    badge: 'Shockwave 6 Pro',
    image: 'assets/anta_shockwave_5.jpg',
    video: 'assets/anta_shockwave_5.webm',
    description: 'The next evolution of the indestructible Shockwave series. Upgraded with dual lateral carbon claw outriggers, drop-in nitrogen supercritical NitroEdge foam, and cement-killer high-abrasion rubber compound.',
    specs: {
      cushioning: 'Drop-In Nitrogen Supercritical NitroEdge Core',
      claws: 'Dual Carbon Fiber Lateral Stability Claws',
      outsole: 'Cement-Killer Multi-Directional Outdoor Compound',
      upper: 'Reinforced Ripstop Jacquard Cyber Shield',
      court: 'Concrete Blacktop, Outdoor Streetball & Hardwood'
    },
    reviews: [
      { author: 'Blacktop King', rating: 5, date: 'Yesterday', title: 'The carbon claws are insane', text: 'Lateral containment is unbeatable. Outsole shows zero wear after weeks on rough asphalt.' },
      { author: 'Devon W.', rating: 5, date: '3 days ago', title: 'Cyberpunk colorway is sick', text: 'Super bouncy nitrogen cushioning.' }
    ]
  },
  {
    id: 'anta-c202-gt-pro-carbon-dusk',
    sku: 'AN-C202-114',
    brand: 'ANTA',
    brandBadge: 'ANTA Nitrogen Racing',
    brandColor: 'purple',
    name: 'ANTA C202 5 GT Pro "Midnight Sunset"',
    subtitle: 'Sub-2:25 Dual NitroEdge Full Carbon Race Super-Shoe',
    price: 220.00,
    originalPrice: 220.00,
    rating: 4.9,
    reviewsCount: 155,
    category: 'running',
    categoryName: 'Marathon / Racing',
    colorway: 'Twilight Obsidian / Sunset Magenta / Carbon Fiber',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 9,
    badge: 'Midnight Marathoner',
    image: 'assets/anta_c202_gt_pro.jpg',
    video: 'assets/anta_c202_gt_pro.webm',
    description: 'Engineered for twilight and early morning marathon majors. Dual-layer nitrogen NitroEdge supercritical foam (86% energy return), 3D bionic full-palm curved carbon plate, and featherweight race mono-mesh.',
    specs: {
      cushioning: 'Dual-Layer Supercritical Nitrogen NitroEdge Foam (86% Return)',
      plate: '3D Bionic Curved Full-Foot Carbon Fiber Plate',
      weight: '7.0 oz / 199 g',
      outsole: 'Liquid Grip Space Rubber Road Traction',
      terrain: 'World Marathon Majors & Elite Road PRs'
    },
    reviews: [
      { author: 'Victor Z.', rating: 5, date: '2 days ago', title: 'Catapults you forward every stride', text: 'Ran a 1:18 half marathon in these effortlessly. Sunset magenta looks amazing.' },
      { author: 'Sarah L.', rating: 5, date: '6 days ago', title: 'Super stable carbon platform', text: 'No ankle fatigue over 20+ miles.' }
    ]
  },
  {
    id: 'anta-kai-1-sacred-flame',
    sku: 'AN-KAI1-115',
    brand: 'ANTA',
    brandBadge: 'ANTA Kyrie Signature',
    brandColor: 'red',
    name: 'ANTA KAI 1 "Sacred Flame"',
    subtitle: 'Kyrie Irving Fire Hieroglyphics Championship Hardwood Shoe',
    price: 125.00,
    originalPrice: 125.00,
    rating: 5.0,
    reviewsCount: 310,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Crimson Ember / Obsidian / Sunburst Gold Thread',
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 17,
    badge: 'Sacred Flame Drop',
    image: 'assets/anta_kai_1.jpg',
    video: 'assets/anta_kai_1.webm',
    description: 'Kyrie Irving\'s tribute to inner court passion and creative ignition. Features crimson flame jacquard knit with gold hieroglyphic stitching, full-length supercritical NitroEdge nitrogen foam, and lockdown midfoot strap.',
    specs: {
      cushioning: 'Full-Length Supercritical NitroEdge Nitrogen Foam',
      plate: 'Carbon Fiber Midfoot Torsion Shank',
      lockdown: 'Dynamic Forefoot & Midfoot Stabilizer Strap',
      outsole: 'Multi-Directional Radial Court Grip Rubber',
      position: 'Guards & Creative Ball-Handlers'
    },
    reviews: [
      { author: 'Jordan M.', rating: 5, date: '1 day ago', title: 'Crimson flame colorway is ferocious', text: 'Strap locks your foot completely in place. NitroEdge gives supreme court feel.' },
      { author: 'Tyler B.', rating: 5, date: '3 days ago', title: 'Incredible craftsmanship', text: 'Details and embroidery look like a $200 shoe.' }
    ]
  },
  {
    id: 'converse-all-star-bb-trilliant-cx',
    sku: 'CV-TRL-116',
    brand: 'Converse',
    brandBadge: 'Converse Hoops Innovation',
    brandColor: 'cyan',
    name: 'Converse All Star BB Trilliant CX "Wolf Grey"',
    subtitle: 'Removable Lace Shroud + Nike Air Zoom + CX Foam Hoops',
    price: 120.00,
    originalPrice: 120.00,
    rating: 4.9,
    reviewsCount: 220,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Wolf Grey / Cyber Jade / Black / Pure Silver',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 18,
    badge: 'Removable Shroud',
    image: 'assets/converse_bb_prototype.jpg',
    video: 'assets/converse_bb_prototype.webm',
    description: 'Engineered with a versatile removable lace shroud for dual styling options on hardwood. Features a high-rebound forefoot Nike Air Zoom unit, high-density CX foam midsole carrier, and aerodynamic TPU heel counter.',
    specs: {
      cushioning: 'Forefoot Nike Air Zoom Unit + High-Rebound CX Foam',
      shroud: 'Detachable Magnetic Lace Shroud for Custom Styling',
      stability: 'Aerodynamic Molded TPU Heel Counter & Outrigger',
      outsole: 'Multi-Zone Diamond Radial Traction Rubber',
      position: 'Playmakers, Slicing Guards & Wings'
    },
    reviews: [
      { author: 'Carlos N.', rating: 5, date: 'Yesterday', title: 'Removable shroud is so sick', text: 'Looks futuristic with the shroud and plays with explosive Zoom Air bounce.' },
      { author: 'Maya T.', rating: 5, date: '4 days ago', title: 'Super comfortable court feel', text: 'CX foam and Zoom Air work together smoothly.' }
    ]
  },
  {
    id: 'converse-chuck-70-at-cx-future',
    sku: 'CV-ATCX-117',
    brand: 'Converse',
    brandBadge: 'Converse All-Terrain',
    brandColor: 'amber',
    name: 'Converse Chuck 70 AT-CX "Urban Utility"',
    subtitle: 'Thick Trail Lug Outsole & High-Rebound CX Midsole',
    price: 110.00,
    originalPrice: 110.00,
    rating: 4.8,
    reviewsCount: 195,
    category: 'outdoor',
    categoryName: 'Outdoor / Trail ACG',
    colorway: 'Sand Dune / Black / Egret / Safety Orange',
    sizes: [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 16,
    badge: 'All-Terrain CX',
    image: 'assets/converse_cruise_skate.jpg',
    video: 'assets/converse_cruise_skate.webm',
    description: 'Transforming the classic Chuck 70 into an all-terrain outdoor trailblazer. Thick exaggerated diamond lug saw-tooth outsole, ultra-plush CX foam cushioning midsole, TPU Bosey toe cap for trail protection, and water-repellent canvas.',
    specs: {
      cushioning: 'High-Rebound CX Foam Midsole & Drop-in Sockliner',
      toecap: 'Reinforced TPU Bosey Trail Toecap Armor',
      materials: 'Water-Repellent Heavyweight Cotton Canvas',
      outsole: 'Exaggerated Diamond Saw-Tooth Lug Trail Rubber',
      terrain: 'City Streets, Trail Paths & Rainy Weather'
    },
    reviews: [
      { author: 'Trevor K.', rating: 5, date: '2 days ago', title: 'Awesome chunky trail boot look', text: 'Way lighter than hiking boots because of CX foam. Keeps feet dry.' },
      { author: 'Sienna V.', rating: 5, date: '5 days ago', title: 'Sand Dune colorway is gorgeous', text: 'Comfortable right out of the box.' }
    ]
  },
  {
    id: 'converse-weapon-cx-celtics',
    sku: 'CV-WPN-118',
    brand: 'Converse',
    brandBadge: 'Converse Hardwood Legend',
    brandColor: 'emerald',
    name: 'Converse Weapon CX "Celtics Dynasty"',
    subtitle: '1986 Larry Bird Heritage High-Top CX Foam Hardwood Shoe',
    price: 130.00,
    originalPrice: 130.00,
    rating: 5.0,
    reviewsCount: 290,
    category: 'basketball',
    categoryName: 'Basketball / Hoops',
    colorway: 'Vintage White / Clover Green / Black / Sail',
    sizes: [7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 14,
    badge: 'Celtics Dynasty',
    image: 'assets/converse_weapon_cx.jpg',
    video: 'assets/converse_weapon_cx.webm',
    description: 'The sneaker that defined 1980s basketball championship greatness on Boston Garden hardwood. Premium white and clover green full-grain leather, CX foam drop-in cushioning, and Y-Bar ankle lockout system.',
    specs: {
      cushioning: 'Modern CX Foam High-Rebound Drop-In Midsole',
      collar: 'High-Top Padded Ankle Collar with Y-Bar Lockout Arch',
      materials: 'Heavyweight Full-Grain Supple Genuine Leather',
      outsole: 'Original 1986 Hardwood Herringbone Traction Tread',
      style: '80s Boston Championship Royalty & Retro Streetwear'
    },
    reviews: [
      { author: 'Bird Fan 33', rating: 5, date: '1 day ago', title: 'True 80s Boston greatness', text: 'Clover green and white leather quality is superb. CX foam makes it so comfortable.' },
      { author: 'Chris B.', rating: 5, date: '4 days ago', title: 'Unbeatable high-top ankle support', text: 'Padded collar feels luxurious. Classic Converse basketball.' }
    ]
  },
  {
    id: 'converse-chuck-70-flame-embroidery',
    sku: 'CV-C70F-119',
    brand: 'Converse',
    brandBadge: 'Converse Heritage',
    brandColor: 'red',
    name: 'Converse Chuck 70 "Hot Rod Flames"',
    subtitle: 'Archival 1990s Sublimated Flame Graphic 12oz Duck Canvas',
    price: 95.00,
    originalPrice: 95.00,
    rating: 4.9,
    reviewsCount: 360,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Black / Enamel Red / Butter Yellow / Egret',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    inStock: true,
    stockCount: 24,
    badge: 'Hot Rod Flames',
    image: 'assets/converse_chuck_70.jpg',
    video: 'assets/converse_chuck_70.webm',
    description: 'Bringing back the beloved archival 1990s hot-rod flame print on premium 12oz organic duck canvas. Finished with varnished vintage egret foxing, winged tongue stitching, and OrthoLite cushioning for all-day rock-and-roll comfort.',
    specs: {
      cushioning: 'Plush OrthoLite Insole Cushioning',
      materials: '12oz Heavyweight Organic Duck Canvas with Flame Screen Print',
      midsole: 'Glossy 1970s Egret Vulcanized Rubber Tape',
      details: 'Winged Tongue Stitching & Vintage All Star Heel Badge',
      style: '90s Skate, Grunge & Hot Rod Counter-Culture'
    },
    reviews: [
      { author: 'Julian R.', rating: 5, date: '2 days ago', title: 'The flames look incredible on foot', text: 'Vintage off-white sole and vibrant red flames match with baggy jeans.' },
      { author: 'Maya K.', rating: 5, date: '5 days ago', title: 'Chuck 70 comfort is unmatched', text: 'Much thicker canvas and insole than basic Chucks.' }
    ]
  },
  {
    id: 'converse-run-star-motion-low',
    sku: 'CV-RSML-120',
    brand: 'Converse',
    brandBadge: 'Converse CX Innovation',
    brandColor: 'purple',
    name: 'Converse Run Star Motion CX Low "Triple Black"',
    subtitle: 'Low-Cut Exaggerated Wavy Lug Platform with CX Foam',
    price: 115.00,
    originalPrice: 115.00,
    rating: 4.9,
    reviewsCount: 265,
    category: 'streetwear',
    categoryName: 'Streetwear Classics',
    colorway: 'Monochrome Stealth Black / Dark Charcoal / Black Waves',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    inStock: true,
    stockCount: 20,
    badge: 'Monochrome Waves',
    image: 'assets/converse_run_star_motion.jpg',
    video: 'assets/converse_run_star_motion.webm',
    description: 'The low-top cut of the internet-famous Run Star Motion platform in aggressive monochrome stealth black. Features ultra-bouncy sculpted CX foam midsole that absorbs impact with every step and saw-tooth wave traction lugs.',
    specs: {
      cushioning: 'Ultra-Plush Sculpted CX Foam Midsole Carrier',
      upper: '100% Organic Heavyweight Cotton Canvas',
      outsole: 'Exaggerated Saw-Tooth Wavy Lug Rubber Compound',
      style: 'Futuristic Avant-Garde Low Platform'
    },
    reviews: [
      { author: 'Nova Z.', rating: 5, date: 'Yesterday', title: 'Bounciest low-top sneaker ever', text: 'You literally feel the bounce on every step. All-black look goes with everything.' },
      { author: 'Sienna V.', rating: 5, date: '3 days ago', title: 'Sculpted waves look like modern art', text: 'Gets compliments everywhere I go. 10/10 comfort.' }
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
    this.shippingMethod = this.load('purpose_shipping_speed', 'standard');
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

  setShippingSpeed(speed) {
    this.shippingMethod = speed;
    this.save('purpose_shipping_speed', speed);
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
    if (upper === 'PURPOSE10' || upper === 'NIKE10' || upper === 'CONVERSE10' || upper === 'JORDAN10') {
      this.promoDiscount = 0.10; // 10% off
      this.promoCode = upper;
      this.save('purpose_discount', this.promoDiscount);
      this.save('purpose_promo', this.promoCode);
      this.notifyCartUpdated();
      return { success: true, message: '10% Promo Discount Applied!' };
    } else if (upper === 'ANTA20' || upper === 'VIP20' || upper === 'VAULT20') {
      this.promoDiscount = 0.20; // 20% off
      this.promoCode = upper;
      this.save('purpose_discount', this.promoDiscount);
      this.save('purpose_promo', this.promoCode);
      this.notifyCartUpdated();
      return { success: true, message: '20% VIP Vault Discount Applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try "PURPOSE10" or "ANTA20"' };
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

  getCartTotal(overrideSpeed) {
    const subtotal = this.getCartSubtotal();
    const discountAmt = subtotal * this.promoDiscount;
    const discountedSubtotal = Math.max(0, subtotal - discountAmt);
    
    const speed = overrideSpeed || this.shippingMethod || 'standard';
    let shipping = 0;
    if (speed === 'overnight') {
      shipping = 25;
    } else if (speed === 'priority') {
      shipping = 15;
    } else {
      // standard: free over $150, else $10
      shipping = (discountedSubtotal >= this.freeShippingThreshold || discountedSubtotal === 0) ? 0 : 10;
    }

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
      if (currentBrandFilter === 'nike' && p.brand !== 'Nike') return false;
      if (currentBrandFilter === 'anta' && p.brand !== 'ANTA') return false;
      if (currentBrandFilter === 'converse' && p.brand !== 'Converse') return false;
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

  // Update Klarna 4x split in Step 3
  const k1 = document.getElementById('klarna-due-1');
  const k2 = document.getElementById('klarna-due-2');
  const k3 = document.getElementById('klarna-due-3');
  const k4 = document.getElementById('klarna-due-4');
  if (k1 && totals.grandTotal) {
    const q = Store.formatPrice(totals.grandTotal / 4);
    k1.textContent = q;
    if (k2) k2.textContent = q;
    if (k3) k3.textContent = q;
    if (k4) k4.textContent = q;
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
// ==========================================================================
// SEARCH, BRAND & FILTER CONTROLS
// ==========================================================================
function updateBrandCounts() {
  const allCount = PRODUCTS_DATA.length;
  const nikeCount = PRODUCTS_DATA.filter(p => p.brand === 'Nike').length;
  const antaCount = PRODUCTS_DATA.filter(p => p.brand === 'ANTA').length;
  const jordanCount = PRODUCTS_DATA.filter(p => p.brand === 'Jordan').length;
  const converseCount = PRODUCTS_DATA.filter(p => p.brand === 'Converse').length;

  // Catalog brand tabs
  const tabAll = document.querySelector('.brand-filter-tabs .brand-tab-btn[data-brand="all"]');
  if (tabAll) tabAll.innerHTML = `<i data-lucide="grid"></i> All Brands (${allCount})`;
  
  const tabNike = document.querySelector('.brand-filter-tabs .brand-tab-btn[data-brand="nike"]');
  if (tabNike) tabNike.innerHTML = `<i data-lucide="check"></i> Nike Performance (${nikeCount})`;
  
  const tabAnta = document.querySelector('.brand-filter-tabs .brand-tab-btn[data-brand="anta"]');
  if (tabAnta) tabAnta.innerHTML = `<i data-lucide="flame"></i> ANTA Hoops & Racing (${antaCount})`;
  
  const tabJordan = document.querySelector('.brand-filter-tabs .brand-tab-btn[data-brand="jordan"]');
  if (tabJordan) tabJordan.innerHTML = `<i data-lucide="award"></i> Jordan Brand (${jordanCount})`;
  
  const tabConverse = document.querySelector('.brand-filter-tabs .brand-tab-btn[data-brand="converse"]');
  if (tabConverse) tabConverse.innerHTML = `<i data-lucide="star"></i> Converse Archive (${converseCount})`;

  // Mobile drawer tabs
  const mTabAll = document.querySelector('.mobile-nav-links .brand-tab-btn[data-brand="all"]');
  if (mTabAll) mTabAll.innerHTML = `<i data-lucide="grid"></i> All Footwear (${allCount})`;
  
  const mTabNike = document.querySelector('.mobile-nav-links .brand-tab-btn[data-brand="nike"]');
  if (mTabNike) mTabNike.innerHTML = `<i data-lucide="check"></i> Nike Performance (${nikeCount})`;
  
  const mTabAnta = document.querySelector('.mobile-nav-links .brand-tab-btn[data-brand="anta"]');
  if (mTabAnta) mTabAnta.innerHTML = `<i data-lucide="flame"></i> ANTA Hoops & Racing (${antaCount})`;
  
  const mTabJordan = document.querySelector('.mobile-nav-links .brand-tab-btn[data-brand="jordan"]');
  if (mTabJordan) mTabJordan.innerHTML = `<i data-lucide="award"></i> Jordan Brand (${jordanCount})`;
  
  const mTabConverse = document.querySelector('.mobile-nav-links .brand-tab-btn[data-brand="converse"]');
  if (mTabConverse) mTabConverse.innerHTML = `<i data-lucide="star"></i> Converse Archive (${converseCount})`;

  const heroBtnText = document.querySelector('.hero-actions .btn-primary span');
  if (heroBtnText) heroBtnText.textContent = `Shop All ${allCount} Footwear Drops`;

  if (window.lucide) window.lucide.createIcons();
}

function setBrandFilter(brand, scroll = false) {
  currentBrandFilter = brand;
  document.querySelectorAll('.brand-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-brand') === brand);
  });
  renderProductGrid();
  if (scroll) {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  }
}
window.setBrandFilter = setBrandFilter;

function initCatalogFilters() {
  updateBrandCounts();
  // Brand Tabs everywhere (Desktop nav, mobile nav, catalog toolbar)
  const brandTabs = document.querySelectorAll('.brand-tab-btn');
  brandTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const brand = tab.getAttribute('data-brand') || 'all';
      const isHeaderOrMobile = tab.closest('.desktop-nav') || tab.closest('.mobile-nav-drawer');
      setBrandFilter(brand, isHeaderOrMobile ? true : false);
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

  // Search Input with Live Filter
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
// ANNOUNCEMENT PROMO COUPON CLICK
// ==========================================================================
function initAnnouncementCoupon() {
  const couponEl = document.getElementById('top-coupon-code');
  if (couponEl) {
    couponEl.addEventListener('click', () => {
      const code = 'PURPOSE10';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).catch(() => {});
      }
      Store.applyPromo(code);
      showStoreToast(`Promo Code <strong>${code}</strong> (10% OFF) copied & applied to your bag!`, 'tag', 'success');
      renderCartDrawer();
      renderCheckoutSummary();
    });
  }
}

// ==========================================================================
// CUSTOMER CARE & GUARANTEE MODALS
// ==========================================================================
function initCustomerCareModals() {
  const overlay = document.getElementById('info-modal-overlay');
  const allModals = document.querySelectorAll('.info-modal');
  const openTriggers = document.querySelectorAll('[data-open-modal]');
  const closeTriggers = document.querySelectorAll('[data-close-modal]');
  const modalSizeGuideBtn = document.getElementById('modal-open-size-guide-btn');

  function openInfoModal(modalId) {
    closeAllInfoModals();
    const targetModal = document.getElementById(`${modalId}-modal`);
    if (targetModal && overlay) {
      targetModal.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.lucide) window.lucide.createIcons();
    }
  }

  function closeAllInfoModals() {
    allModals.forEach(m => m.classList.remove('active'));
    if (overlay) overlay.classList.remove('active');
    if (!document.getElementById('product-detail-modal')?.classList.contains('active') &&
        !document.getElementById('checkout-modal')?.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  openTriggers.forEach(t => {
    t.addEventListener('click', (e) => {
      e.preventDefault();
      const modalType = t.getAttribute('data-open-modal');
      if (modalType) openInfoModal(modalType);
    });
  });

  closeTriggers.forEach(c => c.addEventListener('click', closeAllInfoModals));
  if (overlay) overlay.addEventListener('click', closeAllInfoModals);

  if (modalSizeGuideBtn) {
    modalSizeGuideBtn.addEventListener('click', () => {
      openInfoModal('size-guide');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllInfoModals();
    }
  });

  window.openInfoModal = openInfoModal;
  window.closeAllInfoModals = closeAllInfoModals;
}

// ==========================================================================
// SIZE GUIDE & FIT ADVISOR CALCULATOR
// ==========================================================================
function initSizeGuideCalculator() {
  const brandTabs = document.querySelectorAll('.size-tab-btn');
  const lenInput = document.getElementById('calc-foot-len');
  const unitSelect = document.getElementById('calc-unit');
  const resultChip = document.getElementById('calc-result-chip');
  const tableBody = document.getElementById('size-table-body');

  const brandData = {
    nike: {
      rows: [
        { usM: '7.0', usW: '8.5', uk: '6.0', eu: '40.0', cm: '25.0', in: '9.84' },
        { usM: '7.5', usW: '9.0', uk: '6.5', eu: '40.5', cm: '25.5', in: '10.04' },
        { usM: '8.0', usW: '9.5', uk: '7.0', eu: '41.0', cm: '26.0', in: '10.24' },
        { usM: '8.5', usW: '10.0', uk: '7.5', eu: '42.0', cm: '26.5', in: '10.43' },
        { usM: '9.0', usW: '10.5', uk: '8.0', eu: '42.5', cm: '27.0', in: '10.63' },
        { usM: '9.5', usW: '11.0', uk: '8.5', eu: '43.0', cm: '27.5', in: '10.83' },
        { usM: '10.0', usW: '11.5', uk: '9.0', eu: '44.0', cm: '28.0', in: '11.02' },
        { usM: '10.5', usW: '12.0', uk: '9.5', eu: '44.5', cm: '28.5', in: '11.22' },
        { usM: '11.0', usW: '12.5', uk: '10.0', eu: '45.0', cm: '29.0', in: '11.42' },
        { usM: '11.5', usW: '13.0', uk: '10.5', eu: '45.5', cm: '29.5', in: '11.61' },
        { usM: '12.0', usW: '13.5', uk: '11.0', eu: '46.0', cm: '30.0', in: '11.81' },
        { usM: '13.0', usW: '14.5', uk: '12.0', eu: '47.5', cm: '31.0', in: '12.20' }
      ]
    },
    anta: {
      rows: [
        { usM: '7.0', usW: '8.0', uk: '6.0', eu: '40.0', cm: '25.0', in: '9.84' },
        { usM: '7.5', usW: '8.5', uk: '6.5', eu: '40.5', cm: '25.5', in: '10.04' },
        { usM: '8.0', usW: '9.0', uk: '7.0', eu: '41.0', cm: '26.0', in: '10.24' },
        { usM: '8.5', usW: '9.5', uk: '7.5', eu: '42.0', cm: '26.5', in: '10.43' },
        { usM: '9.0', usW: '10.0', uk: '8.0', eu: '42.5', cm: '27.0', in: '10.63' },
        { usM: '9.5', usW: '10.5', uk: '8.5', eu: '43.0', cm: '27.5', in: '10.83' },
        { usM: '10.0', usW: '11.0', uk: '9.0', eu: '44.5', cm: '28.0', in: '11.02' },
        { usM: '10.5', usW: '11.5', uk: '9.5', eu: '45.0', cm: '28.5', in: '11.22' },
        { usM: '11.0', usW: '12.0', uk: '10.0', eu: '45.5', cm: '29.0', in: '11.42' },
        { usM: '12.0', usW: '13.0', uk: '11.0', eu: '46.5', cm: '30.0', in: '11.81' },
        { usM: '13.0', usW: '14.0', uk: '12.0', eu: '48.0', cm: '31.0', in: '12.20' }
      ]
    },
    converse: {
      rows: [
        { usM: '7.0', usW: '9.0', uk: '7.0', eu: '40.0', cm: '25.5', in: '10.04' },
        { usM: '7.5', usW: '9.5', uk: '7.5', eu: '41.0', cm: '26.0', in: '10.24' },
        { usM: '8.0', usW: '10.0', uk: '8.0', eu: '41.5', cm: '26.5', in: '10.43' },
        { usM: '8.5', usW: '10.5', uk: '8.5', eu: '42.0', cm: '27.0', in: '10.63' },
        { usM: '9.0', usW: '11.0', uk: '9.0', eu: '42.5', cm: '27.5', in: '10.83' },
        { usM: '9.5', usW: '11.5', uk: '9.5', eu: '43.0', cm: '28.0', in: '11.02' },
        { usM: '10.0', usW: '12.0', uk: '10.0', eu: '44.0', cm: '28.5', in: '11.22' },
        { usM: '10.5', usW: '12.5', uk: '10.5', eu: '44.5', cm: '29.0', in: '11.42' },
        { usM: '11.0', usW: '13.0', uk: '11.0', eu: '45.0', cm: '29.5', in: '11.61' },
        { usM: '12.0', usW: '14.0', uk: '12.0', eu: '46.5', cm: '30.5', in: '12.01' }
      ]
    }
  };

  brandTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      brandTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const brand = tab.getAttribute('data-guide-brand') || 'nike';
      const data = brandData[brand] || brandData.nike;
      if (tableBody) {
        tableBody.innerHTML = data.rows.map(r => `
          <tr>
            <td>${r.usM}</td>
            <td>${r.usW}</td>
            <td>${r.uk}</td>
            <td>${r.eu}</td>
            <td>${r.cm} cm</td>
            <td>${r.in} in</td>
          </tr>
        `).join('');
      }
      updateCalculator();
    });
  });

  function updateCalculator() {
    if (!lenInput || !resultChip) return;
    let val = parseFloat(lenInput.value);
    if (isNaN(val) || val <= 0) {
      resultChip.textContent = 'Enter Foot Length';
      return;
    }
    const unit = unitSelect ? unitSelect.value : 'cm';
    const lengthInCm = unit === 'in' ? val * 2.54 : val;

    let usSize = Math.round(((lengthInCm - 25.0) * 2 + 7.0) * 2) / 2;
    if (usSize < 6) usSize = 6;
    if (usSize > 14) usSize = 14;

    const euSize = Math.round(33 + usSize * 1.05 + (usSize > 9 ? 1 : 0.5));
    resultChip.textContent = `Recommended: US ${usSize.toFixed(1)} M / EU ${euSize}`;
  }

  if (lenInput) lenInput.addEventListener('input', updateCalculator);
  if (unitSelect) unitSelect.addEventListener('change', updateCalculator);
}

// ==========================================================================
// 24/7 SNEAKER CONCIERGE LIVE ASSISTANT
// ==========================================================================
function initConciergeChat() {
  const form = document.getElementById('concierge-chat-form');
  const input = document.getElementById('concierge-chat-input');
  const list = document.getElementById('concierge-messages-list');
  const suggestionChips = document.querySelectorAll('.chat-suggest-chip');

  function appendMessage(text, isBot = false) {
    if (!list) return;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${isBot ? 'chat-bubble-bot' : 'chat-bubble-user'}`;
    bubble.innerHTML = text;
    list.appendChild(bubble);
    list.scrollTop = list.scrollHeight;
    if (window.lucide) window.lucide.createIcons();
  }

  function handleUserQuery(query) {
    const q = query.toLowerCase();
    appendMessage(query, false);

    const typingBubble = document.createElement('div');
    typingBubble.className = 'chat-bubble chat-bubble-bot';
    typingBubble.innerHTML = '<em><i data-lucide="loader-2" class="spin"></i> Alex is analyzing vault inventory...</em>';
    list?.appendChild(typingBubble);
    list.scrollTop = list.scrollHeight;
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      typingBubble.remove();
      let reply = '';

      if (q.includes('marathon') || q.includes('race') || q.includes('sub-3') || q.includes('running') || q.includes('alphafly') || q.includes('vaporfly')) {
        reply = `🏃 For marathon race-day supremacy, our top two certified models are:
        <br/><br/>
        1. <strong>Nike Alphafly 3 World Record</strong> ($285) - Dual forefoot Zoom Air pods + full-length carbon Flyplate for maximum propulsion.
        <br/>
        2. <strong>ANTA C202 5 GT Pro Marathon</strong> ($220) - Supercritical nitrogen NitroEdge foam + 3D bionic carbon plate for ultra-stable pacing.
        <br/><br/>
        <button class="btn-primary btn-sm" onclick="closeAllInfoModals(); openProductModal('nike-alphafly-3');"><i data-lucide="eye"></i> View Alphafly 3</button>`;
      } else if (q.includes('kai') || q.includes('kobe') || q.includes('basketball') || q.includes('hoop') || q.includes('grip') || q.includes('traction')) {
        reply = `🏀 <strong>ANTA KAI 1 vs Kobe 8 Protro Comparison:</strong>
        <br/><br/>
        • <strong>ANTA KAI 1 "Artist on Court" ($125)</strong>: High-value performer. NitroEdge supercritical nitrogen foam + midfoot stability strap. Unbeatable lateral lock.
        <br/>
        • <strong>Nike Kobe 8 Protro Halo ($180)</strong>: Ultra-lightweight engineered mesh with full-length drop-in React foam. Squeaky indoor court bite.
        <br/><br/>
        <button class="btn-primary btn-sm" onclick="closeAllInfoModals(); openProductModal('anta-kai-1-artist');"><i data-lucide="eye"></i> View ANTA KAI 1</button>`;
      } else if (q.includes('size') || q.includes('fit') || q.includes('wide')) {
        reply = `📏 <strong>Fit & Sizing Specialist Advice:</strong>
        <br/><br/>
        • <strong>Nike ZoomX / Alphafly</strong>: Fits snug/true-to-size. For wide feet or 15+ mile swelling, go up <strong>half a size (0.5 US)</strong>.
        <br/>
        • <strong>ANTA KAI & KT9</strong>: Fits True to Size with generous forefoot flex and midfoot strap lockdown.
        <br/>
        • <strong>Converse Chuck 70</strong>: Runs <strong>half a size large</strong>. Size down 0.5 US.`;
      } else if (q.includes('authentic') || q.includes('real') || q.includes('legit') || q.includes('fake') || q.includes('verify')) {
        reply = `🛡️ <strong>100% Deadstock Authenticity Guarantee:</strong>
        <br/><br/>
        Every pair at Purpose Vault passes an 8-point physical verification including high-intensity UV blacklight, RFID serial scan against brand master databases, gram scale weight checks, and our tamper-evident NFC security zip-tie.`;
      } else {
        reply = `✨ Thanks for reaching out! We have ${PRODUCTS_DATA.length} authentic Nike, Jordan, ANTA, and Converse models in stock with free worldwide express shipping over $150. Use code <strong>PURPOSE10</strong> for 10% off your entire order. Let me know if you need specific model recommendations!`;
      }

      appendMessage(reply, true);
    }, 750);
  }

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (val) {
        handleUserQuery(val);
        input.value = '';
      }
    });
  }

  suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt');
      if (prompt) {
        handleUserQuery(prompt);
      }
    });
  });
}

// ==========================================================================
// 30-DAY RETURN PORTAL
// ==========================================================================
function initReturnPortal() {
  const form = document.getElementById('returns-portal-form');
  const formStep = document.getElementById('returns-form-step');
  const successStep = document.getElementById('returns-success-step');
  const rmaEl = document.getElementById('label-rma-number');
  const trackingEl = document.getElementById('label-tracking-number');
  const startAnotherBtn = document.getElementById('start-another-return-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const orderId = document.getElementById('return-order-id')?.value || 'PV-892104';
      const rmaNum = `RMA #${orderId.toUpperCase()}-RET-${Math.floor(1000 + Math.random() * 9000)}`;
      const trackingCode = `1Z${Math.random().toString(36).substring(2, 10).toUpperCase()}${Math.floor(10000000 + Math.random() * 90000000)}`;

      if (rmaEl) rmaEl.textContent = rmaNum;
      if (trackingEl) trackingEl.textContent = trackingCode;

      if (formStep) formStep.style.display = 'none';
      if (successStep) successStep.style.display = 'flex';

      showStoreToast(`Prepaid Return Label generated for <strong>${rmaNum}</strong>!`, 'printer', 'success');
      if (window.lucide) window.lucide.createIcons();
    });
  }

  if (startAnotherBtn) {
    startAnotherBtn.addEventListener('click', () => {
      if (formStep) formStep.style.display = 'flex';
      if (successStep) successStep.style.display = 'none';
      if (form) form.reset();
    });
  }
}

// ==========================================================================
// VERIFIED CUSTOMER REVIEW SUBMISSION
// ==========================================================================
function initReviewSubmission() {
  const openBtn = document.getElementById('open-write-review-btn');
  const form = document.getElementById('write-review-form');
  const starPicker = document.getElementById('star-rating-picker');
  let selectedRating = 5;

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      if (window.openInfoModal) window.openInfoModal('write-review');
    });
  }

  if (starPicker) {
    const stars = starPicker.querySelectorAll('.star');
    stars.forEach(s => {
      s.addEventListener('click', () => {
        selectedRating = parseInt(s.getAttribute('data-star') || '5', 10);
        stars.forEach(st => {
          const val = parseInt(st.getAttribute('data-star') || '0', 10);
          st.classList.toggle('active', val <= selectedRating);
        });
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const product = document.getElementById('review-product-select')?.value || 'Nike Alphafly 3';
      const name = document.getElementById('review-author-name')?.value || 'Athlete';
      const location = document.getElementById('review-location')?.value || 'USA';
      const headline = document.getElementById('review-headline')?.value || 'Outstanding Performance';
      const body = document.getElementById('review-body')?.value || '';

      const reviewsGrid = document.querySelector('.reviews-grid');
      if (reviewsGrid) {
        const newCard = document.createElement('div');
        newCard.className = 'review-card';
        newCard.style.animation = 'fadeIn 0.5s ease';
        newCard.innerHTML = `
          <div class="review-header">
            <div class="review-stars">${'★'.repeat(selectedRating)}</div>
            <span class="review-badge"><i data-lucide="check-circle-2"></i> Verified Buyer</span>
          </div>
          <h4>"${headline}"</h4>
          <p>"${body}"</p>
          <div class="review-user">
            <div class="user-avatar">${name.slice(0, 2).toUpperCase()}</div>
            <div>
              <strong>${name}</strong>
              <span>${location} • Purchased ${product}</span>
            </div>
          </div>
        `;
        reviewsGrid.prepend(newCard);
        if (window.lucide) window.lucide.createIcons();
      }

      if (window.closeAllInfoModals) window.closeAllInfoModals();
      showStoreToast(`Thank you, <strong>${name}</strong>! Your verified review has been published.`, 'star', 'success');
      form.reset();
    });
  }
}

// ==========================================================================
// CHECKOUT PAYMENT TABS & SHIPPING SELECTOR
// ==========================================================================
function initCheckoutPaymentAndShipping() {
  const shippingRadios = document.querySelectorAll('input[name="shipping-speed"]');
  shippingRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      Store.setShippingSpeed(e.target.value);
      renderCheckoutSummary();
    });
  });

  const payMethodBtns = document.querySelectorAll('.pay-method-btn');
  const payPanels = {
    card: document.getElementById('pay-panel-card'),
    applepay: document.getElementById('pay-panel-applepay'),
    klarna: document.getElementById('pay-panel-klarna')
  };

  payMethodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      payMethodBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const method = btn.getAttribute('data-pay-method') || 'card';

      Object.values(payPanels).forEach(p => p?.classList.remove('active'));
      if (payPanels[method]) {
        payPanels[method].classList.add('active');
      }
    });
  });

  const applePayBtn = document.getElementById('apple-pay-trigger-btn');
  if (applePayBtn) {
    applePayBtn.addEventListener('click', () => {
      executeOrderPlacement();
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
        Store.applyPromo('PURPOSE10');
        showStoreToast(`Welcome to the Vault! Code <strong>PURPOSE10</strong> (10% off) applied to your bag.`, 'tag', 'success');
        input.value = '';
        renderCartDrawer();
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
// MOBILE BOTTOM APP BAR
// ==========================================================================
function initMobileBottomBar() {
  const homeBtn = document.getElementById('mob-nav-home');
  const catalogBtn = document.getElementById('mob-nav-catalog');
  const items = document.querySelectorAll('.mobile-bottom-item');

  window.addEventListener('scroll', () => {
    const catalogEl = document.getElementById('catalog');
    if (!catalogEl) return;
    const rect = catalogEl.getBoundingClientRect();
    if (rect.top <= 200 && rect.bottom >= 200) {
      items.forEach(i => i.classList.remove('active'));
      catalogBtn?.classList.add('active');
    } else if (window.scrollY < 300) {
      items.forEach(i => i.classList.remove('active'));
      homeBtn?.classList.add('active');
    }
  }, { passive: true });
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
  initMobileBottomBar();
  initAnnouncementCoupon();
  initCustomerCareModals();
  initSizeGuideCalculator();
  initConciergeChat();
  initReturnPortal();
  initReviewSubmission();
  initCheckoutPaymentAndShipping();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

