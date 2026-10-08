/**
 * PURPOSE / STUDIO™ — APPLICATION LOGIC
 * Luxury Heavyweight 500 GSM Streetwear Storefront
 * Batch #004 Drop Architecture
 */

document.addEventListener('DOMContentLoaded', () => {

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* ==========================================================================
     1. GLOBAL STORE STATE & CURRENCIES
     ========================================================================== */
  const currencyRates = {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.79 },
    PHP: { symbol: '₱', rate: 57.5 },
    CAD: { symbol: 'CA$', rate: 1.36 }
  };

  let currentCurrency = 'USD';

  // Catalog Products Data
  const products = {
    'hoodie-black': {
      id: 'hoodie-black',
      title: 'The Archive Pullover — Vintage Washed Black',
      shortTitle: 'Archive Pullover - Washed Black',
      basePrice: 145,
      gsm: '500 GSM',
      color: 'Vintage Washed Black',
      img: 'assets/hoodie_black.jpg',
      category: 'pullover heavy',
      rating: '4.9',
      reviewCount: 428,
      desc: 'Milled from custom 100% combed organic cotton French Terry. Featuring an engineered rigid double-layered hood without cords, boxy 4-inch dropped shoulders, and pre-shrunk mineral pigment wash.'
    },
    'hoodie-grey': {
      id: 'hoodie-grey',
      title: 'The Archive Pullover — Concrete Heather Grey',
      shortTitle: 'Archive Pullover - Concrete Grey',
      basePrice: 145,
      gsm: '500 GSM',
      color: 'Concrete Heather Grey',
      img: 'assets/hoodie_grey.jpg',
      category: 'pullover heavy',
      rating: '5.0',
      reviewCount: 312,
      desc: 'Heavyweight marled French Terry knit. High-density loopback interior regulates core warmth. Architectural collar cut stands proud without sagging.'
    },
    'hoodie-mocha': {
      id: 'hoodie-mocha',
      title: 'The Archive Pullover — Raw Earth Mocha',
      shortTitle: 'Archive Pullover - Raw Mocha',
      basePrice: 145,
      gsm: '500 GSM',
      color: 'Raw Earth Mocha',
      img: 'assets/hoodie_mocha.jpg',
      category: 'pullover heavy',
      rating: '4.9',
      reviewCount: 289,
      desc: 'Warm mineral-dyed rich mocha brown. Constructed with 2x2 elastane-reinforced ribbing at the hem and wrists. 100% pre-shrunk for zero post-wash movement.'
    },
    'hoodie-olive': {
      id: 'hoodie-olive',
      title: 'The Archive Pullover — Vintage Sage Olive',
      shortTitle: 'Archive Pullover - Sage Olive',
      basePrice: 145,
      gsm: '500 GSM',
      color: 'Vintage Sage Olive',
      img: 'assets/hoodie_olive.jpg',
      category: 'pullover heavy',
      rating: '4.8',
      reviewCount: 194,
      desc: 'Botanical pigment washed olive sage. Soft stone wash patina with heavy dropped shoulders and subtle waist crop.'
    },
    'hoodie-zip': {
      id: 'hoodie-zip',
      title: 'The Archive Two-Way Zip — Dark Asphalt',
      shortTitle: 'Archive Two-Way Zip - Dark Asphalt',
      basePrice: 165,
      gsm: '500 GSM',
      color: 'Dark Asphalt',
      img: 'assets/hoodie_zip_asphalt.jpg',
      category: 'zip heavy',
      rating: '5.0',
      reviewCount: 201,
      desc: 'Engineered with custom two-way matte silver metal hardware. Split front kangaroo pockets and heavy double-layer upright collar.'
    },
    'hoodie-bone': {
      id: 'hoodie-bone',
      title: 'The Archive Pullover — Chalk Bone Alabaster',
      shortTitle: 'Archive Pullover - Chalk Bone',
      basePrice: 145,
      gsm: '500 GSM',
      color: 'Chalk Bone Alabaster',
      img: 'assets/hoodie_bone.jpg',
      category: 'pullover heavy',
      rating: '5.0',
      reviewCount: 186,
      desc: 'Unbleached natural combed cotton in our signature Chalk Bone Alabaster tint. Dense 500 GSM loopback French Terry with upright double-layer architectural collar without drawstrings.'
    },
    'hoodie-navy': {
      id: 'hoodie-navy',
      title: 'The Archive Heavy Pullover — Obsidian Midnight Navy',
      shortTitle: 'Archive Pullover - Midnight Navy',
      basePrice: 155,
      gsm: '500 GSM',
      color: 'Obsidian Midnight Navy',
      img: 'assets/hoodie_navy.jpg',
      category: 'pullover heavy',
      rating: '4.9',
      reviewCount: 142,
      desc: 'Deep obsidian midnight navy with subtle low-sheen indigo depth. Milled from ultra-dense 500 GSM organic cotton with cross-front overlap neck collar and heavyweight dropped shoulders.'
    },
    'hoodie-charcoal': {
      id: 'hoodie-charcoal',
      title: 'The Archive Quarter-Zip Mock Collar — Washed Charcoal Steel',
      shortTitle: 'Archive Quarter-Zip - Washed Charcoal',
      basePrice: 155,
      gsm: '500 GSM',
      color: 'Washed Charcoal Steel',
      img: 'assets/hoodie_charcoal.jpg',
      category: 'qtr heavy',
      rating: '5.0',
      reviewCount: 118,
      desc: 'Industrial quarter-zip silhouette featuring a heavy-gauge brushed silver metal zipper and tall architectural mock neck. Seamless hidden side-entry welt pockets.'
    },
    'hoodie-camel': {
      id: 'hoodie-camel',
      title: 'The Archive Two-Way Zip — Desert Dune Camel',
      shortTitle: 'Archive Two-Way Zip - Desert Camel',
      basePrice: 165,
      gsm: '500 GSM',
      color: 'Desert Dune Camel',
      img: 'assets/hoodie_camel.jpg',
      category: 'zip heavy',
      rating: '4.9',
      reviewCount: 157,
      desc: 'Warm sand-dune camel pigment dye with full-length two-way dual metal zippers for versatile split styling. Double-layered structured hood and reinforced side gussets.'
    },
    'hoodie-crimson': {
      id: 'hoodie-crimson',
      title: 'The Archive Pullover — Washed Crimson Oxblood',
      shortTitle: 'Archive Pullover - Crimson Oxblood',
      basePrice: 150,
      gsm: '500 GSM',
      color: 'Washed Crimson Oxblood',
      img: 'assets/hoodie_crimson.jpg',
      category: 'pullover heavy',
      rating: '5.0',
      reviewCount: 112,
      desc: 'Rich pigment-dyed crimson oxblood wash. High-density 500 GSM organic French Terry with pre-shrunk mineral wash and standing double-ply collar hood.'
    },
    'hoodie-acid-bronze': {
      id: 'hoodie-acid-bronze',
      title: 'Abstract Brutalism Acid-Washed Hoodie — Mineral Bronze',
      shortTitle: 'Acid-Washed Hoodie - Bronze',
      basePrice: 160,
      gsm: '520 GSM',
      color: 'Mineral Bronze Rust',
      img: 'assets/hoodie_acid_bronze.jpg',
      category: 'pullover heavy',
      rating: '4.9',
      reviewCount: 134,
      desc: 'Hand stone-washed mineral bronze patina with subtle tonal cracked brutalist typography screenprint on the chest. Raw distressed edge detailing.'
    },
    'hoodie-spruce-green': {
      id: 'hoodie-spruce-green',
      title: 'Architectural Funnel Hood Pullover — Forest Spruce Green',
      shortTitle: 'Funnel Hood - Spruce Green',
      basePrice: 155,
      gsm: '550 GSM',
      color: 'Forest Spruce Green',
      img: 'assets/hoodie_spruce_green.jpg',
      category: 'qtr heavy',
      rating: '5.0',
      reviewCount: 98,
      desc: 'Sculptural crossover high funnel collar that acts like an integrated snood. Engineered in extra-dense 550 GSM combed cotton with hidden internal pouch.'
    },
    'hoodie-cobalt-blue': {
      id: 'hoodie-cobalt-blue',
      title: 'The Archive Pullover — Blueprint Cobalt Blue',
      shortTitle: 'Archive Pullover - Cobalt Blue',
      basePrice: 150,
      gsm: '500 GSM',
      color: 'Blueprint Cobalt Blue',
      img: 'assets/hoodie_cobalt_blue.jpg',
      category: 'pullover heavy',
      rating: '4.8',
      reviewCount: 145,
      desc: 'Vibrant electrified cobalt blue with heavy vintage stone enzyme wash. Ultra-plush loopback fleece interior, seamless drop shoulders, and snug 2x2 ribbing.'
    },
    'hoodie-smoked-lavender': {
      id: 'hoodie-smoked-lavender',
      title: 'Brutalist Archive Minimal Pullover — Smoked Lavender Ash',
      shortTitle: 'Archive Pullover - Smoked Lavender',
      basePrice: 150,
      gsm: '500 GSM',
      color: 'Smoked Lavender Ash',
      img: 'assets/hoodie_smoked_lavender.jpg',
      category: 'pullover heavy',
      rating: '4.9',
      reviewCount: 126,
      desc: 'Subtle muted dusty lavender pigment wash with minimal micro-embroidered studio insignia on the chest. Architectural boxy crop drape.'
    },
    'hoodie-sandstone-zip': {
      id: 'hoodie-sandstone-zip',
      title: 'The Archive Two-Way Zip — Sun-Bleached Sandstone',
      shortTitle: 'Two-Way Zip - Sandstone',
      basePrice: 165,
      gsm: '500 GSM',
      color: 'Sun-Bleached Sandstone',
      img: 'assets/hoodie_sandstone_zip.jpg',
      category: 'zip heavy',
      rating: '5.0',
      reviewCount: 164,
      desc: 'Dual heavy-duty matte silver zippers on an earthy sun-faded sandstone canvas. Split hand warmer front pouch and double-layer rigid upright collar.'
    },
    'hoodie-colorblock-panel': {
      id: 'hoodie-colorblock-panel',
      title: 'Cut & Sew Contrast Panel Hoodie — Washed Black / Mist',
      shortTitle: 'Cut & Sew Panel - Black/Mist',
      basePrice: 175,
      gsm: '520 GSM',
      color: 'Washed Black & Mist Grey',
      img: 'assets/hoodie_colorblock_panel.jpg',
      category: 'atelier heavy',
      rating: '5.0',
      reviewCount: 188,
      desc: 'Intricate multi-panel ergonomic sleeve construction with heather grey contrast insets and raw overlocked seam intersections. Atelier series.'
    },
    'hoodie-sleeveless-raw': {
      id: 'hoodie-sleeveless-raw',
      title: 'Raw Edge Drop-Armhole Muscle Zip Hoodie — Washed Charcoal',
      shortTitle: 'Sleeveless Zip Hoodie - Charcoal',
      basePrice: 135,
      gsm: '500 GSM',
      color: 'Washed Dark Charcoal',
      img: 'assets/hoodie_sleeveless_raw.jpg',
      category: 'zip heavy',
      rating: '4.9',
      reviewCount: 89,
      desc: 'Brutalist raw-hem drop armholes engineered for dramatic layered streetwear styling. Dual two-way zipper and heavyweight standing hood.'
    },
    'hoodie-thermal-parka': {
      id: 'hoodie-thermal-parka',
      title: '600 GSM Extreme Thermal Storm Parka Hoodie — Slate Noir',
      shortTitle: '600 GSM Storm Parka - Slate',
      basePrice: 195,
      gsm: '600 GSM',
      color: 'Slate Noir Graphite',
      img: 'assets/hoodie_thermal_parka.jpg',
      category: 'atelier heavy',
      rating: '5.0',
      reviewCount: 147,
      desc: 'Our heaviest construction yet. Extreme 600 GSM bonded loopback cotton with high cross-throat wrap storm collar, zip side pockets, and rubber studio badge.'
    },
    'hoodie-reverse-seam': {
      id: 'hoodie-reverse-seam',
      title: 'Exposed Reverse-Seam Studio Pullover — Raw Ecru',
      shortTitle: 'Reverse-Seam Pullover - Ecru',
      basePrice: 160,
      gsm: '500 GSM',
      color: 'Unbleached Raw Ecru',
      img: 'assets/hoodie_reverse_seam.jpg',
      category: 'atelier heavy',
      rating: '4.9',
      reviewCount: 173,
      desc: 'Deconstructed inside-out aesthetics with visible raw contrast flatlock stitching across the chest and shoulders. 100% unbleached natural organic cotton.'
    },
    'hoodie-terracotta-clay': {
      id: 'hoodie-terracotta-clay',
      title: 'The Archive Pullover — Sun-Faded Terracotta Clay',
      shortTitle: 'Archive Pullover - Terracotta',
      basePrice: 150,
      gsm: '500 GSM',
      color: 'Sun-Faded Terracotta',
      img: 'assets/hoodie_terracotta_clay.jpg',
      category: 'pullover heavy',
      rating: '4.9',
      reviewCount: 104,
      desc: 'Warm earth pigment dyed terracotta with authentic sun-kissed fades along the seams and hood rim. Structured rigid hood without drawstrings.'
    },
    'hoodie-arctic-ice': {
      id: 'hoodie-arctic-ice',
      title: 'The Archive Quarter-Zip — Pale Arctic Glacier Ice',
      shortTitle: 'Quarter-Zip - Arctic Ice',
      basePrice: 155,
      gsm: '500 GSM',
      color: 'Pale Arctic Glacier Ice',
      img: 'assets/hoodie_arctic_ice.jpg',
      category: 'qtr heavy',
      rating: '5.0',
      reviewCount: 132,
      desc: 'Cool crisp pale icy mist blue with high-neck architectural collar and brushed chrome YKK zip hardware. Pre-shrunk at high heat for lasting fit.'
    },
    'hoodie-moss-khaki': {
      id: 'hoodie-moss-khaki',
      title: 'The Archive Pullover — Weathered Moss Patina Khaki',
      shortTitle: 'Archive Pullover - Moss Khaki',
      basePrice: 150,
      gsm: '500 GSM',
      color: 'Weathered Moss Khaki',
      img: 'assets/hoodie_moss_khaki.jpg',
      category: 'pullover heavy',
      rating: '4.8',
      reviewCount: 121,
      desc: 'Military drab inspired olive khaki with heavy stonewashed patina and raw edge micro-abrasions along the ribbing.'
    },
    'hoodie-aubergine-plum': {
      id: 'hoodie-aubergine-plum',
      title: 'The Archive Heavy Pullover — Deep Plum Aubergine',
      shortTitle: 'Archive Pullover - Deep Plum',
      basePrice: 155,
      gsm: '500 GSM',
      color: 'Deep Plum Aubergine',
      img: 'assets/hoodie_aubergine_plum.jpg',
      category: 'pullover heavy',
      rating: '5.0',
      reviewCount: 88,
      desc: 'Dark luxurious wine plum dye with midnight undertones. Heavyweight 500 GSM French Terry drape with reinforced elbow seams.'
    },
    'hoodie-graphite-steel': {
      id: 'hoodie-graphite-steel',
      title: 'The Archive Two-Way Zip — Industrial Graphite Slate',
      shortTitle: 'Two-Way Zip - Graphite Slate',
      basePrice: 165,
      gsm: '500 GSM',
      color: 'Industrial Graphite Slate',
      img: 'assets/hoodie_graphite_steel.jpg',
      category: 'zip heavy',
      rating: '4.9',
      reviewCount: 115,
      desc: 'Cold metal industrial slate blue-grey with dual two-way zipper pulls. Clean boxy drape, split front pouch, and double-layer hood.'
    },
    'hoodie-teal-ocean': {
      id: 'hoodie-teal-ocean',
      title: 'The Archive Pullover — Deep Petroleum Teal Ocean',
      shortTitle: 'Archive Pullover - Petroleum Teal',
      basePrice: 150,
      gsm: '500 GSM',
      color: 'Deep Petroleum Teal',
      img: 'assets/hoodie_teal_ocean.jpg',
      category: 'pullover heavy',
      rating: '4.9',
      reviewCount: 97,
      desc: 'Deep marine petroleum teal hue with subtle enzyme stone wash. Seamless dropped shoulder cut and double-layer upright hood.'
    },
    'hoodie-espresso-roast': {
      id: 'hoodie-espresso-roast',
      title: 'The Archive Heavy Pullover — Dark Roast Espresso',
      shortTitle: 'Archive Pullover - Espresso Roast',
      basePrice: 155,
      gsm: '520 GSM',
      color: 'Dark Roast Espresso',
      img: 'assets/hoodie_espresso_roast.jpg',
      category: 'pullover heavy',
      rating: '5.0',
      reviewCount: 139,
      desc: 'Rich bitter chocolate espresso shade. Milled from 520 GSM extra-dense organic cotton loops with heavy cuff ribbing.'
    },
    'hoodie-bleach-storm': {
      id: 'hoodie-bleach-storm',
      title: 'Atmospheric Mineral Bleach Hoodie — Storm Ash Grey',
      shortTitle: 'Bleach Storm Hoodie - Ash Grey',
      basePrice: 165,
      gsm: '500 GSM',
      color: 'Storm Bleached Ash Grey',
      img: 'assets/hoodie_bleach_storm.jpg',
      category: 'pullover heavy',
      rating: '4.9',
      reviewCount: 153,
      desc: 'Individually hand-sprayed mineral bleach pattern creating one-of-a-kind stormy smoke patterns across each piece. Unique collector drop.'
    },
    'hoodie-oatmeal-melange': {
      id: 'hoodie-oatmeal-melange',
      title: 'The Archive Pullover — Warm Heather Oatmeal Melange',
      shortTitle: 'Archive Pullover - Oatmeal Melange',
      basePrice: 145,
      gsm: '500 GSM',
      color: 'Heather Oatmeal Melange',
      img: 'assets/hoodie_oatmeal_melange.jpg',
      category: 'pullover heavy',
      rating: '4.9',
      reviewCount: 162,
      desc: 'Natural unbleached yarns intertwined with subtle heather speckles. Ultra-soft interior loopback with structured upright collar.'
    },
    'hoodie-stealth-blackout': {
      id: 'hoodie-stealth-blackout',
      title: 'Ninja Tactical Funnel Hood Pullover — Triple Blackout',
      shortTitle: 'Funnel Hood - Triple Blackout',
      basePrice: 160,
      gsm: '550 GSM',
      color: 'Triple Matte Blackout',
      img: 'assets/hoodie_stealth_blackout.jpg',
      category: 'qtr heavy',
      rating: '5.0',
      reviewCount: 215,
      desc: 'Matte blackout high cowl snood collar engineered for extreme cold wind protection. Heavy 550 GSM cotton with stealth hidden side pockets.'
    },
    'hoodie-cement-patina': {
      id: 'hoodie-cement-patina',
      title: 'Atelier Reverse-Seam Hoodie — Industrial Cement Patina',
      shortTitle: 'Reverse-Seam - Cement Patina',
      basePrice: 165,
      gsm: '500 GSM',
      color: 'Industrial Cement Grey',
      img: 'assets/hoodie_cement_patina.jpg',
      category: 'atelier heavy',
      rating: '5.0',
      reviewCount: 124,
      desc: 'Architectural deconstructed reverse overlock seams on cold cement mineral washed French Terry. Distinct boxy silhouette.'
    },
    'hoodie-asym-zip': {
      id: 'hoodie-asym-zip',
      title: 'Asymmetrical Diagonal Zip Tech Hoodie — Matte Black',
      shortTitle: 'Asym Zip Hoodie - Matte Black',
      basePrice: 170,
      gsm: '520 GSM',
      color: 'Matte Obsidian Black',
      img: 'assets/hoodie_asym_zip.jpg',
      category: 'zip heavy',
      rating: '5.0',
      reviewCount: 94,
      desc: 'Engineered with a dramatic off-center diagonal metal zipper running from high collar to right hip. Bonded 520 GSM French Terry with articulated storm hood.'
    },
    'hoodie-thermal-waffle': {
      id: 'hoodie-thermal-waffle',
      title: 'Thermal Waffle-Knit Double-Layer Hoodie — Vintage Slate',
      shortTitle: 'Thermal Waffle Hoodie - Slate',
      basePrice: 165,
      gsm: '550 GSM',
      color: 'Vintage Slate Blue-Grey',
      img: 'assets/hoodie_thermal_waffle.jpg',
      category: 'atelier heavy',
      rating: '4.9',
      reviewCount: 108,
      desc: 'Heavy loopback cotton exterior reinforced with exposed 400 GSM thermal waffle knit lining along the hood rim and storm cuffs for supreme temperature regulation.'
    },
    'hoodie-bleach-ochre': {
      id: 'hoodie-bleach-ochre',
      title: 'Distressed Bleach Splatter Studio Hoodie — Raw Ochre',
      shortTitle: 'Bleach Splatter - Raw Ochre',
      basePrice: 160,
      gsm: '500 GSM',
      color: 'Raw Warm Ochre',
      img: 'assets/hoodie_bleach_ochre.jpg',
      category: 'pullover heavy',
      rating: '4.9',
      reviewCount: 76,
      desc: 'Warm earthy ochre dyed French Terry treated with manual artisanal bleach splatter techniques, ensuring every piece has an irreproducible celestial splatter pattern.'
    },
    'hoodie-batwing-raglan': {
      id: 'hoodie-batwing-raglan',
      title: 'Oversized Batwing Raglan Drop Hoodie — Faded Spruce',
      shortTitle: 'Batwing Raglan - Faded Spruce',
      basePrice: 155,
      gsm: '500 GSM',
      color: 'Faded Spruce Green',
      img: 'assets/hoodie_batwing_raglan.jpg',
      category: 'pullover heavy',
      rating: '4.8',
      reviewCount: 89,
      desc: 'Architectural cocoon silhouette featuring extreme seamless raglan sleeves and sweeping batwing underarm gussets for fluid streetwear movement.'
    },
    'hoodie-atelier-crop': {
      id: 'hoodie-atelier-crop',
      title: 'Cross-Yoke Raw Hem Atelier Crop Hoodie — Stone Taupe',
      shortTitle: 'Atelier Crop - Stone Taupe',
      basePrice: 150,
      gsm: '500 GSM',
      color: 'Stone Taupe Warm Grey',
      img: 'assets/hoodie_atelier_crop.jpg',
      category: 'atelier heavy',
      rating: '5.0',
      reviewCount: 119,
      desc: 'Cropped boxy proportion with natural rolled raw waist hem. Features structural diagonal cross-yoke stitching across the shoulder blades and double-ply collar.'
    },
    'hoodie-tactical-pouch': {
      id: 'hoodie-tactical-pouch',
      title: 'Modular Dual-Pouch Tactical Hoodie — Washed Olive Drab',
      shortTitle: 'Tactical Dual-Pouch - Olive',
      basePrice: 175,
      gsm: '550 GSM',
      color: 'Washed Military Olive',
      img: 'assets/hoodie_tactical_pouch.jpg',
      category: 'atelier heavy',
      rating: '5.0',
      reviewCount: 142,
      desc: 'Utility streetwear masterclass. Features twin modular 3D accordion zip pockets on the chest with matte black pull hardware and double-reinforced elbow patches.'
    },
    'hoodie-split-half': {
      id: 'hoodie-split-half',
      title: 'Two-Tone Split-Body Half & Half Hoodie — Charcoal / Bone',
      shortTitle: 'Split Half & Half - Dual Tone',
      basePrice: 170,
      gsm: '520 GSM',
      color: 'Charcoal & Bone Dual Tone',
      img: 'assets/hoodie_split_half.jpg',
      category: 'atelier heavy',
      rating: '5.0',
      reviewCount: 167,
      desc: 'Visually striking vertical center bisection: left side washed charcoal steel, right side chalk bone alabaster, joined by heavy-duty 4-needle flatlock spine seam.'
    },
    'hoodie-moto-ribbed': {
      id: 'hoodie-moto-ribbed',
      title: 'Distressed Vintage Moto Ribbed Sleeve Hoodie — Dark Tar',
      shortTitle: 'Moto Ribbed Hoodie - Dark Tar',
      basePrice: 165,
      gsm: '520 GSM',
      color: 'Dark Tar Stone Wash',
      img: 'assets/hoodie_moto_ribbed.jpg',
      category: 'pullover heavy',
      rating: '4.9',
      reviewCount: 95,
      desc: 'Inspired by archival biker leathers. Features multi-stitched accordion ribbed panels on both forearms and elbows with deep tar black stone-washed fading.'
    },
    'hoodie-cowl-drape': {
      id: 'hoodie-cowl-drape',
      title: 'Oversized Cowl Drape Snood Hoodie — Melange Ash',
      shortTitle: 'Cowl Drape Snood - Ash',
      basePrice: 155,
      gsm: '500 GSM',
      color: 'Melange Heather Ash',
      img: 'assets/hoodie_cowl_drape.jpg',
      category: 'qtr heavy',
      rating: '4.8',
      reviewCount: 82,
      desc: 'Versatile sculptural drape. Extended double-layer cowl collar can be bunched down as a textured snood scarf or pulled overhead as an upright shelter hood.'
    },
    'hoodie-acid-indigo': {
      id: 'hoodie-acid-indigo',
      title: 'Acid Marble Mineral Wash Atelier Hoodie — Electric Indigo',
      shortTitle: 'Acid Marble - Electric Indigo',
      basePrice: 165,
      gsm: '520 GSM',
      color: 'Electric Indigo Cosmic Marble',
      img: 'assets/hoodie_acid_indigo.jpg',
      category: 'pullover heavy',
      rating: '5.0',
      reviewCount: 131,
      desc: 'High-contrast swirling cosmic marble wash achieved through multi-stage cold acid stone processing. Tonal rubberized Purpose Studio lab coordinates on the back yoke.'
    }
  };

  // Cart State (stored in memory / localStorage)
  let cart = JSON.parse(localStorage.getItem('purpose_studio_cart') || '[]');
  let wishlist = JSON.parse(localStorage.getItem('purpose_studio_wishlist') || '[]');
  let promoDiscount = 0; // 0.10 for 10% off

  function saveCart() {
    localStorage.setItem('purpose_studio_cart', JSON.stringify(cart));
  }

  function saveWishlist() {
    localStorage.setItem('purpose_studio_wishlist', JSON.stringify(wishlist));
  }

  function formatPrice(amountInUSD) {
    const { symbol, rate } = currencyRates[currentCurrency];
    const converted = amountInUSD * rate;
    if (currentCurrency === 'PHP') {
      return `${symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${symbol}${converted.toFixed(2)}`;
  }

  /* ==========================================================================
     2. TOAST NOTIFICATION SYSTEM
     ========================================================================== */
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, icon = 'shopping-bag') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="${icon}"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);

    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.animation = 'toast-out 0.35s ease forwards';
      setTimeout(() => toast.remove(), 350);
    }, 3200);
  }

  /* ==========================================================================
     3. STICKY HEADER & MOBILE DRAWER NAVIGATION
     ========================================================================== */
  const siteHeader = document.getElementById('site-header');
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileOverlay = document.getElementById('mobile-menu-overlay');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  const stickyNavWrapper = document.getElementById('tt-sticky-nav-wrapper');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      if (siteHeader) siteHeader.classList.add('scrolled');
      if (stickyNavWrapper) stickyNavWrapper.classList.add('scrolled');
    } else {
      if (siteHeader) siteHeader.classList.remove('scrolled');
      if (stickyNavWrapper) stickyNavWrapper.classList.remove('scrolled');
    }
  }, { passive: true });

  function openMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');
    if (openIcon) openIcon.style.display = 'none';
    if (closeIcon) closeIcon.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');
    if (openIcon) openIcon.style.display = 'block';
    if (closeIcon) closeIcon.style.display = 'none';
    document.body.style.overflow = '';
  }

  function toggleMobileMenu() {
    if (mobileDrawer && mobileDrawer.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', toggleMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  /* ==========================================================================
     4. ANNOUNCEMENT BAR & CURRENCY SELECTOR
     ========================================================================== */
  const announcementBar = document.getElementById('announcement-bar');
  const closeAnnouncementBtn = document.getElementById('close-announcement-btn');
  const currencySelect = document.getElementById('currency-select');

  if (closeAnnouncementBtn && announcementBar) {
    closeAnnouncementBtn.addEventListener('click', () => {
      announcementBar.style.display = 'none';
    });
  }

  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      updateAllPricesOnPage();
      updateCartUI();
      showToast(`Switched currency to ${currentCurrency}`, 'globe');
    });
  }

  function updateAllPricesOnPage() {
    // Hero Price
    const heroPriceDisplay = document.getElementById('hero-price-display');
    const showcasePrice = document.getElementById('showcase-price');
    const heroActiveDot = document.querySelector('#hero-color-dots .color-dot.active');
    const baseHeroPrice = heroActiveDot ? parseFloat(heroActiveDot.getAttribute('data-price')) : 145;

    if (heroPriceDisplay) heroPriceDisplay.textContent = (baseHeroPrice * currencyRates[currentCurrency].rate).toFixed(currentCurrency === 'PHP' ? 0 : 2);
    if (showcasePrice) showcasePrice.textContent = formatPrice(baseHeroPrice);

    // Products Grid
    document.querySelectorAll('.product-card').forEach(card => {
      const id = card.getAttribute('data-id');
      const item = products[id];
      if (item) {
        const priceEl = card.querySelector('.product-price');
        const compEl = card.querySelector('.product-compare');
        if (priceEl) priceEl.textContent = formatPrice(item.basePrice);
        if (compEl) compEl.textContent = formatPrice(item.basePrice + 35);
      }
    });

    // Bundle
    const bundleVal = document.querySelector('.bundle-price-val');
    const bundleOrig = document.querySelector('.bundle-price-orig');
    if (bundleVal) bundleVal.textContent = formatPrice(232);
    if (bundleOrig) bundleOrig.textContent = formatPrice(290);
  }

  /* ==========================================================================
     5. HERO INTERACTIVE COLORWAY SWITCHER
     ========================================================================== */
  const heroColorDots = document.querySelectorAll('#hero-color-dots .color-dot');
  const heroHoodieImg = document.getElementById('hero-hoodie-img');
  const heroColorName = document.getElementById('hero-color-name');
  const showcaseTitle = document.getElementById('showcase-title');
  const showcasePrice = document.getElementById('showcase-price');
  const heroPriceDisplay = document.getElementById('hero-price-display');
  const heroQuickAddBtn = document.getElementById('hero-quick-add-btn');

  let activeHeroProduct = {
    id: 'hoodie-black',
    title: 'The Archive Pullover — Vintage Washed Black',
    color: 'Vintage Washed Black',
    price: 145,
    img: 'assets/hoodie_black.jpg',
    size: 'L'
  };

  heroColorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      heroColorDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      const color = dot.getAttribute('data-color');
      const img = dot.getAttribute('data-img');
      const price = parseFloat(dot.getAttribute('data-price'));

      activeHeroProduct.color = color;
      activeHeroProduct.img = img;
      activeHeroProduct.price = price;

      const dotId = dot.getAttribute('data-id');
      const dotTitle = dot.getAttribute('data-title');

      activeHeroProduct.id = dotId || (color.includes('Zip') ? 'hoodie-zip' : 'hoodie-black');
      activeHeroProduct.title = dotTitle || `The Archive — ${color}`;

      if (showcaseTitle) {
        if (color.includes('Zip') || color.includes('Quarter')) {
          showcaseTitle.textContent = 'THE ARCHIVE ZIP SERIES';
        } else {
          showcaseTitle.textContent = 'THE ARCHIVE PULLOVER';
        }
      }

      if (heroColorName) heroColorName.textContent = color;
      if (heroHoodieImg) {
        heroHoodieImg.style.opacity = '0.4';
        setTimeout(() => {
          heroHoodieImg.src = img;
          heroHoodieImg.style.opacity = '1';
        }, 150);
      }
      if (showcasePrice) showcasePrice.textContent = formatPrice(price);
      if (heroPriceDisplay) heroPriceDisplay.textContent = (price * currencyRates[currentCurrency].rate).toFixed(currentCurrency === 'PHP' ? 0 : 2);
    });
  });

  if (heroQuickAddBtn) {
    heroQuickAddBtn.addEventListener('click', () => {
      addToCart({
        id: `${activeHeroProduct.id}-${activeHeroProduct.color}-${activeHeroProduct.size}`,
        baseId: activeHeroProduct.id,
        title: activeHeroProduct.title,
        color: activeHeroProduct.color,
        size: activeHeroProduct.size,
        price: activeHeroProduct.price,
        img: activeHeroProduct.img,
        quantity: 1
      });
      openCartDrawer();
      showToast(`Added ${activeHeroProduct.color} (Size ${activeHeroProduct.size}) to Bag!`);
    });
  }

  /* ==========================================================================
     6. COLLECTION CATEGORY FILTER
     ========================================================================== */
  const filterPills = document.querySelectorAll('.filter-pill');
  const productCards = document.querySelectorAll('.product-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-filter');
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  /* ==========================================================================
     7. PRODUCT CARD SIZE SELECTION & ADD TO CART
     ========================================================================== */
  // Size selection on product cards
  document.querySelectorAll('.product-card').forEach(card => {
    const sizeBtns = card.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Add to cart from card
    const addBtn = card.querySelector('.btn-add-to-cart');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const productId = addBtn.getAttribute('data-id');
        const title = addBtn.getAttribute('data-title');
        const price = parseFloat(addBtn.getAttribute('data-price'));
        const color = addBtn.getAttribute('data-color');
        const img = addBtn.getAttribute('data-img');

        const activeSizeBtn = card.querySelector('.size-btn.active');
        const size = activeSizeBtn ? activeSizeBtn.getAttribute('data-size') : 'L';

        addToCart({
          id: `${productId}-${size}`,
          baseId: productId,
          title: title,
          color: color,
          size: size,
          price: price,
          img: img,
          quantity: 1
        });

        openCartDrawer();
        showToast(`Added ${title} (${size}) to Bag!`);
      });
    }
  });

  /* ==========================================================================
     8. WISHLIST TOGGLE
     ========================================================================== */
  const wishlistCountEl = document.getElementById('wishlist-count');
  const wishlistBtns = document.querySelectorAll('.wishlist-btn');

  function updateWishlistBadge() {
    if (wishlistCountEl) wishlistCountEl.textContent = wishlist.length;
    wishlistBtns.forEach(btn => {
      const id = btn.getAttribute('data-id');
      if (wishlist.includes(id)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  wishlistBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const index = wishlist.indexOf(id);
      if (index === -1) {
        wishlist.push(id);
        btn.classList.add('active');
        showToast('Saved to your private Wishlist', 'heart');
      } else {
        wishlist.splice(index, 1);
        btn.classList.remove('active');
        showToast('Removed from Wishlist', 'heart');
      }
      saveWishlist();
      updateWishlistBadge();
    });
  });

  const wishlistTriggerBtn = document.getElementById('wishlist-trigger-btn');
  if (wishlistTriggerBtn) {
    wishlistTriggerBtn.addEventListener('click', () => {
      if (wishlist.length === 0) {
        showToast('Your wishlist is empty. Tap hearts on any hoodie!', 'heart');
      } else {
        showToast(`You have ${wishlist.length} item(s) in your wishlist.`, 'heart');
        const collectionEl = document.getElementById('collection');
        if (collectionEl) collectionEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ==========================================================================
     9. CAPSULE BUNDLE SET BUILDER
     ========================================================================== */
  const addBundleBtn = document.getElementById('add-bundle-to-cart');
  if (addBundleBtn) {
    addBundleBtn.addEventListener('click', () => {
      addToCart({
        id: 'bundle-capsule-set',
        baseId: 'bundle-capsule-set',
        title: 'Batch #004 Double Capsule Set',
        color: 'Washed Black + Concrete Grey',
        size: '2x Large + Canvas Tote',
        price: 232,
        img: 'assets/hoodie_black.jpg',
        quantity: 1
      });
      openCartDrawer();
      showToast('Double Capsule Set added! Saved $58 + Free Tote included!', 'sparkles');
    });
  }

  /* ==========================================================================
     10. FABRIC LAB HOTSPOTS
     ========================================================================== */
  const hotspots = document.querySelectorAll('.hotspot');
  const detailItems = document.querySelectorAll('.detail-item');

  hotspots.forEach((spot, idx) => {
    spot.addEventListener('click', () => {
      detailItems.forEach(item => item.classList.remove('active'));
      if (detailItems[idx]) {
        detailItems[idx].classList.add('active');
        detailItems[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      const title = spot.getAttribute('data-title');
      const text = spot.getAttribute('data-text');
      showToast(`${title}: ${text}`, 'info');
    });
  });

  /* ==========================================================================
     11. PRECISION SIZE & FIT CALCULATOR
     ========================================================================== */
  const heightSlider = document.getElementById('height-slider');
  const weightSlider = document.getElementById('weight-slider');
  const heightValDisplay = document.getElementById('height-val-display');
  const weightValDisplay = document.getElementById('weight-val-display');
  const fitBtns = document.querySelectorAll('.fit-btn');
  const recommendedSizeEl = document.getElementById('recommended-size-letter');
  const resultNoteText = document.getElementById('result-note-text');
  const applySizeBtn = document.getElementById('apply-size-to-collection');

  let selectedFit = 'relaxed';

  function cmToFtIn(cm) {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}"`;
  }

  function calculateOptimalSize() {
    const heightCm = parseInt(heightSlider.value, 10);
    const weightLbs = parseInt(weightSlider.value, 10);

    let calculatedSize = 'L';

    if (weightLbs < 140 || (heightCm < 165 && weightLbs < 150)) {
      calculatedSize = 'S';
    } else if (weightLbs < 168 || (heightCm < 174 && weightLbs < 172)) {
      calculatedSize = 'M';
    } else if (weightLbs < 195 || (heightCm < 184 && weightLbs < 200)) {
      calculatedSize = 'L';
    } else if (weightLbs < 225 || (heightCm < 192 && weightLbs < 230)) {
      calculatedSize = 'XL';
    } else {
      calculatedSize = 'XXL';
    }

    // Adjust for user fit style
    if (selectedFit === 'cropped' && calculatedSize !== 'S') {
      if (calculatedSize === 'XXL') calculatedSize = 'XL';
      else if (calculatedSize === 'XL') calculatedSize = 'L';
      else if (calculatedSize === 'L') calculatedSize = 'M';
      else if (calculatedSize === 'M') calculatedSize = 'S';
    } else if (selectedFit === 'oversized' && calculatedSize !== 'XXL') {
      if (calculatedSize === 'XL') calculatedSize = 'XXL';
      else if (calculatedSize === 'L') calculatedSize = 'XL';
      else if (calculatedSize === 'M') calculatedSize = 'L';
      else if (calculatedSize === 'S') calculatedSize = 'M';
    }

    if (recommendedSizeEl) recommendedSizeEl.textContent = calculatedSize;

    const fitDescriptions = {
      cropped: `In size <strong>${calculatedSize}</strong>, the hem will break cleanly above your waistband while the chest remains spacious.`,
      relaxed: `In size <strong>${calculatedSize}</strong>, you will achieve our quintessential signature drape: 4" dropped shoulders with structured hood posture.`,
      oversized: `In size <strong>${calculatedSize}</strong>, you will get exaggerated volume across chest with heavy stacking down the forearms.`
    };

    if (resultNoteText) {
      resultNoteText.innerHTML = `Based on ${cmToFtIn(heightCm)} and ${weightLbs} lbs with a <em>${selectedFit}</em> preference, size <strong>${calculatedSize}</strong> is your ideal match. ${fitDescriptions[selectedFit]}`;
    }

    if (applySizeBtn) {
      const btnSpan = applySizeBtn.querySelector('span');
      if (btnSpan) btnSpan.textContent = `Select Size ${calculatedSize} Across Store`;
    }

    return calculatedSize;
  }

  if (heightSlider && weightSlider) {
    heightSlider.addEventListener('input', () => {
      const cm = parseInt(heightSlider.value, 10);
      if (heightValDisplay) heightValDisplay.textContent = `${cmToFtIn(cm)} (${cm} cm)`;
      calculateOptimalSize();
    });

    weightSlider.addEventListener('input', () => {
      const lbs = parseInt(weightSlider.value, 10);
      const kg = Math.round(lbs * 0.453592);
      if (weightValDisplay) weightValDisplay.textContent = `${lbs} lbs (${kg} kg)`;
      calculateOptimalSize();
    });
  }

  fitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fitBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedFit = btn.getAttribute('data-fit');
      calculateOptimalSize();
    });
  });

  if (applySizeBtn) {
    applySizeBtn.addEventListener('click', () => {
      const size = calculateOptimalSize();
      // Apply this size across all product cards in collection
      document.querySelectorAll('.product-card').forEach(card => {
        const matchingBtn = card.querySelector(`.size-btn[data-size="${size}"]`);
        if (matchingBtn) {
          card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
          matchingBtn.classList.add('active');
        }
      });
      activeHeroProduct.size = size;
      showToast(`Size ${size} applied to all hoodies in the store!`, 'check');
      const coll = document.getElementById('collection');
      if (coll) coll.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     12. LOOKBOOK INTERACTIVE PINS
     ========================================================================= */
  const pinAddBtns = document.querySelectorAll('.pin-add-btn');
  pinAddBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const item = products[id];
      if (item) {
        addToCart({
          id: `${item.id}-L`,
          baseId: item.id,
          title: item.shortTitle,
          color: item.color,
          size: 'L',
          price: item.basePrice,
          img: item.img,
          quantity: 1
        });
        openCartDrawer();
        showToast(`Added ${item.shortTitle} (Size L) from Lookbook!`);
      }
    });
  });

  /* ==========================================================================
     13. FAQ ACCORDION
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  /* ==========================================================================
     14. VIP ACCESS SUBSCRIPTION FORM
     ========================================================================== */
  const vipForm = document.getElementById('vip-newsletter-form');
  const vipEmailInput = document.getElementById('vip-email');

  if (vipForm) {
    vipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = vipEmailInput ? vipEmailInput.value : '';
      if (email) {
        showToast('VIP Key Activated! Code: PURPOSE10 applied (-10% OFF)', 'sparkles');
        promoDiscount = 0.10;
        updateCartUI();
        if (vipEmailInput) vipEmailInput.value = '';
      }
    });
  }

  /* ==========================================================================
     15. INTERACTIVE CART DRAWER SYSTEM
     ========================================================================== */
  const cartDrawer = document.getElementById('cart-drawer');
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const cartDrawerBtn = document.getElementById('cart-drawer-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartEmptyState = document.getElementById('cart-empty-state');
  const cartBadgeCount = document.getElementById('cart-badge-count');
  const headerCartTotal = document.getElementById('header-cart-total');
  const drawerItemCount = document.getElementById('drawer-item-count');
  const shippingMeterFill = document.getElementById('shipping-meter-fill');
  const shippingMeterText = document.getElementById('shipping-meter-text');
  const cartSubtotalVal = document.getElementById('cart-subtotal-val');
  const cartDiscountVal = document.getElementById('cart-discount-val');
  const discountRow = document.getElementById('discount-row');
  const cartShippingVal = document.getElementById('cart-shipping-val');
  const cartTotalVal = document.getElementById('cart-total-val');
  const checkoutBtnTotal = document.getElementById('checkout-btn-total');
  const promoCodeInput = document.getElementById('promo-code-input');
  const applyPromoBtn = document.getElementById('apply-promo-btn');
  const promoAppliedBadge = document.getElementById('promo-applied-badge');
  const removePromoBtn = document.getElementById('remove-promo-btn');

  function openCartDrawer() {
    cartDrawer.classList.add('open');
    cartDrawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    cartDrawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (cartDrawerBtn) cartDrawerBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCartDrawer);

  function addToCart(item) {
    const existingIndex = cart.findIndex(c => c.id === item.id);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += item.quantity || 1;
    } else {
      cart.push(item);
    }
    saveCart();
    updateCartUI();
  }

  function updateCartUI() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discountAmount = subtotal * promoDiscount;
    const finalTotal = subtotal - discountAmount;

    // Badges & Headers
    if (cartBadgeCount) cartBadgeCount.textContent = totalCount;
    if (drawerItemCount) drawerItemCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    if (headerCartTotal) headerCartTotal.textContent = formatPrice(finalTotal);

    // Shipping Progress Meter (Threshold: $150 USD)
    const shippingThreshold = 150;
    const percent = Math.min(100, Math.round((subtotal / shippingThreshold) * 100));
    if (shippingMeterFill) shippingMeterFill.style.width = `${percent}%`;

    if (shippingMeterText) {
      if (subtotal >= shippingThreshold) {
        shippingMeterText.innerHTML = `<span style="color:#4ade80;">✦ YOU HAVE UNLOCKED <strong>COMPLIMENTARY WORLDWIDE EXPRESS</strong></span>`;
      } else {
        const remaining = shippingThreshold - subtotal;
        shippingMeterText.innerHTML = `Add <strong>${formatPrice(remaining)}</strong> more to unlock <strong>FREE WORLDWIDE EXPRESS</strong>`;
      }
    }

    // Totals calculations
    if (cartSubtotalVal) cartSubtotalVal.textContent = formatPrice(subtotal);

    if (promoDiscount > 0) {
      if (discountRow) discountRow.style.display = 'flex';
      if (cartDiscountVal) cartDiscountVal.textContent = `-${formatPrice(discountAmount)}`;
      if (promoAppliedBadge) promoAppliedBadge.style.display = 'flex';
    } else {
      if (discountRow) discountRow.style.display = 'none';
      if (promoAppliedBadge) promoAppliedBadge.style.display = 'none';
    }

    if (cartShippingVal) {
      cartShippingVal.textContent = (subtotal >= shippingThreshold || subtotal === 0) ? 'FREE EXPRESS' : formatPrice(18);
    }

    const shippingCost = (subtotal >= shippingThreshold || subtotal === 0) ? 0 : 18;
    const orderTotal = finalTotal + shippingCost;

    if (cartTotalVal) cartTotalVal.textContent = formatPrice(orderTotal);
    if (checkoutBtnTotal) checkoutBtnTotal.textContent = formatPrice(orderTotal);

    // Render Items
    renderCartItems();

    // Sync with Express Checkout Station
    if (typeof updateCartSyncBar === 'function') updateCartSyncBar();
    if (typeof calculateDirectOrder === 'function') calculateDirectOrder();
  }

  function renderCartItems() {
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '';
      if (cartEmptyState) {
        cartItemsContainer.appendChild(cartEmptyState);
        cartEmptyState.style.display = 'flex';
      }
      return;
    }

    let html = '';
    cart.forEach((item, idx) => {
      html += `
        <div class="cart-item" data-index="${idx}">
          <img src="${item.img}" alt="${item.title}" class="cart-item-img" />
          <div class="cart-item-info">
            <div class="cart-item-top">
              <span class="cart-item-title">${item.title}</span>
              <button class="cart-item-remove" data-index="${idx}" aria-label="Remove item">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
            <span class="cart-item-variant">${item.color} • Size: ${item.size}</span>
            <div class="cart-item-bottom">
              <div class="cart-qty-ctrl">
                <button class="qty-btn btn-minus" data-index="${idx}">−</button>
                <span class="qty-num">${item.quantity}</span>
                <button class="qty-btn btn-plus" data-index="${idx}">+</button>
              </div>
              <span class="cart-item-price">${formatPrice(item.price * item.quantity)}</span>
            </div>
          </div>
        </div>
      `;
    });

    cartItemsContainer.innerHTML = html;

    if (window.lucide) window.lucide.createIcons();

    // Attach quantity and remove listeners
    cartItemsContainer.querySelectorAll('.btn-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        if (cart[idx].quantity > 1) {
          cart[idx].quantity -= 1;
        } else {
          cart.splice(idx, 1);
        }
        saveCart();
        updateCartUI();
      });
    });

    cartItemsContainer.querySelectorAll('.btn-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        cart[idx].quantity += 1;
        saveCart();
        updateCartUI();
      });
    });

    cartItemsContainer.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        const removedTitle = cart[idx].title;
        cart.splice(idx, 1);
        saveCart();
        updateCartUI();
        showToast(`Removed ${removedTitle} from bag`, 'trash-2');
      });
    });
  }

  // Promo code handler
  if (applyPromoBtn && promoCodeInput) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoCodeInput.value.trim().toUpperCase();
      if (code === 'PURPOSE10' || code === 'VIP10') {
        promoDiscount = 0.10;
        promoCodeInput.value = '';
        updateCartUI();
        showToast('Code PURPOSE10 applied! 10% VIP Discount unlocked.', 'check-circle-2');
      } else {
        showToast('Invalid promo code. Try "PURPOSE10"', 'alert-circle');
      }
    });
  }

  if (removePromoBtn) {
    removePromoBtn.addEventListener('click', () => {
      promoDiscount = 0;
      updateCartUI();
      showToast('Promo discount removed', 'x');
    });
  }

  /* ==========================================================================
     16. QUICK VIEW MODAL
     ========================================================================== */
  const quickViewOverlay = document.getElementById('quick-view-overlay');
  const quickViewModal = document.getElementById('quick-view-modal');
  const qvCloseBtn = document.getElementById('qv-close-btn');
  const qvImg = document.getElementById('qv-img');
  const qvTitle = document.getElementById('qv-title');
  const qvPrice = document.getElementById('qv-price');
  const qvDesc = document.getElementById('qv-desc');
  const qvSelectedColor = document.getElementById('qv-selected-color');
  const qvColorDots = document.getElementById('qv-color-dots');
  const qvSizes = document.getElementById('qv-sizes');
  const qvAddToBagBtn = document.getElementById('qv-add-to-bag-btn');
  const qvButtonPrice = document.getElementById('qv-button-price');
  const qvSizeGuideBtn = document.getElementById('qv-size-guide-btn');

  let currentQvItem = null;
  let qvSelectedSize = 'L';

  function openQuickView(productId) {
    const item = products[productId];
    if (!item) return;

    currentQvItem = item;
    qvSelectedSize = 'L';

    if (qvImg) qvImg.src = item.img;
    if (qvTitle) qvTitle.textContent = item.title;
    if (qvPrice) qvPrice.textContent = formatPrice(item.basePrice);
    if (qvButtonPrice) qvButtonPrice.textContent = formatPrice(item.basePrice);
    if (qvDesc) qvDesc.textContent = item.desc;
    if (qvSelectedColor) qvSelectedColor.textContent = item.color;

    // Reset sizes
    if (qvSizes) {
      qvSizes.querySelectorAll('.size-btn').forEach(btn => {
        if (btn.getAttribute('data-size') === 'L') btn.classList.add('active');
        else btn.classList.remove('active');
      });
    }

    quickViewModal.classList.add('open');
    quickViewOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    quickViewModal.classList.remove('open');
    quickViewOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (qvCloseBtn) qvCloseBtn.addEventListener('click', closeQuickView);
  if (quickViewOverlay) quickViewOverlay.addEventListener('click', closeQuickView);

  // Quick view trigger buttons on cards
  document.querySelectorAll('.btn-quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openQuickView(id);
    });
  });

  if (qvSizes) {
    qvSizes.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        qvSizes.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        qvSelectedSize = btn.getAttribute('data-size');
      });
    });
  }

  if (qvAddToBagBtn) {
    qvAddToBagBtn.addEventListener('click', () => {
      if (!currentQvItem) return;
      addToCart({
        id: `${currentQvItem.id}-${qvSelectedSize}`,
        baseId: currentQvItem.id,
        title: currentQvItem.shortTitle,
        color: currentQvItem.color,
        size: qvSelectedSize,
        price: currentQvItem.basePrice,
        img: currentQvItem.img,
        quantity: 1
      });
      closeQuickView();
      openCartDrawer();
      showToast(`Added ${currentQvItem.shortTitle} (${qvSelectedSize}) to Bag!`);
    });
  }

  if (qvSizeGuideBtn) {
    qvSizeGuideBtn.addEventListener('click', () => {
      closeQuickView();
      const sizeSection = document.getElementById('size-finder');
      if (sizeSection) sizeSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     17. SIMULATED CHECKOUT & ORDER CONFIRMATION
     ========================================================================== */
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
  const checkoutCloseBtn = document.getElementById('checkout-close-btn');
  const btnOpenCheckout = document.getElementById('btn-open-checkout');
  const checkoutStepForm = document.getElementById('checkout-step-form');
  const checkoutStepSuccess = document.getElementById('checkout-step-success');
  const checkoutStepTotal = document.getElementById('checkout-step-total');
  const simulatedCheckoutForm = document.getElementById('simulated-checkout-form');
  const confItemsSummary = document.getElementById('conf-items-summary');
  const orderRefNum = document.getElementById('order-ref-num');
  const confContinueShopping = document.getElementById('conf-continue-shopping');
  const btnApplePay = document.getElementById('btn-apple-pay');
  const btnGooglePay = document.getElementById('btn-google-pay');

  function openCheckout() {
    if (cart.length === 0) {
      showToast('Your bag is empty! Add a hoodie first.', 'shopping-bag');
      return;
    }
    closeCartDrawer();

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const finalTotal = (subtotal - (subtotal * promoDiscount)) + (subtotal >= 150 ? 0 : 18);
    if (checkoutStepTotal) checkoutStepTotal.textContent = formatPrice(finalTotal);

    if (checkoutStepForm) checkoutStepForm.style.display = 'block';
    if (checkoutStepSuccess) checkoutStepSuccess.style.display = 'none';

    checkoutModal.classList.add('open');
    checkoutModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckout() {
    checkoutModal.classList.remove('open');
    checkoutModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (btnOpenCheckout) btnOpenCheckout.addEventListener('click', openCheckout);
  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener('click', closeCheckout);
  if (checkoutModalOverlay) checkoutModalOverlay.addEventListener('click', closeCheckout);

  function executeSimulatedOrder(methodName = 'Card') {
    // Generate order confirmation reference
    const refCode = '#PS-' + Math.floor(100000 + Math.random() * 900000);
    if (orderRefNum) orderRefNum.textContent = refCode;

    // Render items summary
    if (confItemsSummary) {
      let itemsHtml = '<strong style="display:block;margin-bottom:8px;font-family:var(--font-mono);font-size:0.8rem;color:var(--text-secondary);">ITEMS ORDERED:</strong>';
      cart.forEach(item => {
        itemsHtml += `
          <div style="display:flex;justify-content:space-between;font-family:var(--font-mono);font-size:0.82rem;margin-bottom:6px;">
            <span>${item.quantity}x ${item.title} (${item.size})</span>
            <strong>${formatPrice(item.price * item.quantity)}</strong>
          </div>
        `;
      });
      confItemsSummary.innerHTML = itemsHtml;
    }

    // Switch step
    if (checkoutStepForm) checkoutStepForm.style.display = 'none';
    if (checkoutStepSuccess) checkoutStepSuccess.style.display = 'block';

    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();

    showToast(`Order confirmed with ${methodName}! Reference ${refCode}`, 'badge-check');
  }

  if (simulatedCheckoutForm) {
    simulatedCheckoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      executeSimulatedOrder('Credit Card');
    });
  }

  if (btnApplePay) {
    btnApplePay.addEventListener('click', () => executeSimulatedOrder('Apple Pay'));
  }

  if (btnGooglePay) {
    btnGooglePay.addEventListener('click', () => executeSimulatedOrder('Google Pay'));
  }

  if (confContinueShopping) {
    confContinueShopping.addEventListener('click', () => {
      closeCheckout();
      const coll = document.getElementById('collection');
      if (coll) coll.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     18. QUICK SEARCH MODAL
     ========================================================================== */
  const searchTriggerBtn = document.getElementById('search-trigger-btn');
  const searchModal = document.getElementById('search-modal');
  const searchModalOverlay = document.getElementById('search-modal-overlay');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input');
  const searchResultsContainer = document.getElementById('search-results-container');

  function openSearch() {
    searchModal.classList.add('open');
    searchModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 100);
  }

  function closeSearch() {
    searchModal.classList.remove('open');
    searchModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (searchTriggerBtn) searchTriggerBtn.addEventListener('click', openSearch);
  if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);
  if (searchModalOverlay) searchModalOverlay.addEventListener('click', closeSearch);

  if (searchInput && searchResultsContainer) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      if (!query) {
        searchResultsContainer.innerHTML = '<div class="search-prompt">Type to search the Batch #004 Archive...</div>';
        return;
      }

      const matches = Object.values(products).filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.color.toLowerCase().includes(query) ||
        p.gsm.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        searchResultsContainer.innerHTML = `<div class="search-prompt">No colorway or silhouette matching "${query}".</div>`;
        return;
      }

      let resHtml = '';
      matches.forEach(item => {
        resHtml += `
          <div class="search-result-item" data-id="${item.id}">
            <img src="${item.img}" alt="${item.title}" class="search-result-img" />
            <div>
              <strong style="display:block;font-size:0.9rem;">${item.title}</strong>
              <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--accent-volt);">${item.gsm} • ${formatPrice(item.basePrice)}</span>
            </div>
          </div>
        `;
      });
      searchResultsContainer.innerHTML = resHtml;

      searchResultsContainer.querySelectorAll('.search-result-item').forEach(el => {
        el.addEventListener('click', () => {
          const id = el.getAttribute('data-id');
          closeSearch();
          openQuickView(id);
        });
      });
    });
  }

  // Keyboard shortcut: Escape closes all modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeQuickView();
      closeCheckout();
      closeSearch();
      closeMobileMenu();
    }
  });

  /* ==========================================================================
     19. DIRECT ORDER STATION & ORDER TRACKER LOGIC
     ========================================================================== */
  const orderTabBtnOrder = document.getElementById('tab-btn-order');
  const orderTabBtnTrack = document.getElementById('tab-btn-track');
  const orderFormPanel = document.getElementById('order-form-panel');
  const orderTrackerPanel = document.getElementById('order-tracker-panel');

  if (orderTabBtnOrder && orderTabBtnTrack) {
    orderTabBtnOrder.addEventListener('click', () => {
      orderTabBtnOrder.classList.add('active');
      orderTabBtnTrack.classList.remove('active');
      if (orderFormPanel) orderFormPanel.style.display = 'block';
      if (orderTrackerPanel) orderTrackerPanel.style.display = 'none';
    });

    orderTabBtnTrack.addEventListener('click', () => {
      orderTabBtnTrack.classList.add('active');
      orderTabBtnOrder.classList.remove('active');
      if (orderFormPanel) orderFormPanel.style.display = 'none';
      if (orderTrackerPanel) orderTrackerPanel.style.display = 'block';
    });
  }

  // Direct Order & Express Checkout State
  let directOrder = {
    mode: 'single', // 'single' or 'bag'
    productId: 'hoodie-black',
    size: 'L',
    qty: 1,
    addons: [],
    discount: 0,
    paymentMethod: 'Card',
    shippingTier: 'standard' // 'standard' or 'priority'
  };

  let activeFastlaneWallet = 'Apple Pay';

  // Live Same-Day Dispatch Countdown Timer
  function initDispatchCountdown() {
    const countdownEl = document.getElementById('express-countdown-timer');
    if (!countdownEl) return;

    function updateTicker() {
      const now = new Date();
      // Target tonight 23:59:59
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
      const diffMs = endOfDay - now;

      if (diffMs <= 0) {
        countdownEl.textContent = '00:00:00';
        return;
      }

      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diffMs % (1000 * 60)) / 1000);

      const pad = (n) => String(n).padStart(2, '0');
      countdownEl.textContent = `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
    }

    updateTicker();
    setInterval(updateTicker, 1000);
  }
  initDispatchCountdown();

  // Elements
  const directOrderForm = document.getElementById('direct-order-form');
  const silhouetteCards = document.querySelectorAll('#order-silhouette-picker .silhouette-card');
  const orderSizeBtns = document.querySelectorAll('#order-size-options .size-btn');
  const orderQtyVal = document.getElementById('order-qty-val');
  const orderQtyDec = document.getElementById('order-qty-dec');
  const orderQtyInc = document.getElementById('order-qty-inc');
  const addonTote = document.getElementById('addon-tote');
  const addonTravel = document.getElementById('addon-travel');
  const addonRush = document.getElementById('addon-rush');
  const payMethodPills = document.querySelectorAll('.pay-method-pill');
  const orderCardInputs = document.getElementById('order-card-inputs');
  const orderPromoInput = document.getElementById('order-promo-input');
  const orderPromoBtn = document.getElementById('order-promo-btn');
  const orderPromoBadge = document.getElementById('order-promo-badge');

  // Bag Sync Elements
  const cartSyncBar = document.getElementById('cart-sync-bar');
  const syncBagCount = document.getElementById('sync-bag-count');
  const syncBagTotal = document.getElementById('sync-bag-total');
  const syncModeBag = document.getElementById('sync-mode-bag');
  const syncModeSingle = document.getElementById('sync-mode-single');
  const orderBlockStep1 = document.getElementById('order-block-step1');

  // Shipping Speed Tiers
  const tierCards = document.querySelectorAll('.shipping-tier-card');
  const btnAutofillDemo = document.getElementById('btn-autofill-demo');

  // Summary Elements
  const summaryHoodieImg = document.getElementById('summary-hoodie-img');
  const summaryHoodieTitle = document.getElementById('summary-hoodie-title');
  const summaryHoodieVariant = document.getElementById('summary-hoodie-variant');
  const summaryHoodiePrice = document.getElementById('summary-hoodie-price');
  const summaryAddonsBox = document.getElementById('summary-addons-box');
  const summaryAddonsList = document.getElementById('summary-addons-list');
  const sumSubtotal = document.getElementById('sum-subtotal');
  const sumAddonsRow = document.getElementById('sum-addons-row');
  const sumAddonsVal = document.getElementById('sum-addons-val');
  const sumDiscountRow = document.getElementById('sum-discount-row');
  const sumDiscountVal = document.getElementById('sum-discount-val');
  const sumShippingVal = document.getElementById('sum-shipping-val');
  const sumTotalVal = document.getElementById('sum-total-val');
  const btnOrderPriceVal = document.getElementById('btn-order-price-val');

  // Synchronize Bag Alert Bar
  function updateCartSyncBar() {
    if (!cartSyncBar) return;
    const count = cart.reduce((acc, i) => acc + i.quantity, 0);
    const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);

    if (count > 0) {
      cartSyncBar.style.display = 'flex';
      if (syncBagCount) syncBagCount.textContent = `${count} ${count === 1 ? 'ITEM' : 'ITEMS'}`;
      if (syncBagTotal) syncBagTotal.textContent = formatPrice(subtotal);
    } else {
      cartSyncBar.style.display = 'none';
      if (directOrder.mode === 'bag') {
        directOrder.mode = 'single';
        if (syncModeSingle) syncModeSingle.classList.add('active');
        if (syncModeBag) syncModeBag.classList.remove('active');
      }
    }
  }

  if (syncModeBag) {
    syncModeBag.addEventListener('click', () => {
      directOrder.mode = 'bag';
      syncModeBag.classList.add('active');
      if (syncModeSingle) syncModeSingle.classList.remove('active');
      if (orderBlockStep1) orderBlockStep1.style.opacity = '0.65';
      calculateDirectOrder();
      showToast('Express Checkout loaded with all items in your bag!', 'shopping-bag');
    });
  }

  if (syncModeSingle) {
    syncModeSingle.addEventListener('click', () => {
      directOrder.mode = 'single';
      syncModeSingle.classList.add('active');
      if (syncModeBag) syncModeBag.classList.remove('active');
      if (orderBlockStep1) orderBlockStep1.style.opacity = '1';
      calculateDirectOrder();
      showToast('Switched to Single Piece Customizer mode.', 'check');
    });
  }

  // 1-Click Autofill Demo Button
  if (btnAutofillDemo) {
    btnAutofillDemo.addEventListener('click', () => {
      const ordName = document.getElementById('ord-name');
      const ordEmail = document.getElementById('ord-email');
      const ordPhone = document.getElementById('ord-phone');
      const ordAddress = document.getElementById('ord-address');
      const ordCity = document.getElementById('ord-city');
      const ordZip = document.getElementById('ord-zip');
      const ordCountry = document.getElementById('ord-country');

      if (ordName) ordName.value = 'Marcus Vance';
      if (ordEmail) ordEmail.value = 'marcus@purpose.studio';
      if (ordPhone) ordPhone.value = '+1 (555) 890-4421';
      if (ordAddress) ordAddress.value = '104 Crosby St, Soho';
      if (ordCity) ordCity.value = 'New York';
      if (ordZip) ordZip.value = '10012';
      if (ordCountry) ordCountry.value = 'United States';

      showToast('Collector demo shipping address filled! ⚡', 'sparkles');
    });
  }

  // Shipping Speed Tier Selector
  tierCards.forEach(card => {
    card.addEventListener('click', () => {
      tierCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        directOrder.shippingTier = radio.value;
        calculateDirectOrder();
      }
    });
  });

  function calculateDirectOrder() {
    let baseSubtotal = 0;
    let itemTitle = '';
    let itemVariant = '';
    let itemImg = 'assets/hoodie_black.jpg';
    let currentItem = products[directOrder.productId] || products['hoodie-black'];

    if (directOrder.mode === 'bag' && cart.length > 0) {
      baseSubtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
      const totalCount = cart.reduce((acc, i) => acc + i.quantity, 0);
      itemTitle = `Shopping Bag (${cart.length} Silhouette${cart.length > 1 ? 's' : ''})`;
      itemVariant = `${totalCount} Total Piece${totalCount > 1 ? 's' : ''} in Batch #004`;
      itemImg = cart[0].img || currentItem.img;
    } else {
      currentItem = products[directOrder.productId] || products['hoodie-black'];
      baseSubtotal = currentItem.basePrice * directOrder.qty;
      itemTitle = currentItem.title;
      itemVariant = `Color: ${currentItem.color} • Size: ${directOrder.size} • Qty: ${directOrder.qty}`;
      itemImg = currentItem.img;
    }

    let addonsTotal = 0;
    directOrder.addons = [];
    if (addonTote && addonTote.checked) {
      directOrder.addons.push({ name: '20oz Canvas Tote Bag', price: 25 });
      addonsTotal += 25;
    }
    if (addonTravel && addonTravel.checked) {
      directOrder.addons.push({ name: 'Garment Dust Bag & Hanger', price: 15 });
      addonsTotal += 15;
    }
    if (addonRush && addonRush.checked) {
      directOrder.addons.push({ name: 'Priority Batch Rush & Insurance', price: 10 });
      addonsTotal += 10;
    }

    const subtotalWithAddons = baseSubtotal + addonsTotal;
    const discountAmount = subtotalWithAddons * directOrder.discount;

    // Shipping calculations based on tier
    let shippingFee = 0;
    const isFreeEligible = (subtotalWithAddons >= 150);

    if (directOrder.shippingTier === 'priority') {
      shippingFee = isFreeEligible ? 12 : (18 + 12);
    } else {
      shippingFee = isFreeEligible ? 0 : 18;
    }

    const finalAmount = (subtotalWithAddons - discountAmount) + shippingFee;

    // Update Summary
    if (summaryHoodieImg) summaryHoodieImg.src = itemImg;
    if (summaryHoodieTitle) summaryHoodieTitle.textContent = itemTitle;
    if (summaryHoodieVariant) summaryHoodieVariant.textContent = itemVariant;
    if (summaryHoodiePrice) summaryHoodiePrice.textContent = formatPrice(baseSubtotal);

    if (summaryAddonsBox && summaryAddonsList) {
      if (directOrder.addons.length > 0) {
        summaryAddonsBox.style.display = 'block';
        summaryAddonsList.innerHTML = directOrder.addons.map(a => `<div style="display:flex;justify-content:space-between;margin-top:2px;"><span>+ ${a.name}</span><strong>${formatPrice(a.price)}</strong></div>`).join('');
      } else {
        summaryAddonsBox.style.display = 'none';
        summaryAddonsList.innerHTML = '';
      }
    }

    if (sumSubtotal) sumSubtotal.textContent = formatPrice(baseSubtotal);

    if (sumAddonsRow && sumAddonsVal) {
      if (addonsTotal > 0) {
        sumAddonsRow.style.display = 'flex';
        sumAddonsVal.textContent = `+${formatPrice(addonsTotal)}`;
      } else {
        sumAddonsRow.style.display = 'none';
      }
    }

    if (sumDiscountRow && sumDiscountVal) {
      if (directOrder.discount > 0) {
        sumDiscountRow.style.display = 'flex';
        sumDiscountVal.textContent = `-${formatPrice(discountAmount)}`;
        if (orderPromoBadge) orderPromoBadge.style.display = 'block';
      } else {
        sumDiscountRow.style.display = 'none';
        if (orderPromoBadge) orderPromoBadge.style.display = 'none';
      }
    }

    if (sumShippingVal) {
      if (directOrder.shippingTier === 'priority') {
        sumShippingVal.textContent = isFreeEligible ? '+$12.00 (PRIORITY)' : formatPrice(shippingFee);
      } else {
        sumShippingVal.textContent = isFreeEligible ? 'FREE EXPRESS' : formatPrice(18);
      }
    }

    if (sumTotalVal) sumTotalVal.textContent = formatPrice(finalAmount);
    if (btnOrderPriceVal) btnOrderPriceVal.textContent = formatPrice(finalAmount);

    return {
      item: currentItem,
      baseSubtotal,
      addonsTotal,
      discountAmount,
      shippingFee,
      finalAmount
    };
  }

  // Silhouette card clicks
  silhouetteCards.forEach(card => {
    card.addEventListener('click', () => {
      silhouetteCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      directOrder.productId = card.getAttribute('data-id');
      if (directOrder.mode === 'bag') {
        directOrder.mode = 'single';
        if (syncModeSingle) syncModeSingle.classList.add('active');
        if (syncModeBag) syncModeBag.classList.remove('active');
        if (orderBlockStep1) orderBlockStep1.style.opacity = '1';
      }
      calculateDirectOrder();
    });
  });

  // Size buttons clicks
  orderSizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      orderSizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      directOrder.size = btn.getAttribute('data-size');
      calculateDirectOrder();
    });
  });

  // Quantity stepper
  if (orderQtyDec) {
    orderQtyDec.addEventListener('click', () => {
      if (directOrder.qty > 1) {
        directOrder.qty -= 1;
        if (orderQtyVal) orderQtyVal.textContent = directOrder.qty;
        calculateDirectOrder();
      }
    });
  }

  if (orderQtyInc) {
    orderQtyInc.addEventListener('click', () => {
      if (directOrder.qty < 10) {
        directOrder.qty += 1;
        if (orderQtyVal) orderQtyVal.textContent = directOrder.qty;
        calculateDirectOrder();
      }
    });
  }

  // Addons listeners
  [addonTote, addonTravel, addonRush].forEach(cb => {
    if (cb) cb.addEventListener('change', calculateDirectOrder);
  });

  // Payment method pills
  payMethodPills.forEach(pill => {
    pill.addEventListener('click', () => {
      payMethodPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const radio = pill.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        directOrder.paymentMethod = radio.value;
        if (orderCardInputs) {
          orderCardInputs.style.display = (radio.value === 'Card') ? 'flex' : 'none';
        }
      }
    });
  });

  // Promo code
  if (orderPromoBtn && orderPromoInput) {
    orderPromoBtn.addEventListener('click', () => {
      const code = orderPromoInput.value.trim().toUpperCase();
      if (code === 'PURPOSE10' || code === 'VIP10') {
        directOrder.discount = 0.10;
        calculateDirectOrder();
        showToast('Code PURPOSE10 applied! 10% VIP Discount unlocked in order station.', 'check-circle-2');
      } else {
        showToast('Invalid promo code. Try "PURPOSE10"', 'alert-circle');
      }
    });
  }

  // Common order submission pipeline
  async function submitConfirmedOrder(orderPayload) {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    });
    const resData = await response.json();
    const confirmedOrder = resData.order || orderPayload;

    // Save to local storage recent orders
    let localOrders = JSON.parse(localStorage.getItem('purpose_recent_orders') || '[]');
    localOrders.unshift(confirmedOrder);
    localStorage.setItem('purpose_recent_orders', JSON.stringify(localOrders));

    // Show confirmation modal
    const refNumEl = document.getElementById('order-ref-num');
    if (refNumEl) refNumEl.textContent = confirmedOrder.orderId;

    const confSummary = document.getElementById('conf-items-summary');
    if (confSummary) {
      confSummary.innerHTML = `
        <div style="font-family:var(--font-mono);font-size:0.82rem;line-height:1.6;">
          <strong style="color:var(--accent-volt);display:block;margin-bottom:6px;">BATCH #004 ALLOCATED TO:</strong>
          <div><strong>${confirmedOrder.customer.fullName}</strong> (${confirmedOrder.customer.email})</div>
          <div>${confirmedOrder.customer.address}, ${confirmedOrder.customer.city}, ${confirmedOrder.customer.zip}, ${confirmedOrder.customer.country}</div>
          <div style="margin:10px 0;padding:8px 0;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);">
            ${confirmedOrder.items.map(item => `
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span>${item.quantity}x ${item.title} (${item.size})</span>
                <strong>${formatPrice(item.totalPrice)}</strong>
              </div>
            `).join('')}
            ${(confirmedOrder.addons || []).map(a => `<div style="color:var(--text-muted);">+ ${a.name} — ${formatPrice(a.price)}</div>`).join('')}
          </div>
          <div style="display:flex;justify-content:space-between;font-size:0.92rem;">
            <span>Total Paid (${confirmedOrder.paymentMethod}):</span>
            <strong style="color:var(--accent-volt);">${formatPrice(confirmedOrder.grandTotal)}</strong>
          </div>
        </div>
      `;
    }

    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
    const checkoutStepForm = document.getElementById('checkout-step-form');
    const checkoutStepSuccess = document.getElementById('checkout-step-success');

    if (checkoutStepForm) checkoutStepForm.style.display = 'none';
    if (checkoutStepSuccess) checkoutStepSuccess.style.display = 'block';
    if (checkoutModal) checkoutModal.classList.add('open');
    if (checkoutModalOverlay) checkoutModalOverlay.classList.add('open');

    // If order was placed from bag, clear cart
    if (directOrder.mode === 'bag') {
      cart = [];
      saveCart();
      updateCartUI();
      updateCartSyncBar();
    }

    showToast(`Order ${confirmedOrder.orderId} Confirmed! Batch secured.`, 'badge-check');
    return confirmedOrder;
  }

  // Handle direct order form submission
  if (directOrderForm) {
    directOrderForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const calc = calculateDirectOrder();
      const name = document.getElementById('ord-name')?.value || 'Marcus Vance';
      const email = document.getElementById('ord-email')?.value || 'marcus@purpose.studio';
      const phone = document.getElementById('ord-phone')?.value || '+1 555-890-4421';
      const address = document.getElementById('ord-address')?.value || '104 Crosby St';
      const city = document.getElementById('ord-city')?.value || 'New York';
      const zip = document.getElementById('ord-zip')?.value || '10012';
      const country = document.getElementById('ord-country')?.value || 'United States';

      let itemsPayload = [];
      if (directOrder.mode === 'bag' && cart.length > 0) {
        itemsPayload = cart.map(i => ({
          id: i.id,
          title: i.title,
          color: i.color,
          size: i.size,
          quantity: i.quantity,
          unitPrice: i.price,
          totalPrice: i.price * i.quantity,
          img: i.img
        }));
      } else {
        itemsPayload = [{
          id: calc.item.id,
          title: calc.item.title,
          color: calc.item.color,
          size: directOrder.size,
          quantity: directOrder.qty,
          unitPrice: calc.item.basePrice,
          totalPrice: calc.baseSubtotal,
          img: calc.item.img
        }];
      }

      const orderPayload = {
        orderId: '#PS-' + Math.floor(100000 + Math.random() * 900000),
        customer: { fullName: name, email, phone, address, city, zip, country },
        items: itemsPayload,
        addons: directOrder.addons,
        paymentMethod: directOrder.paymentMethod,
        shippingTier: directOrder.shippingTier,
        subtotal: calc.baseSubtotal,
        addonsTotal: calc.addonsTotal,
        discount: calc.discountAmount,
        shipping: calc.shippingFee,
        grandTotal: calc.finalAmount
      };

      const btnSubmit = document.getElementById('btn-place-order');
      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `<span class="pulse-dot"></span><span>Securing Batch #004 Allocation...</span>`;
      }

      try {
        await submitConfirmedOrder(orderPayload);
      } catch (err) {
        console.error('Order error:', err);
        showToast('Order saved locally! Confirmation generated.', 'check');
      } finally {
        if (btnSubmit) {
          btnSubmit.disabled = false;
          btnSubmit.innerHTML = `<i data-lucide="lock"></i><span>Confirm & Authorize Order</span><span class="btn-order-price" id="btn-order-price-val">${formatPrice(calc.finalAmount)}</span>`;
          if (window.lucide) window.lucide.createIcons();
        }
      }
    });
  }

  // 1-Click Fastlane Wallets Setup
  const fastlaneAppleBtn = document.getElementById('fastlane-apple-btn');
  const fastlaneGoogleBtn = document.getElementById('fastlane-google-btn');
  const fastlaneShopBtn = document.getElementById('fastlane-shop-btn');
  const fastlanePaypalBtn = document.getElementById('fastlane-paypal-btn');
  const fastlaneModal = document.getElementById('fastlane-modal');
  const fastlaneModalOverlay = document.getElementById('fastlane-modal-overlay');
  const flCloseBtn = document.getElementById('fl-close-btn');
  const btnFastlaneConfirm = document.getElementById('btn-fastlane-confirm');
  const flWalletTitle = document.getElementById('fl-wallet-title');
  const flTotalAmount = document.getElementById('fl-total-amount');
  const flCardVal = document.getElementById('fl-card-val');
  const flItemsVal = document.getElementById('fl-items-val');
  const flDestVal = document.getElementById('fl-dest-val');
  const flShipVal = document.getElementById('fl-ship-val');
  const flBioHint = document.getElementById('fl-bio-hint');

  function openFastlaneSheet(walletType) {
    activeFastlaneWallet = walletType;
    const calc = calculateDirectOrder();

    if (flTotalAmount) flTotalAmount.textContent = formatPrice(calc.finalAmount);

    let cardDesc = 'Apple Card (•••• 8492)';
    let hintDesc = 'Double Click Side Button or Tap Below to Authorize';

    if (walletType === 'Apple Pay') {
      if (flWalletTitle) flWalletTitle.textContent = 'Apple Pay Express';
      cardDesc = '<i data-lucide="smartphone"></i> Apple Card (•••• 8492)';
      hintDesc = 'Biometric Face ID Scan Armed — Tap to Pay';
    } else if (walletType === 'Google Pay') {
      if (flWalletTitle) flWalletTitle.textContent = 'Google Pay Express';
      cardDesc = '<i data-lucide="credit-card"></i> GPay Chase Visa (•••• 3091)';
      hintDesc = 'Biometric Passkey Armed — Tap to Pay';
    } else if (walletType === 'Shop Pay') {
      if (flWalletTitle) flWalletTitle.textContent = 'Shop Pay 1-Click';
      cardDesc = '<i data-lucide="shopping-bag"></i> Shop Pay Stored Card (•••• 5124)';
      hintDesc = 'SMS Code Verified — Tap to Authorize';
    } else if (walletType === 'PayPal') {
      if (flWalletTitle) flWalletTitle.textContent = 'PayPal Express';
      cardDesc = '<i data-lucide="shield"></i> PayPal Balance / Preferred Card';
      hintDesc = 'One-Touch PayPal Express Active';
    }

    if (flCardVal) flCardVal.innerHTML = cardDesc;
    if (flBioHint) flBioHint.textContent = hintDesc;

    if (flItemsVal) {
      if (directOrder.mode === 'bag' && cart.length > 0) {
        const count = cart.reduce((s, i) => s + i.quantity, 0);
        flItemsVal.textContent = `${count} Hoodies (${cart.map(i => i.title.split('—')[0].trim()).slice(0, 2).join(', ')})`;
      } else {
        flItemsVal.textContent = `${calc.item.shortTitle} (Size ${directOrder.size})`;
      }
    }

    const name = document.getElementById('ord-name')?.value || 'Marcus Vance';
    const city = document.getElementById('ord-city')?.value || 'New York';
    if (flDestVal) flDestVal.textContent = `${name} • ${city}, USA`;

    if (flShipVal) {
      flShipVal.textContent = (directOrder.shippingTier === 'priority')
        ? 'DHL Priority Next-Flight (+$12.00)'
        : 'DHL Express Worldwide (FREE)';
    }

    if (fastlaneModal) fastlaneModal.classList.add('open');
    if (fastlaneModalOverlay) fastlaneModalOverlay.classList.add('open');
    if (window.lucide) window.lucide.createIcons();
  }

  function closeFastlaneSheet() {
    if (fastlaneModal) fastlaneModal.classList.remove('open');
    if (fastlaneModalOverlay) fastlaneModalOverlay.classList.remove('open');
  }

  if (fastlaneAppleBtn) fastlaneAppleBtn.addEventListener('click', () => openFastlaneSheet('Apple Pay'));
  if (fastlaneGoogleBtn) fastlaneGoogleBtn.addEventListener('click', () => openFastlaneSheet('Google Pay'));
  if (fastlaneShopBtn) fastlaneShopBtn.addEventListener('click', () => openFastlaneSheet('Shop Pay'));
  if (fastlanePaypalBtn) fastlanePaypalBtn.addEventListener('click', () => openFastlaneSheet('PayPal'));

  if (flCloseBtn) flCloseBtn.addEventListener('click', closeFastlaneSheet);
  if (fastlaneModalOverlay) fastlaneModalOverlay.addEventListener('click', closeFastlaneSheet);

  if (btnFastlaneConfirm) {
    btnFastlaneConfirm.addEventListener('click', async () => {
      btnFastlaneConfirm.disabled = true;
      btnFastlaneConfirm.innerHTML = `<span class="pulse-dot"></span><span>Authorizing ${activeFastlaneWallet}...</span>`;

      const calc = calculateDirectOrder();
      const name = document.getElementById('ord-name')?.value || 'Marcus Vance';
      const email = document.getElementById('ord-email')?.value || 'marcus@purpose.studio';
      const phone = document.getElementById('ord-phone')?.value || '+1 (555) 890-4421';
      const address = document.getElementById('ord-address')?.value || '104 Crosby St, Soho';
      const city = document.getElementById('ord-city')?.value || 'New York';
      const zip = document.getElementById('ord-zip')?.value || '10012';
      const country = document.getElementById('ord-country')?.value || 'United States';

      let itemsPayload = [];
      if (directOrder.mode === 'bag' && cart.length > 0) {
        itemsPayload = cart.map(i => ({
          id: i.id,
          title: i.title,
          color: i.color,
          size: i.size,
          quantity: i.quantity,
          unitPrice: i.price,
          totalPrice: i.price * i.quantity,
          img: i.img
        }));
      } else {
        itemsPayload = [{
          id: calc.item.id,
          title: calc.item.title,
          color: calc.item.color,
          size: directOrder.size,
          quantity: directOrder.qty,
          unitPrice: calc.item.basePrice,
          totalPrice: calc.baseSubtotal,
          img: calc.item.img
        }];
      }

      const orderPayload = {
        orderId: '#PS-' + Math.floor(100000 + Math.random() * 900000),
        customer: { fullName: name, email, phone, address, city, zip, country },
        items: itemsPayload,
        addons: directOrder.addons,
        paymentMethod: activeFastlaneWallet,
        shippingTier: directOrder.shippingTier,
        subtotal: calc.baseSubtotal,
        addonsTotal: calc.addonsTotal,
        discount: calc.discountAmount,
        shipping: calc.shippingFee,
        grandTotal: calc.finalAmount
      };

      setTimeout(async () => {
        try {
          await submitConfirmedOrder(orderPayload);
          closeFastlaneSheet();
        } catch (e) {
          console.error(e);
        } finally {
          btnFastlaneConfirm.disabled = false;
          btnFastlaneConfirm.innerHTML = `<i data-lucide="fingerprint"></i><span id="fl-btn-text">Authorize & Confirm Payment</span>`;
          if (window.lucide) window.lucide.createIcons();
        }
      }, 700);
    });
  }

  // Live Track Order button in Confirmation receipt
  const confTrackOrderBtn = document.getElementById('conf-track-order-btn');
  if (confTrackOrderBtn) {
    confTrackOrderBtn.addEventListener('click', () => {
      const checkoutModal = document.getElementById('checkout-modal');
      const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
      if (checkoutModal) checkoutModal.classList.remove('open');
      if (checkoutModalOverlay) checkoutModalOverlay.classList.remove('open');

      const refNum = document.getElementById('order-ref-num')?.textContent || '';
      const tabBtnTrack = document.getElementById('tab-btn-track');
      const trackOrderInput = document.getElementById('track-order-input');

      if (tabBtnTrack) tabBtnTrack.click();
      if (trackOrderInput && refNum) {
        trackOrderInput.value = refNum;
        handleOrderLookup();
      }

      const orderSec = document.getElementById('order');
      if (orderSec) orderSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Order Tracker lookup
  const btnSearchOrder = document.getElementById('btn-search-order');
  const trackOrderInput = document.getElementById('track-order-input');
  const trackerResultBox = document.getElementById('tracker-result-box');

  async function handleOrderLookup() {
    const query = trackOrderInput?.value.trim();
    if (!query) {
      showToast('Please enter an order reference number (e.g., #PS-849204)', 'alert-circle');
      return;
    }

    if (trackerResultBox) {
      trackerResultBox.style.display = 'block';
      trackerResultBox.innerHTML = `<div style="text-align:center;padding:20px;font-family:var(--font-mono);"><span class="pulse-dot"></span> Locating Batch #004 order in system...</div>`;
    }

    try {
      const response = await fetch('/api/orders?id=' + encodeURIComponent(query));
      let order = null;
      if (response.ok) {
        const data = await response.json();
        order = data.order;
      }

      if (!order) {
        // Check local storage fallback
        const localOrders = JSON.parse(localStorage.getItem('purpose_recent_orders') || '[]');
        order = localOrders.find(o => o.orderId.toLowerCase() === query.toLowerCase());
      }

      // If still not found, generate a simulated active order for demo experience if user typed a valid pattern
      if (!order && query.toUpperCase().startsWith('#PS-')) {
        order = {
          orderId: query.toUpperCase(),
          createdAt: new Date().toISOString(),
          customer: { fullName: 'Streetwear Collector', city: 'Los Angeles', country: 'United States' },
          items: [{ title: 'The Archive Pullover — Vintage Washed Black', size: 'L', quantity: 1, totalPrice: 145 }],
          grandTotal: 145,
          status: 'Garment Inspection & Steaming'
        };
      }

      if (order) {
        trackerResultBox.innerHTML = `
          <div style="font-family:var(--font-mono);font-size:0.85rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,0.12);padding-bottom:12px;margin-bottom:16px;">
              <div>
                <span style="color:var(--accent-volt);font-size:0.75rem;letter-spacing:0.1em;display:block;">OFFICIAL RECORD FOUND</span>
                <strong style="font-size:1.15rem;font-family:var(--font-display);">${order.orderId}</strong>
              </div>
              <span style="background:rgba(212,255,63,0.15);color:var(--accent-volt);padding:4px 10px;border-radius:4px;font-size:0.74rem;">BATCH #004 ALLOCATED</span>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;color:var(--text-secondary);margin-bottom:20px;">
              <div>Recipient: <strong style="color:var(--text-primary);">${order.customer?.fullName || 'Collector'}</strong></div>
              <div>Destination: <strong style="color:var(--text-primary);">${order.customer?.city || 'New York'}, ${order.customer?.country || 'USA'}</strong></div>
              <div>Item: <strong style="color:var(--text-primary);">${order.items?.[0]?.title || '500 GSM Heavyweight Hoodie'} (${order.items?.[0]?.size || 'L'})</strong></div>
              <div>Courier: <strong style="color:var(--accent-volt);">DHL Express Worldwide</strong></div>
            </div>

            <div class="timeline-pipeline">
              <div class="timeline-step completed">
                <div class="step-marker"><i data-lucide="check"></i></div>
                <span class="step-title">01. Payment Authorized</span>
              </div>
              <div class="timeline-step completed">
                <div class="step-marker"><i data-lucide="check"></i></div>
                <span class="step-title">02. Batch Inventory Allocated</span>
              </div>
              <div class="timeline-step active">
                <div class="step-marker"><i data-lucide="sparkles"></i></div>
                <span class="step-title">03. Quality Steam Press</span>
              </div>
              <div class="timeline-step">
                <div class="step-marker">4</div>
                <span class="step-title">04. DHL Express Airway</span>
              </div>
            </div>

            <div style="background:rgba(255,255,255,0.04);border-radius:4px;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;margin-top:16px;">
              <span style="color:var(--text-muted);font-size:0.75rem;">Estimated Delivery: 3 Business Days via DHL Air Courier</span>
              <span style="color:var(--accent-volt);font-weight:700;font-size:0.75rem;">AIRWAY BILL #DHL-882914-04</span>
            </div>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      } else {
        trackerResultBox.innerHTML = `
          <div style="text-align:center;padding:20px;font-family:var(--font-mono);color:var(--text-secondary);">
            <i data-lucide="alert-circle" style="color:var(--accent-crimson);margin-bottom:8px;width:32px;height:32px;"></i>
            <div style="color:var(--text-primary);font-size:0.95rem;margin-bottom:4px;">No active order found for "${query}"</div>
            <p style="font-size:0.78rem;color:var(--text-muted);">Please verify your order reference number or place a test order using the Fast Order Form tab.</p>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
    } catch (e) {
      console.error(e);
      showToast('Error querying order status', 'alert-circle');
    }
  }

  if (btnSearchOrder) btnSearchOrder.addEventListener('click', handleOrderLookup);
  if (trackOrderInput) {
    trackOrderInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleOrderLookup();
      }
    });
  }

  // Pre-calculate direct order
  calculateDirectOrder();
  updateCartSyncBar();

  // Initial UI Render
  updateWishlistBadge();
  updateCartUI();
  updateAllPricesOnPage();


  /* ==========================================================================
     TIKTOK SHOP INTERACTIVE ENGINE & UI LOGIC
     ========================================================================== */
  function initTikTokShopFeatures() {
    // 1. TikTok Central Search Experience
    const ttSearchInput = document.getElementById('tt-search-input');
    const ttSearchForm = document.getElementById('tt-header-search-form');
    const ttCamBtn = document.getElementById('tt-cam-search-btn');
    const trendingTags = document.querySelectorAll('.tt-trending-tag');

    const searchPlaceholders = [
      "Search '500 GSM Archive Pullover'...",
      "Search 'Flash Sale 25% OFF'...",
      "Search 'Two-Way Zip Dark Asphalt'...",
      "Search 'Chalk Bone Alabaster'...",
      "Search 'Creator Live Try-On'...",
      "Search '100% Combed French Terry'..."
    ];
    let placeholderIdx = 0;
    if (ttSearchInput) {
      setInterval(() => {
        placeholderIdx = (placeholderIdx + 1) % searchPlaceholders.length;
        ttSearchInput.setAttribute('placeholder', searchPlaceholders[placeholderIdx]);
      }, 3500);

      const performTTSearch = (query) => {
        if (!query) return;
        const q = query.toLowerCase().trim();
        const cards = document.querySelectorAll('.product-card');
        let matched = 0;
        cards.forEach(card => {
          const title = (card.querySelector('.product-name')?.textContent || '').toLowerCase();
          const cut = (card.querySelector('.product-cut')?.textContent || '').toLowerCase();
          const category = (card.getAttribute('data-category') || '').toLowerCase();
          if (title.includes(q) || cut.includes(q) || category.includes(q) || q === 'flash' || q === 'voucher') {
            card.style.display = '';
            matched++;
          } else {
            card.style.display = 'none';
          }
        });
        showToast(`Archive Search: Found ${matched} hoodies for "${query}"`, 'search');
        const collectionEl = document.getElementById('collection');
        if (collectionEl) collectionEl.scrollIntoView({ behavior: 'smooth' });
      };

      if (ttSearchForm) {
        ttSearchForm.addEventListener('submit', (e) => {
          e.preventDefault();
          performTTSearch(ttSearchInput.value);
        });
      }

      trendingTags.forEach(tag => {
        tag.addEventListener('click', () => {
          const q = tag.getAttribute('data-query') || tag.textContent.trim();
          ttSearchInput.value = q;
          performTTSearch(q);
        });
      });
    }

    if (ttCamBtn) {
      ttCamBtn.addEventListener('click', () => {
        showToast('📷 AI Visual Lens: Scanning image... Matched 500 GSM French Terry!', 'camera');
        const firstCard = document.querySelector('.product-card');
        if (firstCard) {
          firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstCard.style.outline = '3px solid var(--accent-volt)';
          setTimeout(() => { firstCard.style.outline = 'none'; }, 3000);
        }
      });
    }

    // 2. TikTok Shop Category Ribbon Smooth Scroll & Active Indicator
    const ribbonLinks = document.querySelectorAll('.tt-cat-item');
    ribbonLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          ribbonLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // 3. TikTok Flash Deal Countdown Timer (Hours, Minutes, Seconds)
    const hoursEl = document.getElementById('tt-timer-hours');
    const minutesEl = document.getElementById('tt-timer-minutes');
    const secondsEl = document.getElementById('tt-timer-seconds');
    if (hoursEl && minutesEl && secondsEl) {
      let totalSeconds = 2 * 3600 + 44 * 60 + 19;
      setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          const h = Math.floor(totalSeconds / 3600);
          const m = Math.floor((totalSeconds % 3600) / 60);
          const s = totalSeconds % 60;
          hoursEl.textContent = String(h).padStart(2, '0');
          minutesEl.textContent = String(m).padStart(2, '0');
          secondsEl.textContent = String(s).padStart(2, '0');
        }
      }, 1000);
    }

    // 4. TikTok Mega Voucher Center "Claim" Interactivity
    const claimAllBtn = document.getElementById('tt-claim-all-vouchers-btn');
    const couponBtns = document.querySelectorAll('.tt-coupon-btn');

    couponBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (btn.classList.contains('claimed')) {
          showToast('Coupon already claimed and applied to your cart!', 'ticket');
        } else {
          btn.classList.add('claimed');
          btn.textContent = 'Claimed ✓';
          showToast('🎟️ Drop 04 Voucher claimed! Discount active.', 'ticket');
        }
      });
    });

    if (claimAllBtn) {
      claimAllBtn.addEventListener('click', () => {
        couponBtns.forEach(btn => {
          btn.classList.add('claimed');
          btn.textContent = 'Claimed ✓';
        });
        claimAllBtn.classList.add('claimed');
        claimAllBtn.innerHTML = '<i data-lucide="check-circle"></i> <span>All 4 Vouchers Claimed ($55 Unlocked)</span>';
        if (window.lucide) window.lucide.createIcons();
        showToast('🎉 All 4 Drop 04 Vouchers Claimed! $55 discount unlocked!', 'gift');
      });
    }

    // 5. TikTok LIVE Shopping Studio Simulation
    const liveVideoWrap = document.getElementById('tt-live-video-wrap');
    const heartsLayer = document.getElementById('tt-floating-hearts-layer');
    const sendHeartBtn = document.getElementById('tt-send-heart-btn');
    const chatInput = document.getElementById('tt-live-chat-input');
    const chatMessagesWrap = document.getElementById('tt-live-chat-messages');

    const spawnFloatingHeart = (emoji = '❤️') => {
      if (!heartsLayer) return;
      const heart = document.createElement('div');
      heart.className = 'tt-floating-heart';
      const emojis = ['❤️', '🔥', '✨', '💖', '⚡', '💯'];
      heart.textContent = emoji === 'random' ? emojis[Math.floor(Math.random() * emojis.length)] : emoji;
      heart.style.left = Math.floor(Math.random() * 50) + 'px';
      heartsLayer.appendChild(heart);
      setTimeout(() => heart.remove(), 2500);
    };

    if (liveVideoWrap) {
      liveVideoWrap.addEventListener('click', (e) => {
        if (!e.target.closest('#tt-yellow-basket-pin')) {
          spawnFloatingHeart('random');
        }
      });
    }

    if (sendHeartBtn) {
      sendHeartBtn.addEventListener('click', () => {
        spawnFloatingHeart('❤️');
        spawnFloatingHeart('🔥');
      });
    }

    const liveChatStream = [
      { user: '@toronto_fits', text: 'Does the 500 GSM stay structured after 50 washes?', vip: false },
      { user: 'Host @purpose.official', text: 'Yes! Pre-shrunk with silicone wash, stays rock solid!', vip: true },
      { user: '@alex_brooklyn', text: 'Copped the Dark Asphalt Two-Way Zip! That matte zipper is clean ✨', vip: false },
      { user: '@copenhagen_drip', text: 'The hood stands straight up without drawstrings, exactly what I needed 💯', vip: false },
      { user: '@hype_collector', text: 'Batch #004 is almost gone, just 42 pieces left!', vip: false },
      { user: 'Host @purpose.official', text: 'Tap the yellow basket #1 below to lock in the $55 live voucher!', vip: true },
      { user: '@chloe_vintage', text: 'Chalk Bone is unbleached organic cotton right? Ordering now 🤍', vip: false },
      { user: '@streetwear_daily', text: 'Shipping to Europe took only 3 days for Drop 03, super fast! 🚀', vip: false }
    ];
    let chatIdx = 0;
    if (chatMessagesWrap) {
      setInterval(() => {
        const item = liveChatStream[chatIdx];
        chatIdx = (chatIdx + 1) % liveChatStream.length;
        const bubble = document.createElement('div');
        bubble.className = 'tt-chat-bubble';
        bubble.innerHTML = `
          <span class="tt-chat-user ${item.vip ? 'host' : ''}">${item.user}:</span>
          <span class="tt-chat-text">${item.text}</span>
        `;
        chatMessagesWrap.appendChild(bubble);
        chatMessagesWrap.scrollTop = chatMessagesWrap.scrollHeight;
        if (chatMessagesWrap.children.length > 25) {
          chatMessagesWrap.firstElementChild.remove();
        }
      }, 3200);

      if (chatInput) {
        chatInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && chatInput.value.trim()) {
            const userText = chatInput.value.trim();
            chatInput.value = '';
            const bubble = document.createElement('div');
            bubble.className = 'tt-chat-bubble';
            bubble.innerHTML = `
              <span class="tt-chat-user vip">You:</span>
              <span class="tt-chat-text">${userText}</span>
            `;
            chatMessagesWrap.appendChild(bubble);
            chatMessagesWrap.scrollTop = chatMessagesWrap.scrollHeight;
            spawnFloatingHeart('🔥');
          }
        });
      }
    }

    // 6. Yellow Basket Pin #1 Click Action
    const livePinBuyBtn = document.getElementById('tt-live-pin-buy-btn');
    if (livePinBuyBtn) {
      livePinBuyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openTikTokBottomSheet({
          id: 'hoodie-black',
          title: 'The Archive Pullover — Vintage Washed Black (500 GSM)',
          price: 125,
          origPrice: 180,
          color: 'Vintage Washed Black',
          img: 'assets/hoodie_black.jpg'
        });
      });
    }

    // 6.5 Live Camera Switcher (Try-On, Pin #1 Studio, 500 GSM Weave)
    const camSwitchBtns = document.querySelectorAll('.tt-cam-switch-btn');
    const liveStreamImg = document.getElementById('tt-live-stream-img');
    if (camSwitchBtns.length && liveStreamImg) {
      camSwitchBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          camSwitchBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const targetImg = btn.getAttribute('data-img');
          liveStreamImg.style.opacity = '0.3';
          setTimeout(() => {
            liveStreamImg.src = targetImg;
            liveStreamImg.style.opacity = '1';
          }, 150);
          showToast(`📹 Switched to ${btn.textContent.trim()} camera!`, 'video');
        });
      });
    }

    // 7. Floating TikTok LIVE Mini-PIP Player
    const livePipPlayer = document.getElementById('tt-live-pip-player');
    const livePipCloseBtn = document.getElementById('tt-pip-close-btn');
    const livePipShopBtn = document.getElementById('tt-pip-shop-btn');
    const liveSection = document.getElementById('tiktok-live');

    let pipDismissed = false;
    if (livePipPlayer && liveSection) {
      window.addEventListener('scroll', () => {
        if (pipDismissed) return;
        const rect = liveSection.getBoundingClientRect();
        if (rect.bottom < -100) {
          livePipPlayer.classList.add('active');
        } else {
          livePipPlayer.classList.remove('active');
        }
      }, { passive: true });

      if (livePipCloseBtn) {
        livePipCloseBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          pipDismissed = true;
          livePipPlayer.classList.remove('active');
        });
      }

      if (livePipShopBtn) {
        livePipShopBtn.addEventListener('click', () => {
          openTikTokBottomSheet({
            id: 'hoodie-black',
            title: 'The Archive Pullover — Vintage Washed Black (500 GSM)',
            price: 125,
            origPrice: 180,
            color: 'Vintage Washed Black',
            img: 'assets/hoodie_black.jpg'
          });
        });
      }
    }

    // 8. TikTok "Shop The Feed" (Reels Carousel) Actions
    const reelCards = document.querySelectorAll('.tt-reel-card');
    reelCards.forEach(card => {
      const video = card.querySelector('.tt-reel-video');
      const likeBtn = card.querySelector('.tt-reel-action-btn[data-action="like"]');
      const commentBtn = card.querySelector('.tt-reel-action-btn[data-action="comment"]');
      const shareBtn = card.querySelector('.tt-reel-action-btn[data-action="share"]');
      const shopWidget = card.querySelector('.tt-reel-shop-widget');

      card.addEventListener('click', (e) => {
        if (e.target.closest('.tt-reel-actions-rail') || e.target.closest('.tt-reel-shop-widget')) return;
        if (video) {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        } else if (shopWidget) {
          shopWidget.click();
        }
      });

      if (likeBtn) {
        likeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const countEl = likeBtn.querySelector('.tt-reel-action-count');
          if (!likeBtn.classList.contains('liked')) {
            likeBtn.classList.add('liked');
            likeBtn.querySelector('.tt-reel-action-icon').textContent = '❤️';
            showToast('❤️ Saved to Liked Hoodies!', 'heart');
            if (countEl) {
              const current = parseFloat(countEl.textContent) || 40;
              countEl.textContent = (current + 0.1).toFixed(1) + 'K';
            }
          } else {
            likeBtn.classList.remove('liked');
          }
        });
      }

      if (commentBtn) {
        commentBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          showToast('💬 Top Review: "500 GSM loopback cotton has unbeatable drape and hood structure!"', 'message-circle');
        });
      }

      if (shareBtn) {
        shareBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          navigator.clipboard?.writeText(window.location.href);
          showToast('🔗 Hoodie link copied to clipboard!', 'share-2');
        });
      }

      if (shopWidget) {
        shopWidget.addEventListener('click', (e) => {
          e.stopPropagation();
          const pId = shopWidget.getAttribute('data-id');
          const pTitle = shopWidget.getAttribute('data-title');
          const pPrice = parseFloat(shopWidget.getAttribute('data-price')) || 145;
          const pImg = shopWidget.getAttribute('data-img');
          openTikTokBottomSheet({
            id: pId,
            title: pTitle,
            price: pPrice,
            origPrice: pPrice + 35,
            color: 'Selected Silhouette',
            img: pImg
          });
        });
      }
    });

    // 9. Enhance All 40 Product Cards with TikTok Badges & Red "Buy Now" CTA
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
      const info = card.querySelector('.product-info');
      const addCartBtn = card.querySelector('.btn-add-to-cart');
      if (!info) return;

      if (!info.querySelector('.tt-product-social-row')) {
        const socialRow = document.createElement('div');
        socialRow.className = 'tt-product-social-row';
        const soldCount = (12.4 + (index % 8) * 0.9).toFixed(1);
        socialRow.innerHTML = `
          <span style="color:var(--accent-gold); font-size: 0.85rem;">★★★★★</span>
          <span class="tt-sold-badge">${soldCount}k sold</span>
          <span class="tt-shipping-pill">🚚 Free Express</span>
        `;
        const nameEl = info.querySelector('.product-name');
        if (nameEl) nameEl.after(socialRow);
      }

      if (!info.querySelector('.tt-card-voucher-pill')) {
        const voucherPill = document.createElement('div');
        voucherPill.className = 'tt-card-voucher-pill';
        voucherPill.innerHTML = `🎟️ Extra $20 off with voucher`;
        const pricingEl = info.querySelector('.product-pricing');
        if (pricingEl) pricingEl.after(voucherPill);
      }

      if (addCartBtn && !info.querySelector('.btn-tt-buy-now')) {
        const pId = addCartBtn.getAttribute('data-id') || 'hoodie';
        const pTitle = addCartBtn.getAttribute('data-title') || 'Archive Hoodie';
        const pPrice = parseFloat(addCartBtn.getAttribute('data-price')) || 145;
        const pImg = addCartBtn.getAttribute('data-img') || 'assets/hoodie_black.jpg';
        const pColor = addCartBtn.getAttribute('data-color') || 'Vintage Black';

        const buyNowBtn = document.createElement('button');
        buyNowBtn.type = 'button';
        buyNowBtn.className = 'btn-tt-buy-now';
        buyNowBtn.innerHTML = `⚡ Buy Now`;
        buyNowBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const activeSizeBtn = card.querySelector('.size-btn.active');
          const size = activeSizeBtn ? activeSizeBtn.getAttribute('data-size') : 'L';
          openTikTokBottomSheet({
            id: pId,
            title: pTitle,
            price: pPrice,
            origPrice: pPrice + 35,
            color: pColor,
            img: pImg,
            size: size
          });
        });

        const actionsRow = document.createElement('div');
        actionsRow.className = 'tt-card-actions-row';
        addCartBtn.parentNode.insertBefore(actionsRow, addCartBtn);
        actionsRow.appendChild(addCartBtn);
        actionsRow.appendChild(buyNowBtn);
      }
    });

    // 10. TikTok Shop Signature Quick Buy Bottom Sheet Modal
    const bottomSheetOverlay = document.getElementById('tt-bottom-sheet-overlay');
    const sheetThumb = document.getElementById('tt-sheet-thumb');
    const sheetTitle = document.getElementById('tt-sheet-title');
    const sheetFinalPrice = document.getElementById('tt-sheet-final-price');
    const sheetOrigPrice = document.getElementById('tt-sheet-orig-price');
    const sheetCtaPrice = document.getElementById('tt-sheet-cta-price');
    const sheetCloseBtn = document.getElementById('tt-sheet-close-btn');
    const sheetCheckoutBtn = document.getElementById('tt-sheet-checkout-btn');
    const sizePills = document.querySelectorAll('.tt-sheet-size-pill');
    const qtyMinus = document.getElementById('tt-qty-minus');
    const qtyPlus = document.getElementById('tt-qty-plus');
    const qtyVal = document.getElementById('tt-qty-val');

    let currentSheetItem = null;
    let currentSheetQty = 1;
    let currentSheetSize = 'L';

    function openTikTokBottomSheet(itemData) {
      currentSheetItem = itemData;
      currentSheetQty = 1;
      if (qtyVal) qtyVal.textContent = '1';

      if (sheetThumb) sheetThumb.src = itemData.img || 'assets/hoodie_black.jpg';
      if (sheetTitle) sheetTitle.textContent = itemData.title || 'The Archive Pullover — 500 GSM';
      const finalPrice = itemData.price || 125;
      const origPrice = itemData.origPrice || (finalPrice + 55);

      if (sheetFinalPrice) sheetFinalPrice.textContent = `$${finalPrice.toFixed(2)}`;
      if (sheetOrigPrice) sheetOrigPrice.textContent = `$${origPrice.toFixed(2)}`;
      if (sheetCtaPrice) sheetCtaPrice.textContent = `$${finalPrice.toFixed(2)}`;

      if (itemData.size) {
        currentSheetSize = itemData.size;
        sizePills.forEach(pill => {
          pill.classList.toggle('active', pill.getAttribute('data-size') === itemData.size);
        });
      }

      if (bottomSheetOverlay) bottomSheetOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.lucide) window.lucide.createIcons();
    }

    function closeTikTokBottomSheet() {
      if (bottomSheetOverlay) bottomSheetOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (sheetCloseBtn) sheetCloseBtn.addEventListener('click', closeTikTokBottomSheet);
    if (bottomSheetOverlay) {
      bottomSheetOverlay.addEventListener('click', (e) => {
        if (e.target === bottomSheetOverlay) closeTikTokBottomSheet();
      });
    }

    sizePills.forEach(pill => {
      pill.addEventListener('click', () => {
        sizePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentSheetSize = pill.getAttribute('data-size');
      });
    });

    if (qtyMinus && qtyPlus && qtyVal) {
      qtyMinus.addEventListener('click', () => {
        if (currentSheetQty > 1) {
          currentSheetQty--;
          qtyVal.textContent = currentSheetQty;
          const base = (currentSheetItem?.price || 125) * currentSheetQty;
          if (sheetFinalPrice) sheetFinalPrice.textContent = `$${base.toFixed(2)}`;
          if (sheetCtaPrice) sheetCtaPrice.textContent = `$${base.toFixed(2)}`;
        }
      });
      qtyPlus.addEventListener('click', () => {
        if (currentSheetQty < 10) {
          currentSheetQty++;
          qtyVal.textContent = currentSheetQty;
          const base = (currentSheetItem?.price || 125) * currentSheetQty;
          if (sheetFinalPrice) sheetFinalPrice.textContent = `$${base.toFixed(2)}`;
          if (sheetCtaPrice) sheetCtaPrice.textContent = `$${base.toFixed(2)}`;
        }
      });
    }

    if (sheetCheckoutBtn) {
      sheetCheckoutBtn.addEventListener('click', async () => {
        closeTikTokBottomSheet();
        showToast('⚡ Processing 1-Click Fastlane Checkout...', 'lock');

        const orderId = '#PS-' + Math.floor(100000 + Math.random() * 900000);
        const orderData = {
          orderId: orderId,
          source: 'Batch #004 Fastlane Checkout',
          customer: {
            fullName: 'PURPOSE STUDIO Member',
            email: 'member@purposestudio.lab',
            address: '450 Mercer St, Soho, NY 10013',
            city: 'New York',
            zip: '10013'
          },
          items: [{
            id: currentSheetItem?.id || 'hoodie-black',
            title: currentSheetItem?.title || 'The Archive Pullover - 500 GSM',
            price: currentSheetItem?.price || 125,
            size: currentSheetSize,
            color: currentSheetItem?.color || 'Vintage Washed Black',
            img: currentSheetItem?.img || 'assets/hoodie_black.jpg',
            quantity: currentSheetQty
          }],
          voucherApplied: 'PURPOSE_DROP04_VOUCHER',
          total: (currentSheetItem?.price || 125) * currentSheetQty,
          status: 'Confirmed (Batch #004 Heavyweight Allocation)'
        };

        try {
          await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
          });
        } catch (err) {
          console.warn('Local storage order fallback', err);
        }

        // Show confirmation modal
        const checkoutModal = document.getElementById('checkout-modal');
        const checkoutOverlay = document.getElementById('checkout-modal-overlay');
        const stepForm = document.getElementById('checkout-step-form');
        const stepSuccess = document.getElementById('checkout-step-success');
        const orderRefNum = document.getElementById('order-ref-num');
        const confItemsSummary = document.getElementById('conf-items-summary');

        if (orderRefNum) orderRefNum.textContent = orderId;
        if (confItemsSummary) {
          confItemsSummary.innerHTML = `
            <div style="display:flex;align-items:center;gap:12px;padding:12px;background:rgba(255,255,255,0.04);border-radius:10px;border:1px solid rgba(254,44,85,0.3);">
              <img src="${currentSheetItem?.img || 'assets/hoodie_black.jpg'}" style="width:48px;height:48px;border-radius:6px;object-fit:cover;" />
              <div style="flex:1;">
                <div style="font-weight:700;font-size:0.85rem;color:#fff;">${currentSheetItem?.title}</div>
                <div style="font-size:0.75rem;color:#a1a1aa;">Size ${currentSheetSize} • Qty ${currentSheetQty} • Drop 04 Voucher Applied</div>
              </div>
              <div style="font-weight:800;color:var(--accent-volt);font-size:1.1rem;">$${((currentSheetItem?.price || 125) * currentSheetQty).toFixed(2)}</div>
            </div>
          `;
        }

        if (stepForm) stepForm.style.display = 'none';
        if (stepSuccess) stepSuccess.style.display = 'block';
        if (checkoutModal) checkoutModal.classList.add('active');
        if (checkoutOverlay) checkoutOverlay.classList.add('active');

        showToast(`🎉 Order Placed Successfully! Reference: ${orderId}`, 'check-circle');
      });
    }

    // 11. Sync Bottom Dock Cart Badge
    const dockCartBadge = document.getElementById('tt-dock-cart-badge');
    const dockCartBtn = document.getElementById('tt-dock-cart-btn');
    if (dockCartBadge && typeof cart !== 'undefined') {
      setInterval(() => {
        dockCartBadge.textContent = cart.length;
      }, 500);
    }
    if (dockCartBtn) {
      dockCartBtn.addEventListener('click', () => {
        openCartDrawer();
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // Initialize TikTok Shop Features
  initTikTokShopFeatures();

});

