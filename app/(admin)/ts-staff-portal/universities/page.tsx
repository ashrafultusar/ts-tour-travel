"use client";

import { useState } from "react";
import { Plus, ArrowLeft, School, Trash2, Edit, MapPin } from "lucide-react";
import CreateUniversity from "@/components/admin/createUniversity/CreateUniversity";

const UniversityPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Mock data for University list
  const universities = [
    { 
      id: 1, 
      name: "University of Toronto", 
      state: "Ontario, Canada", 
      interest: "High", 
      offerType: "Conditional" 
    },
    { 
      id: 2, 
      name: "Monash University", 
      state: "Victoria, Australia", 
      interest: "Medium", 
      offerType: "Direct" 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <School className="text-blue-600" size={24} />
            {showCreateForm ? "Add New University" : "University Partners"}
          </h1>
          <p className="text-gray-500 text-sm">Manage institutional profiles and offer details</p>
        </div>

        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all cursor-pointer ${
            showCreateForm 
              ? "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" 
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100"
          }`}
        >
          {showCreateForm ? (
            <><ArrowLeft size={18} /> Back to List</>
          ) : (
            <><Plus size={18} /> Add University</>
          )}
        </button>
      </div>

      <hr className="mb-8 border-gray-200" />

      {/* Main Content */}
      {showCreateForm ? (
        <CreateUniversity onCancel={() => setShowCreateForm(false)} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni) => (
            <div key={uni.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition group">
              <div className="flex justify-between items-start mb-3">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <School size={24} />
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition"><Edit size={16} /></button>
                  <button className="p-2 text-gray-400 hover:text-red-500 transition"><Trash2 size={16} /></button>
                </div>
              </div>
              
              <h3 className="font-bold text-gray-800 text-lg">{uni.name}</h3>
              <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                <MapPin size={14} />
                <span>{uni.state}</span>
              </div>

              <div className="flex gap-2">
                <span className="px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold uppercase rounded-md">
                  {uni.interest} Interest
                </span>
                <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase rounded-md">
                  {uni.offerType} Offer
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UniversityPage;