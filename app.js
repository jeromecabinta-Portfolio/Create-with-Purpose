/**
 * CREATE WITH PURPOSE - COMMERCIAL AI VIDEO PORTFOLIO
 * Author: Jerome Cabinta
 */

document.addEventListener('DOMContentLoaded', () => {
  initShowcaseFilters();
  initSampleOutputViewer();
  initAspectRatioSwitcher();
  initComparisonSlider();
  initVideoTheaterModal();
  initCaseStudyModal();
  initBookingEstimator();
  initMobileMenu();
  initCardHoverVideoPlayback();
});

/* ==========================================================================
   E-Commerce & Brand Commercial Portfolio Projects
   ========================================================================== */
const videoProjects = [
  // ==========================================
  // Nike Performance & Sportswear Commercials
  // ==========================================
  {
    id: 'project-nike-vaporfly',
    title: 'Nike ZoomX Vaporfly 3: Carbon Energy Return',
    client: 'Nike Performance Athletics • Elite Marathon Series',
    category: 'nike running promo',
    duration: '0:35',
    campaignType: 'Olympic & Marathon Major Performance Campaign',
    deliverables: '4K Broadcast Master (16:9), 9:16 Exploded Carbon Plate Hook, 1:1 Feed Cut',
    roas: '+610% ROAS (Marathon Pre-Orders)',
    ctr: '7.4% CTR',
    turnaround: '48 Hours',
    image: 'assets/nike_zoomx_vaporfly.jpg',
    video: 'assets/nike_zoomx_vaporfly.webm',
    synopsis: 'High-tech athletic commercial featuring an exploded architectural view of the Nike ZoomX Vaporfly with full-length carbon Flyplate and wind-tunnel laser streamlines.',
    strategy: 'Engineered an exploded 3D CAD breakdown highlighting proprietary ZoomX foam and full-length carbon fiber Flyplate. Visualized aerodynamic wind-tunnel airflow for elite runners seeking PR performance.',
    results: 'Ranked #1 highest-converting performance footwear campaign of Q3 with over 22,000 units sold out globally in 24 hours.'
  },
  {
    id: 'project-nike-airmax',
    title: 'Nike Air Max Pulse: Dynamic Air Chamber',
    client: 'Nike Running & Sportswear • Global Campaign',
    category: 'nike streetwear promo',
    duration: '0:30',
    campaignType: 'Global Sneaker Drop & TikTok Spark Campaign',
    deliverables: '4K Master Commercial (16:9), 9:16 Viral Kinetic Hook Suite, 1:1 Shopify Hero Video',
    roas: '+530% ROAS (Global Drop)',
    ctr: '6.9% CTR',
    turnaround: '48 Hours',
    image: 'assets/nike_air_max_pulse.jpg',
    video: 'assets/nike_air_max_pulse.webm',
    synopsis: 'Futuristic sportswear commercial capturing Nike Air Max Pulse levitating in a dark atmospheric studio with cyan and electric volt air chamber luminescence.',
    strategy: 'Showcased point-loaded cushioning system with explosive micro-particle physics and pressurized air unit glowing telemetry. Dialed in for high-converting TikTok Spark ads and SNKRS app drops.',
    results: 'Achieved 6.9% CTR across Meta and TikTok paid ads, generating $3.6M in global pre-orders within the first 72 hours.'
  },
  {
    id: 'project-jordan-chicago',
    title: 'Air Jordan 1 High: Chicago Legacy Edition',
    client: 'Nike Jordan Brand • Heritage Basketball & Global Drop',
    category: 'nike hoops promo',
    duration: '0:30',
    campaignType: 'Global SNKRS Drop & Digital Billboard Commercial',
    deliverables: '4K Cinema Master (16:9), 9:16 Viral Kinetic Hook Suite, 1:1 PDP Loop',
    roas: '+640% ROAS (Global Drop)',
    ctr: '7.8% CTR',
    turnaround: '48 Hours',
    image: 'assets/nike_jordan_1_chicago.jpg',
    video: 'assets/nike_jordan_1_chicago.webm',
    synopsis: 'Legendary varsity red, white, and black Air Jordan 1 High floating through cinematic red smoke ribbons and burning ember studio physics.',
    strategy: 'Celebrated basketball heritage with dynamic 3-second kinetic hooks, rising embers, and macro leather grain focus designed for viral top-of-funnel hype and record SNKRS conversion.',
    results: 'Drove $4.2M in direct-to-consumer sales during launch weekend, delivering a 7.8% CTR on TikTok and Meta Ads.'
  },
  {
    id: 'project-nike-dunk',
    title: 'Nike Dunk Low: Urban Heritage Edition',
    client: 'Nike Sportswear • Street Culture & SNKRS Drop',
    category: 'nike streetwear',
    duration: '0:25',
    campaignType: 'SNKRS Exclusive Drop & Streetwear Retail Launch',
    deliverables: '4K Master (16:9), 9:16 Street Style Cut, 1:1 PDP Cut',
    roas: '+480% ROAS (SNKRS App Scale)',
    ctr: '6.2% CTR',
    turnaround: '48 Hours',
    image: 'assets/nike_dunk_low.jpg',
    video: 'assets/nike_dunk_low.webm',
    synopsis: 'Iconic street culture sneaker commercial showcasing the Nike Dunk Low obsidian and sail leather colorway floating above wet reflective asphalt with rim lighting.',
    strategy: 'Targeted street culture and sneakerhead communities. Captured premium tumbled leather texture and vintage court silhouette with asphalt puddle reflection aesthetics and cinematic street lighting.',
    results: 'Generated over 18 million impressions across Instagram Reels and TikTok, selling out 40,000 pairs during the SNKRS pass event.'
  },
  {
    id: 'project-nike-af1',
    title: 'Nike Air Force 1 07: Pure White Architectural',
    client: 'Nike Sportswear • Everyday Icon Series',
    category: 'nike streetwear',
    duration: '0:25',
    campaignType: 'Evergreen DTC Performance & Amazon Video Ads',
    deliverables: '4K Master (16:9), 9:16 Street Style Cut, 1:1 Shopify Hero Video',
    roas: '+450% ROAS (Evergreen Scale)',
    ctr: '5.6% CTR',
    turnaround: '48 Hours',
    image: 'assets/nike_air_force_1_white.jpg',
    video: 'assets/nike_air_force_1_white.webm',
    synopsis: 'Minimalist high-key commercial showcasing the iconic triple-white Air Force 1 floating amidst pristine museum-grade studio light caustics.',
    strategy: 'Clean architectural lighting highlighting timeless white leather panels, metal deubré dubrae tag, and pivot-point sole geometry to maintain #1 bestseller momentum.',
    results: 'Maintained 4.5x blended ROAS across evergreen Meta, Amazon, and Google Shopping performance video channels.'
  },
  {
    id: 'project-nike-acg',
    title: 'Nike ACG Mountain Fly: Gore-Tex Trail Armor',
    client: 'Nike ACG • Outdoor & Technical Trail Innovation',
    category: 'nike apparel promo',
    duration: '0:35',
    campaignType: 'Seasonal Technical Outdoor Drop & YouTube Pre-Roll',
    deliverables: '4K Broadcast Master (16:9), 9:16 Water-Repel Hook, 1:1 Feed Cut',
    roas: '+580% ROAS (Technical Outerwear)',
    ctr: '6.5% CTR',
    turnaround: '72 Hours',
    image: 'assets/nike_acg_mountain_fly.jpg',
    video: 'assets/nike_acg_mountain_fly.webm',
    synopsis: 'Rugged outdoor commercial featuring the Nike ACG Mountain Fly conquering mountain rain mist, mossy terrain, and neon orange technical utility cords.',
    strategy: 'Engineered extreme weather CGI elements showcasing Gore-Tex waterproofing, chevron lug traction, and React foam cushioning for gorpcore and trail enthusiasts.',
    results: 'Sold out full seasonal production inventory in 4 days across Europe and North America with 6.5% CTR on YouTube Pre-Roll.'
  },
  {
    id: 'project-nike-alphafly',
    title: 'Nike Alphafly 3: World Record Propulsion',
    client: 'Nike Performance Running • Breaking2 Innovation',
    category: 'nike running promo',
    duration: '0:35',
    campaignType: 'World Marathon Majors Launch & Digital Billboard',
    deliverables: '4K Broadcast (16:9), 9:16 Reels Cut, 3D Layer Exploded View',
    roas: '+560% ROAS (Marathon Launch)',
    ctr: '6.8% CTR',
    turnaround: '48 Hours',
    image: 'assets/ecom_sneaker_motion.jpg',
    video: 'assets/ecom_sneaker_motion.webm',
    synopsis: 'Deconstructed 3D performance running sneaker ad revealing interwoven carbon fiber threads, dual Zoom Air pods, and explosive studio propulsion.',
    strategy: 'Full exploded-view 3D architectural breakdown of the proprietary carbon plate and ZoomX foam. Combined athletic motion blur with laser-focused material macro shots.',
    results: 'The shoe model sold out completely within 24 hours of campaign launch, generating over 16 million organic impressions.'
  },
  {
    id: 'project-nike-vision',
    title: 'Nike Vision Windshield Elite: Polarized Optics',
    client: 'Nike Vision • High-Performance Sport Eyewear',
    category: 'nike apparel',
    duration: '0:20',
    campaignType: 'Summer Marathon & Track Performance Ad Suite',
    deliverables: '4K Master (16:9), 9:16 Reels Hook Suite, 1:1 PDP Cut',
    roas: '+475% ROAS (Summer Drops)',
    ctr: '5.9% CTR',
    turnaround: '48 Hours',
    image: 'assets/eyewear_commercial.jpg',
    video: 'assets/eyewear_commercial.webm',
    synopsis: 'High-velocity performance eyewear commercial showcasing matte carbon fiber frames and iridescent polarized lens flare reflections.',
    strategy: 'Visualized UV400 polarization glare reduction with split-screen iridescent lens transmission and aerodynamic wind tunnel vapor trails for marathon runners and cyclists.',
    results: 'Over 45,000 units sold during the 30-day summer drop across Meta, TikTok, and Amazon.'
  },
  {
    id: 'project-nike-techfleece',
    title: 'Nike Tech Fleece AeroShield: Thermal Apparel',
    client: 'Nike Sportswear • Engineered Technical Apparel',
    category: 'nike apparel',
    duration: '0:30',
    campaignType: 'Global Winter Apparel Drop & Digital Runway',
    deliverables: '9:16 Instagram Video, 4K Display Cut, Media Kit',
    roas: '+430% ROAS (Apparel Scale)',
    ctr: '5.8% CTR',
    turnaround: '48 Hours',
    image: 'assets/fashion_couture.jpg',
    video: 'assets/fashion_couture.webm',
    synopsis: 'Avant-garde digital sportswear commercial showcasing dynamic molten chrome cloth simulations morphing into lightweight breathable thermal fleece.',
    strategy: 'Pioneering digital sportswear installation blending hyper-detailed cloth simulation with dark volumetric lighting for high-fashion athletic immersion.',
    results: 'Drove 2.4x higher conversion rate on Nike.com apparel product detail pages during launch week.'
  },
  {
    id: 'project-nike-gps',
    title: 'Nike Sport GPS Pro: Precision Athletic Telemetry',
    client: 'Nike Running Club • Precision Athletic Wearables',
    category: 'nike apparel promo',
    duration: '0:30',
    campaignType: 'NRC Global Hardware Integration & Hero Video',
    deliverables: '4K Master (16:9), Vertical Macro Hook (9:16), Square PDP (1:1)',
    roas: '+510% ROAS (Pre-Order Drops)',
    ctr: '5.4% CTR',
    turnaround: '48 Hours',
    image: 'assets/luxury_watch_commercial.jpg',
    video: 'assets/luxury_watch_commercial.webm',
    synopsis: 'Macro mechanical luxury athletic timepiece ad capturing micro-chassis, water ripple levitation, and sapphire crystal luminescent pace telemetry.',
    strategy: 'Full 3D CAD mechanical assembly with luminescent cyan dials. Engineered for ultra-high-converting athlete training & NRC app integration.',
    results: 'Drove over $2.4M in global athlete pre-orders within 10 days of campaign debut.'
  },
  {
    id: 'project-nike-aerotrack',
    title: 'Nike AeroTrack Drone: Autonomous Motion Tracking',
    client: 'Nike Innovation Kitchen • Autonomous Tracking Systems',
    category: 'nike apparel',
    duration: '0:25',
    campaignType: 'Nike Training Club Commercial & YouTube Pre-Roll',
    deliverables: '4K Cinema Cut (16:9), 9:16 TikTok Spark, Amazon Video (1:1)',
    roas: '+430% ROAS (Omnichannel Scale)',
    ctr: '6.3% CTR',
    turnaround: '48 Hours',
    image: 'assets/drone_tech_commercial.jpg',
    video: 'assets/drone_tech_commercial.webm',
    synopsis: 'Atmospheric cyberpunk commercial showing aerodynamic carbon fiber drone tracking athletes through neon violet and cyan fog vortex.',
    strategy: 'High-impact 3-second hook designed for TikTok Spark ads and YouTube Pre-Roll with motion blur and athletic obstacle avoidance lidar laser visualization.',
    results: 'Generated 8.2M impressions and reached top-ranking engagement across sports tech categories.'
  },
  {
    id: 'project-nike-hyperfuel',
    title: 'Nike HyperFuel Pro: Citrus Electrolyte Vortex',
    client: 'Nike Performance Lab • Sports Hydration & Energy',
    category: 'nike running',
    duration: '0:20',
    campaignType: 'Amazon Prime Ad & TikTok Spark Campaign',
    deliverables: 'TikTok Hook Suite (9:16), Amazon Video (16:9), Square (1:1)',
    roas: '+440% ROAS (Amazon Ads)',
    ctr: '6.1% CTR',
    turnaround: '48 Hours',
    image: 'assets/ecom_beverage_splash.jpg',
    video: 'assets/ecom_beverage_splash.webm',
    synopsis: 'Electrifying sports hydration ad featuring an aerodynamic bottle bursting through crystal ice cubes and glowing citrus isotonic fluid vortex.',
    strategy: 'Explosive 3-second hook designed to disrupt fast-scrolling mobile feeds. Coordinated freeze-frame ice collision physics with high-contrast neon palette to emphasize zero-sugar endurance energy.',
    results: 'Achieved a record 6.1% CTR on TikTok and Amazon Sponsored Brand Video, driving top-seller ranking in athletic hydration.'
  },
  {
    id: 'project-nike-recovery',
    title: 'Nike Pro Muscle Lab: Botanical Athletic Recovery',
    client: 'Nike Training • Post-Workout Muscle Recovery',
    category: 'nike running',
    duration: '0:25',
    campaignType: 'DTC E-Commerce & Athletic Endcap Campaign',
    deliverables: '4K Vertical (9:16), Meta Feed (1:1), Shopify Hero Loop',
    roas: '+380% ROAS (Shopify Scale)',
    ctr: '5.2% CTR',
    turnaround: '48 Hours',
    image: 'assets/ecom_beauty_serum.jpg',
    video: 'assets/ecom_beauty_serum.webm',
    synopsis: 'Sensory macro cosmetic commercial capturing golden botanical argan oil and muscle recovery serum splashing dynamically around frosted glass.',
    strategy: 'Crafted a visceral, sensory-first athletic recovery ad highlighting dual-phase absorption formula. High-speed fluid dynamics and botanical refraction evoke instant relief.',
    results: 'Increased conversion rate on Shopify product page by +42% and achieved a 5.2% CTR on Meta video ads.'
  },

  // ==========================================
  // ANTA Sports & Hoops Signature Commercials
  // ==========================================
  {
    id: 'project-anta-kai1',
    title: 'ANTA KAI 1 "Artist on Court": Kyrie Irving Edition',
    client: 'ANTA Basketball • Kyrie Irving Signature Series',
    category: 'anta hoops promo',
    duration: '0:35',
    campaignType: 'NBA Season Tip-Off & Global Sneaker Drop',
    deliverables: '4K Broadcast (16:9), 9:16 Shot Tracker Hook, 1:1 Amazon Video',
    roas: '+690% ROAS (Global Signature Drop)',
    ctr: '7.9% CTR',
    turnaround: '48 Hours',
    image: 'assets/converse_bb_prototype.jpg',
    video: 'assets/converse_bb_prototype.webm',
    synopsis: 'High-velocity signature basketball commercial showcasing Kyrie Irving\'s ANTA KAI 1 hovering over neon court telemetry lines with NitroEdge nitrogen foam and ancestral woven embroidery.',
    strategy: 'Engineered responsive court trajectory telemetry and nitrogen foam shock absorption visual cues tailored for Kyrie Irving\'s signature handles and explosive guard play.',
    results: 'Over 80,000 pairs sold out globally in under 15 minutes during the global launch event, generating 24M+ organic impressions.'
  },
  {
    id: 'project-anta-kt9',
    title: 'ANTA KT9 "Gold Standard": Klay Thompson Edition',
    client: 'ANTA Basketball • Klay Thompson Signature Line',
    category: 'anta hoops promo',
    duration: '0:30',
    campaignType: 'NBA Playoffs Campaign & YouTube Pre-Roll',
    deliverables: '4K Master (16:9), 9:16 Hardwood Court Hook, 1:1 PDP Loop',
    roas: '+580% ROAS (Championship Series)',
    ctr: '6.8% CTR',
    turnaround: '48 Hours',
    image: 'assets/converse_weapon_cx.jpg',
    video: 'assets/converse_weapon_cx.webm',
    synopsis: 'Championship court commercial showcasing the iconic ANTA KT9 high-performance basketball shoe spinning amidst arena beams, 3-point arcs, and SMART S.A.M shock modules.',
    strategy: 'Celebrated Klay Thompson\'s 4-time championship legacy with stadium lighting beams, polished hardwood floor reflections, and full-palm NitroEdge cushioning callouts.',
    results: 'Drove $3.8M in direct sales across launch week, establishing the KT9 as a top trending performance basketball shoe.'
  },
  {
    id: 'project-anta-shockwave',
    title: 'ANTA Shock Wave 5 Pro: Cyber Battle Court',
    client: 'ANTA Hoops • High-Intensity Outdoor Hoops',
    category: 'anta hoops promo',
    duration: '0:30',
    campaignType: 'Summer Streetball Tour & TikTok Spark Ads',
    deliverables: '4K Master (16:9), 9:16 Cyberpunk Platform Hook, 1:1 PDP Cut',
    roas: '+560% ROAS (Streetball Drop)',
    ctr: '6.7% CTR',
    turnaround: '48 Hours',
    image: 'assets/converse_run_star_motion.jpg',
    video: 'assets/converse_run_star_motion.webm',
    synopsis: 'Bold cyberpunk commercial ad revealing the exaggerated sculpted NitroEdge midsole and high-abrasion cement traction outsole of the ANTA Shock Wave 5 Pro over rippling neon water.',
    strategy: 'Engineered for modern outdoor streetball battle. Blended fluid neon lighting, exaggerated sculptural nitrogen foam geometry, and dynamic bass hits to emphasize indestructible court traction.',
    results: 'Generated 14.5M views on TikTok Spark Ads in week 1 with an extraordinary 6.7% CTR and 5.6x ROAS.'
  },
  {
    id: 'project-anta-c202',
    title: 'ANTA C202 5 GT Pro: Nitrogen Carbon Elite Marathon',
    client: 'ANTA Running • Sub-2 Marathon Racing Series',
    category: 'anta running promo',
    duration: '0:30',
    campaignType: 'Major Marathon Global Launch & Editorial',
    deliverables: '4K Cinema Master (16:9), 9:16 Geometric Laser Hook, 1:1 PDP Cut',
    roas: '+590% ROAS (Elite Marathon Series)',
    ctr: '6.9% CTR',
    turnaround: '48 Hours',
    image: 'assets/converse_deluxe_square.jpg',
    video: 'assets/converse_deluxe_square.webm',
    synopsis: 'Sculptural elite running commercial revealing 3D bionic carbon plate architecture, dual-density NitroEdge nitrogen foam, and ultraviolet laser aerodynamic streamlines.',
    strategy: 'High-performance marathon pacing blending carbon plate structural exploded views with high-contrast road testing and breathable mono-mesh craftsmanship.',
    results: 'Achieved +72% lift in DTC average order value on Anta.com and earned top-tier podium recognition in international marathons.'
  },
  {
    id: 'project-anta-pg7',
    title: 'ANTA PG7 Cloud Ride: All-Day Nitrogen Comfort',
    client: 'ANTA Lifestyle & Running • Everyday Performance',
    category: 'anta streetwear promo',
    duration: '0:30',
    campaignType: 'Global DTC Lifestyle Drop & Flagship Video',
    deliverables: '4K Master (16:9), 9:16 Street Style Hook Suite, 1:1 E-Commerce Loop',
    roas: '+520% ROAS (DTC E-Commerce)',
    ctr: '6.0% CTR',
    turnaround: '48 Hours',
    image: 'assets/converse_chuck_70.jpg',
    video: 'assets/converse_chuck_70.webm',
    synopsis: 'Cinematic heritage commercial spotlighting the versatile ANTA PG7 with nitrogen cloud cushioning, breathable dual-layer upper, and gum rubber outsole.',
    strategy: 'Clean street lifestyle aesthetic capturing tactile breathable mesh, cushioned nitrogen rebound, and modern court-to-street versatility to maximize DTC basket size.',
    results: 'Boosted Anta.com direct conversion rates by +41% and lowered customer acquisition cost (CAC) by 32% across Meta Ads.'
  },
  {
    id: 'project-anta-mach4',
    title: 'ANTA NitroEdge Mach 4: Speed Road Trainer',
    client: 'ANTA Speed Lab • Tempo & Track Training',
    category: 'anta running',
    duration: '0:25',
    campaignType: 'Summer Track Season & TikTok Creator Spark Ads',
    deliverables: '4K Master (16:9), 9:16 Track Hook, 1:1 PDP Loop',
    roas: '+470% ROAS (Track & Field Drop)',
    ctr: '6.3% CTR',
    turnaround: '48 Hours',
    image: 'assets/converse_cruise_skate.jpg',
    video: 'assets/converse_cruise_skate.webm',
    synopsis: 'Sun-drenched road running commercial capturing high-resilience NitroEdge foam propulsion and GOZONE wear-resistant rubber grip in golden sunlight.',
    strategy: 'Warm athletic film look with high-energy track motion blur and tactile nitrogen foam layer breakdowns for competitive road and tempo runners.',
    results: 'Drove 14.8M impressions on TikTok and Instagram Reels with over 35,000 pairs sold within month 1.'
  },
  {
    id: 'project-anta-zap1',
    title: 'ANTA ZAP 1 "Electric Wave": Quick Guard Court',
    client: 'ANTA Hoops • Explosive Guard Signature Line',
    category: 'anta hoops',
    duration: '0:30',
    campaignType: 'Global Basketball Product Reveal & Performance Ads',
    deliverables: '4K Master (16:9), TikTok/Reels (9:16), Amazon Video (1:1)',
    roas: '+490% ROAS (Meta & TikTok)',
    ctr: '5.9% CTR',
    turnaround: '48 Hours',
    image: 'assets/ecom_tech_gadget.jpg',
    video: 'assets/ecom_tech_gadget.webm',
    synopsis: 'High-converting performance court commercial showcasing ANTA ZAP 1 levitating amidst acoustic ripple rings, lateral TPU lock, and speed vortex physics.',
    strategy: 'Direct-to-consumer launch commercial engineered for high top-of-funnel retention. Utilized 3D CAD conditioning and court traction physics to demonstrate lateral containment.',
    results: 'Drove over $1.8M in pre-orders within the first 14 days of launch with an average ROAS of 4.9x across paid social channels.'
  },
  {
    id: 'project-anta-olympic',
    title: 'ANTA Olympic Podium Champion Kit: Dragon Armor',
    client: 'ANTA Olympic Games • Official National Team Apparel',
    category: 'anta apparel promo',
    duration: '0:30',
    campaignType: 'Olympic Games Global Reveal & Teaser Ad',
    deliverables: '4K Commercial Master (16:9), Viral Hook Suite (9:16), Product Cut (1:1)',
    roas: '+570% ROAS (Olympic Apparel Scale)',
    ctr: '7.5% CTR',
    turnaround: '48 Hours',
    image: 'assets/promo_saas_ai.jpg',
    video: 'assets/promo_saas_ai.webm',
    synopsis: 'Futuristic promotional video showcasing holographic dragon scale fabric telemetry, aerodynamic wind resistance reduction, and gold-trimmed podium jackets.',
    strategy: 'Engineered for high-converting Olympic apparel launch. Integrated dynamic 3-second kinetic hooks, holographic UI telemetry, and sound design to illustrate athletic pride and aero speed.',
    results: 'Drove 52,000+ pre-orders in the first 7 days, achieving an unprecedented 7.5% CTR on YouTube and digital broadcast with a 5.7x ROAS.'
  },
  {
    id: 'project-anta-controller',
    title: 'ANTA Esports Pro Footwear: Ergonomic Insole',
    client: 'ANTA Gaming • Pro Esports Performance',
    category: 'anta streetwear',
    duration: '0:30',
    campaignType: 'Global Hardware & Apparel Launch on Twitch / TikTok',
    deliverables: '4K Cinema Trailer (16:9), 9:16 TikTok Spark Cut, Amazon Video (1:1)',
    roas: '+490% ROAS (Esports Gear)',
    ctr: '6.8% CTR',
    turnaround: '48 Hours',
    image: 'assets/promo_gaming_gear.jpg',
    video: 'assets/promo_gaming_gear.webm',
    synopsis: 'High-octane commercial ad featuring translucent ergonomic footbed switches, RGB chromatic surges, and slow-motion shock absorption physics.',
    strategy: 'Crafted for competitive esports gamers and athletes. Visualized zero-fatigue arch support, tactile grip, and breathable thermal airflow.',
    results: 'The initial production run of 15,000 units sold out completely in under 36 hours from the promotional trailer drop.'
  },
  {
    id: 'project-anta-electrolyte',
    title: 'ANTA Nitro Fuel: High-Altitude Endurance Recovery',
    client: 'ANTA Performance Lab • Sports Recovery Fuel',
    category: 'anta running',
    duration: '0:25',
    campaignType: 'Direct-to-Consumer Drop & Retail Promo',
    deliverables: '4K Master Commercial (16:9), 9:16 Reels Cut, 1:1 Hero Video',
    roas: '+410% ROAS (DTC Subscriptions)',
    ctr: '5.9% CTR',
    turnaround: '48 Hours',
    image: 'assets/promo_cold_brew.jpg',
    video: 'assets/promo_cold_brew.webm',
    synopsis: 'Sensory gourmet athletic recovery beverage commercial showcasing nitrogen cascading micro-foam, ice shatter physics, and electrolyte infusion.',
    strategy: 'Sensory-first performance beverage spot emphasizing micro-nitrogen texture, fast electrolyte absorption, and ice-cold recovery to drive subscription conversions.',
    results: 'Boosted DTC recurring subscription sales by +64% within month 1 and delivered a 5.9% CTR across Meta and TikTok paid ads.'
  },
  {
    id: 'project-anta-smartring',
    title: 'ANTA Biometric Recovery Tracker: Athlete Ring',
    client: 'ANTA Sports Science Lab • Precision Wearables',
    category: 'anta apparel promo',
    duration: '0:30',
    campaignType: 'Global Athlete Launch Video & Meta Ad Scale',
    deliverables: '4K Cinema Master (16:9), 9:16 Vertical Story Cut, 1:1 PDP Cut',
    roas: '+580% ROAS (Wearable Drops)',
    ctr: '6.5% CTR',
    turnaround: '48 Hours',
    image: 'assets/promo_smart_ring.jpg',
    video: 'assets/promo_smart_ring.webm',
    synopsis: 'Ultra-sleek titanium wearable commercial highlighting emerald green PPG optical sensors, muscle recovery telemetry, and medical-grade accuracy.',
    strategy: 'Structured as a compelling pro-grade promotional film that tracks athlete strain, sleep recovery cycles, and VO2 max telemetry in lightweight titanium.',
    results: 'Surpassed pre-order goal by 1,400%, generating $3.1M in reservations and ranking #1 trending athletic recovery wearable.'
  },
  {
    id: 'project-anta-championship',
    title: 'ANTA Championship Ring: NBA Finals Gold',
    client: 'ANTA Basketball Heritage • Klay & Kyrie Legacy',
    category: 'anta hoops promo',
    duration: '0:30',
    campaignType: 'Championship Heritage Showcase & Global Launch',
    deliverables: '4K Master (16:9), 9:16 Luxury Reels Cut, 1:1 Square Macro Loop',
    roas: '+620% ROAS (Heritage Collectibles)',
    ctr: '5.5% CTR',
    turnaround: '48 Hours',
    image: 'assets/promo_diamond_ring.jpg',
    video: 'assets/promo_diamond_ring.webm',
    synopsis: 'Ultra-luxury championship ring commercial capturing prismatic rainbow flare refractions, liquid velvet ripples, and 8K macro brilliance.',
    strategy: 'Designed for high-ticket emotional purchase conversion celebrating Kyrie Irving and Klay Thompson NBA championship pedigree.',
    results: 'Drove $4.8M in limited edition championship collectible sales with an outstanding 6.2x blended ROAS.'
  },
  {
    id: 'project-anta-speedrider',
    title: 'ANTA Urban Speed EV: Athlete Mobility Scooter',
    client: 'ANTA Mobility • High-Performance Athlete EV',
    category: 'anta streetwear promo',
    duration: '0:35',
    campaignType: 'Urban Product Reveal & YouTube Pre-Roll Campaign',
    deliverables: '4K Broadcast Cut (16:9), 9:16 Speed Hook, 1:1 Feed Cut',
    roas: '+450% ROAS (Direct Reservations)',
    ctr: '5.7% CTR',
    turnaround: '72 Hours',
    image: 'assets/promo_urban_mobility.jpg',
    video: 'assets/promo_urban_mobility.webm',
    synopsis: 'Cinematic urban speed commercial featuring matte carbon fiber aero chassis, neon wet street reflections, and high-velocity light streaks.',
    strategy: 'High-energy promotional video set against a neon metropolis at night. Highlights dual-motor acceleration and carbon fiber durability for urban athletes.',
    results: 'Captured 5,200+ reservation deposits valued at over $11M in pipeline sales within 3 weeks of campaign launch.'
  },
  {
    id: 'project-nike-speedcar',
    title: 'Nike AeroSpeed Vision: Hyper-Aero Prototype',
    client: 'Nike Motorsport & Athletics • Aero Speed Lab',
    category: 'nike apparel',
    duration: '0:45',
    campaignType: 'Global Brand Reveal & YouTube Pre-Roll',
    deliverables: '4K Cinema Master (16:9), ACES Color Grade, Spatial Audio Master',
    roas: '+390% ROAS (Brand Innovation)',
    ctr: '4.8% CTR',
    turnaround: '4 Business Days',
    image: 'assets/luxury_commercial.jpg',
    video: 'assets/luxury_commercial.webm',
    synopsis: 'High-end athletic innovation commercial capturing an electric aerodynamic vehicle testing wind-tunnel airflow and skin suit drag reduction.',
    strategy: 'Atmospheric twilight cinematic setting focusing on aerodynamic silhouette and cyan lighting signature for Nike Innovation Lab.',
    results: 'Secured 3,800+ VIP pre-reservation requests and millions of social impressions across athletic communities.'
  },
  {
    id: 'project-nike-perfume',
    title: 'Nike Victory Elixir: Athletic Botanical Fragrance',
    client: 'Nike Lifestyle • Sport Luxury Fragrance',
    category: 'nike streetwear',
    duration: '0:25',
    campaignType: 'Holiday Global DTC Launch & Sephora Digital Endcap',
    deliverables: '4K Macro (16:9), 9:16 Reels Cut, 1:1 Shopify Hero Loop',
    roas: '+410% ROAS (Holiday Drops)',
    ctr: '5.6% CTR',
    turnaround: '48 Hours',
    image: 'assets/fragrance_commercial.jpg',
    video: 'assets/fragrance_commercial.webm',
    synopsis: 'Sensory luxury sport perfume commercial featuring faceted crystal bottle floating over tranquil water ripples amidst floating orchid petals and warm golden sunbeams.',
    strategy: 'Sensory micro-fluidics highlighting bottle refraction, fresh citrus bergamot glow, and cedarwood notes for sports luxury gift conversion.',
    results: 'Increased holiday DTC conversion rate by +48% on Nike.com and Sephora digital placements.'
  }
];


