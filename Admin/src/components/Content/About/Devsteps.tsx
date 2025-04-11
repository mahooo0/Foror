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
    const { data: DevTools } = GETRequest<any[]>('dev-steps', 'dev-steps', []);

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

                await instanceAxios.put(`dev-steps/${Id}`, formData);
                toast.success('logo edited successfully');
            } else {
                formData.append('image', data.image);
                await instanceAxios.post('dev-steps', formData).then(() => {
                    console.log('social created successfully');
                });

                toast.success('dev-steps created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['dev-steps'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`dev-steps/${Id}`).then(() => {
                toast.success('colabaration deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['dev-steps'] });
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
