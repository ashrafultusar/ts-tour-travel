import {
  GraduationCap,
  Building2,
  DollarSign,
  Clock,
  FileCheck,
  Plane,
  Home,
  CheckCircle2,
  ArrowRight,
  Search,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const universities = [
  {
    name: "University of Malaya",
    ranking: "QS World Ranking: 65",
    location: "Kuala Lumpur",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
  },
  {
    name: "Universiti Putra Malaysia",
    ranking: "QS World Ranking: 158",
    location: "Serdang",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400",
  },
  {
    name: "Taylor's University",
    ranking: "QS World Ranking: 284",
    location: "Subang Jaya",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400",
  },
  {
    name: "UCSI University",
    ranking: "QS World Ranking: 300",
    location: "Kuala Lumpur",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400",
  },
];

const courses = [
  "Business Administration (BBA/MBA)",
  "Computer Science & IT",
  "Engineering (Civil, Mechanical, Electrical)",
  "Medicine & Health Science",
  "Hospitality & Tourism",
  "Accounting & Finance",
  "Art & Design",
  "Media & Communication",
];

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Free Consultation",
    description: "Expert advice based on your qualifications and goals.",
  },
  {
    step: "02",
    icon: Building2,
    title: "University Selection",
    description: "Choosing the right institution and academic course.",
  },
  {
    step: "03",
    icon: GraduationCap,
    title: "Application Process",
    description: "Complete assistance with documentation and submission.",
  },
  {
    step: "04",
    icon: FileCheck,
    title: "Offer Letter",
    description: "Securing your official admission offer from the university.",
  },
  {
    step: "05",
    icon: Clock,
    title: "Visa Processing",
    description: "Hassle-free eVAL and Student Pass applications.",
  },
  {
    step: "06",
    icon: Plane,
    title: "Travel to Malaysia",
    description: "Support for ticketing and airport pickup arrangements.",
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Affordable Cost",
    description: "60-70% lower costs compared to Western countries.",
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description: "World-class QS ranked international universities.",
  },
  {
    icon: Clock,
    title: "Easy Visa",
    description: "95%+ visa success rate for international students.",
  },
  {
    icon: Home,
    title: "Lifestyle",
    description: "Halal food and a safe, Muslim-friendly environment.",
  },
];

const StudyInMalaysia = () => {
  return (
    <div className="bg-[#f8fafc]">
      {/* Hero Section - Matching Image Gradient */}
      <section className="py-20 bg-gradient-to-r from-[#0d4a7e] via-[#1a8a81] to-[#25a18e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Study in Malaysia
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            World-class education, affordable costs, and a bright future - all
            in one destination.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#1a8a81] font-bold uppercase tracking-widest text-sm">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mt-2">
              Why Choose Malaysia?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#f0fdfa] flex items-center justify-center mb-6 border border-[#ccfbf1]">
                  <benefit.icon className="w-8 h-8 text-[#1a8a81]" />
                </div>
                <h3 className="text-xl font-bold text-[#0d4a7e] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Soft Gray BG */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#1a8a81] font-bold uppercase tracking-widest text-sm">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mt-2">
              Admission Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-100 relative overflow-hidden shadow-sm group hover:shadow-md transition-all"
              >
                <span className="absolute -top-4 -right-4 text-7xl font-black text-[#1a8a81]/5 select-none">
                  {item.step}
                </span>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a8a81] to-[#25a18e] flex items-center justify-center mb-6 shadow-lg shadow-[#1a8a81]/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0d4a7e] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e]">
              Best Private Universities in Malaysia
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {universities.map((uni, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#0d4a7e] mb-2 leading-tight">
                    {uni.name}
                  </h3>
                  <p className="text-xs font-bold text-[#1a8a81] mb-1">
                    {uni.ranking}
                  </p>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-tighter">
                    {uni.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses & Form Section */}
      <section className="py-20 bg-[#f1f5f9]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1a8a81] font-bold uppercase tracking-widest text-sm">
                Popular Subjects
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mt-2 mb-6">
                Courses You Can Study
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Admission opportunities are available for all programs from
                Bachelor's to PhD. We help you choose the right course according
                to your career goals.
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {courses.map((course, index) => (
                  <li key={index} className="flex items-center gap-3 ">
                    <CheckCircle2 className="w-5 h-5 text-[#25a18e] flex-shrink-0" />
                    <span className="text-[#0d4a7e] font-semibold text-sm">
                      {course}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Counseling Form - Styled from image */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0d4a7e] mb-6 text-center">
                Get Free Counseling
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#1a8a81] transition-all"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#1a8a81] transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#1a8a81] transition-all"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a8a81] appearance-none transition-all">
                  <option value="">Select Preferred Course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                <textarea
                  placeholder="Your Message (Optional)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#1a8a81] resize-none transition-all"
                />
                <Button className="w-full h-14 bg-gradient-to-r from-[#0d4a7e] to-[#1a8a81] hover:opacity-90 transition-opacity text-white font-bold text-lg rounded-xl">
                  Submit Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Final Gradient Footer */}
      <section className="py-20 bg-gradient-to-r from-[#0d4a7e] via-[#1a8a81] to-[#25a18e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build Your Future Today
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Talk to our experienced counselors and choose the right path for
            your academic success.
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#036ca3]  transition-opacity text-white font-bold    px-12 py-8 text-xl rounded-xl shadow-2xl">
              <Link href={"/"} className="flex items-center gap-3">
                Contact Us Now
                <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyInMalaysia;
