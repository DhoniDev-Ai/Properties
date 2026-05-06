import { Metadata } from 'next';
import ServiceClient from "./ServiceClient";

interface Props {
    params: Promise<{ slug: string }>;
}

const serviceData: Record<string, any> = {
    "itr-filing": {
        title: "ITR Filing & Tax Optimization",
        description: "Professional Income Tax Return filing for property owners in Jaipur. Expert capital gains calculation and tax savings by Agrawal Properties."
    },
    "gst-registration": {
        title: "GST Registration & Filing",
        description: "Seamless GST solutions for commercial property investors. Handle your commercial rental compliance with Jaipur's trusted real estate experts."
    },
    "loan-housing": {
        title: "Home Loan & Property Financing",
        description: "Secure the best home loan rates in Jaipur. We offer fast approvals and expert documentation support for all property types."
    },
    "license-jda-hb": {
        title: "JDA & Housing Board (HB) Liaison",
        description: "Expert JDA Patta, mutation, and name transfer services in Jaipur. Navigate government documentation with Agrawal Real Estate."
    }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Agrawal Real Estate & Properties`,
        description: service.description,
        keywords: [service.title, "Agrawal Real Estate", "Agrawal Properties", "Anil Goyal", "Jaipur Real Estate Services"],
    };
}

export default function ServicePage({ params }: Props) {
    return <ServiceClient params={params} />;
}
