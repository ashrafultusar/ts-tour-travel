/* eslint-disable @typescript-eslint/no-explicit-any */
import { Target, Award, Heart, CheckCircle2 } from "lucide-react";
import { getTeamMembers } from "@/lib/data/team";
import Image from "next/image";

export const dynamic = "force-dynamic";

const officeImages = [
  {
    src: "/assets/office/image1.jpeg",
    alt: "Modern workspace",
    span: "row-span-2",
  },
  { src: "/assets/office/image2.jpeg", alt: "Meeting room", span: "" },
  { src: "/assets/office/image3.jpeg", alt: "Lounge area", span: "row-span-2" },
  { src: "/assets/office/image4.jpeg", alt: "Reception", span: "" },
  {
    src: "/assets/office/image5.jpeg",
    alt: "Consultancy Area",
    span: "row-span-2",
  },
  { src: "/assets/office/image6.jpeg", alt: "Reception", span: "" },
  { src: "/assets/office/image7.jpeg", alt: "Workspace", span: "" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide international standard education opportunities for students worldwide.",
  },
  {
    icon: Award,
    title: "Our Vision",
    description:
      "To become the most trusted education consultancy in South Asia.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, transparency, and student success are our top priorities.",
  },
];

const AboutUs = async () => {
  const { members } = await getTeamMembers(1, 100);

  return (
    <div className="overflow-hidden bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-r from-[#0d4a7e] via-[#1a8a81] to-[#25a18e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
            Since 2019, we have been helping students fulfill their dreams of
            higher education in Malaysia and beyond.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1a8a81] font-semibold text-sm uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d4a7e] mt-2 mb-6">
                A Decade of Trusted Service
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                TS Tour & Travel was founded in 2019. Our founder, a Malaysia
                graduate himself, recognized the lack of proper guidance for
                international students.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We don&apos;t just process visas; we help every student choose
                the right university and course based on their career goals.
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  "Government Authorized Agency",
                  "41+ Partner Universities",
                  "Offices in Rangpur & Kuala Lumpur",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 font-medium"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#25a18e]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-12 border-[#f8fafc] relative w-full h-100">
                <Image
                  src="/assets/aboutUs/image1.jpg"
                  alt="Our Office Environment"
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA6prehQAAAABJRU5ErkJggg=="
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#f1f5f9]">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[#1a8a81] font-medium tracking-wide uppercase text-sm">
            Our Heartbeat
          </span>
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
                <h3 className="text-2xl font-bold text-[#0d4a7e] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-[#f0fdfa] text-[#1a8a81] font-medium text-sm mb-4 border border-[#ccfbf1]">
              Our Workspace
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d4a7e] mb-4">
              Where <span className="text-[#25a18e]">Innovation</span> Happens
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Take a peek inside our modern workspace designed to inspire
              creativity and collaboration.
            </p>
          </div>

          {/* Balanced Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] max-w-7xl mx-auto">
            {officeImages?.map((image, index) => {
              const spanClass =
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 2
                    ? "md:row-span-2"
                    : index === 4
                      ? "md:col-span-2"
                      : "";

              return (
                <div
                  key={index}
                  className={`relative cursor-pointer overflow-hidden rounded-3xl group shadow-sm hover:shadow-xl transition-all duration-500 ${spanClass}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA6prehQAAAABJRU5ErkJggg=="
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0d4a7e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-6 left-6">
                      <p className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {image.alt}
                      </p>
                      <div className="w-8 h-1 bg-[#25a18e] mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#f1f5f9]">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[#1a8a81] font-medium uppercase text-sm tracking-widest">
            Our People
          </span>
          <h2 className="text-4xl font-bold text-[#0d4a7e] mt-2 mb-16">
            Meet Our Professional Team
          </h2>

          {members.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {members.map((member: any) => (
                <div
                  key={member._id}
                  className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-4/5 overflow-hidden rounded-xl mb-6 bg-gray-100 relative">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-opacity duration-300"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA6prehQAAAABJRU5ErkJggg=="
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#0d4a7e]">
                    {member.name}
                  </h3>
                  <p className="text-[#1a8a81] font-semibold text-sm mt-1">
                    {member.designation}
                  </p>
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
