import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Initiatives from "@/components/Initiatives";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Partners />
        <Initiatives />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
