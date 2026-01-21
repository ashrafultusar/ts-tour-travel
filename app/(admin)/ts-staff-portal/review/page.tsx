"use client";

import React from 'react';
import { 
  Search, 
  Plus, 
  Star, 
  MoreHorizontal, 
  CheckCircle2, 
  XCircle,
  Quote
} from 'lucide-react';

const StudentReviewsPage = () => {
  const stats = [
    { label: "Total Reviews", value: "4", color: "text-slate-800" },
    { label: "Published", value: "3", color: "text-emerald-500" },
    { label: "Unpublished", value: "1", color: "text-orange-500" },
    { label: "Avg Rating", value: "4.8", color: "text-amber-500", showStar: true },
  ];

  const reviews = [
    {
      id: 1,
      initials: "MR",
      name: "Mohammad Rahat",
      status: "Published",
      university: "University of Malaya, Malaysia",
      rating: 5,
      comment: "I had no issues getting my Malaysia visa through EduConsult. They helped at every step. Highly professional service!",
      date: "15 Jan, 2026",
      statusColor: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      id: 2,
      initials: "FA",
      name: "Fatima Akhtar",
      status: "Published",
      university: "Taylor's University, Malaysia",
      rating: 5,
      comment: "I am very happy I chose EduConsult. They helped me pick the right university and made the whole process very easy.",
      date: "12 Jan, 2026",
      statusColor: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      id: 3,
      initials: "AK",
      name: "Abdul Karim",
      status: "Unpublished",
      university: "UCSI University, Malaysia",
      rating: 4,
      comment: "Good service. There was a slight issue with documents but they resolved it quickly.",
      date: "10 Jan, 2026",
      statusColor: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      id: 4,
      initials: "NJ",
      name: "Nusrat Jahan",
      status: "Published",
      university: "Sunway University, Malaysia",
      rating: 5,
      comment: "The best education consultancy! They helped me fulfill my dream. Thanks EduConsult!",
      date: "08 Jan, 2026",
      statusColor: "bg-emerald-50 text-emerald-600 border-emerald-100"
    }
  ];

  return (
    <div className="p-6 space-y-6 bg-[#F8FAFC] min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#1E293B]">Student Reviews</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage successful student reviews and success stories</p>
        </div>
        <button className="bg-[#2563EB] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all shadow-sm">
          <Plus className="w-4 h-4" /> New Review
        </button>
      </div>

      {/* Stats Cards - Matching screenshot layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                {stat.showStar && <Star className="w-4 h-4 fill-amber-400 text-amber-400" />}
              </div>
              <span className="text-[12px] font-semibold text-slate-400 mt-1 uppercase tracking-tight">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Search Bar - Exactly like the image */}
      <div className="w-full max-w-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name or university..." 
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400 shadow-sm"
          />
        </div>
      </div>

      {/* Reviews Grid - 2 cards side-by-side on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                {/* Avatar Circle */}
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB] font-bold text-sm border border-blue-100 shrink-0">
                  {review.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-slate-800 text-[16px]">{review.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border flex items-center gap-1 ${review.statusColor}`}>
                      {review.status === "Published" ? <CheckCircle2 className="w-2.5 h-2.5" /> : <XCircle className="w-2.5 h-2.5" />}
                      {review.status}
                    </span>
                  </div>
                  <p className="text-[12px] text-slate-500 font-medium mt-0.5">{review.university}</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600 p-1">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Stars Section */}
            <div className="flex items-center gap-0.5 mt-4 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} 
                />
              ))}
            </div>

            {/* Quote and Comment */}
            <div className="relative">
              <Quote className="absolute -left-1 -top-1 w-8 h-8 text-blue-500/5 -z-10 rotate-180" />
              <p className="text-[14px] text-slate-600 leading-relaxed font-normal">
                {review.comment}
              </p>
            </div>

            {/* Date and Action Link */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-50">
              <span className="text-[12px] text-slate-400 font-medium">{review.date}</span>
              <button className="text-[12px] font-bold text-[#2563EB] hover:text-blue-700 transition-colors">
                View Full Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentReviewsPage;