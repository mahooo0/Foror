'use client';

import { TableDemo } from '@/components/Table';
import { useState } from 'react';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';
import { SingleImageInput } from '@/components/Inputs/SingleImage';
import { DeleteModal } from '@/components/DeleteModal';
import { useQueryClient } from '@tanstack/react-query';
import GETRequest from '@/helpers/reques';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function LogoContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: LogoData } = GETRequest<any[]>('logo', 'logo', []);
    console.log('LogoData', LogoData);
    const closeForm = () => {
        setOpen(false);
        setId('');
    };
    const handleSubmit = async (data: any) => {
        const formData = new FormData();
        console.log('data', data);

        try {
            if (Id) {
                formData.append('type', data.type);
                if (data.image) {
                    formData.append('image', data.image);
                }
                await instanceAxios.put(`logo/${Id}`, formData);
                toast.success('logo edited successfully');
            } else {
                formData.append('type', data.type);
                formData.append('image', data.image);

                await instanceAxios.post('logo', formData).then(() => {
                    console.log('logo created successfully');
                });

                toast.success('logo created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['logo'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`logo/${Id}`).then(() => {
                toast.success('Seo deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['logo'] });
            });
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    // Convert object to array format with _id

    const structure = [
        { HeadTitle: 'type', key: ['type'], type: 'str' as 'str' },
        { HeadTitle: 'image', key: ['image'], type: 'img' as 'img' },
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
                    {LogoData && (
                        <TableDemo
                            structure={structure}
                            data={LogoData}
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
                            Id &&
                            LogoData?.find((item) => item._id === Id)?.type
                        }
                    />
                    <SingleImageInput
                        name="image"
                        label="image"
                        defaultValue={
                            Id &&
                            LogoData?.find((item) => item._id === Id)?.image
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
