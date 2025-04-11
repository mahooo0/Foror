'use client';

import { TableDemo } from '@/components/Table';
import { useState } from 'react';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';

import { useAtom } from 'jotai';
import { LangAtom } from '@/lib/State';
import { useQueryClient } from '@tanstack/react-query';
import GETRequest from '@/helpers/reques';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function PartfolioCategoryContent() {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: PrefeData } = GETRequest<any[]>(
        'partfolio-category',
        'partfolio-category',
        []
    );
    console.log('PrefeData', PrefeData);
    const closeForm = () => {
        setOpen(false);
        setId('');
    };
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        try {
            if (Id) {
                await instanceAxios.put(`partfolio-category/${Id}`, data);
                toast.success('logo edited successfully');
            } else {
                await instanceAxios
                    .post('partfolio-category', data)
                    .then(() => {
                        console.log('partfolio-category created successfully');
                    });

                toast.success('partfolio-category created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['partfolio-category'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    const [currentLanguage] = useAtom(LangAtom);

    // Convert object to array format with _id

    const structure = [
        { HeadTitle: 'id', key: ['_id'], type: 'str' as 'str' },
        {
            HeadTitle: 'title',
            key: ['title', currentLanguage],
            type: 'str' as 'str',
        },
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
                    {PrefeData && (
                        <TableDemo
                            structure={structure}
                            data={PrefeData}
                            onEdit={handleEdit}
                            onAdd={() => {
                                setOpen(true);
                            }}
                        />
                    )}
                </>
            )}

            {open && (
                <ForumWrapper
                    onClose={() => {
                        setOpen(false), setId('');
                    }}
                    onSubmit={handleSubmit}
                >
                    <TextInput
                        name="title"
                        label="title"
                        isLang
                        defaultValue={
                            Id &&
                            PrefeData?.find((item) => item._id === Id)?.title
                        }
                    />
                </ForumWrapper>
            )}
        </div>
    );
}
