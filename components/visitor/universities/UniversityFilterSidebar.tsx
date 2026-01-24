"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const levels = [
    "Diploma",
    "Bachelor Degree",
    "Masters Degree",
    "Doctoral Degree (PhD)",
    "Advance Diploma",
    "Certificate",
    "Foundation / A-level",
];

const offerTypes = [
    { label: "Free Offer Letter", value: "Free" },
    { label: "Offer Letter Fees Apply", value: "Paid" },
];

const UniversityFilterSidebar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [name, setName] = useState(searchParams.get("search") || "");
    const [location, setLocation] = useState(searchParams.get("location") || "");
    const [selectedLevels, setSelectedLevels] = useState<string[]>(
        searchParams.getAll("level")
    );
    const [selectedOfferTypes, setSelectedOfferTypes] = useState<string[]>(
        searchParams.getAll("offerType")
    );

    const [debouncedName] = useDebounce(name, 500);
    const [debouncedLocation] = useDebounce(location, 500);

    // Sync URL with filters
    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        // Name Filter
        if (debouncedName) params.set("search", debouncedName);
        else params.delete("search");

        // Location Filter
        if (debouncedLocation) params.set("location", debouncedLocation);
        else params.delete("location");

        // Level Filter
        params.delete("level");
        selectedLevels.forEach((level) => params.append("level", level));

        // Offer Type Filter
        params.delete("offerType");
        selectedOfferTypes.forEach((type) => params.append("offerType", type));

        // Reset page to 1 on filter interaction (handled implicitly by not preserving ?page if we wanted, 
        // but good UX preserves it unless it changes result count significantly. 
        // For proper search, usually reset to page 1)

        // Check if params actually changed to avoid loop
        if (params.toString() !== searchParams.toString()) {
            params.set("page", "1"); // Always reset to page 1 on filter
            router.push(`${pathname}?${params.toString()}`);
        }

    }, [
        debouncedName,
        debouncedLocation,
        selectedLevels,
        selectedOfferTypes,
        router,
        pathname,
        searchParams
    ]);

    const toggleLevel = (level: string) => {
        setSelectedLevels((prev) =>
            prev.includes(level)
                ? prev.filter((l) => l !== level)
                : [...prev, level]
        );
    };

    const toggleOfferType = (type: string) => {
        setSelectedOfferTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    return (
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg border border-gray-200 h-fit sticky top-4">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Filter Your Search</h2>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Search by name</label>
                <input
                    type="text"
                    placeholder="Type University Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Location</label>
                <input
                    type="text"
                    placeholder="e.g. Kuala Lumpur"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Level of Interest</label>
                <div className="space-y-2">
                    {levels.map((level) => (
                        <label
                            key={level}
                            className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-black transition-colors"
                        >
                            <input
                                type="checkbox"
                                checked={selectedLevels.includes(level)}
                                onChange={() => toggleLevel(level)}
                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            {level}
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-3">Offer Letter Type</label>
                <div className="space-y-2">
                    {offerTypes.map((type) => (
                        <label
                            key={type.value}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={selectedOfferTypes.includes(type.value)}
                                onChange={() => toggleOfferType(type.value)}
                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            {type.label}
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default UniversityFilterSidebar;
