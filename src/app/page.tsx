import Navbar from "@/components/sections/landing_page/NavBar";
import Hero from "@/components/sections/landing_page/Hero";
import Stats from "@/components/sections/landing_page/Stats";
import Benefits from "@/components/sections/landing_page/Benefits";
import CurriculumTimeline from "@/components/sections/landing_page/Curriculum";
import ContractsGrid from "@/components/sections/landing_page/ContractsGrid";
import Freelancing from "@/components/sections/landing_page/Freelancing";
import Faculty from "@/components/sections/landing_page/Faculty";
import Bonuses from "@/components/sections/landing_page/Bonuses";
import Testimonials from "@/components/sections/landing_page/Testimonials";
import Pricing from "@/components/sections/landing_page/Pricing";
import Guarantee from "@/components/sections/landing_page/Guarantee";
import FAQ from "@/components/sections/landing_page/FAQ";
import Footer from "@/components/sections/landing_page/Footer";
import { Background } from "@/components/sections/landing_page/Background";
import StickyCTA from "@/components/sections/landing_page/StickyCTA";

export default function Home() {
  return (
    <div className="">
      <Background />
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <CurriculumTimeline />
      <ContractsGrid />
      <Freelancing />
      <Faculty />
      <Bonuses />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
      <StickyCTA />
      <Footer />
    </div>
  );
}
