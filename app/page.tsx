"use client"
import React from 'react';
import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 


export default function Home() {
  return (
    <>
    <div className="bg-image">
     <Navbar/>
     <HeroSection />
    </div>
    <Footer/>
    </>
  );
}

