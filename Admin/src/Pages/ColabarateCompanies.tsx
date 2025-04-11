import ColobareteContent from '@/components/Content/ColobareteContent';
import LogoContent from '@/components/Content/Logo&favicon';
import SeoContent from '@/components/Content/SEO';
import TranslatesContent from '@/components/Content/Translates';
import React from 'react';

export default function ColabarateCompanies() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold"> Calebarate Companies</h1>
            <ColobareteContent />
        </div>
    );
}
