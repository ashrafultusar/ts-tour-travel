import { ArrowRight, Phone, Globe, GraduationCap, Building2, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-light px-4 py-2 rounded-full">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                মালয়েশিয়ায় উচ্চশিক্ষার সুযোগ
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              বাংলাদেশি শিক্ষার্থীদের জন্য{" "}
              <span className="text-gradient">মালয়েশিয়ায়</span>
              <br />
              <span className="text-primary">Expert Guidance</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-xl">
              আমরা সবকিছু সহজ করে দিই - সঠিক বিশ্ববিদ্যালয় নির্বাচন থেকে স্টুডেন্ট
              ভিসা প্রাপ্তি পর্যন্ত। আপনার স্বপ্নের ক্যারিয়ার গড়তে আমরা আছি আপনার
              পাশে।
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a
                href="tel:+8801XXXXXXXXX"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+880 1XXX-XXXXXX</span>
              </a>
              <a
                href="https://www.eduvisabd.com"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <span>www.eduvisabd.com</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="shadow-button group">
                ফ্রি কনসালটেশন নিন
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                বিশ্ববিদ্যালয় খুঁজুন
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image with Stats */}
          <div className="relative">
            {/* Main Circular Image */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse-glow" />
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-card shadow-card">
                <img
                  src={'/assets/home/malaysia-cityscape.jpg'}
                  alt="Malaysia Cityscape with Petronas Towers"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-2 border-dashed border-primary/30" />
            </div>

            {/* Floating Stats Cards */}
            <div
              className="absolute top-0 right-0 lg:right-8 bg-card rounded-2xl shadow-card p-4 animate-float"
              style={{ animationDelay: "0s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">৩৯+</p>
                  <p className="text-xs text-muted-foreground">পার্টনার বিশ্ববিদ্যালয়</p>
                </div>
              </div>
            </div>

            <div
              className="absolute top-24 right-0 lg:-right-4 bg-card rounded-2xl shadow-card p-4 animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange">৮২০+</p>
                  <p className="text-xs text-muted-foreground">সফল ভিসা</p>
                </div>
              </div>
            </div>

            {/* Student Visa Card */}
            <div
              className="absolute bottom-0 right-0 lg:right-4 bg-card rounded-2xl shadow-card p-5 max-w-[220px] animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="font-semibold">স্টুডেন্ট ভিসা</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                বিশ্বমানের শিক্ষার সুযোগ নিন মালয়েশিয়ায়
              </p>
              <Button size="sm" variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                আবেদন করুন
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
