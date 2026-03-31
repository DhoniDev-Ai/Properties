import { cache } from 'react';
import { supabase } from './supabase';
import { Property } from '@/data/properties';

export const getProperties = cache(async (filters: any = {}) => {
    let query = supabase
        .from('properties')
        .select('*')
        .eq('is_deleted', false);

    // Apply filters
    if (filters.type && filters.type !== 'all') {
        query = query.eq('listing_type', filters.type);
    }
    if (filters.city) {
        query = query.ilike('city', `%${filters.city}%`);
    }
    if (filters.propertyType && filters.propertyType.length > 0) {
        // Map UI types to DB types
        const typeMap: Record<string, string> = {
            'Apartment': 'apartment',
            'Villa': 'villa',
            'Independent House': 'independent_house',
            'Plot': 'plot',
            'Commercial Office': 'commercial',
            'Commercial Shop': 'commercial',
            'Penthouse': 'penthouse',
            'Warehouse': 'commercial',
            'Farmhouse': 'farmhouse',
            'Builder Floor': 'apartment',
            'Agriculture-Land': 'farmer_land',
            'Agriculture Land': 'farmer_land'
        };
        const dbTypes = filters.propertyType.map((t: string) => typeMap[t] || t.toLowerCase());
        query = query.in('property_type', dbTypes);
    }
    if (filters.budget) {
        query = query.lte('price', parseInt(filters.budget));
    }
    if (filters.bhk && filters.bhk.length > 0) {
        const bhkNums = filters.bhk.map((b: string) => parseInt(b.split(' ')[0])).filter((n: number) => !isNaN(n));
        if (bhkNums.length > 0) {
            query = query.in('bhk', bhkNums);
        }
    }
    if (filters.approvalType && filters.approvalType !== 'all') {
        query = query.eq('approval_type', filters.approvalType);
    }
    if (filters.isGated) {
        query = query.not('group', 'is', null);
    }

    const { data, error } = await query;
    console.log(`getProperties results for city="${filters.city}":`, data?.length || 0, 'rows');

    if (error) {
        console.error('Error fetching properties:', error.message, error.hint, error.details);
        return [];
    }

    return (data || []).map(mapDbToProperty);
});

export const getPropertyBySlug = cache(async (slug: string) => {
    const { data, error } = await supabase
        .from('properties')
        .select('*', { count: 'exact' })
        .eq('slug', slug)
        .maybeSingle();
    
    console.log(`getPropertyBySlug("${slug}") - Data:`, data ? 'YES' : 'NO', 'Error:', error);

    if (error || !data) {
        console.error('Error fetching property by slug:', error?.message || 'Property not found');
        return null;
    }

    return mapDbToProperty(data);
});

export async function getFeaturedProperties(limit = 20) {
    const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('is_featured', true)
        .eq('is_deleted', false)
        .limit(limit);

    if (error) {
        console.error('Error fetching featured properties:', error.message, error.hint, error.details);
        return [];
    }

    return (data || []).map(mapDbToProperty);
}

// Helper to map D
// B record to UI Property interface
function mapDbToProperty(db: any): Property {
    return {
        id: db.id,
        slug: db.slug || db.id,
        title: db.title,
        type: (() => {
            const rawType = db.property_type;
            if (rawType === 'farmer_land') return 'Agriculture Land';
            return capitalizeFirstLetter(rawType.replace(/_/g, ' '));
        })(),
        listingType: db.listing_type === 'rent' ? 'For Rent' : 'For Sale',
        price: formatPrice(db.price, db.listing_type),
        numericPrice: parseFloat(db.price),
        location: {
            address: db.locality || db.address,
            city: db.city,
            state: db.state || 'Rajasthan',
            pincode: db.pincode || '',
            lat: db.lat || 0,
            lng: db.lng || 0,
            googleMapLink: db.google_maps_url || db.google_map_link || null
        },
        specs: {
            bhk: (() => {
                if (Array.isArray(db.bhk)) {
                    return db.bhk.length > 0 ? `${db.bhk.join(', ')} BHK` : `${db.area_sqft} ${db.area_unit || 'sqft'}`;
                }
                return db.bhk && db.bhk > 0 ? `${db.bhk} BHK` : `${db.area_sqft} ${db.area_unit || 'sqft'}`;
            })(),
            bedrooms: db.bedrooms || 0,
            bathrooms: db.bathrooms || 0,
            balconies: db.balconies || 0,
            carpetArea: `${db.area_sqft} ${db.area_unit || 'sqft'}`,
            builtUpArea: `${db.area_sqft} ${db.area_unit || 'sqft'}`,
            floor: db.floor_number || 'N/A',
            totalFloors: parseInt(db.total_floors) || 0,
            facing: db.facing || 'East',
            roadInfo: db.road_info || 'N/A',
            age: 'New',
            furnishing: capitalizeFirstLetter(db.furnishing?.replace('_', ' ') || 'unfurnished')
        },
        amenities: db.amenities || [],
        description: db.description || '',
        images: db.image_urls && db.image_urls.length > 0 ? db.image_urls : [db.cover_image_url].filter(Boolean),
        owner: {
            name: db.seller_name || 'Anil Goyal',
            photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
            phone: db.seller_phone || '84260 22000',
            email: 'anilgoyal@propdesk.com',
            type: 'Property Consultant'
        },
        isFeatured: db.is_featured || false,
        isNew: db.is_new || false,
        status: db.status || 'available',
        approvalType: db.approval_type || null,
        views: Math.floor(Math.random() * 800) + 150,
        updatedAt: 'Just now',
        projectName: db.group || null
    };
}

function capitalizeFirstLetter(string: string) {
    if (!string) return '';
    return string.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}

function formatPrice(price: number, type: string) {
    let formatted = '';
    if (price >= 10000000) {
        formatted = `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
        formatted = `₹${(price / 100000).toFixed(2)} Lacs`;
    } else {
        formatted = `₹${price.toLocaleString()}`;
    }

    if (type === 'rent') {
        return `${formatted} / month`;
    }
    return formatted;
}
export async function getAllPropertySlugs() {
    const { data, error } = await supabase
        .from('properties')
        .select('property_type, slug')
        .eq('is_deleted', false);

    if (error) {
        console.error('Error fetching all slugs:', error.message);
        return [];
    }

    return (data || []).map(p => ({
        type: p.property_type.toLowerCase().replace('_', '-'),
        slug: p.slug
    }));
}

export const getAllProjects = cache(async () => {
    const { data, error } = await supabase
        .from('properties')
        .select('group')
        .not('group', 'is', null)
        .eq('is_deleted', false);

    if (error) {
        console.error('Error fetching all projects:', error.message);
        return [];
    }

    // Get unique groups
    const projects = Array.from(new Set(data.map(p => p.group))).filter(Boolean);
    return projects;
});

export const getPropertiesByProject = cache(async (projectName: string) => {
    const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('group', projectName)
        .eq('is_deleted', false);

    if (error) {
        console.error(`Error fetching properties for project ${projectName}:`, error.message);
        return [];
    }

    return (data || []).map(mapDbToProperty);
});
