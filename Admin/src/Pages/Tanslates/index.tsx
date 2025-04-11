import TranslatesContent from '@/components/Content/Translates';
import React from 'react';

export default function Translates() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Translates</h1>
            <TranslatesContent />
        </div>
    );
}
