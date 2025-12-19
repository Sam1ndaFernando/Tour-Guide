"use client"
import Image from "next/image";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./pages/Hero";
import Categories from "./pages/Categories";
import TravelCategories from "./pages/Categories";
import Trending from "./pages/Trending";
import Tours from "./pages/Tours";

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-[#0a0f0d]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-16">
          <TravelCategories/>
          <Trending />
          <Tours />
          {/* <Stats /> */}
          {/* <Testimonials /> */}
        </div>
      </main>
      <Footer />
    </div>
    
    </>
  );
}
