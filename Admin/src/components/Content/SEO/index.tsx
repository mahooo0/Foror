'use client';

import { TableDemo } from '@/components/Table';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';
import { SelectInput } from '@/components/Inputs/SelectInput';
import { SingleImageInput } from '@/components/Inputs/SingleImage';
import { PrimeEditor } from '@/components/Inputs/Quil';
import { DeleteModal } from '@/components/DeleteModal';

export default function SeoContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const Seo = [
        {
            _id: 'sss',
            title: {
                az: 'masin',
                en: 'Car',
                ru: 'RU',
            },
            description: {
                az: 'velosiped',
                en: 'Bike',
                ru: 'велосипед',
            },
            keywords: {
                az: 'velosiped',
                en: 'Bike',
                ru: 'велосипед',
            },
            type: 'ssss',
        },
    ];

    // Convert object to array format with _id

    const structure = [
        { HeadTitle: 'type', key: ['type'], type: 'str' as 'str' },
        { HeadTitle: 'title', key: ['title', 'az'], type: 'str' as 'str' },
        {
            HeadTitle: 'description',
            key: ['description', 'az'],
            type: 'str' as 'str',
        },
        {
            HeadTitle: 'keywords',
            key: ['keywords', 'az'],
            type: 'str' as 'str',
        },
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
                        onAdd={() => {
                            setOpen(true);
                        }}
                        onDelete={handleDelite}
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
                    {Id.length === 0 && <TextInput name="type" label="type" />}{' '}
                    <TextInput name="title" label="title" isLang />
                    <TextInput name="description" label="description" isLang />
                    <TextInput name="keywords" label="keywords" isLang />
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
