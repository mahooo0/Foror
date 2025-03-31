import SeoContent from '@/components/Content/SEO';
import TranslatesContent from '@/components/Content/Translates';
import React from 'react';

export default function Seo() {
    return (
        <div className=" flex flex-col gap-7 p-7">
            <h1 className="text-3xl text-bold">Seo</h1>
            <SeoContent />
        </div>
    );
}
