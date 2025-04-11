import DevStepsContent from '@/components/Content/About/Devsteps';
import DevContent from '@/components/Content/About/DevTools';
import AboutHeroContent from '@/components/Content/About/Hero';
import HomeAboutContent from '@/components/Content/Home/About';
import HomeHeroContent from '@/components/Content/Home/Hero';
import React from 'react';

export default function Dev_Steps() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Dev Steps</h1>
            <DevStepsContent />
        </div>
    );
}
