"use client";

import { useState } from "react";
import { Plus, ArrowLeft, Trophy, Trash2, Edit, GraduationCap } from "lucide-react";
import CreateSuccessStories from "@/components/admin/successStories/CreateSuccessStories";

const SuccessStoriesPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const stories = [
    { 
      id: 1, 
      name: "Rahul Ahmed", 
      university: "University of Toronto", 
      subject: "Computer Science",
      country: "Canada", 
      story :'Make your own story'
    },
    { 
      id: 2, 
      name: "Sadia Islam", 
      university: "Monash University", 
      subject: "Public Health",
      country: "Australia" ,
      story :'Make your own story'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Trophy className="text-yellow-500 shrink-0" size={24} />
            <span className="truncate">
              {showCreateForm ? "Create New Story" : "Success Stories List"}
            </span>
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Manage and showcase student achievements</p>
        </div>

        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl cursor-pointer font-medium transition-all ${
            showCreateForm 
              ? "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" 
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100"
          }`}
        >
          {showCreateForm ? (
            <><ArrowLeft size={18} /> <span className="whitespace-nowrap">Back to List</span></>
          ) : (
            <><Plus size={18} /> <span className="whitespace-nowrap">Add Success Story</span></>
          )}
        </button>
      </div>

      <hr className="mb-8 border-gray-200" />

      {/* Main Content Area */}
      {showCreateForm ? (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
          <CreateSuccessStories onCancel={() => setShowCreateForm(false)} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stories.map((story) => (
            <div key={story.id} className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative">
              <div className="flex justify-between items-start mb-4">
                {/* Avatar */}
                <div className="h-12 w-12 sm:h-14 sm:w-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg sm:text-xl border border-blue-100 shrink-0">
                  {story.name.charAt(0)}
                </div>
                
                {/* Actions - Mobile friendly: Always visible on touch devices, hover on desktop */}
                <div className="flex gap-1 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Edit">
                    <Edit size={16} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition" title="Delete">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Story Details */}
              <div className="space-y-2">
                <h3 className="font-bold text-gray-800 text-base sm:text-lg leading-tight">
                    {story.name}
                </h3>
                <div className="flex items-center gap-1.5 text-blue-600 text-xs sm:text-sm font-semibold">
                  <GraduationCap size={14} className="shrink-0" />
                  <span className="truncate">{story.subject}</span>
                </div>
                
                <div className="pt-2 border-t border-gray-50 mt-2">
                  <p className="font-medium text-gray-700 text-sm">{story.university}</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-400 mt-0.5">{story.country}</p>
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
                <p className="text-gray-400 font-medium">No success stories found. Start by adding one!</p>
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SuccessStoriesPage;