/* ==========================================================================
   Aspect Ratio Switcher
   ========================================================================== */
function initAspectRatioSwitcher() {
  const heroImgWrap = document.querySelector('.hero-img-wrap');
  const ratioBtns = document.querySelectorAll('.ratio-btn');

  ratioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      ratioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const ratio = btn.dataset.ratio;
      if (heroImgWrap) {
        heroImgWrap.classList.remove('aspect-9-16', 'aspect-1-1');
        if (ratio === '9-16') heroImgWrap.classList.add('aspect-9-16');
        else if (ratio === '1-1') heroImgWrap.classList.add('aspect-1-1');
      }

      showToast(`Ad Format Switched: ${ratio.replace('-', ':')} (${btn.textContent.trim()})`);
    });
  });
}

/* ==========================================================================
   Card Video Hover Auto-play
   ========================================================================== */
function initCardHoverVideoPlayback() {
  const videoCards = document.querySelectorAll('.video-card');
  videoCards.forEach(card => {
    const video = card.querySelector('video');
    if (video) {
      video.play().catch(() => {});
      card.addEventListener('mouseenter', () => {
        if (video.paused) video.play().catch(() => {});
      });
    }
  });
}

/* ==========================================================================
   Showcase Filter System
   ========================================================================== */
function initShowcaseFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const videoCards = document.querySelectorAll('.video-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      videoCards.forEach(card => {
        const cat = card.dataset.category || '';
        const matches = (filter === 'all') || cat.split(' ').includes(filter) || cat === filter;
        if (matches) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   Sample Deliverables & Client Output Suite Viewer
   ========================================================================== */
const sampleDeliverablesData = {
  'nike-vaporfly': {
    projectId: 'project-nike-vaporfly',
    title: 'Nike ZoomX Vaporfly 3: Carbon Energy Return',
    client: 'Nike Performance Athletics • Elite Marathon Series',
    video: 'assets/nike_zoomx_vaporfly.webm',
    poster: 'assets/nike_zoomx_vaporfly.jpg',
    specs: {
      resolution: '3840 x 2160 (4K 60FPS Master)',
      colorSpace: 'ACEScc High-Velocity Gamut',
      audio: 'Wind Tunnel Aero & Carbon Flex Stems',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'Nike_Vaporfly3_4K_Broadcast_Master_16x9.mov', size: '1.68 GB', type: '4K Broadcast Master' },
      { name: 'Nike_Vaporfly_CarbonExploded_Cut_9x16.mp4', size: '205 MB', type: 'Viral 3D CAD Hook (9:16)' },
      { name: 'Nike_Vaporfly_WindTunnel_1x1.mp4', size: '98 MB', type: 'Amazon A+ Video (1:1)' },
      { name: 'Nike_Aero_Soundtrack_Stems.zip', size: '130 MB', type: 'Spatial Audio Stems' },
      { name: 'Nike_Marathon_Global_Ad_Release.pdf', size: '1.9 MB', type: 'Commercial Rights' }
    ]
  },
  'anta-kai1': {
    projectId: 'project-anta-kai1',
    title: 'ANTA KAI 1 "Artist on Court": Kyrie Irving Edition',
    client: 'ANTA Basketball • Kyrie Irving Signature Series',
    video: 'assets/converse_bb_prototype.webm',
    poster: 'assets/converse_bb_prototype.jpg',
    specs: {
      resolution: '3840 x 2160 (4K 60FPS Master)',
      colorSpace: 'Arena Electric Neon 10-bit',
      audio: 'Court Squeak & NitroEdge Pulse Stems',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'ANTA_KAI1_4K_Global_Master_16x9.mov', size: '1.62 GB', type: '4K Broadcast Master' },
      { name: 'ANTA_KAI1_ShotTracker_Hook_9x16.mp4', size: '196 MB', type: 'Viral Hook Cut (9:16)' },
      { name: 'ANTA_KAI1_PDP_Orbit_Loop_1x1.mp4', size: '94 MB', type: 'Amazon A+ / PDP Video (1:1)' },
      { name: 'ANTA_KyrieSignature_Audio_Stems.zip', size: '125 MB', type: 'Spatial Audio Stems' },
      { name: 'ANTA_Global_Commercial_Release.pdf', size: '1.8 MB', type: 'Perpetual Rights' }
    ]
  },
  'nike-airmax': {
    projectId: 'project-nike-airmax',
    title: 'Nike Air Max Pulse: Dynamic Air Chamber',
    client: 'Nike Running & Sportswear • Global Campaign',
    video: 'assets/nike_air_max_pulse.webm',
    poster: 'assets/nike_air_max_pulse.jpg',
    specs: {
      resolution: '3840 x 2160 (4K 60FPS Master)',
      colorSpace: 'DCI-P3 Electric Neon 10-bit',
      audio: 'Pressurized Air Cushion Foley & Stems',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'Nike_AirMaxPulse_4K_CinemaMaster_16x9.mov', size: '1.58 GB', type: '4K Cinema Master' },
      { name: 'Nike_AirMax_AirChamber_Hook_9x16.mp4', size: '192 MB', type: 'TikTok Spark Cut (9:16)' },
      { name: 'Nike_AirMax_ProductGrid_1x1.mp4', size: '95 MB', type: 'PDP Hero Loop (1:1)' },
      { name: 'Nike_AirMax_VoltGlow_ColorGrade.cube', size: '14 MB', type: 'Color Grade 3D LUT' },
      { name: 'Nike_Global_Commercial_License.pdf', size: '1.8 MB', type: 'Commercial Rights' }
    ]
  },
  'anta-kt9': {
    projectId: 'project-anta-kt9',
    title: 'ANTA KT9 "Gold Standard": Klay Thompson Edition',
    client: 'ANTA Basketball • Klay Thompson Signature Line',
    video: 'assets/converse_weapon_cx.webm',
    poster: 'assets/converse_weapon_cx.jpg',
    specs: {
      resolution: '3840 x 2160 (4K 60FPS)',
      colorSpace: 'Championship Court ACES 10-bit',
      audio: 'Hardwood Squeak & Arena Crowd Stems',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'ANTA_KT9_4K_Arena_Master_16x9.mov', size: '1.54 GB', type: '4K Master Commercial' },
      { name: 'ANTA_KT9_CourtSpin_Hook_9x16.mp4', size: '185 MB', type: 'Viral Reels Cut (9:16)' },
      { name: 'ANTA_KT9_Hardwood_Loop_1x1.mp4', size: '91 MB', type: 'PDP Hero Video (1:1)' },
      { name: 'ANTA_KT9_Editorial_MediaKit.pdf', size: '2.1 MB', type: 'Press Kit & Rights' }
    ]
  },
  'jordan-chicago': {
    projectId: 'project-jordan-chicago',
    title: 'Air Jordan 1 High: Chicago Legacy Edition',
    client: 'Nike Jordan Brand • Heritage Basketball & Global Drop',
    video: 'assets/nike_jordan_1_chicago.webm',
    poster: 'assets/nike_jordan_1_chicago.jpg',
    specs: {
      resolution: '3840 x 2160 (4K 60FPS Master)',
      colorSpace: 'Crimson ACEScc 12-bit Log',
      audio: 'Sub-Bass Embers & Leather Foley Stems',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'Jordan1_Chicago_4K_CinemaMaster_16x9.mov', size: '1.65 GB', type: '4K Cinema Commercial' },
      { name: 'Jordan1_Chicago_SmokeEmber_Hook_9x16.mp4', size: '195 MB', type: 'TikTok Spark Cut (9:16)' },
      { name: 'Jordan1_Chicago_PDP_Loop_1x1.mp4', size: '96 MB', type: 'SNKRS / Shopify Loop (1:1)' },
      { name: 'Jordan_Chicago_ACES_ColorLUT.cube', size: '14 MB', type: '3D Color Grade LUT' },
      { name: 'Global_Jordan_Commercial_License.pdf', size: '1.8 MB', type: 'Perpetual Rights' }
    ]
  },
  'anta-shockwave': {
    projectId: 'project-anta-shockwave',
    title: 'ANTA Shock Wave 5 Pro: Cyber Battle Court',
    client: 'ANTA Hoops • High-Intensity Outdoor Hoops',
    video: 'assets/converse_run_star_motion.webm',
    poster: 'assets/converse_run_star_motion.jpg',
    specs: {
      resolution: '3840 x 2160 (4K 60FPS Master)',
      colorSpace: 'Cyberpunk Neon HDR 10-bit',
      audio: 'Sub-Bass Drop & Sculpted Foam Foley',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'ANTA_ShockWave_4K_Cyber_16x9.mov', size: '1.62 GB', type: '4K Cinema Master' },
      { name: 'ANTA_ShockWave_WaveMotion_9x16.mp4', size: '198 MB', type: 'TikTok Spark Cut (9:16)' },
      { name: 'ANTA_ShockWave_PDP_Orbit_1x1.mp4', size: '94 MB', type: 'Square PDP Orbit Loop' },
      { name: 'ANTA_NitroEdge_Audio_BassDrop_Stems.zip', size: '115 MB', type: 'Master Audio Stems' },
      { name: 'ANTA_Hoops_Campaign_Rights.pdf', size: '1.7 MB', type: 'Commercial Rights' }
    ]
  },
  'nike-dunk': {
    projectId: 'project-nike-dunk',
    title: 'Nike Dunk Low: Urban Heritage Edition',
    client: 'Nike Sportswear • Street Culture & SNKRS Drop',
    video: 'assets/nike_dunk_low.webm',
    poster: 'assets/nike_dunk_low.jpg',
    specs: {
      resolution: '3840 x 2160 (4K UHD 60FPS)',
      colorSpace: 'Rec.709 Cinematic Contrast',
      audio: 'Street Asphalt Foley & Lo-Fi Beats',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'Nike_DunkLow_4K_Cinema_16x9.mov', size: '1.45 GB', type: '4K Cinema Commercial' },
      { name: 'Nike_DunkLow_StreetVibe_Hook_9x16.mp4', size: '175 MB', type: 'Reels / TikTok Hook (9:16)' },
      { name: 'Nike_DunkLow_Shopify_Loop_1x1.mp4', size: '89 MB', type: 'PDP Hero Video (1:1)' },
      { name: 'Nike_DunkLow_Editorial_Stills.zip', size: '390 MB', type: '8K High-Res Stills' }
    ]
  },
  'anta-c202': {
    projectId: 'project-anta-c202',
    title: 'ANTA C202 5 GT Pro: Nitrogen Carbon Elite',
    client: 'ANTA Running • Sub-2 Marathon Racing Series',
    video: 'assets/converse_deluxe_square.webm',
    poster: 'assets/converse_deluxe_square.jpg',
    specs: {
      resolution: '3840 x 2160 (4K Cinema 60FPS)',
      colorSpace: 'Ultraviolet Cyber HDR 10-bit',
      audio: 'Bionic Carbon Flex & Laser Stream Foley',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'ANTA_C202_GT_4K_Marathon_16x9.mov', size: '1.58 GB', type: '4K Master (16:9)' },
      { name: 'ANTA_C202_GT_CarbonExploded_9x16.mp4', size: '190 MB', type: 'Editorial Cut (9:16)' },
      { name: 'ANTA_C202_GT_PDP_Loop_1x1.mp4', size: '92 MB', type: 'Shopify Hero Video (1:1)' },
      { name: 'ANTA_C202_GT_Editorial_Stills.zip', size: '410 MB', type: '8K Editorial Stills' }
    ]
  },
  'nike-af1': {
    projectId: 'project-nike-af1',
    title: 'Nike Air Force 1 07: Pure White Architectural',
    client: 'Nike Sportswear • Everyday Icon Series',
    video: 'assets/nike_air_force_1_white.webm',
    poster: 'assets/nike_air_force_1_white.jpg',
    specs: {
      resolution: '3840 x 2160 (4K UHD 60FPS)',
      colorSpace: 'Clean Museum White Rec.709',
      audio: 'Architectural Light Caustic Audio',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'Nike_AF1_White_4K_Commercial_16x9.mov', size: '1.42 GB', type: '4K Commercial Master' },
      { name: 'Nike_AF1_PureWhite_Hook_9x16.mp4', size: '172 MB', type: 'Reels Style Cut (9:16)' },
      { name: 'Nike_AF1_HeroLoop_1x1.mp4', size: '88 MB', type: 'Amazon Video (1:1)' },
      { name: 'Nike_AF1_Commercial_Release.pdf', size: '1.5 MB', type: 'Commercial Rights' }
    ]
  },
  'anta-pg7': {
    projectId: 'project-anta-pg7',
    title: 'ANTA PG7 Cloud Ride: All-Day Nitrogen Comfort',
    client: 'ANTA Lifestyle & Running • Everyday Performance',
    video: 'assets/converse_chuck_70.webm',
    poster: 'assets/converse_chuck_70.jpg',
    specs: {
      resolution: '3840 x 2160 (4K Master 60FPS)',
      colorSpace: 'Warm Lifestyle Cinema 10-bit',
      audio: 'Tactile Knit & Nitrogen Cushion Foley',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'ANTA_PG7_4K_Lifestyle_16x9.mov', size: '1.50 GB', type: '4K Cinema Commercial' },
      { name: 'ANTA_PG7_Cloud_Hook_9x16.mp4', size: '180 MB', type: 'Instagram Reels Cut (9:16)' },
      { name: 'ANTA_PG7_PDP_Loop_1x1.mp4', size: '86 MB', type: 'Shopify / PDP Loop (1:1)' },
      { name: 'ANTA_PG7_Lifestyle_LUT.cube', size: '12 MB', type: '3D Color Grade LUT' }
    ]
  },
  'nike-acg': {
    projectId: 'project-nike-acg',
    title: 'Nike ACG Mountain Fly: Gore-Tex Trail Armor',
    client: 'Nike ACG • Outdoor & Technical Trail Innovation',
    video: 'assets/nike_acg_mountain_fly.webm',
    poster: 'assets/nike_acg_mountain_fly.jpg',
    specs: {
      resolution: '3840 x 2160 (4K 60FPS Master)',
      colorSpace: 'High-Contrast Technical Gamut',
      audio: 'Rain Mist Foley & Trail Impact Stems',
      turnaround: '72 Hours Shipped'
    },
    files: [
      { name: 'Nike_ACG_MountainFly_4K_Trailer_16x9.mov', size: '1.72 GB', type: '4K Broadcast Master' },
      { name: 'Nike_ACG_GoreTex_Splash_9x16.mp4', size: '202 MB', type: 'Waterproof Hook Cut (9:16)' },
      { name: 'Nike_ACG_Traction_Grid_1x1.mp4', size: '99 MB', type: 'PDP Product Video (1:1)' },
      { name: 'Nike_ACG_Trail_Soundtrack_Stems.zip', size: '145 MB', type: 'Audio Stems' }
    ]
  },
  'anta-mach4': {
    projectId: 'project-anta-mach4',
    title: 'ANTA NitroEdge Mach 4: Speed Road Trainer',
    client: 'ANTA Speed Lab • Tempo & Track Training',
    video: 'assets/converse_cruise_skate.webm',
    poster: 'assets/converse_cruise_skate.jpg',
    specs: {
      resolution: '3840 x 2160 (4K 60FPS Master)',
      colorSpace: 'Warm Morning Road Running 10-bit',
      audio: 'Tempo Foot Strike & Track Audio',
      turnaround: '48 Hours Shipped'
    },
    files: [
      { name: 'ANTA_Mach4_4K_RoadRun_16x9.mov', size: '1.48 GB', type: '4K Commercial Master' },
      { name: 'ANTA_Mach4_Speed_Hook_9x16.mp4', size: '178 MB', type: 'TikTok Spark Cut (9:16)' },
      { name: 'ANTA_Mach4_PDP_Loop_1x1.mp4', size: '87 MB', type: 'PDP Loop (1:1)' },
      { name: 'ANTA_Mach4_Media_Kit.pdf', size: '1.9 MB', type: 'Commercial Rights' }
    ]
  }
};

