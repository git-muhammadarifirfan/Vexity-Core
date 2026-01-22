// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Advantages from "./components/Advantages";
import FAQ from "./components/FAQ";
import SiteNavbar from "./components/SiteNavbar";
import Footer from "./components/Footer";
import Research from "./components/Research";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-emerald-500 selection:text-white">
      <SiteNavbar />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <Research/>
      <Advantages/>
      <FAQ />
      <div id="contact" className="h-0" />
      <Footer />
    </main>
  );
}
