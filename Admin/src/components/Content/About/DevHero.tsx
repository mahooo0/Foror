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

export default function DevHeroContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: Hero } = GETRequest<any[]>(
        'about-dev-hero',
        'about-dev-hero',
        []
    );

    // Convert object to array format with _id

    const structure = [
        {
            HeadTitle: 'preTitle',
            key: ['preTitle', currentLanguage],
            type: 'str' as 'str',
        },
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
    ];
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        const formData = new FormData();
        const strTitle = JSON.stringify(data.title);
        const strdescription = JSON.stringify(data.description);
        const strpreTitle = JSON.stringify(data.preTitle);

        formData.append('title', strTitle);
        formData.append('description', strdescription);
        formData.append('preTitle', strpreTitle);
        formData.append('spline_url_Lg', data.spline_url_Lg);
        formData.append('spline_url__Md', data.spline_url__Md);

        try {
            if (Id) {
                if (data.image) {
                    formData.append('image', data.image);
                }
                await instanceAxios.put(`about-dev-hero`, formData);
                toast.success('logo edited successfully');
            } else {
                formData.append('image', data.image);
                await instanceAxios.post('social', formData).then(() => {
                    console.log('social created successfully');
                });

                toast.success('social created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['about-dev-hero'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`social/${Id}`).then(() => {
                toast.success('colabaration deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['social'] });
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
                    {Hero && (
                        <TableDemo
                            structure={structure}
                            data={Hero}
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
                            Hero?.find((item) => item._id === Id)?.preTitle
                        }
                    />
                    <TextInput
                        name="title"
                        label="Title"
                        isLang
                        defaultValue={
                            Id &&
                            Hero?.find((item) => item._id === Id)?.preTitle
                        }
                    />
                    <TextInput
                        name="spline_url_Lg"
                        label="spline_url_Lg"
                        defaultValue={
                            Id &&
                            Hero?.find((item) => item._id === Id)?.spline_url_Lg
                        }
                    />
                    <TextInput
                        name="spline_url__Md"
                        label="spline_url__Md"
                        defaultValue={
                            Id &&
                            Hero?.find((item) => item._id === Id)
                                ?.spline_url__Md
                        }
                    />

                    <PrimeEditor
                        name="description"
                        label="description"
                        isLang
                        defaultValue={
                            Id &&
                            Hero?.find((item) => item._id === Id)?.description
                        }
                    />
                    <SingleImageInput
                        name="image"
                        label="image"
                        defaultValue={
                            Id && Hero?.find((item) => item._id === Id)?.image
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
