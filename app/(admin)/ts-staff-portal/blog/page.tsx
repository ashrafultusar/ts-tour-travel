import React from 'react';
import { Plus, Edit, Calendar, FileText, ChevronRight } from 'lucide-react';
import { getBlogs } from '@/lib/data/blog';
import Link from 'next/link';
import DeleteBlogButton from '@/components/admin/blog/DeleteBlogButton';


const BlogAdminPage = async () => {
  const { blogs } = await getBlogs();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FileText className="text-blue-600" size={24} />
            All Blog Posts
          </h1>
          <p className="text-gray-500 text-sm mt-1">Blog Management Panel</p>
        </div>

        <Link
          href="/ts-staff-portal/blog/create"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold transition-all shadow-sm active:scale-95 bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100"
        >
          <Plus size={18} /> New Post
        </Link>
      </div>

      <hr className="mb-8 border-gray-100" />

      {/* Main Content Area */}
      <div className="space-y-4">
        {blogs.map((post: any) => (
          <div
            key={post._id}
            className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Left Side: Info */}
              <div className="flex items-center gap-4">
                {post.image ? (
                  <img src={post.image} alt={post.title} className="w-12 h-12 rounded-xl object-cover" />
                ) : (
                  <div className="hidden sm:flex bg-blue-50 w-12 h-12 rounded-xl items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileText size={22} />
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <h3 className="text-gray-800 font-bold text-base sm:text-lg leading-tight truncate">
                    {post.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                    <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                      <Calendar size={14} className="mr-1.5 shrink-0" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                    <span className="bg-gray-50 text-gray-500 text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-medium uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side: Actions */}
              <div className="flex items-center justify-end gap-2 pt-3 sm:pt-0 border-t sm:border-none border-gray-50">
                <Link
                  href={`/ts-staff-portal/blog/edit/${post._id}`}
                  className="flex items-center justify-center gap-2 px-4 py-2 sm:p-2.5 text-blue-500 bg-blue-50 sm:bg-transparent hover:bg-blue-50 rounded-xl transition-all flex-1 sm:flex-none"
                >
                  <Edit size={18} className="shrink-0" />
                  <span className="sm:hidden text-sm font-semibold">Edit</span>
                </Link>

                <DeleteBlogButton id={post._id} />

                <div className="hidden sm:block text-gray-300 ml-2">
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {blogs.length === 0 && (
          <div className="py-20 text-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <FileText className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-400 font-medium">No posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdminPage;