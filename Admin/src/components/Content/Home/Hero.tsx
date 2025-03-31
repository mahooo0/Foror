'use client';

import { TableDemo } from '@/components/Table';
import React, { useState } from 'react';

import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';
import { SelectInput } from '@/components/Inputs/SelectInput';
import { SingleImageInput } from '@/components/Inputs/SingleImage';
import { PrimeEditor } from '@/components/Inputs/Quil';
import { DeleteModal } from '@/components/DeleteModal';

export default function HomeHeroContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const Seo = [
        {
            _id: 'sss',
            preTitle: {
                az: 'velosiped',
                en: 'Bike',
                ru: 'велосипед',
            },
            Title: {
                az: 'velosiped',
                en: 'Bike',
                ru: 'велосипед',
            },
            descriptron: {
                az: 'velosiped',
                en: 'Bike',
                ru: 'велосипед',
            },
            img: 'ssss',
        },
    ];

    // Convert object to array format with _id

    const structure = [
        {
            HeadTitle: 'preTitle',
            key: ['preTitle', 'az'],
            type: 'str' as 'str',
        },
        {
            HeadTitle: 'Title',
            key: ['Title', 'az'],
            type: 'str' as 'str',
        },
        {
            HeadTitle: 'descriptron',
            key: ['descriptron', 'az'],
            type: 'str' as 'str',
        },
        { HeadTitle: 'img', key: ['img'], type: 'img' as 'img' },
    ];

    const handleEdit = (id: string | number) => {
        console.log('Edit:', id);
        setId(id as string);
        setOpen(true);
    };
    const handleDelite = (id: string | number) => {
        console.log('Edit:', id);
        setId(id as string);
        setDelOpen(true);
    };

    return (
        <div className="relative">
            {open || (
                <>
                    <TableDemo
                        structure={structure}
                        data={Seo}
                        onEdit={handleEdit}
                    />
                </>
            )}

            {open && (
                <ForumWrapper
                    onClose={() => {
                        setOpen(false), setId('');
                    }}
                    onSubmit={(data) => {
                        console.log(data);
                        setOpen(false);
                    }}
                >
                    <TextInput name="preTitle" label="preTitle" isLang />
                    <TextInput name="Title" label="Title" isLang />
                    <TextInput name="descriptron" label="descriptron" isLang />
                    <SingleImageInput name="img" label="img" />
                </ForumWrapper>
            )}
            <DeleteModal
                isOpen={Delopen}
                onClose={() => {
                    setDelOpen(false), setId('');
                }}
                onDelete={() => {
                    setDelOpen(false), setId('');
                }}
            />
        </div>
    );
}
