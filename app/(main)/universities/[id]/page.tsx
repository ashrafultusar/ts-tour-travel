import { notFound } from "next/navigation";
import Image from "next/image";
import { 
  MapPin, 
  ChevronDown, 
  GraduationCap, 
  Globe, 
  FileText, 
  Info,
  BookOpen
} from "lucide-react";
import { getUniversityById } from "@/lib/data/university";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UniversityDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const response = await getUniversityById(id);

  if (!response.success || !response.university) {
    notFound();
  }

  const university = response.university;
console.log(university);
  // About text-ke split kora (Image-ke majhkhaney deyar jonno)
  const aboutWords = university.description.split(" ");
  const firstPart = aboutWords.slice(0, 120).join(" "); // Prothom 50-ti shobdo
  const secondPart = aboutWords.slice(50).join(" ");   // Baki shobdo

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* 1. Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-[#F0F2FD] via-[#FFFFFF] to-[#FDFBF2] rounded-[32px] md:rounded-[50px] p-6 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50 shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={university.image}
                  alt={university.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-black text-[#1E293B] mb-4 tracking-tight">
                {university.name}
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
                <div className="flex items-center gap-2 text-[#64748B] font-bold">
                  <MapPin className="w-5 h-5 text-[#14919B]" />
                  <span className="text-lg">Location: {university.location}</span>
                </div>
                <div className="h-2 w-2 rounded-full bg-gray-300 hidden md:block" />
                <span className="px-4 py-1.5 bg-[#14919B]/10 text-[#14919B] rounded-full text-xs font-black uppercase tracking-widest">
                  {university.offerType} Offer Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 2. About Section with Middle Image */}
            <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-black text-[#1E293B] mb-6 flex items-center gap-3">
                <Info className="w-6 h-6 text-[#14919B]" />
                About University
              </h2>
              <div className="text-[#475569] text-lg leading-relaxed text-justify space-y-6">
                <p>{firstPart}...</p>
                
                {/* About Image Integration */}
                {university.aboutImage && (
                  <div className="relative w-full h-[300 md:h-[450px] rounded-3xl overflow-hidden my-8 shadow-md">
                    <Image
                      src={university.aboutImage}
                      alt="About University"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                <p>{secondPart}</p>
              </div>
            </section>

          {/* 3. Dynamic Departments & Courses Section */}
<section>
  <h2 className="text-2xl font-black text-[#1E293B] mb-8 flex items-center gap-3">
    <BookOpen className="w-6 h-6 text-[#14919B]" />
    Departments and Courses
  </h2>

  <div className="space-y-4">
    {university.departments?.map((dept: any, idx: number) => (
      /* Main Container */
      <div 
        key={dept._id} 
        className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#14919B]/30 transition-all duration-300 shadow-sm"
      >
        {/* Checkbox Hack for pure CSS state (or you can use a small client component) */}
        <label className="cursor-pointer select-none">
          <input type="checkbox" className="peer hidden" />
          
          {/* Header/Summary Area */}
          <div className="flex items-center justify-between p-6 bg-white transition-colors peer-checked:bg-gray-50/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0F9F9] flex items-center justify-center text-[#14919B] peer-checked:bg-[#14919B] peer-checked:text-white transition-all duration-500 shadow-inner">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-bold text-lg text-[#334155] group-hover:text-[#14919B] transition-colors">
                {dept.name}
              </span>
            </div>
            
            {/* Animated Chevron */}
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-300 peer-checked:rotate-180 peer-checked:bg-[#14919B]/10">
              <ChevronDown className="w-5 h-5 text-gray-400 peer-checked:text-[#14919B] transition-colors" />
            </div>
          </div>

          {/* Smooth Slide Down/Up Animation Wrapper */}
          <div className="grid grid-rows-[0fr] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] peer-checked:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="px-6 pb-6 pt-2">
                <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1E293B] text-white">
                        <th className="p-4 text-xs font-black uppercase tracking-widest">Course Name</th>
                        <th className="p-4 text-xs font-black uppercase tracking-widest text-right">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {dept.courses?.map((course: any) => (
                        <tr key={course._id} className="hover:bg-blue-50/30 transition-colors group/row">
                          <td className="p-4 text-[#475569] font-semibold text-sm group-hover/row:text-[#14919B]">
                            {course.name}
                          </td>
                          <td className="p-4 text-[#64748B] text-right font-bold text-sm">
                            <span className="bg-gray-100 px-3 py-1 rounded-full text-[11px] group-hover/row:bg-[#14919B]/10 group-hover/row:text-[#14919B] transition-colors">
                              {course.duration} years
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    ))}
  </div>
</section>
          </div>

          {/* Right Column (Sidebar) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-[#0891B2] text-white p-8 rounded-[32px] shadow-2xl sticky top-24">
              <h3 className="text-xl font-black mb-8 border-b border-white/20 pb-4 flex items-center gap-2 uppercase tracking-widest">
                <Globe className="w-5 h-5" /> Quick Facts
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl border border-white/10">
                  <span className="text-white/80 font-bold uppercase text-[10px]">Offer Type</span>
                  <span className="font-black text-sm uppercase">{university.offerType}</span>
                </div>

                <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl border border-white/10">
                  <span className="text-white/80 font-bold uppercase text-[10px]">Primary Level</span>
                  <span className="font-black text-sm">{university.level?.[0]}</span>
                </div>

                <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl border border-white/10">
                  <span className="text-white/80 font-bold uppercase text-[10px]">Processing Time</span>
                  <span className="font-black text-lg">Depends</span>
                </div>
                
                <div className="pt-4">
                  <div className="bg-white/20 backdrop-blur-sm text-white p-5 rounded-2xl border border-white/30">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-cyan-200" />
                      <span className="text-[10px] font-black uppercase tracking-wider">Offer Letter Policy</span>
                    </div>
                    <p className="text-[11px] font-medium leading-relaxed text-cyan-50">
                      Typically issued within 7-14 working days after successful application submission.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}