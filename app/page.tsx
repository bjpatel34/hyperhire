import React from 'react';
import HeroSection from "@/components/HeroSection/HeroSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Card = {
    id: string;
    title: string;
    content: string;
    htmlFor: string;
};

async function fetchCards(): Promise<Card[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cards`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch cards');
    }
    return res.json();
}

export default async function Home() {
    const [cards] = await Promise.all([
        fetchCards(),
        // you can add more API calls here in parallel
    ]);
    return (
        <>
            <div className="bg-image">
                <Navbar/>
                <HeroSection cards={cards}/>
            </div>
            <Footer/>
        </>
    );
}