function initSampleOutputViewer() {
  const skuChips = document.querySelectorAll('.sku-chip');
  const formatTabs = document.querySelectorAll('.sample-tab-btn');
  const videoBox = document.getElementById('sample-video-box');
  const videoPlayer = document.getElementById('sample-video-player');
  const hudFormat = document.getElementById('sample-hud-format');
  const clientNameEl = document.getElementById('sample-client-name');
  const projectNameEl = document.getElementById('sample-project-name');
  const specResEl = document.getElementById('sample-spec-res');
  const specColorEl = document.getElementById('sample-spec-color');
  const specAudioEl = document.getElementById('sample-spec-audio');
  const specTurnaroundEl = document.getElementById('sample-spec-turnaround');
  const filesListEl = document.getElementById('sample-files-list');
  const downloadBtn = document.getElementById('sample-download-pkg-btn');
  const previewModalBtn = document.getElementById('sample-preview-modal-btn');
  const playOverlayTrigger = document.getElementById('sample-play-modal-trigger');

  if (!videoPlayer || !filesListEl) return;

  let currentSku = 'nike-vaporfly';
  let currentFormat = '16-9';

  function renderSku(skuKey) {
    const data = sampleDeliverablesData[skuKey];
    if (!data) return;

    if (clientNameEl) clientNameEl.textContent = data.client;
    if (projectNameEl) projectNameEl.textContent = data.title;
    if (specResEl) specResEl.textContent = data.specs.resolution;
    if (specColorEl) specColorEl.textContent = data.specs.colorSpace;
    if (specAudioEl) specAudioEl.textContent = data.specs.audio;
    if (specTurnaroundEl) specTurnaroundEl.textContent = data.specs.turnaround;

    videoPlayer.src = data.video;
    videoPlayer.poster = data.poster;
    videoPlayer.currentTime = 0;
    videoPlayer.play().catch(() => {});

    // Render files list
    filesListEl.innerHTML = '';
    data.files.forEach(file => {
      const li = document.createElement('li');
      li.className = 'sample-file-item';
      li.innerHTML = `
        <div class="sample-file-info">
          <div class="sample-file-icon"><i data-lucide="file-video"></i></div>
          <div class="sample-file-meta">
            <span class="sample-file-name" title="${file.name}">${file.name}</span>
            <span class="sample-file-type">${file.type}</span>
          </div>
        </div>
        <span class="sample-file-size">${file.size}</span>
      `;
      li.addEventListener('click', () => {
        showToast(`Selected Deliverable: ${file.name} (${file.size})`);
      });
      filesListEl.appendChild(li);
    });

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function applyFormat(formatKey) {
    currentFormat = formatKey;
    if (videoBox) {
      videoBox.classList.remove('aspect-9-16', 'aspect-1-1');
      if (formatKey === '9-16') {
        videoBox.classList.add('aspect-9-16');
        if (hudFormat) hudFormat.textContent = 'VIRAL HOOK (9:16 TIKTOK)';
      } else if (formatKey === '1-1') {
        videoBox.classList.add('aspect-1-1');
        if (hudFormat) hudFormat.textContent = 'PDP HERO LOOP (1:1 SHOPIFY)';
      } else {
        if (hudFormat) hudFormat.textContent = '4K MASTER PRORES 422 (16:9)';
      }
    }
  }

  skuChips.forEach(chip => {
    chip.addEventListener('click', () => {
      skuChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSku = chip.dataset.sku;
      renderSku(currentSku);
      showToast(`Loaded Sample Deliverables: ${sampleDeliverablesData[currentSku].title}`);
    });
  });

  formatTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      formatTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const format = tab.dataset.format;
      applyFormat(format);
      showToast(`Deliverable Format: ${tab.textContent.trim()}`);
    });
  });

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const data = sampleDeliverablesData[currentSku];
      downloadBtn.style.transform = 'scale(0.96)';
      setTimeout(() => { downloadBtn.style.transform = ''; }, 200);
      showToast(`✓ Download Package Initialized: ${data.title} Deliverables (.ZIP - 1.84 GB)`);
    });
  }

  function openModalForCurrent() {
    const data = sampleDeliverablesData[currentSku];
    if (data && data.projectId) {
      const playBtn = document.querySelector(`[data-action="play-video"][data-project-id="${data.projectId}"]`);
      if (playBtn) playBtn.click();
    }
  }

  if (previewModalBtn) previewModalBtn.addEventListener('click', openModalForCurrent);
  if (playOverlayTrigger) playOverlayTrigger.addEventListener('click', openModalForCurrent);

  renderSku('promo-saas');
}

