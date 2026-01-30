/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUniversities } from "@/lib/data/university";
import UniversityFilterSidebar from "@/components/visitor/universities/UniversityFilterSidebar";
import Link from "next/link";
import Pagination from "@/components/shared/Pagination";
import Image from "next/image";

const UniversityCard = ({ uni }: { uni: any }) => (
  <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-gray-100 rounded-lg shadow-sm mb-4 hover:shadow-md transition-shadow group">
    <div className="flex items-center gap-6 w-full">
      <div className="w-20 h-20 relative shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
        {uni?.image ? (
          <Image
            src={uni.image}
            alt={uni.name}
            fill
            sizes="80px"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-300">
            U
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-1">
          {uni.name}
        </h3>
        <p className="text-gray-500 flex items-center gap-1 mt-1 text-sm">
          <span>📍 {uni?.location}</span>
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase border ${
              uni.offerType === "Free"
                ? "text-green-600 border-green-200 bg-green-50"
                : "text-orange-600 border-orange-200 bg-orange-50"
            }`}
          >
            {uni?.offerType || "Paid"}
          </span>

          {uni?.level && Array.isArray(uni.level) ? (
            uni.level.map((lvl: string, index: number) => (
              <span
                key={index}
                className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase border text-blue-600 border-blue-200 bg-blue-50"
              >
                {lvl}
              </span>
            ))
          ) : (
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase border text-blue-600 border-blue-200 bg-blue-50">
              {uni?.level || "Degree"}
            </span>
          )}
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2 mt-4 md:mt-0 w-full md:w-auto">
      <Link
        href={`/universities/${uni._id}`}
        className="bg-[#1a8a81] text-white hover:bg-[#157a72] border border-white/20 font-bold px-6 py-2 text-md rounded-lg shadow-md transition-all transform hover:scale-105 active:scale-95 text-center whitespace-nowrap"
      >
        Details
      </Link>
    </div>
  </div>
);

interface PageProps {
  searchParams: { [key: string]: string | undefined | string[] };
}

export default async function UniversitySearch({ searchParams }: PageProps) {
  // Await searchParams before accessing properties
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const search = (resolvedSearchParams?.search as string) || "";
  const location = (resolvedSearchParams?.location as string) || "";
  const level = resolvedSearchParams?.level; // can be string or array
  const offerType = resolvedSearchParams?.offerType; // can be string or array
  const page = Number(resolvedSearchParams?.page) || 1;
  const limit = 10;

  const { universities, total, totalPages } = await getUniversities(
    page,
    limit,
    search,
    location,
    level,
    offerType
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 lg:gap-8">
        {/* Sidebar Filter - Client Component */}
        <div className="w-full md:w-60 lg:w-70 shrink-0">
          <UniversityFilterSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              University List
            </h2>
            <span className="text-sm text-gray-500">{total} Results Found</span>
          </div>

          <div className="space-y-4">
            {universities?.length > 0 ? (
              universities?.map((uni: any) => (
                <UniversityCard key={uni._id} uni={uni} />
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500">
                  No universities found matching your search.
                </p>
              </div>
            )}
          </div>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            baseUrl="/universities"
            searchParams={resolvedSearchParams as any}
          />
        </main>
      </div>
    </div>
  );
}
