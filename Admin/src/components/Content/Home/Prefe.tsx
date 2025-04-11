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

export default function HomePrefeContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: PrefeData } = GETRequest<any[]>('prefe', 'prefe', []);
    console.log('PrefeData', PrefeData);
    const closeForm = () => {
        setOpen(false);
        setId('');
    };
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        try {
            if (Id) {
                await instanceAxios.put(`prefe/${Id}`, data);
                toast.success('logo edited successfully');
            } else {
                await instanceAxios.post('prefe', data).then(() => {
                    console.log('prefe created successfully');
                });

                toast.success('prefe created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['prefe'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`prefe/${Id}`).then(() => {
                toast.success('Prfeitem deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['prefe'] });
            });
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    // Convert object to array format with _id

    const structure = [
        {
            HeadTitle: 'title',
            key: ['title', currentLanguage],
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
    const handleAdd = () => {
        setOpen(true);
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
                            onAdd={handleAdd}
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
                            PrefeData?.find((item) => item._id === Id)?.title
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
