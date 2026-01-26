// "use client";

// import { useSearchParams, useRouter, usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useDebounce } from "use-debounce";

// const levels = [
//     "Diploma",
//     "Bachelor Degree",
//     "Masters Degree",
//     "Doctoral Degree (PhD)",
//     "Advance Diploma",
//     "Certificate",
//     "Foundation / A-level",
// ];

// const offerTypes = [
//     { label: "Free Offer Letter", value: "Free" },
//     { label: "Offer Letter Fees Apply", value: "Paid" },
// ];

// const UniversityFilterSidebar = () => {
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const pathname = usePathname();

//     const [name, setName] = useState(searchParams.get("search") || "");
//     const [location, setLocation] = useState(searchParams.get("location") || "");
//     const [selectedLevels, setSelectedLevels] = useState<string[]>(
//         searchParams.getAll("level")
//     );
//     const [selectedOfferTypes, setSelectedOfferTypes] = useState<string[]>(
//         searchParams.getAll("offerType")
//     );

//     const [debouncedName] = useDebounce(name, 500);
//     const [debouncedLocation] = useDebounce(location, 500);

//     // Sync URL with filters
//     useEffect(() => {
//         const params = new URLSearchParams(searchParams);

//         // Name Filter
//         if (debouncedName) params.set("search", debouncedName);
//         else params.delete("search");

//         // Location Filter
//         if (debouncedLocation) params.set("location", debouncedLocation);
//         else params.delete("location");

//         // Level Filter
//         params.delete("level");
//         selectedLevels.forEach((level) => params.append("level", level));

//         // Offer Type Filter
//         params.delete("offerType");
//         selectedOfferTypes.forEach((type) => params.append("offerType", type));

//         // Reset page to 1 on filter interaction (handled implicitly by not preserving ?page if we wanted, 
//         // but good UX preserves it unless it changes result count significantly. 
//         // For proper search, usually reset to page 1)

//         // Check if params actually changed to avoid loop
//         if (params.toString() !== searchParams.toString()) {
//             params.set("page", "1"); // Always reset to page 1 on filter
//             router.push(`${pathname}?${params.toString()}`);
//         }

//     }, [
//         debouncedName,
//         debouncedLocation,
//         selectedLevels,
//         selectedOfferTypes,
//         router,
//         pathname,
//         searchParams
//     ]);

//     const toggleLevel = (level: string) => {
//         setSelectedLevels((prev) =>
//             prev.includes(level)
//                 ? prev.filter((l) => l !== level)
//                 : [...prev, level]
//         );
//     };

//     const toggleOfferType = (type: string) => {
//         setSelectedOfferTypes((prev) =>
//             prev.includes(type)
//                 ? prev.filter((t) => t !== type)
//                 : [...prev, type]
//         );
//     };

//     return (
//         <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg border border-gray-200 h-fit sticky top-4">
//             <h2 className="text-xl font-bold mb-6 text-gray-800">Filter Your Search</h2>

//             <div className="mb-6">
//                 <label className="block text-sm font-medium mb-2">Search by name</label>
//                 <input
//                     type="text"
//                     placeholder="Type University Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
//                 />
//             </div>

//             <div className="mb-6">
//                 <label className="block text-sm font-medium mb-2">Location</label>
//                 <input
//                     type="text"
//                     placeholder="e.g. Kuala Lumpur"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-shadow"
//                 />
//             </div>

//             <div className="mb-6">
//                 <label className="block text-sm font-medium mb-3">Level of Interest</label>
//                 <div className="space-y-2">
//                     {levels.map((level) => (
//                         <label
//                             key={level}
//                             className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-black transition-colors"
//                         >
//                             <input
//                                 type="checkbox"
//                                 checked={selectedLevels.includes(level)}
//                                 onChange={() => toggleLevel(level)}
//                                 className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                             />
//                             {level}
//                         </label>
//                     ))}
//                 </div>
//             </div>

