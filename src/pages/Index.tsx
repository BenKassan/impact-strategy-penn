import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Initiatives from "@/components/Initiatives";
import Team from "@/components/Team";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Initiatives />
        <Team />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
