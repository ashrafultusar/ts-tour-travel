"use client";

import React, { useState } from 'react';
import { Plus, ArrowLeft, Edit, Trash2, Calendar, FileText, ChevronRight } from 'lucide-react';
import CreateBlog from '@/components/admin/blog/CreateBlog';

const BlogAdminPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const posts = [
    { id: 1, title: "প্রথম ব্লগ পোস্ট", date: "2024-05-20", category: "Education" },
    { id: 2, title: "ভিসা প্রসেসিং টিপস", date: "2024-05-18", category: "Visa Guide" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FileText className="text-blue-600" size={24} />
            {showCreateForm ? "নতুন ব্লগ তৈরি করুন" : "সকল ব্লগ পোস্ট"}
          </h1>
          <p className="text-gray-500 text-sm mt-1">ব্লগ ম্যানেজমেন্ট প্যানেল</p>
        </div>

        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold transition-all shadow-sm active:scale-95 ${
            showCreateForm 
              ? "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50" 
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100"
          }`}
        >
          {showCreateForm ? (
            <><ArrowLeft size={18} /> ফিরে যান</>
          ) : (
            <><Plus size={18} /> নতুন পোস্ট</>
          )}
        </button>
      </div>

      <hr className="mb-8 border-gray-100" />

      {/* Main Content Area */}
      {showCreateForm ? (
        <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-gray-100 animate-in fade-in duration-300">
          <CreateBlog />
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Left Side: Info */}
                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex bg-blue-50 w-12 h-12 rounded-xl items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileText size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-gray-800 font-bold text-base sm:text-lg leading-tight truncate">
                      {post.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <Calendar size={14} className="mr-1.5 shrink-0" />
                        {post.date}
                      </div>
                      <span className="bg-gray-50 text-gray-500 text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-medium uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Actions */}
                <div className="flex items-center justify-end gap-2 pt-3 sm:pt-0 border-t sm:border-none border-gray-50">
                  <button className="flex items-center justify-center gap-2 px-4 py-2 sm:p-2.5 text-blue-600 bg-blue-50 sm:bg-transparent hover:bg-blue-50 rounded-xl transition-all flex-1 sm:flex-none">
                    <Edit size={18} className="shrink-0" />
                    <span className="sm:hidden text-sm font-semibold">Edit</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 sm:p-2.5 text-red-500 bg-red-50 sm:bg-transparent hover:bg-red-50 rounded-xl transition-all flex-1 sm:flex-none">
                    <Trash2 size={18} className="shrink-0" />
                    <span className="sm:hidden text-sm font-semibold">Delete</span>
                  </button>
                  <div className="hidden sm:block text-gray-300 ml-2">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <FileText className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-400 font-medium">কোনো পোস্ট পাওয়া যায়নি।</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogAdminPage;