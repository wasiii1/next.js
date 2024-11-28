import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import UpcommingWebinars from "@/components/UpcommingWebinars";


export default function Home() {
  return (
    <main className="m-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          <HeroSection/> 
          <FeaturedCourses />
          <WhyChooseUs/>
          <MusicSchoolTestimonials />
          <UpcommingWebinars />
    </main>
  );
}
