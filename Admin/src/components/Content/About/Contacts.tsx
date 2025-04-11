'use client';

import { TableDemo } from '@/components/Table';
import { useState } from 'react';

import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';
import { SingleImageInput } from '@/components/Inputs/SingleImage';
import { DeleteModal } from '@/components/DeleteModal';

export default function ContactContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);

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

    const handleDelite = (id: string | number) => {
        console.log('Edit:', id);
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
                        setOpen(false);
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
                    setDelOpen(false);
                }}
                onDelete={() => {
                    setDelOpen(false);
                }}
            />
        </div>
    );
}
