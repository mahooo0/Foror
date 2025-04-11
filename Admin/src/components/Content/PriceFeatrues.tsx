'use client';

import { TableDemo } from '@/components/Table';
import { useState } from 'react';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';

import { useAtom } from 'jotai';
import { LangAtom } from '@/lib/State';
import { DeleteModal } from '@/components/DeleteModal';

import { useQueryClient } from '@tanstack/react-query';
import GETRequest from '@/helpers/reques';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function PriceFeatureContent() {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const [Delopen, setDelOpen] = useState(false);
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: Featrues } = GETRequest<any[]>('featrues', 'Featrues', []);

    // Convert object to array format with _id

    const structure = [
        {
            HeadTitle: 'title',
            key: ['title', currentLanguage],
            type: 'str' as 'str',
        },
    ];
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        try {
            if (Id) {
                await instanceAxios.put(`featrues/${Id}`, data);
                toast.success('logo edited successfully');
            } else {
                await instanceAxios.post('featrues', data).then(() => {
                    console.log('featrues created successfully');
                });

                toast.success('featrues created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['Featrues'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const closeForm = () => {
        setOpen(false);
        setId('');
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`featrues/${Id}`).then(() => {
                toast.success('colabaration deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['Featrues'] });
            });
        } catch (error) {
            toast.error('Something went wrong');
        }
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
                    {Featrues && (
                        <TableDemo
                            structure={structure}
                            data={Featrues}
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
                            Featrues?.find((item) => item._id === Id)?.title
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
