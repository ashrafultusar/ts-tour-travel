"use client";

import { useState } from "react";
import { Plus, ArrowLeft, Trophy, Trash2, Edit, GraduationCap } from "lucide-react";
import CreateSuccessStories from "@/components/admin/successStories/CreateSuccessStories";

const SuccessStoriesPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Example English Data
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
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Trophy className="text-yellow-500" size={24} />
            {showCreateForm ? "Create New Story" : "Success Stories List"}
          </h1>
          <p className="text-gray-500 text-sm">Manage and showcase student achievements</p>
        </div>

        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl cursor-pointer font-medium transition-all ${
            showCreateForm 
              ? "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" 
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100"
          }`}
        >
          {showCreateForm ? (
            <><ArrowLeft size={18} /> Back to List</>
          ) : (
            <><Plus size={18} /> Add Success Story</>
          )}
        </button>
      </div>

      <hr className="mb-8 border-gray-200" />

      {/* Main Content Area */}
      {showCreateForm ? (
        <CreateSuccessStories onCancel={() => setShowCreateForm(false)} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div key={story.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start mb-4">
                {/* Avatar Placeholder */}
                <div className="h-14 w-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl border border-blue-100">
                  {story.name.charAt(0)}
                </div>
                
                {/* Actions */}
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                    <Edit size={16} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Story Details */}
              <div className="space-y-1">
                <h3 className="font-bold text-gray-800 text-lg leading-tight">
                    {story.name}
                </h3>
                <div className="flex items-center gap-1.5 text-blue-600 text-sm font-semibold">
                  <GraduationCap size={14} />
                  <span>{story.subject}</span>
                </div>
                <p className="text-gray-500 text-sm pt-2 border-t border-gray-50 mt-2">
                  <span className="font-medium text-gray-700">{story.university}</span>
                  <br />
                  <span className="text-xs uppercase tracking-wider">{story.country}</span>
                  
                </p>
                <p className="text-xs uppercase tracking-wider">{story.story }</p>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {stories.length === 0 && (
             <div className="col-span-full py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">No success stories found. Start by adding one!</p>
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SuccessStoriesPage;