import { createSlice } from "@reduxjs/toolkit";
import { fetchProperties } from "./slice";

const defaultProperties = [
  {
    id: "p1",
    name: "Serene Crest Villa",
    category: "Villa",
    location: "Sector 15, Gurgaon, Delhi NCR",
    price: "₹4,25,00,000",
    beds: 4,
    baths: 4.5,
    sqft: 3200,
    photo: "/images/img7.jpg",
    verified: true,
    label: "Featured",
    description:
      "An exquisite luxury villa nestled in a quiet premium enclave. Features a private swimming pool, beautifully landscaped gardens, custom woodwork, and a modern modular smart kitchen.",
    amenities: [
      "Private Pool",
      "Garden",
      "Smart Home Tech",
      "Modular Kitchen",
      "Gym",
      "24/7 Security",
    ],
  },
  {
    id: "p2",
    name: "DLF Urban Grande Towers",
    category: "Apartment",
    location: "Sector 62 Extension, Near NH-24, Delhi",
    price: "₹1,65,00,000",
    beds: 3,
    baths: 3,
    sqft: 1850,
    photo: "/images/img9.jpg",
    verified: true,
    label: "New",
    description:
      "Stunning modern apartment at DLF Urban Grande. Bright open-concept living space with premium marble floorings, modular closets, and panoramic city-views from a private deck.",
    amenities: [
      "Panoramic View",
      "Marble Flooring",
      "Balcony",
      "Club House",
      "Gym",
      "Power Backup",
    ],
  },
  {
    id: "p3",
    name: "Apex Skyline Penthouse",
    category: "Penthouse",
    location: "Noida Sector 78, Uttar Pradesh",
    price: "₹2,80,00,000",
    beds: 4,
    baths: 5,
    sqft: 2600,
    photo: "/images/img6.jpg",
    verified: true,
    label: "Hot Deal",
    description:
      "Superb double-story penthouse offering 360-degree skyline views. Complete with a private rooftop terrace, high ceilings, automated blinds, and top-tier luxury appliances.",
    amenities: [
      "Private Rooftop",
      "High Ceilings",
      "Automated Blinds",
      "Jacuzzi",
      "Elevator",
      "Wine Cellar",
    ],
  },
  {
    id: "p4",
    name: "Prestige Commercial Plaza",
    category: "Commercial",
    location: "Connaught Place, Central Delhi",
    price: "₹8,50,00,000",
    beds: 0,
    baths: 4,
    sqft: 4200,
    photo: "/images/img10.jpg",
    verified: true,
    label: "Premium",
    description:
      "Prime commercial office space in Connaught Place. Features open layout floor plans, modern conference rooms, a fully equipped pantry, and round-the-clock power and security.",
    amenities: [
      "Conference Rooms",
      "Central A/C",
      "Pantry",
      "Parking Garage",
      "High-speed Internet",
      "Security Desk",
    ],
  },
  {
    id: "p5",
    name: "Emerald Gardens Residence",
    category: "Apartment",
    location: "Vasant Kunj, South Delhi",
    price: "₹1,95,00,000",
    beds: 3,
    baths: 2,
    sqft: 1600,
    photo: "/images/photo-1512917774080-9991f1c4c750.avif",
    verified: false,
    label: "New",
    description:
      "Elegant family apartment located in the prime Vasant Kunj locality. Surrounded by lush greenery, featuring spacious bedrooms, wide balconies, and close proximity to top schools.",
    amenities: [
      "Greenery View",
      "Kids Play Area",
      "Car Parking",
      "Jogging Track",
      "Intercom",
      "Water Storage",
    ],
  },
  {
    id: "p6",
    name: "Vedic Heights Suite",
    category: "Apartment",
    location: "Golf Course Road, Gurgaon",
    price: "₹2,10,00,000",
    beds: 2,
    baths: 2,
    sqft: 1350,
    photo: "/images/slider-1.jpg",
    verified: true,
    label: "New",
    description:
      "Chic luxury suite perfect for young professionals. Built-in walk-in closets, designer fixtures, state-of-the-art HVAC system, and exclusive access to the sky-lounge.",
    amenities: [
      "Sky Lounge",
      "Walk-in Closets",
      "Central HVAC",
      "Gym",
      "Concierge",
      "Swimming Pool",
    ],
  },
  {
    id: "p7",
    name: "The Grand Vista Estate",
    category: "Villa",
    location: "Sohna Road, Gurgaon",
    price: "₹5,60,00,000",
    beds: 5,
    baths: 6,
    sqft: 4500,
    photo: "/images/slider-2-3.jpg",
    verified: true,
    label: "Featured",
    description:
      "A majestic estate showcasing unparalleled luxury and design. Features expansive floor plans, a private home theatre, infinity pool, and state-of-the-art security systems.",
    amenities: [
      "Infinity Pool",
      "Home Theatre",
      "Large Garden",
      "Double Garage",
      "Servant Quarters",
      "CCTV Security",
    ],
  },
  {
    id: "p8",
    name: "Central Business Tower",
    category: "Commercial",
    location: "Okhla Phase III, New Delhi",
    price: "₹3,90,00,000",
    beds: 0,
    baths: 3,
    sqft: 2800,
    photo: "/images/commercial.png",
    verified: true,
    label: "Hot Deal",
    description:
      "A-Grade corporate office space designed for high productivity. Excellent connectivity, high-speed elevator access, meeting rooms, and high floor-to-ceiling heights.",
    amenities: [
      "High Speed Elevators",
      "Meeting Rooms",
      "Fiber Optic",
      "Cafeteria",
      "Power Backup",
      "Fire Alarm",
    ],
  },
  {
    id: "p9",
    name: "Sunset Ridge Apartments",
    category: "Apartment",
    location: "Dwarka Sector 12, New Delhi",
    price: "₹1,28,00,000",
    beds: 2,
    baths: 2,
    sqft: 1180,
    photo: "/images/img5.jpg",
    verified: true,
    label: "New",
    description:
      "Sunlit two-bedroom apartment with an open kitchen, wide windows, and a quiet inner-courtyard view. Ideal for small families close to metro and daily conveniences.",
    amenities: [
      "Metro Access",
      "Balcony",
      "Power Backup",
      "Covered Parking",
      "Kids Play Area",
    ],
  },
  {
    id: "p10",
    name: "Palm Court Family Villa",
    category: "Villa",
    location: "Greater Noida West, Uttar Pradesh",
    price: "₹3,75,00,000",
    beds: 4,
    baths: 4,
    sqft: 2900,
    photo: "/images/img1.jpg",
    verified: true,
    label: "Featured",
    description:
      "Detached villa with a landscaped lawn, separate living and dining halls, and a modular kitchen. Private driveway parking and a rooftop sit-out for evenings.",
    amenities: [
      "Private Lawn",
      "Rooftop Deck",
      "Modular Kitchen",
      "Garage",
      "24/7 Security",
    ],
  },
  {
    id: "p11",
    name: "Harbour Lights Studio",
    category: "Apartment",
    location: "Hauz Khas Village, South Delhi",
    price: "₹98,50,000",
    beds: 1,
    baths: 1,
    sqft: 720,
    photo: "/images/img2.jpg",
    verified: true,
    label: "Hot Deal",
    description:
      "Compact designer studio with built-in storage, a full kitchenette, and cafe-style interiors. Walk to cafes, parks, and weekend markets.",
    amenities: [
      "Furnished",
      "Wi-Fi Ready",
      "Intercom",
      "Lift",
      "Water Storage",
    ],
  },
  {
    id: "p12",
    name: "Lotus Lake Residences",
    category: "Apartment",
    location: "Noida Sector 150, Uttar Pradesh",
    price: "₹2,45,00,000",
    beds: 3,
    baths: 3,
    sqft: 1980,
    photo: "/images/lotus-design-n-print-jt2I98bh53A-unsplash.jpg",
    verified: true,
    label: "Premium",
    description:
      "Lake-facing three-bedroom home with a large living room, walk-in wardrobe, and club access. Floor-to-ceiling glass brings in morning light across the living area.",
    amenities: [
      "Lake View",
      "Club House",
      "Swimming Pool",
      "Gym",
      "Jogging Track",
    ],
  },
  {
    id: "p13",
    name: "Amber Courtyard Penthouse",
    category: "Penthouse",
    location: "Aerocity, New Delhi",
    price: "₹4,90,00,000",
    beds: 3,
    baths: 4,
    sqft: 2400,
    photo: "/images/img4.jpg",
    verified: true,
    label: "Featured",
    description:
      "Duplex penthouse with a private terrace, chef kitchen, and guest suite. Airport-adjacent location with hotel-grade amenities in the tower.",
    amenities: [
      "Private Terrace",
      "Concierge",
      "Jacuzzi",
      "Valet Parking",
      "Smart Home Tech",
    ],
  },
  {
    id: "p14",
    name: "Cedar Park Townhome",
    category: "Villa",
    location: "Faridabad Sector 21, Haryana",
    price: "₹2,15,00,000",
    beds: 3,
    baths: 3,
    sqft: 2100,
    photo: "/images/danilo-rios-AgK_XAqSbfk-unsplash.jpg",
    verified: false,
    label: "New",
    description:
      "Row villa with a small front garden, three bedrooms, and a bright first-floor family lounge. Quiet gated pocket with parks and schools nearby.",
    amenities: [
      "Gated Society",
      "Garden",
      "Car Parking",
      "Power Backup",
      "Park Access",
    ],
  },
  {
    id: "p15",
    name: "Midtown Workspaces",
    category: "Commercial",
    location: "Nehru Place, New Delhi",
    price: "₹2,70,00,000",
    beds: 0,
    baths: 2,
    sqft: 1650,
    photo: "/images/mostafa-safadel-cHjAxnJk_wQ-unsplash.jpg",
    verified: true,
    label: "Hot Deal",
    description:
      "Ready-to-move office floor with partitioned cabins, a reception bay, and a pantry. High footfall commercial hub with metro connectivity.",
    amenities: ["Reception", "Cabins", "Pantry", "Lift Access", "Power Backup"],
  },
  {
    id: "p16",
    name: "Riverwalk Corner Flat",
    category: "Apartment",
    location: "Rohini Sector 18, New Delhi",
    price: "₹1,42,00,000",
    beds: 3,
    baths: 2,
    sqft: 1450,
    photo: "/images/robbie-duncan-BxleF4zbbT8-unsplash.jpg",
    verified: true,
    label: "New",
    description:
      "Corner three-bedroom apartment with dual balconies, a utility area, and cross-ventilation. Family-friendly society with a club and covered parking.",
    amenities: [
      "Dual Balcony",
      "Club House",
      "Covered Parking",
      "Security",
      "Power Backup",
    ],
  },
];

