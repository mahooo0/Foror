'use client';

import { TableDemo } from '@/components/Table';
import { useState } from 'react';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';

import { DeleteModal } from '@/components/DeleteModal';
import { useAtom } from 'jotai';
import { LangAtom } from '@/lib/State';
import { useQueryClient } from '@tanstack/react-query';
import GETRequest from '@/helpers/reques';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function SeoContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: SeoData } = GETRequest<any[]>('seo', 'seo', []);
    console.log('SeoData', SeoData);
    const closeForm = () => {
        setOpen(false);
        setId('');
    };
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        try {
            if (Id) {
                await instanceAxios.put(`seo/${Id}`, data);
                toast.success('Seo edited successfully');
            } else {
                await instanceAxios.post('seo', data).then(() => {
                    console.log('Seo created successfully');
                });

                toast.success('Seo created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['seo'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`seo/${Id}`).then(() => {
                toast.success('Seo deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['seo'] });
            });
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    // Convert object to array format with _id

    const structure = [
        { HeadTitle: 'type', key: ['type'], type: 'str' as 'str' },
        {
            HeadTitle: 'metaTitle',
            key: ['metaTitle', currentLanguage],
            type: 'str' as 'str',
        },
        {
            HeadTitle: 'metaDescription',
            key: ['metaDescription', currentLanguage],
            type: 'str' as 'str',
        },

        {
            HeadTitle: 'metaKeywords',
            key: ['metaKeywords', currentLanguage],
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
                    {SeoData && (
                        <TableDemo
                            structure={structure}
                            data={SeoData}
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
                        name="type"
                        label="type"
                        defaultValue={
                            Id && SeoData?.find((item) => item._id === Id)?.type
                        }
                    />

                    <TextInput
                        name="metaTitle"
                        label="metaTitle"
                        isLang
                        defaultValue={
                            Id &&
                            SeoData?.find((item) => item._id === Id)?.metaTitle
                        }
                    />
                    <TextInput
                        name="metaDescription"
                        label="metaDescription"
                        isLang
                        defaultValue={
                            Id &&
                            SeoData?.find((item) => item._id === Id)
                                ?.metaDescription
                        }
                    />
                    <TextInput
                        name="metaKeywords"
                        label="metaKeywords"
                        isLang
                        defaultValue={
                            Id &&
                            SeoData?.find((item) => item._id === Id)
                                ?.metaKeywords
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
