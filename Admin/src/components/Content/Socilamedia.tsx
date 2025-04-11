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

export default function SocialMediaContent() {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const [Delopen, setDelOpen] = useState(false);
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: SocialMedia } = GETRequest<any[]>('social', 'social', []);

    // Convert object to array format with _id

    const structure = [
        {
            HeadTitle: 'url',
            key: ['url'],
            type: 'str' as 'str',
        },

        {
            HeadTitle: 'image',
            key: ['image'],
            type: 'img' as 'img',
        },
    ];
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        const formData = new FormData();

        formData.append('url', data.url);

        try {
            if (Id) {
                if (data.image) {
                    formData.append('image', data.image);
                }
                await instanceAxios.put(`social/${Id}`, formData);
                toast.success('logo edited successfully');
            } else {
                formData.append('image', data.image);
                await instanceAxios.post('social', formData).then(() => {
                    console.log('social created successfully');
                });

                toast.success('social created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['social'] });
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
                    {SocialMedia && (
                        <TableDemo
                            structure={structure}
                            data={SocialMedia}
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
                        name="url"
                        label="url"
                        defaultValue={
                            Id &&
                            SocialMedia?.find((item) => item._id === Id)?.url
                        }
                    />
                    <SingleImageInput
                        name="image"
                        label="image"
                        defaultValue={
                            Id &&
                            SocialMedia?.find((item) => item._id === Id)?.image
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
