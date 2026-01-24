"use client";

import { useState } from "react";
import { Plus, ArrowLeft, School, Trash2, Edit, MapPin, CreditCard } from "lucide-react";
import CreateUniversity from "@/components/admin/createUniversity/CreateUniversity";

const UniversityPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const universities = [
    { 
      id: 1, 
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=500&auto=format&fit=crop',
      name: "University of Toronto", 
      state: "Ontario, Canada", 
      level: "Diploma", 
      OfferLetterType: "Offer Letter fees apply" ,
      Description: 'Leading research university offering a world-class education system.'
    },
    { 
      id: 1, 
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=500&auto=format&fit=crop',
      name: "University of Toronto", 
      state: "Ontario, Canada", 
      level: "Diploma", 
      OfferLetterType: "Offer Letter fees apply" ,
      Description: 'Leading research university offering a world-class education system.'
    },
    { 
      id: 2, 
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=500&auto=format&fit=crop', 
      name: "Monash University", 
      state: "Victoria, Australia", 
      level: "Bachelors", 
      OfferLetterType: "No Application Fees" ,
      Description: 'Ranked in the top 100 universities globally for research excellence.'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <School className="text-blue-600 shrink-0" size={24} />
            <span className="truncate">
              {showCreateForm ? "Add New University" : "University Partners"}
            </span>
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">Manage institutional profiles and details</p>
        </div>

        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all cursor-pointer border ${
            showCreateForm 
              ? "bg-white border-gray-200 text-gray-600 hover:bg-gray-50" 
              : "bg-blue-600 border-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100"
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 transition-all">
          <CreateUniversity onCancel={() => setShowCreateForm(false)} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni) => (
            <div key={uni.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group overflow-hidden flex flex-col">
              
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
                  <button className="p-2 bg-white/90 backdrop-blur-sm text-gray-600 hover:text-blue-600 rounded-lg shadow-sm transition">
                    <Edit size={16} />
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm text-gray-600 hover:text-red-500 rounded-lg shadow-sm transition">
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* Level Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase rounded-md shadow-lg">
                    {uni.level}
                  </span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-800 text-lg leading-tight line-clamp-1 mb-1">{uni.name}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <MapPin size={12} className="text-red-400" />
                    <span>{uni.state}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm line-clamp-2 mb-4 italic">
                   {uni.Description}
                </p>

                {/* Footer Info */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-gray-600 text-xs font-medium">
                    <CreditCard size={14} className="text-blue-500" />
                    <span className={uni.OfferLetterType.includes('apply') ? 'text-orange-600' : 'text-green-600'}>
                      {uni.OfferLetterType}
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
                <p className="text-gray-400 font-medium px-4">No universities found. Start by adding a partner!</p>
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UniversityPage;