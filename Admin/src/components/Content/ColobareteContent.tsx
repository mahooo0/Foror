'use client';

import { TableDemo } from '@/components/Table';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';
import { SelectInput } from '@/components/Inputs/SelectInput';
import { SingleImageInput } from '@/components/Inputs/SingleImage';
import { DeleteModal } from '@/components/DeleteModal';
import { useQueryClient } from '@tanstack/react-query';
import GETRequest from '@/helpers/reques';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function ColobareteContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: PrefeData } = GETRequest<any[]>(
        'colabaration',
        'colabaration',
        []
    );
    console.log('PrefeData', PrefeData);
    const closeForm = () => {
        setOpen(false);
        setId('');
    };
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        const formData = new FormData();
        formData.append('image', data.image);
        try {
            if (Id) {
                await instanceAxios.put(`colabaration/${Id}`, formData);
                toast.success('logo edited successfully');
            } else {
                await instanceAxios.post('colabaration', formData).then(() => {
                    console.log('colabaration created successfully');
                });

                toast.success('colabaration created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['colabaration'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`colabaration/${Id}`).then(() => {
                toast.success('colabaration deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['colabaration'] });
            });
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    // Convert object to array format with _id

    const structure = [
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
                    {PrefeData && (
                        <TableDemo
                            structure={structure}
                            data={PrefeData}
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
                    <SingleImageInput
                        name="image"
                        label="image"
                        defaultValue={
                            Id &&
                            PrefeData?.find((item) => item._id === Id)?.image
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
