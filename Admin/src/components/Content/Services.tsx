'use client';

import { TableDemo } from '@/components/Table';
import { useState } from 'react';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';

import { useAtom } from 'jotai';
import { LangAtom } from '@/lib/State';
import { DeleteModal } from '@/components/DeleteModal';
import { SingleImageInput } from '@/components/Inputs/SingleImage';
import { PrimeEditor } from '../Inputs/Quil';
import { useQueryClient } from '@tanstack/react-query';
import GETRequest from '@/helpers/reques';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function ServicesContent() {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const [Delopen, setDelOpen] = useState(false);
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: services } = GETRequest<any[]>('services', 'services', []);

    // Convert object to array format with
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
        {
            HeadTitle: 'icon',
            key: ['image'],
            type: 'img' as 'img',
        },
    ];
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        const formData = new FormData();
        const strTitle = JSON.stringify(data.title);
        const strshort_description = JSON.stringify(data.short_description);
        const strdescription = JSON.stringify(data.description);
        const strmetaTitle = JSON.stringify(data.metaTitle);
        const strmetaDescription = JSON.stringify(data.metaDescription);
        const strmetaKeywords = JSON.stringify(data.metaKeywords);
        formData.append('title', strTitle);
        formData.append('short_description', strshort_description);
        formData.append('description', strdescription);
        formData.append('metaDescription', strmetaDescription);
        formData.append('metaTitle', strmetaTitle);
        formData.append('metaKeywords', strmetaKeywords);
        try {
            if (Id) {
                if (data.image) {
                    formData.append('image', data.image);
                }
                await instanceAxios.put(`services/${Id}`, formData);
                toast.success('logo edited successfully');
            } else {
                formData.append('image', data.image);
                await instanceAxios.post('services', formData).then(() => {
                    console.log('services created successfully');
                });

                toast.success('services created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['services'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const handleDelite = (id: string | number) => {
        console.log('Edit:', id);
        setId(id as string);
        setDelOpen(true);
    };
    const handleEdit = (id: string | number) => {
        console.log('Edit:', id);
        setId(id as string);
        setOpen(true);
    };
    const closeForm = () => {
        setOpen(false);
        setId('');
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`services/${Id}`).then(() => {
                toast.success('colabaration deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['services'] });
            });
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    return (
        <div className="relative">
            {open || (
                <>
                    {services && (
                        <TableDemo
                            structure={structure}
                            data={services}
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
                            services?.find((item) => item._id === Id)?.title
                        }
                    />{' '}
                    <TextInput
                        name="short_description"
                        label="short_description"
                        isLang
                        defaultValue={
                            Id &&
                            services?.find((item) => item._id === Id)?.title
                        }
                    />
                    <TextInput
                        name="metaTitle"
                        label="meta-title"
                        isLang
                        defaultValue={
                            Id &&
                            services?.find((item) => item._id === Id)?.metaTitle
                        }
                    />
                    <PrimeEditor
                        name="description"
                        label="description"
                        isLang
                        defaultValue={
                            Id &&
                            services?.find((item) => item._id === Id)
                                ?.description
                        }
                    />
                    <TextInput
                        name="metaDescription"
                        label="metaDescription"
                        isLang
                        defaultValue={
                            Id &&
                            services?.find((item) => item._id === Id)
                                ?.metaDescription
                        }
                    />
                    <TextInput
                        name="metaKeywords"
                        label="metaKeywords"
                        isLang
                        defaultValue={
                            Id &&
                            services?.find((item) => item._id === Id)
                                ?.metaKeywords
                        }
                    />
                    <SingleImageInput
                        name="image"
                        label="icon"
                        defaultValue={
                            Id &&
                            services?.find((item) => item._id === Id)?.image
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
