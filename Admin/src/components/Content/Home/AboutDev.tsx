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
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';
import GETRequest from '@/helpers/reques';
import { useQueryClient } from '@tanstack/react-query';

export default function HomeAboutDevContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: HeroData } = GETRequest<any[]>(
        'home-about-dev',
        'home-about-dev',
        []
    );
    console.log('HeroData', HeroData);
    const closeForm = () => {
        setOpen(false);
        setId('');
    };
    const handleSubmit = async (data: any) => {
        const formData = new FormData();
        console.log('data', data);
        try {
            if (Id) {
                await instanceAxios.put(`home-about-dev`, data);
                toast.success('logo edited successfully');
            } else {
                formData.append('type', data.type);
                formData.append('image', data.image);

                await instanceAxios.post('logo', formData).then(() => {
                    console.log('logo created successfully');
                });

                toast.success('logo created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['home-about-dev'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    // Convert object to array format with _id

    const structure = [
        {
            HeadTitle: 'preTitle',
            key: ['preTitle', currentLanguage],
            type: 'str' as 'str',
        },
        {
            HeadTitle: 'Title',
            key: ['title', currentLanguage],
            type: 'str' as 'str',
        },
        {
            HeadTitle: 'descriptron',
            key: ['description', currentLanguage],
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
                    {HeroData && (
                        <TableDemo
                            structure={structure}
                            data={HeroData}
                            onEdit={handleEdit}
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
                        name="preTitle"
                        label="preTitle"
                        isLang
                        defaultValue={
                            Id &&
                            HeroData?.find((item) => item._id === Id)?.preTitle
                        }
                    />
                    <TextInput
                        name="title"
                        label="title"
                        isLang
                        defaultValue={
                            Id &&
                            HeroData?.find((item) => item._id === Id)?.title
                        }
                    />
                    <TextInput
                        name="description"
                        label="description"
                        isLang
                        defaultValue={
                            Id &&
                            HeroData?.find((item) => item._id === Id)
                                ?.description
                        }
                    />
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
