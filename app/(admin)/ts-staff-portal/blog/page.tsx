"use client";

import React, { useState } from 'react';
import { Plus, ArrowLeft, Edit, Trash2, Calendar, FileText } from 'lucide-react';
import CreateBlog from '@/components/admin/blog/CreateBlog';

const BlogAdminPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const posts = [
    { id: 1, title: "প্রথম ব্লগ পোস্ট", date: "2024-05-20" },
    { id: 2, title: "ভিসা প্রসেসিং টিপস", date: "2024-05-18" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
      {/* হেডার সেকশন - Responsive Flex */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            {showCreateForm ? "নতুন ব্লগ তৈরি করুন" : "সকল ব্লগ পোস্ট"}
          </h1>
          <p className="text-gray-500 text-sm">ব্লগ ম্যানেজমেন্ট প্যানেল</p>
        </div>

        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all cursor-pointer shadow-sm ${
            showCreateForm 
              ? "bg-gray-100 text-gray-700 hover:bg-gray-200" 
              : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
          }`}
        >
          {showCreateForm ? (
            <><ArrowLeft size={18} /> Go Back</>
          ) : (
            <><Plus size={18} /> New Post</>
          )}
        </button>
      </div>

      <hr className="mb-8 border-gray-100" />

      {/* কন্ডিশনাল রেন্ডারিং */}
      {showCreateForm ? (
        <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-gray-100 transition-all">
          <CreateBlog />
        </div>
      ) : (
        <div className="space-y-4">
          
          {/* --- Mobile View (Cards) --- */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <FileText size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-bold leading-tight">{post.title}</h3>
                      <div className="flex items-center text-gray-400 text-xs mt-1">
                        <Calendar size={14} className="mr-1" /> {post.date}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-5 pt-4 border-t border-gray-50">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-2.5 rounded-xl text-sm font-semibold">
                    <Edit size={16} /> Edit
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-500 py-2.5 rounded-xl text-sm font-semibold">
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* --- Tablet & Desktop View (Table) --- */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 tracking-wider">শিরোনাম</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 tracking-wider">তারিখ</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600 tracking-wider text-right">অ্যাকশন</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{post.date}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="p-16 text-center bg-white rounded-2xl border-2 border-dashed border-gray-100">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-gray-300" size={32} />
              </div>
              <p className="text-gray-400 font-medium">কোনো পোস্ট পাওয়া যায়নি।</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogAdminPage;