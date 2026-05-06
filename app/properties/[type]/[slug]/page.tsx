import { Metadata } from 'next';
import { notFound } from "next/navigation";
import { getPropertyBySlug, getProperties, getAllPropertySlugs } from "@/lib/data";
import PropertyPageClient from "@/components/PropertyPageClient";

interface Props {
    params: Promise<{ type: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const property = await getPropertyBySlug(slug);

    if (!property) {
        return {
            title: "Property Not Found",
        };
    }

    const bhkInfo = property.specs.bhk ? `${property.specs.bhk} ` : '';
    const title = `${property.title} | ${bhkInfo}${property.type} in ${property.location.city}`;
    const description = `${property.description.slice(0, 140)}... ${property.specs.area} | ${property.price}. Verified listing by Agrawal Properties, Jaipur's luxury property expert.`;

    return {
        title,
        description,
        keywords: [
            `${property.type} in ${property.location.city}`,
            `${property.title} Jaipur`,
            `Buy ${property.type} ${property.location.city}`,
            "Agrawal Properties",
            "Anil Goyal Properties"
        ],
        openGraph: {
            title,
            description,
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

export async function generateStaticParams() {
    const slugs = await getAllPropertySlugs();
    return slugs.map((s) => ({
        type: s.type,
        slug: s.slug,
    }));
}

export default async function PropertyDetailPage({ params }: Props) {
    const { slug } = await params;

    // START PARALLEL FETCHING
    const propertyPromise = getPropertyBySlug(slug);
    const similarPromise = getProperties(); // Broad fetch first, filter later for speed

    const [property, allPotentialSimilar] = await Promise.all([propertyPromise, similarPromise]);

    if (!property) {
        notFound();
    }

    // Improvised suggestion logic: Same type and Category prioritized
    // 1. Filter by same PropertyCategory (e.g., Plot matching Plot) and same City
    let similarProperties = allPotentialSimilar.filter(p =>
        p.id !== property.id &&
        p.type.toLowerCase() === property.type.toLowerCase() &&
        p.location.city.toLowerCase() === property.location.city.toLowerCase()
    ).slice(0, 3);

    // 2. Fallback: If not enough matches, relax city filter but keep type
    if (similarProperties.length < 3) {
        const remainingNeeded = 3 - similarProperties.length;
        const fallbackByType = allPotentialSimilar.filter(p =>
            p.id !== property.id &&
            p.type.toLowerCase() === property.type.toLowerCase() &&
            !similarProperties.some(sp => sp.id === p.id)
        ).slice(0, remainingNeeded);
        similarProperties = [...similarProperties, ...fallbackByType];
    }

    // Suggestion logic fallback - ensures we always have 3 properties
    if (similarProperties.length < 3) {
        const remainingNeeded = 3 - similarProperties.length;
        const finalFallback = allPotentialSimilar.filter(p =>
            p.id !== property.id &&
            p.listingType === property.listingType &&
            !similarProperties.some(sp => sp.id === p.id)
        ).slice(0, remainingNeeded);
        similarProperties = [...similarProperties, ...finalFallback];
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "RealEstateListing",
                        "name": property.title,
                        "description": property.description,
                        "url": `https://agrawalpropertys.com/properties/${property.type.toLowerCase().replace(/ /g, '-')}/${property.slug}`,
                        "image": property.images,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": property.location.city,
                            "addressRegion": "Rajasthan",
                            "streetAddress": property.location.address,
                            "addressCountry": "IN"
                        },
                        "offeredBy": {
                            "@type": "RealEstateAgent",
                            "name": "Agrawal Properties",
                            "url": "https://agrawalpropertys.com"
                        }
                    })
                }}
            />
            <PropertyPageClient property={property} similarProperties={similarProperties} />
        </>
    );
}
