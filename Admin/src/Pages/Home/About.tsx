import HomeAboutContent from '@/components/Content/Home/About';
import HomeHeroContent from '@/components/Content/Home/Hero';
import React from 'react';

export default function Home_About() {
    return (
        <div className=" flex flex-col gap-7 p-7">
            <h1 className="text-3xl text-bold">Home About</h1>
            <HomeAboutContent />
        </div>
    );
}
