'use client';

import { TableDemo } from '@/components/Table';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';
import { SelectInput } from '@/components/Inputs/SelectInput';
import { SingleImageInput } from '@/components/Inputs/SingleImage';
import { PrimeEditor } from '@/components/Inputs/Quil';

export default function TranslatesContent() {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const translateData = {
        Car: {
            az: 'masin',
            en: 'Car',
            ru: 'RU',
        },
        Bike: {
            az: 'velosiped',
            en: 'Bike',
            ru: 'велосипед',
        },
    };

    // Convert object to array format with _id
    const formattedData = Object.entries(translateData).map(
        ([key, value], index) => ({
            _id: key,
            ...value,
        })
    );

    const structure = [
        { HeadTitle: 'Key', key: ['_id'], type: 'str' as 'str' },
        { HeadTitle: 'value', key: ['az'], type: 'str' as 'str' },
    ];

    const handleEdit = (id: string | number) => {
        console.log('Edit:', id);
        setId(id as string);
        setOpen(true);
    };

    return (
        <div className="relative">
            {open || (
                <>
                    <TableDemo
                        structure={structure}
                        data={formattedData}
                        onEdit={handleEdit}
                        onAdd={() => {
                            setOpen(true);
                        }}
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
                    {Id.length === 0 && <TextInput name="key" label="key" />}{' '}
                    <TextInput name="value" label="value" isLang />
                </ForumWrapper>
            )}
        </div>
    );
}
