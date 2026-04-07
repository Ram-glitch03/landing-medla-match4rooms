import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Listings from "./components/Listings";
import Cities from "./components/Cities";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Listings />
        <Cities />
        <WhyUs />
        <Testimonials />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