/* ==========================================================================
   Storyboard vs AI Render Comparison Slider
   ========================================================================== */
function initComparisonSlider() {
  const viewport = document.getElementById('comparison-viewport');
  const overlay = document.getElementById('comp-overlay');
  const handle = document.getElementById('comp-handle');
  if (!viewport || !overlay || !handle) return;

  let isDragging = false;

  function syncWidth() {
    const rect = viewport.getBoundingClientRect();
    viewport.style.setProperty('--comp-width', `${rect.width}px`);
  }

  window.addEventListener('resize', syncWidth);
  syncWidth();

  function updateSlider(xPos) {
    const rect = viewport.getBoundingClientRect();
    let x = xPos - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percent = (x / rect.width) * 100;
    overlay.style.width = `${percent}%`;
    handle.style.left = `${percent}%`;
  }

  viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  viewport.addEventListener('touchstart', (e) => {
    if (!e.touches || !e.touches[0]) return;
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchcancel', () => { isDragging = false; });
  
  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches || !e.touches[0]) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });
}

/* ==========================================================================
   4K Commercial Ad Video Theater Modal Player
   ========================================================================== */
function initVideoTheaterModal() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const heroTrigger = document.getElementById('hero-play-trigger');
  const showreelBtn = document.getElementById('hero-showreel-cta');
  
  const theaterVideo = document.getElementById('theater-video');
  const theaterTitle = document.getElementById('theater-title');
  const theaterClient = document.getElementById('theater-client');
  const theaterStrategy = document.getElementById('theater-strategy');
  const theaterDeliverables = document.getElementById('theater-deliverables');
  const theaterRoas = document.getElementById('theater-roas');
  const theaterTurnaround = document.getElementById('theater-turnaround');

  const playPauseBtn = document.getElementById('theater-play-toggle');
  const playIcon = document.getElementById('theater-play-icon');
  const pauseIcon = document.getElementById('theater-pause-icon');
  const timecode = document.getElementById('theater-timecode');
  const progressBar = document.getElementById('theater-progress-bar');
  const scrubber = document.getElementById('theater-scrubber');

  let currentProject = null;

  function openProject(projectId) {
    const project = videoProjects.find(p => p.id === projectId) || videoProjects[0];
    currentProject = project;

    if (theaterVideo) {
      theaterVideo.src = project.video;
      theaterVideo.currentTime = 0;
      theaterVideo.play().catch(() => {});
    }

    if (theaterTitle) theaterTitle.textContent = project.title;
    if (theaterClient) theaterClient.textContent = project.client;
    if (theaterStrategy) theaterStrategy.textContent = project.strategy;
    if (theaterDeliverables) theaterDeliverables.textContent = project.deliverables;
    if (theaterRoas) theaterRoas.textContent = project.roas;
    if (theaterTurnaround) theaterTurnaround.textContent = project.turnaround;

    if (playIcon) playIcon.style.display = 'none';
    if (pauseIcon) pauseIcon.style.display = 'block';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (theaterVideo) {
    theaterVideo.addEventListener('timeupdate', () => {
      const cur = theaterVideo.currentTime || 0;
      const rawDur = theaterVideo.duration;
      const dur = (Number.isFinite(rawDur) && rawDur > 0) ? rawDur : 14;
      const min = Math.floor(cur / 60);
      const sec = Math.floor(cur % 60);
      const totMin = Math.floor(dur / 60);
      const totSec = Math.floor(dur % 60);
      if (timecode) {
        timecode.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')} / ${String(totMin).padStart(2, '0')}:${String(totSec).padStart(2, '0')}`;
      }
      if (progressBar) {
        progressBar.style.width = `${Math.min(100, (cur / dur) * 100)}%`;
      }
    });

    theaterVideo.addEventListener('ended', () => {
      theaterVideo.currentTime = 0;
      theaterVideo.play().catch(() => {});
    });
  }

  if (playPauseBtn && theaterVideo) {
    playPauseBtn.addEventListener('click', () => {
      if (theaterVideo.paused) {
        theaterVideo.play().catch(() => {});
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
      } else {
        theaterVideo.pause();
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
      }
    });
  }

  if (scrubber && theaterVideo) {
    scrubber.addEventListener('click', (e) => {
      const rect = scrubber.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      const rawDur = theaterVideo.duration;
      const dur = (Number.isFinite(rawDur) && rawDur > 0) ? rawDur : 14;
      theaterVideo.currentTime = ratio * dur;
    });
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (theaterVideo) theaterVideo.pause();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === ' ' && theaterVideo) {
      e.preventDefault();
      if (theaterVideo.paused) {
        theaterVideo.play().catch(() => {});
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
      } else {
        theaterVideo.pause();
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
      }
    }
  });

  if (heroTrigger) {
    heroTrigger.addEventListener('click', () => openProject('project-earbuds'));
  }
  if (showreelBtn) {
    showreelBtn.addEventListener('click', () => openProject('project-earbuds'));
  }

  // Bind Card Play Buttons
  document.querySelectorAll('[data-action="play-video"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.projectId;
      openProject(id);
    });
  });
}

