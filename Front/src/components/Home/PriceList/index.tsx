import React from 'react';
import PricingTable from './table';

export default function PriceList() {
    return (
        <section className="flex !flex-col items-center gap-4 lg:px-[100px] md:px-[60px] px-[12px]">
            <header className="flex flex-col items-center gap-4 text-[#222222] mb-10 lg:px-[100px] md:px-[60px] px-[12px]">
                {' '}
                <p className="text-base font-semibold">Portfolio</p>
                <h2 className="text-5xl font-bold">Services</h2>
                <h3 className="text-[18px] max-sm:text-base font-medium opacity-60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                </h3>
            </header>
            <PricingTable />
        </section>
    );
}
