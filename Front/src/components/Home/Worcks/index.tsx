import React from 'react';
import ProjectCard from '../ProjectCard';
import WhiteBtn from '@/components/Buttons';

export default function WorcksSection() {
    return (
        <section className="flex flex-col  items-center">
            <header className="flex flex-col items-center  gap-4 text-[#222222] mb-10 lg:px-[100px] md:px-[60px] px-[12px]">
                {' '}
                <p className="text-base font-semibold">Portfolio</p>
                <h2 className="text-5xl font-bold">Services</h2>
                <h3 className="text-[18px] max-sm:text-base font-medium opacity-60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                </h3>
            </header>
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-1 md:gap-y-8 lg:grid-cols-3 lg:px-[100px] md:px-[60px] px-[12px]">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <WhiteBtn text="Show more" className="mt-5" />
        </section>
    );
}
