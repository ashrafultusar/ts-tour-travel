import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredPost = {
  title: "Higher Education in Malaysia: Complete Guide 2025",
  excerpt: "The A-Z guide for studying in Malaysia from Bangladesh. Admission process, costs, scholarships all in one place.",
  image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
  author: "Ahmed Hassan",
  date: "Jan 10, 2025",
  readTime: "10 min",
  category: "Higher Education",
};

const posts = [
  {
    title: "5 Ways to Get a Scholarship in Malaysia",
    excerpt: "Learn in detail about Malaysian government and university scholarships.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400",
    author: "Farhana Rahman",
    date: "Jan 5, 2025",
    readTime: "7 min",
    category: "Scholarship",
  },
  {
    title: "Is it possible to study in Malaysia without IELTS?",
    excerpt: "Find out which universities allow admission without IELTS scores.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400",
    author: "Karim Uddin",
    date: "Dec 28, 2024",
    readTime: "5 min",
    category: "Admission Tips",
  },
  {
    title: "Cost of Living in Malaysia 2025",
    excerpt: "Accommodation, food, transport - how much will it cost monthly?",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400",
    author: "Najma Akter",
    date: "Dec 20, 2024",
    readTime: "6 min",
    category: "Lifestyle",
  },
  {
    title: "Part-time Jobs in Malaysia: Rules and Opportunities",
    excerpt: "How to earn money while on a student visa?",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400",
    author: "Ahmed Hassan",
    date: "Dec 15, 2024",
    readTime: "8 min",
    category: "Career",
  },
  {
    title: "Top 5 Malaysian Universities 2025",
    excerpt: "Best universities according to QS Rankings and their specialties.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400",
    author: "Farhana Rahman",
    date: "Dec 10, 2024",
    readTime: "9 min",
    category: "University",
  },
  {
    title: "Malaysia Student Visa: Document Checklist",
    excerpt: "What documents are required for the visa application?",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400",
    author: "Karim Uddin",
    date: "Dec 5, 2024",
    readTime: "4 min",
    category: "Visa",
  },
];

const categories = ["All", "Education", "Scholarship", "Visa", "Lifestyle", "Career"];

const Blog = () => {
  return (
    <div className="bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#0d4a7e] via-[#1a8a81] to-[#25a18e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Essential information about higher education, visas, and lifestyle in Malaysia.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-[#1a8a81] text-white shadow-md"
                    : "bg-gray-50 text-gray-600 hover:bg-[#1a8a81]/10 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-50 flex flex-col lg:row-reverse lg:flex-row min-h-[450px]">
            <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <span className="inline-block px-4 py-1 rounded-full bg-[#f0fdfa] text-[#1a8a81] text-sm font-bold w-fit mb-6 border border-[#ccfbf1]">
                {featuredPost.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mb-6 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                <span className="flex items-center gap-2"><User className="w-4 h-4 text-[#25a18e]" /> {featuredPost.author}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#25a18e]" /> {featuredPost.date}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#25a18e]" /> {featuredPost.readTime}</span>
              </div>
              <Button className="w-fit bg-gradient-to-r from-[#0d4a7e] to-[#1a8a81] hover:opacity-90 text-white px-8 py-6 rounded-xl text-lg flex gap-2 transition-all shadow-lg shadow-blue-900/10">
                Read More <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f0fdfa] text-[#1a8a81] text-xs font-bold mb-4 border border-[#ccfbf1]">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0d4a7e] mb-3 group-hover:text-[#1a8a81] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-[#25a18e]" /> {post.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#25a18e]" /> {post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="rounded-full px-12 border-[#1a8a81] text-[#1a8a81] hover:bg-[#1a8a81] hover:text-white transition-all font-bold h-14">
              View More Posts
            </Button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Blog;