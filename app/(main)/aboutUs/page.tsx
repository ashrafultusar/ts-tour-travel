import React from "react";
import { Target, Award, Heart, CheckCircle2 } from "lucide-react";
import { getTeamMembers } from "@/lib/data/team";

export const dynamic = "force-dynamic";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide international standard education opportunities for students worldwide.",
  },
  {
    icon: Award,
    title: "Our Vision",
    description: "To become the most trusted education consultancy in South Asia.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Integrity, transparency, and student success are our top priorities.",
  },
];

const milestones = [
  { year: "2014", title: "The Beginning", description: "First office established in Dhaka." },
  { year: "2016", title: "100+ Students", description: "Reached our first 100 successful admissions." },
  { year: "2018", title: "Malaysia Office", description: "Established our branch in Kuala Lumpur." },
  { year: "2020", title: "300+ Students", description: "Continued services despite COVID challenges." },
  { year: "2023", title: "500+ Students", description: "Record number of successful admissions." },
];

const AboutUs = async () => {
  const { members } = await getTeamMembers(1, 100); // Fetch all members

  return (
    <div className="overflow-hidden bg-[#f8fafc]">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#0d4a7e] via-[#1a8a81] to-[#25a18e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Since 2014, we have been helping students fulfill their dreams of higher education in Malaysia and beyond.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1a8a81] font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mt-2 mb-6">
                A Decade of Trusted Service
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                EduVisa Bangladesh was founded in 2014. Our founder, a Malaysia graduate himself, recognized the lack of proper guidance for international students.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We don't just process visas; we help every student choose the right university and course based on their career goals.
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  "Government Authorized Agency",
                  "20+ Partner Universities",
                  "Offices in Dhaka & Kuala Lumpur"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-[#25a18e]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-[12px] border-[#f8fafc]">
                <img
                  src="/assets/aboutUs/image1.jpg"
                  alt="Our Office Environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#f1f5f9]">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[#1a8a81] font-medium tracking-wide uppercase text-sm">Our Heartbeat</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mt-2 mb-16">
            What Drives Our Success
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100 transition-all"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#f0fdfa] flex items-center justify-center mb-8 border border-[#ccfbf1]">
                  <value.icon className="w-10 h-10 text-[#1a8a81]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0d4a7e] mb-4">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4 text-center mb-20">
          <span className="text-[#1a8a81] font-medium tracking-widest uppercase text-sm">Our Journey</span>
          <h2 className="text-4xl font-bold text-[#0d4a7e] mt-2">Major Milestones</h2>
        </div>
        <div className="max-w-5xl mx-auto px-4">
          {milestones.map((milestone, index) => (
            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              <div className="w-1/2 px-6">
                <div className={`p-8 bg-[#f8fafc] border border-gray-100 shadow-sm rounded-2xl ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <span className="text-2xl font-black text-[#1a8a81] opacity-50">{milestone.year}</span>
                  <h4 className="text-xl font-bold text-[#0d4a7e] mb-2">{milestone.title}</h4>
                  <p className="text-sm text-gray-500">{milestone.description}</p>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-10">
                <div className="h-24 w-1 bg-gray-100 absolute top-full"></div>
                <div className="w-5 h-5 rounded-full bg-[#1a8a81] border-4 border-white shadow-md z-10"></div>
              </div>
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#f1f5f9]">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[#1a8a81] font-medium uppercase text-sm tracking-widest">Our People</span>
          <h2 className="text-4xl font-bold text-[#0d4a7e] mt-2 mb-16">Meet Our Professional Team</h2>

          {members.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {members.map((member: any) => (
                <div key={member._id} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6 bg-gray-100">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#0d4a7e]">{member.name}</h3>
                  <p className="text-[#1a8a81] font-semibold text-sm mt-1">{member.designation}</p>
                  <p className="text-xs text-gray-400 mt-2">{member.country}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500">No team members found.</div>
          )}
        </div>
      </section>

    </div>
  );
};

export default AboutUs;