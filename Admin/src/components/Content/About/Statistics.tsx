'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { LangAtom } from '@/lib/State';
import GETRequest from '@/helpers/reques';
import instanceAxios from '@/helpers/axios';

import { TableDemo } from '@/components/Table';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';
import { DeleteModal } from '@/components/DeleteModal';

export default function TranslatesContent() {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();
    const [Delopen, setDelOpen] = useState(false);

    // Fetch translations data
    const { data: translateData } = GETRequest<any[]>(
        'statistics',
        'statistics',
        []
    );

    const structure = [
        { HeadTitle: 'value', key: ['value'], type: 'str' as 'str' },
        {
            HeadTitle: 'desctiption',
            key: ['desctiption', currentLanguage],
            type: 'str' as 'str',
        },
    ];

    const handleEdit = (id: string | number) => {
        setId(id as string);
        setOpen(true);
    };

    const handleSubmit = async (data: any) => {
        try {
            if (Id) {
                await instanceAxios.put(`statistics/${Id}`, data);
                toast.success('Translation edited successfully');
            } else {
                await instanceAxios.post('statistics', data);
                toast.success('Translation created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['statistics'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`statistics/${Id}`).then(() => {
                toast.success('colabaration deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['statistics'] });
            });
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const closeForm = () => {
        setOpen(false);
        setId('');
    };

    return (
        <div className="relative">
            {!open && translateData && (
                <TableDemo
                    structure={structure}
                    data={translateData}
                    onEdit={handleEdit}
                    onAdd={() => setOpen(true)}
                    onDelete={(id: string | number) => {
                        setId(id as string);
                        setDelOpen(true);
                    }}
                />
            )}

            {open && (
                <ForumWrapper onClose={closeForm} onSubmit={handleSubmit}>
                    <TextInput
                        name="value"
                        label="value"
                        defaultValue={
                            Id &&
                            translateData?.find((item) => item._id === Id)
                                ?.value
                        }
                    />
                    <TextInput
                        name="desctiption"
                        label="desctiption"
                        isLang
                        defaultValue={
                            Id &&
                            translateData?.find((item) => item._id === Id)
                                ?.desctiption
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