/* ==========================================================================
   Client Case Study Modal (Clean, Non-Technical)
   ========================================================================== */
function initCaseStudyModal() {
  const modal = document.getElementById('casestudy-modal');
  const closeBtn = document.getElementById('casestudy-close-btn');
  const titleEl = document.getElementById('cs-title');
  const clientEl = document.getElementById('cs-client');
  const strategyEl = document.getElementById('cs-strategy');
  const deliverablesEl = document.getElementById('cs-deliverables');
  const resultsEl = document.getElementById('cs-results');
  const roasEl = document.getElementById('cs-roas');
  const turnaroundEl = document.getElementById('cs-turnaround');
  const ctaBtn = document.getElementById('cs-book-cta');

  function openCaseStudy(projectId) {
    const project = videoProjects.find(p => p.id === projectId) || videoProjects[0];

    if (titleEl) titleEl.textContent = project.title;
    if (clientEl) clientEl.textContent = project.client;
    if (strategyEl) strategyEl.textContent = project.strategy;
    if (deliverablesEl) deliverablesEl.textContent = project.deliverables;
    if (resultsEl) resultsEl.textContent = project.results;
    if (roasEl) roasEl.textContent = project.roas;
    if (turnaroundEl) turnaroundEl.textContent = project.turnaround;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseStudy() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeCaseStudy);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCaseStudy();
  });

  document.querySelectorAll('[data-action="view-case-study"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.projectId;
      openCaseStudy(id);
    });
  });

  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      closeCaseStudy();
      const bookingSection = document.getElementById('booking');
      if (bookingSection) bookingSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   E-Commerce Campaign & ROI Calculator & Pricing Action Integration
   ========================================================================== */
function initBookingEstimator() {
  const scopeSelect = document.getElementById('est-scope');
  const modelSelect = document.getElementById('est-model');
  const audioSelect = document.getElementById('est-audio');
  const turnaroundSelect = document.getElementById('est-turnaround');

  const priceDisplay = document.getElementById('est-price-val');
  const turnaroundDisplay = document.getElementById('est-time-val');
  const submitBtn = document.getElementById('booking-submit-btn');
  const packageBtns = document.querySelectorAll('[data-package]');

  function calculate() {
    let basePrice = 1800;
    let days = 3;

    if (scopeSelect) {
      if (scopeSelect.value === 'starter-pack') { basePrice = 1800; days = 3; }
      else if (scopeSelect.value === 'growth-scale') { basePrice = 3600; days = 5; }
      else if (scopeSelect.value === 'omnichannel-launch') { basePrice = 6800; days = 8; }
      else if (scopeSelect.value === 'monthly-retainer') { basePrice = 5200; days = 4; }
    }

    if (modelSelect && modelSelect.value === 'custom-lora') {
      basePrice += 1000;
      days += 1;
    }

    if (audioSelect && audioSelect.value === 'spatial-sfx') {
      basePrice += 600;
    }

    if (turnaroundSelect && turnaroundSelect.value === 'rush') {
      basePrice = Math.round(basePrice * 1.35);
      days = Math.max(2, Math.round(days * 0.6));
    }

    if (priceDisplay) priceDisplay.textContent = `$${basePrice.toLocaleString()}`;
    if (turnaroundDisplay) turnaroundDisplay.textContent = `${days} Business Days`;
  }

  if (scopeSelect) scopeSelect.addEventListener('change', calculate);
  if (modelSelect) modelSelect.addEventListener('change', calculate);
  if (audioSelect) audioSelect.addEventListener('change', calculate);
  if (turnaroundSelect) turnaroundSelect.addEventListener('change', calculate);

  calculate();

  // Handle pricing tier buttons
  packageBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const packageKey = btn.dataset.package;
      if (scopeSelect && packageKey) {
        scopeSelect.value = packageKey;
        calculate();
        const optionName = scopeSelect.options[scopeSelect.selectedIndex].text;
        showToast(`Selected Package: ${optionName}`);
      }
    });
  });

  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('booking-name');
      const emailInput = document.getElementById('booking-email');
      const msgInput = document.getElementById('booking-message');

      if (!nameInput || !nameInput.value.trim()) {
        showToast('Please enter your Brand Name & Contact Person.');
        if (nameInput) nameInput.focus();
        return;
      }
      if (!emailInput || !emailInput.value.trim() || !emailInput.value.includes('@')) {
        showToast('Please enter a valid Work Email.');
        if (emailInput) emailInput.focus();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i data-lucide="loader-2" class="spin-icon"></i> <span>Sending Creative Brief...</span>`;
      if (window.lucide) lucide.createIcons();

      setTimeout(() => {
        showToast('✓ Campaign Brief Received! Jerome will send your custom ad sample within 24 hours.');
        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
        if (msgInput) msgInput.value = '';
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i data-lucide="send"></i> <span>Request Free Custom Brand Sample</span>`;
        if (window.lucide) lucide.createIcons();
      }, 900);
    });
  }

  // Global smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#' && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navbar = document.getElementById('main-nav') || document.getElementById('navbar');
          const navHeight = navbar ? navbar.offsetHeight : 70;
          const targetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = Math.max(0, targetTop - navHeight - 14);

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

