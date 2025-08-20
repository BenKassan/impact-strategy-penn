import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Initiatives from "@/components/Initiatives";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  console.log("Index component rendering");
  
  useEffect(() => {
    console.log("Index useEffect running");
    // Set page title and meta description for SEO
    document.title = "Education Consulting at Penn - Transforming Education Through Data-Driven Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Education Consulting at Penn partners with Philadelphia education initiatives to provide strategic, data-informed solutions that enhance educational effectiveness and drive meaningful student outcomes.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Education Consulting at Penn partners with Philadelphia education initiatives to provide strategic, data-informed solutions that enhance educational effectiveness and drive meaningful student outcomes.';
      document.head.appendChild(meta);
    }
  }, []);

  console.log("About to render Index JSX");
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Team />
        <Initiatives />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
