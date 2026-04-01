import { Bath, Bed, Layers, Move, Compass, Construction } from "lucide-react";
import { Property } from "@/data/properties";

export interface PropertyHighlight {
    label: string;
    value: string | number;
    icon: any;
}

export function getPropertyHighlights(property: Property): PropertyHighlight[] {
    const type = property.type.toLowerCase();
    const highlights: PropertyHighlight[] = [];

    const isResidential = type.includes('flat') ||
        type.includes('apartment') ||
        type.includes('house') ||
        type.includes('villa') ||
        type.includes('penthouse');

    const isPlot = type.includes('plot') || type.includes('land');
    const isCommercial = type.includes('commercial') || type.includes('shop') || type.includes('office');

    if (isResidential) {
        // BHK
        if (property.specs.bhk && property.specs.bhk !== 'N/A' && property.specs.bhk !== '0') {
            highlights.push({ label: 'BHK', value: property.specs.bhk.replace("BHK", ""), icon: Bed });
        }
        // Bathrooms
        if (property.specs.bathrooms && property.specs.bathrooms > 0) {
            highlights.push({ label: 'Baths', value: property.specs.bathrooms, icon: Bath });
        }
        // Floor
        if (property.specs.floor && property.specs.floor !== 'N/A' && property.specs.floor !== '0') {
            highlights.push({ label: 'Floor', value: property.specs.floor, icon: Layers });
        }
    } else if (isPlot) {
        // Area
        if (property.specs.area && property.specs.area !== 'N/A') {
            highlights.push({ label: 'Area', value: property.specs.area, icon: Move });
        }
        // Facing
        if (property.specs.facing && property.specs.facing !== 'N/A') {
            highlights.push({ label: 'Facing', value: property.specs.facing, icon: Compass });
        }
        // Road Info
        if (property.specs.roadInfo && property.specs.roadInfo !== 'N/A') {
            highlights.push({ label: 'Road', value: property.specs.roadInfo, icon: Construction });
        }
    } else if (isCommercial) {
        // Area
        if (property.specs.area && property.specs.area !== 'N/A') {
            highlights.push({ label: 'Area', value: property.specs.area, icon: Move });
        }
        // Facing
        if (property.specs.facing && property.specs.facing !== 'N/A') {
            highlights.push({ label: 'Facing', value: property.specs.facing, icon: Compass });
        }
        // Floor
        if (property.specs.floor && property.specs.floor !== 'N/A' && property.specs.floor !== '0') {
            highlights.push({ label: 'Floor', value: property.specs.floor, icon: Layers });
        }
    }

    // Fallback if empty
    if (highlights.length === 0) {
        highlights.push({ label: 'Type', value: property.type, icon: Layers });
    }

    return highlights.slice(0, 3); // Max 3 highlights for UI consistency
}
