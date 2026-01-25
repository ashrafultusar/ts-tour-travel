import React from "react";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogs } from "@/lib/data/blog";
import Link from "next/link";
import Pagination from "@/components/shared/Pagination";

const categories = ["All", "Education", "Scholarship", "Visa", "Lifestyle", "Career"];

interface BlogPageProps {
  searchParams: { [key: string]: string | undefined };
}

const Blog = async ({ searchParams }: BlogPageProps) => {
  // Await searchParams before accessing properties
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const page = Number(resolvedSearchParams?.page) || 1;
  const category = resolvedSearchParams?.category || "All";
  const limit = 9;

  const { blogs, totalPages } = await getBlogs(page, limit, undefined, category);

  // Featured post logic - either take the first one or a specific one
  // For simplicity proper, we'll just show the header and list all fetched blogs
  // If we want a separate featured post, we'd need a separate fetch or logic.
  // existing design separates them. Let's treat the first blog of page 1 as featured
  // if no specific filter is active, or just keep simpler grid for now.

  // Actually, let's keep the design: Header -> Categories -> Featured (if All & page 1) -> Grid
  // But strictly using the fetched data.

  const featuredPost = (category === "All" && page === 1 && blogs.length > 0) ? blogs[0] : null;
  const gridPosts = featuredPost ? blogs.slice(1) : blogs;

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#0d4a7e] via-[#1a8a81] to-[#25a18e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Blog</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Essential information about higher education, visas, and lifestyle in Malaysia.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={cat === "All" ? "/blog" : `/blog?category=${cat}`}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${category === cat
                  ? "bg-[#1a8a81] text-white shadow-lg scale-105"
                  : "bg-gray-50 text-gray-600 hover:bg-[#1a8a81]/10 border border-gray-200"
                  }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-50 flex flex-col lg:flex-row min-h-[450px]">
              <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
                <img
                  src={featuredPost.image || "https://placehold.co/800x600?text=No+Image"}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 rounded-full bg-[#f0fdfa] text-[#1a8a81] text-sm font-bold w-fit mb-6 border border-[#ccfbf1]">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mb-6 leading-tight">{featuredPost.title}</h2>
                <div className="text-gray-500 mb-8 text-lg leading-relaxed line-clamp-3 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: featuredPost.content.substring(0, 200) + "..." }}></div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                  {/* <span className="flex items-center gap-2"><User className="w-4 h-4 text-[#25a18e]" /> Admin</span> */}
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#25a18e]" /> {new Date(featuredPost.createdAt).toLocaleDateString()}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#25a18e]" /> {featuredPost.readTime} min</span>
                </div>
                {/* Link to detail page intentionally removed/placeholder as detail page wasn't in scope but structure implies it exists or will exist. 
                    User asked for filtering/pagination on list page.
                */}
                <Link href={`/blog/${featuredPost._id}`}>
                  <Button className="w-fit bg-gradient-to-r from-[#0d4a7e] to-[#1a8a81] text-white px-8 py-6 rounded-xl text-lg flex gap-2 cursor-pointer">
                    Read More <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {gridPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl italic">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
              {gridPosts.map((post, index) => (
                <Link key={post._id} href={`/blog/${post._id}`} className="block">
                  <article
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 cursor-pointer"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={post.image || "https://placehold.co/600x400?text=No+Image"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#f0fdfa] text-[#1a8a81] text-xs font-bold border border-[#ccfbf1]">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#0d4a7e] mb-3 group-hover:text-[#1a8a81] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Using raw content substring for excerpt since we don't have explicit excerpt field */}
                      <div className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                      <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#25a18e]" /> {post.readTime} min read</span>
                        <span className="text-[#0d4a7e] group-hover:text-[#1a8a81] font-semibold flex items-center gap-1">
                          Read more <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            baseUrl="/blog"
            searchParams={resolvedSearchParams}
          />
        </div>
      </section>
    </div>
  );
};

export default Blog;