export const site = {
  name: "TrueClean Solutions",
  location: "Lyons, Georgia",
  phone: "912-245-6075",
  phoneHref: "tel:9122456075",
  tagline: "A Better Cleaning Solution",
 description:
  "TrueClean Solutions provides exterior cleaning, pressure washing, property maintenance, minor repairs, move-out repairs, turnover services, equipment cleaning, and ongoing property care for homes, businesses, rentals, and managed properties across South Georgia.",
  serviceArea:
    "Serving Lyons, Vidalia, Toombs County, and surrounding South Georgia areas.",
  nav: [
  { label: "Services", href: "/#services" },
  { label: "Before & After", href: "/#before-after" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Quote", href: "/#quote" },
],
};

export const trustItems = [
  "Exterior Cleaning",
  "Pressure Washing",
  "Minor Repairs",
  "Move-Out Repairs",
  "Turnover Services",
  "Property Maintenance",
  "Equipment Cleaning",
  "South Georgia Service",
];

export const services = [
  {
    title: "Exterior Cleaning & Restoration",
    text: "Pressure washing, soft washing, house washing, storefront cleaning, sidewalks, concrete, common areas, and exterior surfaces that need cleaned up.",
  },
  {
    title: "Minor Repairs & Maintenance",
    text: "Small repair jobs like minor wood repairs, handrail repairs, fence and gate repairs, deck board replacement, caulking, and general exterior upkeep.",
  },
  {
    title: "Move-Out & Turnover Services",
    text: "Cleaning and repair help for move-outs, rentals, turnovers, managed properties, and spaces that need to be ready for the next tenant or guest.",
  },
  {
    title: "Property Management Support",
    text: "Ongoing property maintenance for homeowners, landlords, property managers, rentals, commercial properties, and multi-property needs.",
  },
  {
    title: "Exterior Maintenance Services",
    text: "Gutter cleaning, mailbox installation, house numbers, shutter replacement, exterior light fixture replacement, and other small exterior jobs.",
  },
  {
    title: "Commercial & Common Areas",
    text: "Cleaning and maintenance for storefronts, business entrances, sidewalks, trash enclosures, signs, shared spaces, and customer-facing exterior areas.",
  },
];

export const beforeAfter = [
  {
    title: "Covered Patio Cleaning",
    text: "A covered concrete patio cleaned to remove dirt, staining, and buildup from the surface and surrounding area.",
    before: "/images/residential-covered-patio-before.jpeg",
    after: "/images/residential-covered-patio-after.jpeg",
  },
  {
    title: "Front Porch Washing",
    text: "The front porch, walkway, and entry area cleaned for a brighter, better-kept first impression.",
    before: "/images/residential-front-porch-before.jpeg",
    after: "/images/residential-front-porch-after.jpeg",
  },
  {
    title: "Brick Chimney Cleaning",
    text: "Organic growth and dark staining removed from the brick to bring back its natural color.",
    before: "/images/residential-brick-chimney-before.jpeg",
    after: "/images/residential-brick-chimney-after.jpeg",
  },
  {
    title: "Wood Deck Cleaning",
    text: "A weathered deck and built-in seating cleaned to remove surface buildup and freshen the outdoor space.",
    before: "/images/residential-wood-deck-before.jpeg",
    after: "/images/residential-wood-deck-after.jpeg",
  },
  {
    title: "Commercial Building Washing",
    text: "Commercial exterior surfaces cleaned to improve curb appeal and make the property look better cared for.",
    before: "/images/trueclean-before1.jpg",
    after: "/images/trueclean-after1.jpg",
  },
  {
    title: "Equipment Cleaning",
    text: "Heavy equipment areas cleaned to remove grime, buildup, and jobsite mess from hard-working machinery.",
    before: "/images/equipment-dirty-pump.jpg",
    after: "/images/equipment-clean-pump2.jpg",
  },
  {
    title: "Spiderweb Removal",
    text: "Spiderwebs and exterior buildup removed from the home for a cleaner, brighter look.",
    before: "/images/house-before.jpg",
    after: "/images/house-after.jpg",
  },
  {
    title: "Sidewalk & Concrete Cleaning",
    text: "Sidewalks and concrete surfaces cleaned to remove buildup and brighten up the property.",
    before: "/images/trueclean-before2.jpg",
    after: "/images/trueclean-after2.jpg",
  },
];

export const faqs = [
  {
  question: "What services do you offer?",
  answer:
    "Services include exterior cleaning, pressure washing, soft washing, house washing, spiderweb removal, sidewalk and concrete cleaning, equipment cleaning, minor repairs, move-out repairs, turnover services, and ongoing property maintenance.",
},
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. You can call or text TrueClean Solutions and explain what needs cleaned. Photos are helpful when possible.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "TrueClean Solutions is based in Lyons, Georgia and serves Lyons, Vidalia, Toombs County, and surrounding South Georgia areas.",
  },
  {
    question: "What cleaning services do you offer?",
    answer:
      "Services include soft washing, house washing, spiderweb removal, sidewalk and concrete cleaning, equipment cleaning, storefront cleaning, commercial washing, and exterior cleaning.",
  },
  {
    question: "Do you clean both homes and businesses?",
    answer:
      "Yes. TrueClean Solutions provides residential and commercial exterior cleaning for homes, storefronts, offices, shops, gas stations, sidewalks, concrete areas, and other local properties.",
  },
  {
    question: "Do you clean heavy equipment?",
    answer:
      "Yes. TrueClean Solutions offers cleaning for logging equipment, construction equipment, heavy machinery, trailers, and other work equipment.",
  },
  {
    question: "What is soft washing?",
    answer:
      "Soft washing is a lower-pressure cleaning method used for surfaces that need a careful clean, such as siding, trim, storefronts, and some exterior areas.",
  },
  {
    question: "Can I send photos before getting a quote?",
    answer:
      "Yes. Sending photos of the area that needs cleaned is one of the easiest ways to get the quote process started.",
  },
  {
  question: "Do you work with landlords or property managers?",
  answer:
    "Yes. TrueClean Solutions can help homeowners, landlords, property managers, rentals, and commercial properties with cleaning, minor repairs, move-out work, turnover services, and ongoing maintenance needs.",
},
];
export type GalleryItem = {
  type: "image" | "video";
  title: string;
  category:
    | "Residential"
    | "Commercial"
    | "Concrete"
    | "Equipment"
    | "Team"
    | "Videos";
  src: string;
  alt: string;
  poster?: string;
  label?: "Before" | "After" | "Jobsite" | "Team";
  featured?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    type: "image",
    title: "Brick Home Exterior",
    category: "Residential",
    src: "/images/residential-brick-home-after.jpeg",
    alt: "Brick home exterior after residential exterior cleaning",
    label: "After",
    featured: true,
  },
  {
    type: "image",
    title: "Covered Patio Cleaning",
    category: "Residential",
    src: "/images/residential-covered-patio-before.jpeg",
    alt: "Covered concrete patio before exterior cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Covered Patio Cleaning",
    category: "Residential",
    src: "/images/residential-covered-patio-after.jpeg",
    alt: "Covered concrete patio after exterior cleaning",
    label: "After",
    featured: true,
  },
  {
    type: "image",
    title: "Front Porch Washing",
    category: "Residential",
    src: "/images/residential-front-porch-before.jpeg",
    alt: "Front porch before pressure washing and exterior cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Front Porch Washing",
    category: "Residential",
    src: "/images/residential-front-porch-after.jpeg",
    alt: "Front porch after pressure washing and exterior cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Brick Chimney Cleaning",
    category: "Residential",
    src: "/images/residential-brick-chimney-before.jpeg",
    alt: "Brick chimney with organic staining before exterior cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Brick Chimney Cleaning",
    category: "Residential",
    src: "/images/residential-brick-chimney-after.jpeg",
    alt: "Brick chimney after exterior cleaning",
    label: "After",
    featured: true,
  },
  {
    type: "image",
    title: "Wood Deck Cleaning",
    category: "Residential",
    src: "/images/residential-wood-deck-before.jpeg",
    alt: "Wood deck and built-in seating before exterior cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Wood Deck Cleaning",
    category: "Residential",
    src: "/images/residential-wood-deck-after.jpeg",
    alt: "Wood deck and built-in seating after exterior cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Stucco House Washing",
    category: "Residential",
    src: "/images/residential-stucco-house-before-front.jpeg",
    alt: "Stucco home with dark exterior staining before cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Stucco House Washing",
    category: "Residential",
    src: "/images/residential-stucco-house-after-side.jpeg",
    alt: "Stucco home exterior after house washing",
    label: "After",
    featured: true,
  },
  {
    type: "image",
    title: "Stucco House Washing",
    category: "Residential",
    src: "/images/residential-stucco-house-after-rear.jpeg",
    alt: "Rear stucco wall and windows after house washing",
    label: "After",
  },
  {
    type: "image",
    title: "Spiderweb Removal",
    category: "Residential",
    src: "/images/house-before.jpg",
    alt: "Spiderweb buildup before exterior cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Spiderweb Removal",
    category: "Residential",
    src: "/images/house-after.jpg",
    alt: "Spiderwebs removed from home exterior",
    label: "After",
  },
  {
    type: "image",
    title: "Porch Ceiling Cleaning",
    category: "Residential",
    src: "/images/house-before-1.jpeg",
    alt: "Covered porch ceiling before cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Porch Ceiling Cleaning",
    category: "Residential",
    src: "/images/house-after-1.jpeg",
    alt: "Covered porch ceiling after cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Covered Porch Cleaning",
    category: "Residential",
    src: "/images/house-before-2.jpeg",
    alt: "Covered porch trim and ceiling before cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Covered Porch Cleaning",
    category: "Residential",
    src: "/images/house-after-2.jpeg",
    alt: "Covered porch trim and ceiling after cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Residential Entry Cleaning",
    category: "Residential",
    src: "/images/house-before-3.jpeg",
    alt: "Residential entry and porch area before cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Residential Entry Cleaning",
    category: "Residential",
    src: "/images/house-after-3.jpeg",
    alt: "Residential entry and porch area after cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "House Exterior Cleaning",
    category: "Residential",
    src: "/images/house-before-4.jpeg",
    alt: "House exterior and porch before cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "House Exterior Cleaning",
    category: "Residential",
    src: "/images/house-after-4.jpeg",
    alt: "House exterior and porch after cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Commercial Building Washing",
    category: "Commercial",
    src: "/images/trueclean-before1.jpg",
    alt: "Commercial building before exterior cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Commercial Building Washing",
    category: "Commercial",
    src: "/images/trueclean-after1.jpg",
    alt: "Commercial building after exterior cleaning",
    label: "After",
    featured: true,
  },
  {
    type: "image",
    title: "Sidewalk & Concrete Cleaning",
    category: "Concrete",
    src: "/images/trueclean-before2.jpg",
    alt: "Sidewalk before concrete cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Sidewalk & Concrete Cleaning",
    category: "Concrete",
    src: "/images/trueclean-after2.jpg",
    alt: "Sidewalk after concrete cleaning",
    label: "After",
    featured: true,
  },
  {
    type: "image",
    title: "Equipment Pump Area",
    category: "Equipment",
    src: "/images/equipment-dirty-pump.jpg",
    alt: "Heavy equipment pump area before cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Equipment Pump Area",
    category: "Equipment",
    src: "/images/equipment-clean-pump2.jpg",
    alt: "Heavy equipment pump and hydraulic area after cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Equipment Pump Cleaning",
    category: "Equipment",
    src: "/images/equipment-clean-pump.jpg",
    alt: "Heavy equipment pump area before cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Equipment Engine Bay",
    category: "Equipment",
    src: "/images/equipment-clean-engine.jpg",
    alt: "Heavy equipment engine bay before cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Equipment Engine Compartment",
    category: "Equipment",
    src: "/images/equipment-clean-engine2.jpg",
    alt: "Heavy equipment engine compartment before cleaning",
    label: "Before",
  },
  {
    type: "image",
    title: "Equipment Side Bay",
    category: "Equipment",
    src: "/images/equipment-clean-bay.jpg",
    alt: "Heavy equipment side bay after cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Equipment Interior Area",
    category: "Equipment",
    src: "/images/equipment-1-interior.jpg",
    alt: "Heavy equipment interior mechanical area",
    label: "Jobsite",
  },
  {
    type: "image",
    title: "Excavator Cleaning",
    category: "Equipment",
    src: "/images/shovel-1.png",
    alt: "Excavator at a heavy equipment cleaning job",
    label: "Jobsite",
  },
  {
    type: "image",
    title: "Excavator Cleaning",
    category: "Equipment",
    src: "/images/shovel-2.png",
    alt: "Heavy equipment excavator after exterior cleaning",
    label: "After",
    featured: true,
  },
  {
    type: "image",
    title: "Equipment Side Compartment",
    category: "Equipment",
    src: "/images/shovel-bay.jpeg",
    alt: "Heavy equipment side compartment after cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Equipment Cab Cleaning",
    category: "Equipment",
    src: "/images/shovel-cab.jpeg",
    alt: "Heavy equipment cab interior after cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Equipment Engine Cleaning",
    category: "Equipment",
    src: "/images/shovel-engine.jpeg",
    alt: "Heavy equipment engine after cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Pump & Engine Cleaning",
    category: "Equipment",
    src: "/images/shovel-pump-engine.jpeg",
    alt: "Heavy equipment pump and engine area after cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Hydraulic Area Cleaning",
    category: "Equipment",
    src: "/images/shovel-pump.jpeg",
    alt: "Heavy equipment hydraulic area after cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "Skidder Cleaning",
    category: "Equipment",
    src: "/images/skidder-clean1.jpg",
    alt: "Logging skidder after equipment cleaning",
    label: "After",
  },
  {
    type: "image",
    title: "TrueClean Work Trailer",
    category: "Team",
    src: "/images/truck-trailer-front.JPG",
    alt: "TrueClean Solutions truck and cleaning trailer at a jobsite",
    label: "Team",
  },
  {
    type: "image",
    title: "Cleaning Rig at Work",
    category: "Team",
    src: "/images/truck-trailer-rear.jpg",
    alt: "TrueClean Solutions cleaning rig and equipment at a worksite",
    label: "Team",
  },
  {
    type: "image",
    title: "TrueClean Solutions Crew",
    category: "Team",
    src: "/images/trueclean-crew.jpg",
    alt: "TrueClean Solutions crew beside the cleaning trailer",
    label: "Team",
  },
  {
    type: "image",
    title: "Community Cleaning Setup",
    category: "Team",
    src: "/images/trueclean-crew2.jpg",
    alt: "TrueClean Solutions crew and cleaning setup at a local business",
    label: "Team",
  },
  {
    type: "image",
    title: "TrueClean Mobile Cleaning Rig",
    category: "Team",
    src: "/images/trueclean-hero.jpg",
    alt: "TrueClean Solutions mobile exterior cleaning trailer and truck",
    label: "Team",
  },
  {
    type: "image",
    title: "TrueClean Equipment Trailer",
    category: "Team",
    src: "/images/trueclean-hero2.jpg",
    alt: "TrueClean Solutions branded equipment cleaning trailer",
    label: "Team",
  },
  {
    type: "video",
    title: "Residential Pressure Washing",
    category: "Videos",
    src: "/videos/residential-pressure-washing.mp4",
    poster: "/images/trueclean-before2.jpg",
    alt: "Residential concrete pressure washing video",
  },
  {
    type: "video",
    title: "Equipment Cleaning Video",
    category: "Videos",
    src: "/videos/equipment-cleaning-1.mp4",
    poster: "/images/shovel-1.png",
    alt: "Heavy equipment cleaning video by TrueClean Solutions",
  },
];
