'use client';

import { TableDemo } from '@/components/Table';
import { useState } from 'react';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';

import { DeleteModal } from '@/components/DeleteModal';
import { SingleImageInput } from '@/components/Inputs/SingleImage';

import { useQueryClient } from '@tanstack/react-query';
import GETRequest from '@/helpers/reques';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function ContactInfoContent() {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const [Delopen, setDelOpen] = useState(false);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: ContactInfos } = GETRequest<any[]>(
        'contact-info',
        'contact-info',
        []
    );

    // Convert object to array format with _id

    const structure = [
        {
            HeadTitle: 'title',
            key: ['title'],
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

        formData.append('title', data.title);

        try {
            if (Id) {
                if (data.image) {
                    formData.append('image', data.image);
                }
                await instanceAxios.put(`contact-info/${Id}`, formData);
                toast.success('logo edited successfully');
            } else {
                formData.append('image', data.image);
                await instanceAxios.post('contact-info', formData).then(() => {
                    console.log('contact-info created successfully');
                });

                toast.success('contact-info created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['contact-info'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`contact-info/${Id}`).then(() => {
                toast.success('colabaration deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['contact-info'] });
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
                    {ContactInfos && (
                        <TableDemo
                            structure={structure}
                            data={ContactInfos}
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
                        defaultValue={
                            Id &&
                            ContactInfos?.find((item) => item._id === Id)?.title
                        }
                    />
                    <SingleImageInput
                        name="image"
                        label="image"
                        defaultValue={
                            Id &&
                            ContactInfos?.find((item) => item._id === Id)?.image
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
