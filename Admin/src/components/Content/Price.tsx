'use client';

import { TableDemo } from '@/components/Table';
import { useState } from 'react';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';

import { useAtom } from 'jotai';
import { LangAtom } from '@/lib/State';
import { DeleteModal } from '@/components/DeleteModal';
import { MultiSelectInput } from '@/components/Inputs/SearchSelect';

import { useQueryClient } from '@tanstack/react-query';
import GETRequest from '@/helpers/reques';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function PriceListContent() {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const [Delopen, setDelOpen] = useState(false);
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: Featrues } = GETRequest<any[]>('featrues', 'Featrues', []);
    const { data: PriceList } = GETRequest<any[]>('price', 'price', []);

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
        {
            HeadTitle: 'price',
            key: ['price'],
            type: 'str' as 'str',
        },
        {
            HeadTitle: 'discontedPrice',
            key: ['discontedPrice'],
            type: 'str' as 'str',
        },
    ];
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        try {
            if (Id) {
                await instanceAxios.put(`price/${Id}`, data);
                toast.success('logo edited successfully');
            } else {
                await instanceAxios.post('price', data).then(() => {
                    console.log('price created successfully');
                });

                toast.success('price created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['price'] });
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
            instanceAxios.delete(`price/${Id}`).then(() => {
                toast.success('colabaration deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({ queryKey: ['price'] });
            });
        } catch (error) {
            toast.error('Something went wrong');
        }
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
                    {PriceList && (
                        <TableDemo
                            structure={structure}
                            data={PriceList}
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
                            PriceList?.find((item) => item._id === Id)?.title
                        }
                    />
                    <TextInput
                        name="description"
                        label="description"
                        isLang
                        defaultValue={
                            Id &&
                            PriceList?.find((item) => item._id === Id)
                                ?.description
                        }
                    />
                    <TextInput
                        name="price"
                        label="price"
                        defaultValue={
                            Id &&
                            PriceList?.find((item) => item._id === Id)?.price
                        }
                    />
                    <TextInput
                        name="discontedPrice"
                        label="discontedPrice"
                        defaultValue={
                            Id &&
                            PriceList?.find((item) => item._id === Id)
                                ?.discontedPrice
                        }
                    />
                    {Featrues && (
                        <MultiSelectInput
                            name="featrues"
                            label="Select Featuries"
                            options={Featrues?.map((item) => {
                                return {
                                    value: item._id,
                                    label: item.title.en,
                                };
                            })}
                            defaultValue={
                                Id &&
                                PriceList?.find((item) => item._id === Id)
                                    ?.featrues
                            }
                            required
                        />
                    )}
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
