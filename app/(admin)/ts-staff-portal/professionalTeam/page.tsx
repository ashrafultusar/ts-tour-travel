"use client";

import { useState } from "react";
import {
  Plus,
  ArrowLeft,
  Trophy,
  Trash2,
  Edit,
  Briefcase,
  Flag,
} from "lucide-react";
import CreateProfessionalTeam from "@/components/admin/professionalTeam/CreateProfessionalTeam";
import Image from "next/image";

const ProfessionalTeam = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Mock Data with Unsplash Images and Designations
  const stories = [
    {
      id: 1,
      name: "Rahul Ahmed",
      designation: "Senior Education Consultant",
      country: "Canada",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Sadia Islam",
      designation: "Admissions Head",

      country: "Australia",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
    },
    {
      id: 3,
      name: "James Wilson",
      designation: "Career Strategist",
      country: "UK",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Trophy className="text-yellow-500" size={24} />
            {showCreateForm ? "Create New Member" : "Professional Team"}
          </h1>
          <p className="text-gray-500 text-sm">
            Manage your team members and their professional backgrounds
          </p>
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
            <>
              <ArrowLeft size={18} /> Back to List
            </>
          ) : (
            <>
              <Plus size={18} /> Add Team Member
            </>
          )}
        </button>
      </div> 

      <hr className="mb-8 border-gray-200" />

      {/* Main Content Area */}
      {showCreateForm ? (
        <CreateProfessionalTeam onCancel={() => setShowCreateForm(false)} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Card Image Header */}
              <div className="relative h-32 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="absolute -bottom-10 left-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="h-20 w-20 rounded-2xl border-4 border-white object-cover shadow-md"
                  />
                </div>
                {/* Actions inside Image Area */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-blue-600 rounded-lg transition">
                    <Edit size={16} />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-md text-white hover:bg-red-500 rounded-lg transition">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Member Details */}
              <div className="pt-12 p-6 space-y-3">
                <div>
                  <h3 className="font-bold text-gray-900 text-xl leading-tight">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-blue-600 text-sm font-medium mt-1">
                    <Briefcase size={14} />
                    <span>{member.designation}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-blue-600 text-sm font-medium mt-1">
                  < Flag size={14} />
                  <span>{member.country}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {stories.length === 0 && (
            <div className="col-span-full py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">
                No team members found.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfessionalTeam;