/* ==========================================================================
   Mobile Navigation Drawer (iOS & Android)
   ========================================================================== */
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-open');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');
  const drawerCta = document.getElementById('mobile-cta-btn');

  if (!drawer) return;

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }

  function openDrawer() {
    drawer.classList.add('active');
    document.body.classList.add('drawer-open');
    if (openBtn) {
      openBtn.classList.add('is-open');
      openBtn.setAttribute('aria-expanded', 'true');
    }
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    document.body.classList.remove('drawer-open');
    if (openBtn) {
      openBtn.classList.remove('is-open');
      openBtn.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleDrawer() {
    if (drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  }

  function smoothScrollTo(targetSelector) {
    if (!targetSelector || !targetSelector.startsWith('#')) return;
    const targetElement = document.querySelector(targetSelector);
    if (!targetElement) return;

    const navbar = document.getElementById('main-nav') || document.getElementById('navbar');
    const navHeight = navbar ? navbar.offsetHeight : 70;
    const targetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(0, targetTop - navHeight - 14);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDrawer();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
    });
  }

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      closeDrawer();
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        setTimeout(() => {
          smoothScrollTo(targetId);
        }, 120);
      }
    });
  });

  if (drawerCta) {
    drawerCta.addEventListener('click', (e) => {
      const targetId = drawerCta.getAttribute('href');
      closeDrawer();
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        setTimeout(() => {
          smoothScrollTo(targetId);
        }, 120);
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-cyan); flex-shrink: 0;"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
