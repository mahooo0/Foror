'use client';

import { TableDemo } from '@/components/Table';
import { useState } from 'react';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';

import { useAtom } from 'jotai';
import { LangAtom } from '@/lib/State';
import { DeleteModal } from '@/components/DeleteModal';
import { SingleImageInput } from '@/components/Inputs/SingleImage';
import { MultiSelectInput } from '@/components/Inputs/SearchSelect';
import { PrimeEditor } from '../Inputs/Quil';
import { features } from 'process';
import { Description } from '@radix-ui/react-dialog';
import { Multiple_text_Input } from '../Inputs/MultipleTextInput';
import { useQueryClient } from '@tanstack/react-query';
import GETRequest from '@/helpers/reques';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function BlogsContent() {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const [Delopen, setDelOpen] = useState(false);
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: Blogs } = GETRequest<any[]>('blogs', 'blogs', []);
    const ServicesCategoryData = [
        {
            title: {
                az: 'masin',
                en: 'Car',
                ru: 'RU',
            },
            description: {
                az: 'masin',
                en: 'Car',
                ru: 'RU',
            },
            slug: {
                az: 'masin',
                en: 'Car',
                ru: 'RU',
            },

            _id: 'ssss',
            url: 'ssss',
            img: 'ssss',
            meta_title: {
                az: 'masin',
                en: 'Car',
                ru: 'RU',
            },
            meta_desc: {
                az: 'masin',
                en: 'Car',
                ru: 'RU',
            },
            keywords: {
                az: 'masin',
                en: 'Car',
                ru: 'RU',
            },
        },
    ];

    // Convert object to array format with _id
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        const formData = new FormData();
        const titleStr = JSON.stringify(data.title);
        const descriptionStr = JSON.stringify(data.description);
        const metaTitleStr = JSON.stringify(data.metaTitle);
        const metaDescriptionStr = JSON.stringify(data.metaDescription);
        const metaKeywordsStr = JSON.stringify(data.metaKeywords);
        formData.append('title', titleStr);
        formData.append('description', descriptionStr);
        formData.append('metaTitle', metaTitleStr);
        formData.append('metaDescription', metaDescriptionStr);
        formData.append('metaKeywords', metaKeywordsStr);

        try {
            if (Id) {
                if (data.image) {
                    formData.append('image', data.image);
                }
                await instanceAxios.put(`blogs/${Id}`, formData);
                toast.success('logo edited successfully');
            } else {
                formData.append('image', data.image);
                await instanceAxios.post('blogs', formData).then(() => {
                    console.log('blogs created successfully');
                });

                toast.success('blogs created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['blogs'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`blogs/${Id}`).then(() => {
                toast.success('colabaration deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['blogs'] });
            });
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const closeForm = () => {
        setOpen(false);
        setId('');
    };
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
            HeadTitle: 'image',
            key: ['image'],
            type: 'img' as 'img',
        },
    ];
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

    return (
        <div className="relative">
            {open || (
                <>
                    {Blogs && (
                        <TableDemo
                            structure={structure}
                            data={Blogs}
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
                            Id && Blogs?.find((item) => item._id === Id)?.title
                        }
                    />
                    <TextInput
                        name="metaTitle"
                        label="meta-title"
                        isLang
                        defaultValue={
                            Id &&
                            Blogs?.find((item) => item._id === Id)?.metaTitle
                        }
                    />
                    <PrimeEditor
                        name="description"
                        label="description"
                        isLang
                        defaultValue={
                            Id &&
                            Blogs?.find((item) => item._id === Id)?.description
                        }
                    />
                    <TextInput
                        name="metaDescription"
                        label="description-meta"
                        isLang
                        defaultValue={
                            Id &&
                            Blogs?.find((item) => item._id === Id)
                                ?.metaDescription
                        }
                    />
                    <TextInput
                        name="metaKeywords"
                        label="keywords"
                        isLang
                        defaultValue={
                            Id &&
                            Blogs?.find((item) => item._id === Id)?.metaKeywords
                        }
                    />{' '}
                    <SingleImageInput
                        name="image"
                        label="image"
                        defaultValue={
                            Id && Blogs?.find((item) => item._id === Id)?.image
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
