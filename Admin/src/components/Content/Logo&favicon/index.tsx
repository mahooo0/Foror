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

export default function LogoContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const Seo = [
        {
            _id: 'sss',
            type: 'ssss',
            img: 'ssss',
        },
    ];

    // Convert object to array format with _id

    const structure = [
        { HeadTitle: 'type', key: ['type'], type: 'str' as 'str' },
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
                    <TextInput name="type" label="type" />
                    <SingleImageInput name="type" label="type" />
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
