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
        bhk: string;
        bedrooms: number;
        bathrooms: number;
        balconies: number;
        carpetArea: string;
        builtUpArea: string;
        floor: string;
        totalFloors: number;
        facing: string;
        roadInfo?: string;
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
    status?: string;
    approvalType?: string;
    views: number;
    updatedAt: string;
    projectName?: string;
}