const propertyReducer = createSlice({
  name: "properties",

  initialState: {
    properties: defaultProperties,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProperties.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchProperties.fulfilled, (state, action) => {
      state.loading = false;

      const locations = [
        "Vasant Kunj, South Delhi",
        "Sector 62 Extension, Noida",
        "Golf Course Road, Gurgaon",
        "Connaught Place, Central Delhi",
        "Noida Sector 78, Uttar Pradesh",
        "Sohna Road, Gurgaon",
      ];
      const categories = [
        "Apartment",
        "Apartment",
        "Apartment",
        "Apartment",
        "Apartment",
        "Apartment",
      ];
      const descriptions = [
        "A premium cozy residence offering luxury and absolute privacy. Fully equipped kitchen, bright layout, and designer interiors.",
        "Stunning modular flat close to local parks and transport hubs. Built with high quality materials and custom fittings.",
        "Spacious residential suite with wide balconies, modern fixtures, and full power backup services.",
        "Perfect corporate suite or studio room with luxury layout and beautiful high-ceilings.",
        "Elegant living space with marble flooring, custom modular closets, and panoramic balcony views.",
        "A beautiful residence designed for maximum comfort, convenience, and modern aesthetic.",
      ];
      const amenitiesLists = [
        ["Wi-Fi", "Air Conditioning", "Balcony", "Power Backup", "Gym"],
        ["Parking", "Wi-Fi", "Elevator", "Kids Play Area", "24/7 Security"],
        ["Gym", "Club House", "Modular Kitchen", "Jogging Track", "Intercom"],
        ["Central A/C", "Pantry", "Fiber Optic", "Meeting Rooms", "Parking"],
        ["Panoramic View", "Marble Flooring", "Balcony", "Club House", "Gym"],
        ["Sky Lounge", "Walk-in Closets", "Gym", "Concierge", "Swimming Pool"],
      ];

      // Enrich API listings to match front-end structure
      const enrichedFetched = action.payload.map((prop, idx) => {
        return {
          id: `fetched-${prop.id}`,
          name: prop.name || `Premium Listing #${prop.id}`,
          category: categories[idx % categories.length],
          location: locations[idx % locations.length],
          price: prop.price
            ? `₹${(prop.price * 80).toLocaleString("en-IN")}`
            : "₹1,20,00,000",
          beds: prop.bed === "king" ? 3 : prop.bed === "queen" ? 2 : 1,
          baths: prop.bathroom === "private" ? 2 : 1,
          sqft: 800 + prop.id * 150,
          photo: prop.photo || "/images/apartment.png",
          verified: true,
          label:
            prop.discount && (prop.discount.percent || prop.discount.amount)
              ? "Discount"
              : "New",
          description: descriptions[idx % descriptions.length],
          amenities: amenitiesLists[idx % amenitiesLists.length],
        };
      });

      // Combine both lists, keeping default ones first
      state.properties = [...defaultProperties, ...enrichedFetched];
    });

    builder.addCase(fetchProperties.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default propertyReducer.reducer;
