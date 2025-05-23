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

export default function TranslatesContent() {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: translateData } = GETRequest<any[]>(
        'translations',
        'translations',
        []
    );

    const structure = [
        { HeadTitle: 'Key', key: ['key'], type: 'str' as 'str' },
        {
            HeadTitle: 'Value',
            key: ['value', currentLanguage],
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
                await instanceAxios.put(`translations/${Id}`, {
                    value: data.value,
                });
                toast.success('Translation edited successfully');
            } else {
                await instanceAxios.post('translations', data);
                toast.success('Translation created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['translations'] });
            closeForm();
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
                />
            )}

            {open && (
                <ForumWrapper onClose={closeForm} onSubmit={handleSubmit}>
                    {Id.length === 0 && <TextInput name="key" label="Key" />}
                    <TextInput
                        name="value"
                        label="Value"
                        isLang
                        defaultValue={
                            Id &&
                            translateData?.find((item) => item._id === Id)
                                ?.value
                        }
                    />
                </ForumWrapper>
            )}
        </div>
    );
}
