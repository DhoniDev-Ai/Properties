"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DescriptionSectionProps {
    description: string;
}

export default function DescriptionSection({ description }: DescriptionSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Character limit before truncation
    const limit = 350;
    const shouldTruncate = description.length > limit;
    
    const displayText = isExpanded ? description : description.slice(0, limit) + (shouldTruncate ? "..." : "");

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">About This Property</h2>
            <div className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">
                {displayText}
            </div>
            {shouldTruncate && (
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 text-[#1D4ED8] font-bold flex items-center gap-1 hover:underline underline-offset-4"
                >
                    {isExpanded ? (
                        <>Show Less <ChevronUp className="w-4 h-4" /></>
                    ) : (
                        <>Read More <ChevronDown className="w-4 h-4" /></>
                    )}
                </button>
            )}
        </section>
    );
}