//             <div>
//                 <label className="block text-sm font-medium mb-3">Offer Letter Type</label>
//                 <div className="space-y-2">
//                     {offerTypes.map((type) => (
//                         <label
//                             key={type.value}
//                             className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors cursor-pointer"
//                         >
//                             <input
//                                 type="checkbox"
//                                 checked={selectedOfferTypes.includes(type.value)}
//                                 onChange={() => toggleOfferType(type.value)}
//                                 className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                             />
//                             {type.label}
//                         </label>
//                     ))}
//                 </div>
//             </div>
//         </aside>
//     );
// };

// export default UniversityFilterSidebar;


"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Filter, X } from "lucide-react";

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

  // Mobile Drawer State
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedName) params.set("search", debouncedName);
    else params.delete("search");

    if (debouncedLocation) params.set("location", debouncedLocation);
    else params.delete("location");

    params.delete("level");
    selectedLevels.forEach((level) => params.append("level", level));

    params.delete("offerType");
    selectedOfferTypes.forEach((type) => params.append("offerType", type));

    if (params.toString() !== searchParams.toString()) {
      params.set("page", "1");
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [debouncedName, debouncedLocation, selectedLevels, selectedOfferTypes, router, pathname, searchParams]);

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const toggleOfferType = (type: string) => {
    setSelectedOfferTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleClearAll = () => {
    setName("");
    setLocation("");
    setSelectedLevels([]);
    setSelectedOfferTypes([]);
    setIsOpen(false);
  };

  // Reusable Filter UI Logic (Pure JSX Variable, not a Component function)
  const filterUI = (
    <div className="space-y-6">
      <div className="flex items-center justify-between md:hidden">
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full">
          <X size={20} />
        </button>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">Search by name</label>
        <input
          type="text"
          placeholder="University Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a8a81] outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">Location</label>
        <input
          type="text"
          placeholder="e.g. Kuala Lumpur"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a8a81] outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3 text-gray-700">Level of Interest</label>
        <div className="grid grid-cols-1 gap-2">
          {levels.map((level) => (
            <label key={level} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedLevels.includes(level)}
                onChange={() => toggleLevel(level)}
                className="w-5 h-5 rounded border-gray-300 text-[#1a8a81] focus:ring-[#1a8a81]"
              />
              <span className="text-sm text-gray-600 group-hover:text-black">{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3 text-gray-700">Offer Letter Type</label>
        <div className="space-y-2">
          {offerTypes.map((type) => (
            <label key={type.value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedOfferTypes.includes(type.value)}
                onChange={() => toggleOfferType(type.value)}
                className="w-5 h-5 rounded border-gray-300 text-[#1a8a81] focus:ring-[#1a8a81]"
              />
              <span className="text-sm text-gray-600 group-hover:text-black">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button 
        onClick={handleClearAll}
        className="w-full py-3 bg-red-50 text-red-600 font-bold rounded-lg md:hidden hover:bg-red-100 transition-colors"
      >
        Clear All
      </button>
    </div>
  );

  return (
    <>
      {/* 1. Mobile Filter Toggle Button */}
      <div className="md:hidden w-full mb-6">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-[#1a8a81] text-white py-3.5 rounded-xl font-bold shadow-md active:scale-95 transition-all"
        >
          <Filter size={18} />
          Filter Universities
        </button>
      </div>

      {/* 2. Desktop Sidebar */}
      <aside className="hidden md:block w-full bg-white p-6 rounded-xl border border-gray-200 h-fit sticky top-24 shadow-sm">
        <h2 className="text-lg font-bold mb-6 text-gray-800 flex items-center gap-2">
          <Filter size={20} className="text-[#1a8a81]" />
          Filter Search
        </h2>
        {filterUI}
      </aside>

      {/* 3. Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 4. Mobile Drawer Content */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[101] bg-white rounded-t-[2rem] p-8 transition-transform duration-500 ease-out md:hidden max-h-[85vh] overflow-y-auto shadow-2xl ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Mobile Pull Handle Design */}
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />
        {filterUI}
      </div>
    </>
  );
};

export default UniversityFilterSidebar;