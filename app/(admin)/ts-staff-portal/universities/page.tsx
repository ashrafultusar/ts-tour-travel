import { Plus, School, Edit, MapPin, CreditCard } from "lucide-react";
import { getUniversities } from "@/lib/data/university";
import Link from "next/link";
import DeleteUniversityButton from "@/components/admin/universities/DeleteUniversityButton";

export const dynamic = "force-dynamic";

const UniversityPage = async () => {
  const { universities } = await getUniversities();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <School className="text-blue-600 shrink-0" size={24} />
            <span className="truncate">Universities List</span>
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Manage institutional profiles and details
          </p>
        </div>

        <Link
          href="/ts-staff-portal/universities/create"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all cursor-pointer border bg-blue-600 border-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100 "
        >
          <Plus size={18} /> Add University
        </Link>
      </div>

      <hr className="mb-8 border-gray-200" />

      {/* Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities?.map((uni: any) => (
          <div
            key={uni._id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden flex flex-col"
          >
            {/* University Image Section */}
            <div className="h-40 w-full relative bg-gray-100 overflow-hidden">
              {uni.image ? (
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <School size={48} />
                </div>
              )}

              {/* Overlay Actions */}
              <div className="absolute top-3 right-3 flex gap-2">
                <Link
                  href={`/ts-staff-portal/universities/edit/${uni._id}`}
                  className="p-2 bg-white/90 backdrop-blur-sm text-gray-600 hover:text-blue-600 rounded-lg shadow-sm transition"
                >
                  <Edit size={16} />
                </Link>
                <DeleteUniversityButton id={uni._id} />
              </div>

              {/* Level Badge */}
              <div className="absolute bottom-3 left-3">
                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase rounded-md shadow-lg">
                  {uni.level[0]}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow">
              <div className="mb-3">
                <h3 className="font-bold text-gray-800 text-lg leading-tight line-clamp-1 mb-1">
                  {uni.name}
                </h3>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <MapPin size={12} className="text-red-400" />
                  <span>{uni.location}</span>
                </div>
              </div>

              {uni.description && (
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 italic">
                  {uni.description}
                </p>
              )}

              {/* Footer Info */}
              <div className="mt-auto pt-4 border-t border-gray-50 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-gray-600 text-xs font-medium">
                  <CreditCard size={14} className="text-blue-500" />
                  <span
                    className={
                      uni.offerType === "Paid" ? "text-orange-600" : "text-green-600"
                    }
                  >
                    {uni.offerType === "Paid" ? "Fees Apply" : "Free Offer Letter"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {universities.length === 0 && (
          <div className="col-span-full py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <School className="mx-auto text-gray-300 mb-3" size={48} />
            <p className="text-gray-400 font-medium px-4">
              No universities found. Start by adding a partner!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversityPage;

