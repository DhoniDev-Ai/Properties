export interface Property {
    id: number;
    slug: string;
    title: string;
    type: string;
    listingType: "For Sale" | "For Rent";
    price: string;
    numericPrice: number;
    location: {
        address: string;
        city: string;
        state: string;
        pincode: string;
        lat: number;
        lng: number;
    };
    specs: {
        bhk: string;
        bedrooms: number;
        bathrooms: number;
        balconies: number;
        carpetArea: string;
        builtUpArea: string;
        floor: string;
        totalFloors: number;
        facing: string;
        age: string;
        furnishing: string;
    };
    amenities: string[];
    description: string;
    images: string[];
    owner: {
        name: string;
        photo: string;
        phone: string;
        email: string;
        type: string;
    };
    isFeatured: boolean;
    isNew: boolean;
    views: number;
    updatedAt: string;
}

export const properties: Property[] = [
    {
        id: 1,
        slug: "royal-rajvilas-premium-3bhk",
        title: "Royal Rajvilas - Premium 3BHK Apartment",
        type: "Apartment",
        listingType: "For Sale",
        price: "₹1.5 Cr",
        numericPrice: 15000000,
        location: {
            address: "C-Scheme",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302001",
            lat: 26.9124,
            lng: 75.7873
        },
        specs: {
            bhk: "3 BHK",
            bedrooms: 3,
            bathrooms: 3,
            balconies: 2,
            carpetArea: "3200 sq.ft",
            builtUpArea: "3500 sq.ft",
            floor: "8th out of 12",
            totalFloors: 12,
            facing: "East",
            age: "New Launch",
            furnishing: "Semi-Furnished"
        },
        amenities: [
            "24x7 Security", "Clubhouse", "Gymnasium", "Power Backup", 
            "Swimming Pool", "Kids Play Area", "Landscape Garden", "Intercom"
        ],
        description: "Royal Rajvilas offers ultra-luxurious 3BHK and 4BHK apartments in the most prestigious locality of Jaipur - C-Scheme. This property defines elegance with its modern architecture, premium finishing, and world-class amenities. Experience an unmatched lifestyle with spacious rooms, high ceilings, and ample natural light throughout the day. Located close to key government offices, high-end restaurants, and luxury boutiques.",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1600607687940-4e5a9942d63e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600585154526-990dcea42e49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        owner: {
            name: "Rajesh Sharma",
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
            phone: "+91 98765 43210",
            email: "rajesh@agraproperties.com",
            type: "Property Advisor"
        },
        isFeatured: true,
        isNew: true,
        views: 1240,
        updatedAt: "2 days ago"
    },
    {
        id: 2,
        slug: "mansion-royale-villas",
        title: "Mansion Royale Luxury Villas",
        type: "Villa",
        listingType: "For Sale",
        price: "On Request",
        numericPrice: 0,
        location: {
            address: "Opp. Jaipur Int. Airport",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302011",
            lat: 26.8289,
            lng: 75.8056
        },
        specs: {
            bhk: "4 & 5 BHK",
            bedrooms: 5,
            bathrooms: 6,
            balconies: 4,
            carpetArea: "6500 sq.ft",
            builtUpArea: "6977 sq.ft",
            floor: "Ground + 2",
            totalFloors: 3,
            facing: "North-East",
            age: "Under Construction",
            furnishing: "Unfurnished"
        },
        amenities: [
            "Private Lift", "Smart Home Automation", "Infinity Pool", "Yoga Deck", 
            "Home Theatre", "Italian Marble Flooring", "Concierge Service", "Mini Golf"
        ],
        description: "Mansion Royale is a limited edition collection of ultra-premium villas designed for those who have arrived in life. Located directly opposite the Jaipur International Airport, these villas offer unparalleled connectivity and prestige. Each villa is a masterpiece of design, blending classical elegance with contemporary luxuries. Sprawling across three levels, the residence features a double-height living room, private deck with pool, and an automated kitchen.",
        images: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512915922686-57c11fd9b6b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        owner: {
            name: "Amit Mehra",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
            phone: "+91 91234 56789",
            email: "amit@luxehomes.com",
            type: "Premier Consultant"
        },
        isFeatured: true,
        isNew: false,
        views: 856,
        updatedAt: "5 days ago"
    },
    {
        id: 3,
        slug: "skyline-apartments-rent",
        title: "Skyline Premium Apartments",
        type: "Apartment",
        listingType: "For Rent",
        price: "₹35,000 / month",
        numericPrice: 35000,
        location: {
            address: "Vaishali Nagar",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302021",
            lat: 26.9080,
            lng: 75.7486
        },
        specs: {
            bhk: "2 BHK",
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            carpetArea: "1100 sq.ft",
            builtUpArea: "1250 sq.ft",
            floor: "5th out of 10",
            totalFloors: 10,
            facing: "West",
            age: "1-5 Years",
            furnishing: "Fully-Furnished"
        },
        amenities: ["Covered Parking", "Lift", "Power Backup", "Security", "RO Water System", "AC"],
        description: "Beautifully furnished 2 BHK apartment available for rent in Vaishali Nagar. Excellent natural light and cross ventilation. Close to schools and hospitals.",
        images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1502672260266-1c1f564dcfe5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        owner: { name: "Sunil Verma", photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 99887 76655", email: "sunil@example.com", type: "Owner" },
        isFeatured: false,
        isNew: true,
        views: 312,
        updatedAt: "1 day ago"
    },
    {
        id: 4,
        slug: "green-valley-independent-house",
        title: "Green Valley Independent House",
        type: "Independent House",
        listingType: "For Sale",
        price: "₹85 Lacs",
        numericPrice: 8500000,
        location: {
            address: "Mansarovar",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302020",
            lat: 26.8530,
            lng: 75.7629
        },
        specs: {
            bhk: "3 BHK",
            bedrooms: 3,
            bathrooms: 3,
            balconies: 2,
            carpetArea: "1800 sq.ft",
            builtUpArea: "2100 sq.ft",
            floor: "Ground + 1",
            totalFloors: 2,
            facing: "East",
            age: "5-10 Years",
            furnishing: "Semi-Furnished"
        },
        amenities: ["Private Garden", "Covered Parking", "Water Storage", "Vaastu Compliant", "Park Facing"],
        description: "Spacious independent house in the heart of Mansarovar. Features a beautiful private garden, large living area, and modular kitchen.",
        images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Priya Singh", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 88776 65544", email: "priya@example.com", type: "Owner" },
        isFeatured: false,
        isNew: false,
        views: 89,
        updatedAt: "1 week ago"
    },
    {
        id: 5,
        slug: "aurora-commercial-office",
        title: "Aurora Business Park Office",
        type: "Commercial Office",
        listingType: "For Rent",
        price: "₹1.2 Lacs / month",
        numericPrice: 120000,
        location: {
            address: "Jagatpura",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302017",
            lat: 26.8202,
            lng: 75.8369
        },
        specs: {
            bhk: "Office Setup",
            bedrooms: 0,
            bathrooms: 4,
            balconies: 0,
            carpetArea: "3500 sq.ft",
            builtUpArea: "4000 sq.ft",
            floor: "3rd out of 8",
            totalFloors: 8,
            facing: "North",
            age: "New Launch",
            furnishing: "Bare Shell"
        },
        amenities: ["Central AC", "Cafeteria", "Grade A Building", "Conference Room", "Covered Parking", "24x7 Security"],
        description: "Premium bare shell commercial office space in Jagatpura's leading business park. Ideal for IT companies and corporate setups.",
        images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Corporate Real Estate", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 77665 54433", email: "cre@example.com", type: "Builder" },
        isFeatured: true,
        isNew: true,
        views: 540,
        updatedAt: "Just now"
    },
    {
        id: 6,
        slug: "sunshine-apartments-1bhk",
        title: "Sunshine Studio Apartment",
        type: "Apartment",
        listingType: "For Sale",
        price: "₹18 Lacs",
        numericPrice: 1800000,
        location: {
            address: "Ajmer Road",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302006",
            lat: 26.8920,
            lng: 75.7410
        },
        specs: {
            bhk: "1 BHK",
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            carpetArea: "450 sq.ft",
            builtUpArea: "550 sq.ft",
            floor: "2nd out of 4",
            totalFloors: 4,
            facing: "East",
            age: "1-5 Years",
            furnishing: "Unfurnished"
        },
        amenities: ["Two Wheeler Parking", "Water Supply"],
        description: "Affordable 1 BHK apartment suitable for bachelors or small families. Good connectivity to Ajmer Road highway.",
        images: ["https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Rahul Sharma", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 99887 11223", email: "rahul@example.com", type: "Owner" },
        isFeatured: false,
        isNew: false,
        views: 120,
        updatedAt: "2 weeks ago"
    },
    {
        id: 7,
        slug: "raj-heights-4bhk",
        title: "Raj Heights Premium 4BHK",
        type: "Apartment",
        listingType: "For Sale",
        price: "₹2.2 Cr",
        numericPrice: 22000000,
        location: {
            address: "C-Scheme",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302001",
            lat: 26.9124,
            lng: 75.7873
        },
        specs: {
            bhk: "4 BHK",
            bedrooms: 4,
            bathrooms: 4,
            balconies: 3,
            carpetArea: "3800 sq.ft",
            builtUpArea: "4200 sq.ft",
            floor: "11th out of 15",
            totalFloors: 15,
            facing: "North-East",
            age: "New Launch",
            furnishing: "Semi-Furnished"
        },
        amenities: ["Swimming Pool", "Gym", "Clubhouse", "24x7 Security", "Indoor Games", "Jogging Track"],
        description: "Experience luxury at Raj Heights in C-Scheme. A massive 4BHK running across 4200 sqft with panoramic city views.",
        images: ["https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Ravi Properties", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 88990 00111", email: "ravi@example.com", type: "Agent" },
        isFeatured: true,
        isNew: true,
        views: 450,
        updatedAt: "Yesterday"
    },
    {
        id: 8,
        slug: "shanti-villas-rent",
        title: "Shanti Villas - 3BHK Rental",
        type: "Villa",
        listingType: "For Rent",
        price: "₹45,000 / month",
        numericPrice: 45000,
        location: {
            address: "Malviya Nagar",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302017",
            lat: 26.8518,
            lng: 75.8056
        },
        specs: {
            bhk: "3 BHK",
            bedrooms: 3,
            bathrooms: 3,
            balconies: 2,
            carpetArea: "2000 sq.ft",
            builtUpArea: "2200 sq.ft",
            floor: "Ground + 1",
            totalFloors: 2,
            facing: "North",
            age: "5-10 Years",
            furnishing: "Semi-Furnished"
        },
        amenities: ["Park Facing", "1 Open Parking", "Water Storage", "Security"],
        description: "A peaceful 3BHK villa located in the posh area of Malviya Nagar. Very close to WTP and GT Mall.",
        images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Kiran Devi", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 77889 99000", email: "kiran@example.com", type: "Owner" },
        isFeatured: false,
        isNew: false,
        views: 231,
        updatedAt: "3 days ago"
    },
    {
        id: 9,
        slug: "city-center-shop",
        title: "City Center Retail Shop",
        type: "Commercial Shop",
        listingType: "For Sale",
        price: "₹65 Lacs",
        numericPrice: 6500000,
        location: {
            address: "Raja Park",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302004",
            lat: 26.8967,
            lng: 75.8286
        },
        specs: {
            bhk: "Shop",
            bedrooms: 0,
            bathrooms: 1,
            balconies: 0,
            carpetArea: "350 sq.ft",
            builtUpArea: "400 sq.ft",
            floor: "Ground Floor",
            totalFloors: 3,
            facing: "East",
            age: "10+ Years",
            furnishing: "Semi-Furnished"
        },
        amenities: ["Main Road Facing", "Visitor Parking", "High Footfall Area"],
        description: "Prime retail shop available in the bustling Raja Park market. High footfall guaranteed. Excellent investment opportunity.",
        images: ["https://images.unsplash.com/photo-1555626906-fcf10d682522?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Vijay Singh", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 99887 77665", email: "vijay@example.com", type: "Owner" },
        isFeatured: true,
        isNew: false,
        views: 670,
        updatedAt: "1 month ago"
    },
    {
        id: 10,
        slug: "bapu-nagar-plot",
        title: "Premium Residential Plot",
        type: "Residential Plot",
        listingType: "For Sale",
        price: "₹3.5 Cr",
        numericPrice: 35000000,
        location: {
            address: "Bapu Nagar",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302015",
            lat: 26.8856,
            lng: 75.8078
        },
        specs: {
            bhk: "Plot",
            bedrooms: 0,
            bathrooms: 0,
            balconies: 0,
            carpetArea: "450 Sq. Yds.",
            builtUpArea: "450 Sq. Yds.",
            floor: "N/A",
            totalFloors: 0,
            facing: "North",
            age: "N/A",
            furnishing: "Unfurnished"
        },
        amenities: ["Corner Plot", "Park Facing", "JDA Approved", "Boundary Wall"],
        description: "Rare 450 sq. yds corner plot in Bapu Nagar, one of Jaipur's most prestigious localities. Immediate registry available.",
        images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Estate Experts", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 91234 43210", email: "info@estateexperts.com", type: "Agency" },
        isFeatured: false,
        isNew: true,
        views: 112,
        updatedAt: "4 days ago"
    },
    {
        id: 11,
        slug: "civil-lines-penthouse",
        title: "Luxury Penthouse",
        type: "Penthouse",
        listingType: "For Sale",
        price: "₹4.8 Cr",
        numericPrice: 48000000,
        location: {
            address: "Civil Lines",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302006",
            lat: 26.9015,
            lng: 75.7831
        },
        specs: {
            bhk: "5 BHK",
            bedrooms: 5,
            bathrooms: 6,
            balconies: 4,
            carpetArea: "5500 sq.ft",
            builtUpArea: "6200 sq.ft",
            floor: "Top Floor",
            totalFloors: 10,
            facing: "East",
            age: "New Build",
            furnishing: "Fully-Furnished"
        },
        amenities: ["Private Pool", "Private Terrace", "Servant Room", "Smart Home", "100% Power Backup", "3 Car Parks"],
        description: "The crown jewel of Civil Lines. A 6200 sqft penthouse with a private swimming pool, terrace garden, and 360-degree views of the Pink City.",
        images: ["https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Luxe Group", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 88888 77777", email: "vip@luxegroup.com", type: "Builder" },
        isFeatured: true,
        isNew: true,
        views: 980,
        updatedAt: "1 day ago"
    },
    {
        id: 12,
        slug: "bani-park-2bhk",
        title: "Cozy 2BHK Apartment",
        type: "Apartment",
        listingType: "For Rent",
        price: "₹22,000 / month",
        numericPrice: 22000,
        location: {
            address: "Bani Park",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302016",
            lat: 26.9255,
            lng: 75.7922
        },
        specs: {
            bhk: "2 BHK",
            bedrooms: 2,
            bathrooms: 2,
            balconies: 2,
            carpetArea: "900 sq.ft",
            builtUpArea: "1050 sq.ft",
            floor: "3rd out of 6",
            totalFloors: 6,
            facing: "West",
            age: "1-5 Years",
            furnishing: "Semi-Furnished"
        },
        amenities: ["Lift", "Security", "Piped Gas", "Visitor Parking"],
        description: "Well maintained 2BHK flat available for families in Bani Park. Close to railway station and central bus stand.",
        images: ["https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Suresh Gupta", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 99112 23344", email: "suresh@example.com", type: "Owner" },
        isFeatured: false,
        isNew: false,
        views: 156,
        updatedAt: "1 week ago"
    },
    {
        id: 13,
        slug: "warehouse-sitapura",
        title: "Large Commercial Warehouse",
        type: "Warehouse",
        listingType: "For Rent",
        price: "₹2.5 Lacs / month",
        numericPrice: 250000,
        location: {
            address: "Sitapura Industrial Area",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302022",
            lat: 26.7720,
            lng: 75.8286
        },
        specs: {
            bhk: "Warehouse",
            bedrooms: 0,
            bathrooms: 2,
            balconies: 0,
            carpetArea: "15000 sq.ft",
            builtUpArea: "16000 sq.ft",
            floor: "Ground",
            totalFloors: 1,
            facing: "North",
            age: "5-10 Years",
            furnishing: "Unfurnished"
        },
        amenities: ["Heavy Vehicle Access", "High Ceiling", "Industrial Power", "Staff Quarters", "Loading Dock"],
        description: "15,000 sqft warehouse available for rent in Sitapura Phase 3. 30ft ceiling height, 100KW power load available.",
        images: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Industrial Estates", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 88776 66555", email: "ind@example.com", type: "Agency" },
        isFeatured: false,
        isNew: true,
        views: 320,
        updatedAt: "2 days ago"
    },
    {
        id: 14,
        slug: "vidhyadhar-nagar-3bhk",
        title: "Spacious 3BHK Builder Floor",
        type: "Builder Floor",
        listingType: "For Sale",
        price: "₹55 Lacs",
        numericPrice: 5500000,
        location: {
            address: "Vidhyadhar Nagar",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302039",
            lat: 26.9691,
            lng: 75.7766
        },
        specs: {
            bhk: "3 BHK",
            bedrooms: 3,
            bathrooms: 2,
            balconies: 2,
            carpetArea: "1350 sq.ft",
            builtUpArea: "1500 sq.ft",
            floor: "1st out of 3",
            totalFloors: 3,
            facing: "East",
            age: "1-5 Years",
            furnishing: "Semi-Furnished"
        },
        amenities: ["Vastu Compliant", "Covered Parking", "Water Supply 24/7", "Close to Market"],
        description: "1st floor 3BHK builder floor in sector 2, Vidhyadhar Nagar. Modular kitchen and wardrobes done. Ready to move.",
        images: ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Anil Mathur", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 99000 88777", email: "anil@example.com", type: "Owner" },
        isFeatured: false,
        isNew: false,
        views: 280,
        updatedAt: "3 weeks ago"
    },
    {
        id: 15,
        slug: "tonk-road-farmhouse",
        title: "Lavish Private Farmhouse",
        type: "Farmhouse",
        listingType: "For Sale",
        price: "₹8.5 Cr",
        numericPrice: 85000000,
        location: {
            address: "Tonk Road",
            city: "Jaipur",
            state: "Rajasthan",
            pincode: "302022",
            lat: 26.7845,
            lng: 75.8239
        },
        specs: {
            bhk: "6 BHK",
            bedrooms: 6,
            bathrooms: 8,
            balconies: 5,
            carpetArea: "8000 sq.ft",
            builtUpArea: "12000 sq.ft",
            floor: "Ground + 1",
            totalFloors: 2,
            facing: "East",
            age: "Under 1 Year",
            furnishing: "Fully-Furnished"
        },
        amenities: ["Huge Lawn", "Swimming Pool", "Outhouse", "Solar Panels", "Tennis Court", "CCTV Security"],
        description: "A breathtaking farmhouse spread over 5 Bighas on Tonk Road. Features a huge manicured lawn, an Olympic size pool, and luxury interior.",
        images: ["https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
        owner: { name: "Luxury Farms", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", phone: "+91 91111 22222", email: "farms@example.com", type: "Builder" },
        isFeatured: true,
        isNew: true,
        views: 1250,
        updatedAt: "Yesterday"
    }
];
