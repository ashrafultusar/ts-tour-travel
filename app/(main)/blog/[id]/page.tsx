import React from "react";
import { notFound } from "next/navigation";
import { getBlogById, getBlogs } from "@/lib/data/blog";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';

export const dynamicParams = true; // Allow generating new pages on request

interface BlogDetailsProps {
    params: { id: string };
}

// Pre-generation of static paths for popular/latest blogs
export async function generateStaticParams() {
    // Generate params for the first 5 pages of blogs (approx 50 posts)
    // This makes the latest blogs instant to load.
    const { blogs } = await getBlogs(1, 50);

    return blogs.map((blog: any) => ({
        id: blog._id.toString(),
    }));
}

// SEO Metadata Generation
export async function generateMetadata({ params }: BlogDetailsProps): Promise<Metadata> {
    const { id } = await params;
    const { blog } = await getBlogById(id);

    if (!blog) return { title: 'Blog Not Found' };

    return {
        title: `${blog.title} | EduVisa Bangladesh`,
        description: blog.content ? blog.content.substring(0, 160) : 'Read comprehensive guide.',
        openGraph: {
            images: blog.image ? [blog.image] : [],
        },
    };
}

const BlogDetailsPage = async ({ params }: BlogDetailsProps) => {
    const { id } = await params;
    const { blog } = await getBlogById(id);

    if (!blog) {
        notFound();
    }

    // Fetch related blogs (simple logic: same category, exclude current)
    const { blogs: relatedPostsRaw } = await getBlogs(1, 4, undefined, blog.category);
    const relatedPosts = relatedPostsRaw.filter(p => p._id !== blog._id).slice(0, 3);

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Hero / Header Image */}
            <div className="w-full h-[400px] md:h-[500px] relative bg-gray-900">
                <img
                    src={blog.image || "https://placehold.co/1200x600/png?text=Blog+Cover"}
                    alt={blog.title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12 md:pb-16 text-white container mx-auto">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase bg-[#1a8a81] rounded-md">
                        {blog.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mb-4 text-shadow-lg">
                        {blog.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm md:text-base font-medium text-gray-200">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-[#25a18e]" />
                            {new Date(blog.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-[#25a18e]" />
                            {blog.readTime || 5} min read
                        </span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10 relative z-10 flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <main className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1a8a81] transition-colors mb-8 font-medium"
                    >
                        <ArrowLeft size={18} /> Back to Blogs
                    </Link>

                    {/* Content Body */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-[#0d4a7e] prose-a:text-[#1a8a81] prose-img:rounded-xl text-gray-700 leading-relaxed font-serif"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Tag size={16} /> Tags
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag: string, index: number) => (
                                    <span key={index} className="px-4 py-1.5 bg-gray-50 text-gray-600 rounded-full text-sm font-medium border border-gray-200 hover:bg-[#1a8a81] hover:text-white hover:border-[#1a8a81] transition-colors cursor-default">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </main>

                {/* Sidebar / Related */}
                <aside className="w-full lg:w-1/3 space-y-8 pt-10 lg:pt-0">
                    <div className="bg-[#f0fdfa] p-8 rounded-2xl border border-[#ccfbf1]">
                        <h3 className="text-xl font-bold text-[#0d4a7e] mb-2">Need Help with Admission?</h3>
                        <p className="text-gray-600 mb-6">Our experts are ready to guide you through the process.</p>
                        <Link href="/" className="block w-full text-center bg-[#1a8a81] text-white font-bold py-3 rounded-xl hover:bg-[#136962] transition-colors shadow-lg shadow-[#1a8a81]/20">
                            Book Free Consultation
                        </Link>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-[#1a8a81] pl-3">Related Posts</h3>
                            <div className="space-y-6">
                                {relatedPosts.map((post: any) => (
                                    <Link key={post._id} href={`/blog/${post._id}`} className="group flex gap-4 items-start">
                                        <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden relative bg-gray-100">
                                            <img
                                                src={post.image || "https://placehold.co/100"}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 group-hover:text-[#1a8a81] transition-colors line-clamp-2 leading-tight mb-2">
                                                {post.title}
                                            </h4>
                                            <span className="text-xs text-gray-400 flex items-center gap-1">
                                                <Calendar size={12} /> {new Date(post.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </div>
    );
};

export default BlogDetailsPage;
