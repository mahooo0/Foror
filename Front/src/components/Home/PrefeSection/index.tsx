import { BlackBtn } from '@/components/Buttons';
import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';

export default function PrefeSection() {
    return (
        <section className="lg:px-[100px] md:px-[60px] px-[12px]">
            <header className="flex flex-row justify-between items-center">
                <h2 className=" text-5xl max-sm:text-2xl font-bold  w-fit ">
                    Perfect for{' '}
                </h2>
                <BlackBtn text="Qiymet teklifi al" />
            </header>
            <div className="flex flex-row justify-start  gap-4 flex-wrap mt-8">
                {Array.from({ length: 10 }).map((_, index) => (
                    <p className="px-[30px] py-[9px] border border-black/20 rounded-3xl">
                        Startups
                    </p>
                ))}
            </div>
            <div className="grid grid-cols-12 gap-5 mt-9">
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
            </div>
        </section>
    );
}
