import HomeAboutDevContent from '@/components/Content/Home/AboutDev';
import React from 'react';

export default function Home_about_dev() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Home About Dev Bunner</h1>
            <HomeAboutDevContent />
        </div>
    );
}
