import SeoContent from '@/components/Content/SEO';
import ServicesContent from '@/components/Content/Services';
import TranslatesContent from '@/components/Content/Translates';
import React from 'react';

export default function Services() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Services</h1>
            <ServicesContent />
        </div>
    );
}
