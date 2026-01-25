import { Plus, Trophy, Edit, GraduationCap } from "lucide-react";
import { getSuccessStories } from "@/lib/data/successStory";
import Link from "next/link";
import DeleteSuccessStoryButton from "@/components/admin/successStories/DeleteSuccessStoryButton";

export const dynamic = "force-dynamic";

const SuccessStoriesPage = async () => {
  const { stories } = await getSuccessStories();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Trophy className="text-yellow-500 shrink-0" size={24} />
            <span className="truncate">Success Stories List</span>
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Manage and showcase student achievements
          </p>
        </div>

        <Link
          href="/ts-staff-portal/successStories/create"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl cursor-pointer font-medium transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100"
        >
          <Plus size={18} /> <span className="whitespace-nowrap">Add Success Story</span>
        </Link>
      </div>

      <hr className="mb-8 border-gray-200" />

      {/* Main Content Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {stories?.map((story: any) => (
          <div
            key={story._id}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative"
          >
            <div className="flex justify-between items-start mb-4">
              {/* Avatar */}
              {story.image ? (
                <img
                  src={story.image}
                  alt={story.studentName}
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border border-blue-100 shrink-0"
                />
              ) : (
                <div className="h-12 w-12 sm:h-14 sm:w-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg sm:text-xl border border-blue-100 shrink-0">
                  {story.studentName.charAt(0)}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-1 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                <Link
                  href={`/ts-staff-portal/successStories/edit/${story._id}`}
                  className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition"
                  title="Edit"
                >
                  <Edit size={16} />
                </Link>
                <DeleteSuccessStoryButton id={story._id} />
              </div>
            </div>

            {/* Story Details */}
            <div className="space-y-2">
              <h3 className="font-bold text-gray-800 text-base sm:text-lg leading-tight">
                {story.studentName}
              </h3>
              <div className="flex items-center gap-1.5 text-blue-600 text-xs sm:text-sm font-semibold">
                <GraduationCap size={14} className="shrink-0" />
                <span className="truncate">{story.subject}</span>
              </div>

              <div className="pt-2 border-t border-gray-50 mt-2">
                <p className="font-medium text-gray-700 text-sm">{story.university}</p>
                {story.country && (
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mt-0.5">
                    {story.country}
                  </p>
                )}
              </div>

              <p className="text-xs text-gray-500 italic line-clamp-2 mt-2">
                {story.story}
              </p>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {stories.length === 0 && (
          <div className="col-span-full py-16 px-4 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">
              No success stories found. Start by adding one!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuccessStoriesPage;
