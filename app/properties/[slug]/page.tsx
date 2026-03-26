import { Metadata } from 'next';
import { notFound } from "next/navigation";
import { getPropertyBySlug, getProperties } from "@/lib/data";
import PropertyPageClient from "@/components/PropertyPageClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const property = await getPropertyBySlug(slug);

    if (!property) {
        return {
            title: "Property Not Found",
        };
    }

    return {
        title: `${property.title} | ${property.specs.bhk} in ${property.location.city}`,
        description: property.description.slice(0, 160),
        openGraph: {
            title: property.title,
            description: property.description.slice(0, 160),
            images: [
                {
                    url: property.images[0],
                    width: 1200,
                    height: 630,
                    alt: property.title,
                },
            ],
        },
    };
}

export default async function PropertyPage({ params }: Props) {
    const { slug } = await params;
    const property = await getPropertyBySlug(slug);

    if (!property) {
        notFound();
    }

    // Fetch similar properties
    const similar = await getProperties({ type: property.listingType === "For Sale" ? "sale" : "rent" });
    const similarProperties = similar.filter(p => p.id !== property.id).slice(0, 3);

    return <PropertyPageClient property={property} similarProperties={similarProperties} />;
}
