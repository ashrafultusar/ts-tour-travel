import { notFound } from "next/navigation";
import Image from "next/image";
import { 
  MapPin, 
  ChevronDown, 
  CheckCircle2, 
  Quote, 
  Star, 
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

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* 1. Dynamic Header Section (APU Style) */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-[#F0F2FD] via-[#FFFFFF] to-[#FDFBF2] rounded-[32px] md:rounded-[50px] p-6 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white flex flex-col md:flex-row items-center gap-8">
            {/* Dynamic Logo Box */}
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

            {/* Dynamic Text Content */}
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
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Dynamic About Section */}
            <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-black text-[#1E293B] mb-6 flex items-center gap-3">
                <Info className="w-6 h-6 text-[#14919B]" />
                About University
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed text-justify">
                {university.description}
              </p>
            </section>

          
            <section>
              <h2 className="text-2xl font-black text-[#1E293B] mb-8 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[#14919B]" />
                Departments and Courses
              </h2>
              <div className="space-y-4">
                {["Computer Science & IT", "Business & Management", "Engineering", "Arts & Design"].map((item, idx) => (
                  <div key={idx} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#14919B] transition-all cursor-pointer shadow-sm">
                    <div className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#F0F9F9] flex items-center justify-center text-[#14919B] group-hover:bg-[#14919B] group-hover:text-white transition-colors">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-[#334155] group-hover:text-[#14919B]">{item}</span>
                      </div>
                      <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[#14919B]" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar Quick Facts - Mixture of Dynamic & Static) */}
          <aside className="lg:col-span-4 space-y-8">
  {/* মেইন কার্ডের ব্যাকগ্রাউন্ড কালার ইমেজের মতো করা হয়েছে */}
  <div className="bg-[#0891B2] text-white p-8 rounded-[32px] shadow-2xl sticky top-24">
    <h3 className="text-xl font-black mb-8 border-b border-white/20 pb-4 flex items-center gap-2 uppercase tracking-widest">
      <Globe className="w-5 h-5" /> Quick Facts
    </h3>
    
    <div className="space-y-6">
      {/* আইটেমগুলোর ব্যাকগ্রাউন্ড একটু হালকা রাখা হয়েছে যাতে টেক্সট ফুটে ওঠে */}
      <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
        <span className="text-white/80 font-bold uppercase text-[10px]">Offer Type</span>
        <span className="font-black text-sm uppercase">{university.offerType}</span>
      </div>

      <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
        <span className="text-white/80 font-bold uppercase text-[10px]">Primary Level</span>
        <span className="font-black text-sm">{university.level?.[0]}</span>
      </div>

      <div className="flex justify-between items-center bg-white/10 p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
        <span className="text-white/80 font-bold uppercase text-[10px]">Min. GPA Required</span>
        <span className="font-black text-lg">3.00</span>
      </div>
      
      {/* নিচের নোটিশ সেকশনটি ইমেজের সাথে সামঞ্জস্য রেখে ক্লিন লুক দেওয়া হয়েছে */}
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