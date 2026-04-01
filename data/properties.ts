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
        lat?: number;
        lng?: number;
        googleMapLink?: string;
    };
    specs: {
        bhk?: string | null;
        bedrooms: number;
        bathrooms: number;
        balconies: number;
        area: string;
        floor: string | null;
        totalFloors: string | number | null;
        facing: string | null;
        roadInfo?: string | null;
        furnishing: string | null;
        dimensions?: string | null;
        commercialType?: string | null;
        maintenanceCharge?: string | null;
        parking?: string | null;
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
    status?: string;
    approvalType?: string;
    views: number;
    updatedAt: string;
    projectName?: string;
}

