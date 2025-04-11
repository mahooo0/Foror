'use client';

import { TableDemo } from '@/components/Table';
import React, { useState } from 'react';

import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';
import { SelectInput } from '@/components/Inputs/SelectInput';
import { SingleImageInput } from '@/components/Inputs/SingleImage';
import { PrimeEditor } from '@/components/Inputs/Quil';
import { DeleteModal } from '@/components/DeleteModal';
import { useAtom } from 'jotai';
import { LangAtom } from '@/lib/State';

export default function ContactContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const [currentLanguage] = useAtom(LangAtom);

    const Seo = [
        {
            name: 'name',
            phone: 'phone',
            message: 'phone',

            price: 'ssss',
        },
    ];

    // Convert object to array format with _id

    const structure = [
        {
            HeadTitle: 'name',
            key: ['name'],
            type: 'str' as 'str',
        },
        {
            HeadTitle: 'phone',
            key: ['phone'],
            type: 'str' as 'str',
        },
        {
            HeadTitle: 'message',
            key: ['message'],
            type: 'str' as 'str',
        },
        { HeadTitle: 'price', key: ['price'], type: 'str' as 'str' },
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
