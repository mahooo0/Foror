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
import { useQueryClient } from '@tanstack/react-query';
import GETRequest from '@/helpers/reques';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function DevContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: DevTools } = GETRequest<any[]>('dev-tools', 'dev-tools', []);
    const Seo = [
        {
            _id: 'sss',

            Title: {
                az: 'velosiped',
                en: 'Bike',
                ru: 'велосипед',
            },
            description: {
                az: 'velosiped',
                en: 'Bike',
                ru: 'велосипед',
            },
            img: 'ssss',
            imgbg: 'ssss',
        },
    ];

    // Convert object to array format with _id

    const structure = [
        {
            HeadTitle: 'title',
            key: ['title', currentLanguage],
            type: 'str' as 'str',
        },
        {
            HeadTitle: 'description',
            key: ['description', currentLanguage],
            type: 'str' as 'str',
        },
        { HeadTitle: 'image', key: ['image'], type: 'img' as 'img' },
        { HeadTitle: 'image_bg', key: ['image_bg'], type: 'img' as 'img' },
    ];
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        const formData = new FormData();
        const strTitle = JSON.stringify(data.title);
        const strdescription = JSON.stringify(data.description);

        formData.append('title', strTitle);
        formData.append('description', strdescription);

        try {
            if (Id) {
                if (data.image) {
                    formData.append('image', data.image);
                }
                if (data.image_bg) {
                    formData.append('image_bg', data.image_bg);
                }
                await instanceAxios.put(`dev-tools/${Id}`, formData);
                toast.success('logo edited successfully');
            } else {
                formData.append('image', data.image);
                formData.append('image_bg', data.image_bg);
                await instanceAxios.post('dev-tools', formData).then(() => {
                    console.log('social created successfully');
                });

                toast.success('dev-tools created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['dev-tools'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`dev-tools/${Id}`).then(() => {
                toast.success('colabaration deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['dev-tools'] });
            });
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const closeForm = () => {
        setOpen(false);
        setId('');
    };
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
                    {DevTools && (
                        <TableDemo
                            structure={structure}
                            data={DevTools}
                            onEdit={handleEdit}
                            onAdd={() => {
                                setOpen(true);
                            }}
                            onDelete={handleDelite}
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
                            DevTools?.find((item) => item._id === Id)?.title
                        }
                    />

                    <TextInput
                        name="description"
                        label="description"
                        isLang
                        defaultValue={
                            Id &&
                            DevTools?.find((item) => item._id === Id)
                                ?.description
                        }
                    />
                    <SingleImageInput
                        name="image"
                        label="image"
                        defaultValue={
                            Id &&
                            DevTools?.find((item) => item._id === Id)?.image
                        }
                    />
                    <SingleImageInput
                        name="image_bg"
                        label="image_bg"
                        defaultValue={
                            Id &&
                            DevTools?.find((item) => item._id === Id)?.image_bg
                        }
                    />
                </ForumWrapper>
            )}
            <DeleteModal
                isOpen={Delopen}
                onClose={() => {
                    setDelOpen(false), setId('');
                }}
                onDelete={handleDelete}
            />
        </div>
    );
}
