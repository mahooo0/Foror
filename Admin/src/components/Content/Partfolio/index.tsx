'use client';

import { TableDemo } from '@/components/Table';
import { use, useEffect, useState } from 'react';
import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';

import { useAtom } from 'jotai';
import { LangAtom } from '@/lib/State';
import { DeleteModal } from '@/components/DeleteModal';
import { SingleImageInput } from '@/components/Inputs/SingleImage';
import { MultiSelectInput } from '@/components/Inputs/SearchSelect';
import { CheckboxInput } from '@/components/Inputs/CheckboxInput';
import GETRequest from '@/helpers/reques';
import { useQueryClient } from '@tanstack/react-query';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function PartfolioContent() {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState('');
    const [Delopen, setDelOpen] = useState(false);
    const [isDetail, setisDetail] = useState(false);
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    const { data: Categoryes } = GETRequest<any[]>(
        'partfolio-category',
        'partfolio-category',
        []
    );
    const { data: partfolio } = GETRequest<any[]>('partfolio', 'partfolio', []);
    const PartfolioCategoryData = [
        {
            title: {
                az: 'masin',
                en: 'Car',
                ru: 'RU',
            },
            description: {
                az: 'masin',
                en: 'Car',
                ru: 'RU',
            },
            _id: 'ssss',
            img: 'ssss',
            url: 'ssss',
        },
    ];
    useEffect(() => {
        const current = partfolio?.find((item) => item._id === Id)?.categories;
        console.log('current', current);
    }, [Id]);
    const handleSubmit = async (data: any) => {
        console.log('data', data);
        const formData = new FormData();
        const strTitle = JSON.stringify(data.title);
        const strisDetail = JSON.stringify(isDetail);
        const strdescription = JSON.stringify(data.description);
        const strcategories = JSON.stringify(data.categories);
        formData.append('title', strTitle);
        formData.append('description', strdescription);
        formData.append('isdetail', strisDetail);
        formData.append('url', data.url);
        formData.append('categories', strcategories);
        try {
            if (Id) {
                if (data.image) {
                    formData.append('image', data.image);
                }
                await instanceAxios.put(`partfolio/${Id}`, formData);
                toast.success('logo edited successfully');
            } else {
                formData.append('image', data.image);
                await instanceAxios.post('partfolio', formData).then(() => {
                    console.log('partfolio created successfully');
                });

                toast.success('partfolio created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['partfolio'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    const closeForm = () => {
        setOpen(false);
        setId('');
        setisDetail(false);
    };
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
            HeadTitle: 'image',
            key: ['image'],
            type: 'img' as 'img',
        },
    ];
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
    const handleDelete = async () => {
        try {
            instanceAxios.delete(`partfolio/${Id}`).then(() => {
                toast.success('colabaration deleted successfully');
                setDelOpen(false);
                setId('');
                queryClient.invalidateQueries({
                    queryKey: ['partfolio-category'],
                });
            });
        } catch (error) {
            toast.error('Something went wrong');
        }
    };
    return (
        <div className="relative">
            {open || (
                <>
                    {partfolio && (
                        <TableDemo
                            structure={structure}
                            data={partfolio}
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
                            partfolio?.find((item) => item._id === Id)?.title
                        }
                    />
                    <TextInput
                        name="url"
                        label="url"
                        defaultValue={
                            Id &&
                            partfolio?.find((item) => item._id === Id)?.url
                        }
                    />
                    <TextInput
                        name="description"
                        label="description"
                        isLang
                        defaultValue={
                            Id &&
                            partfolio?.find((item) => item._id === Id)
                                ?.description
                        }
                    />
                    <SingleImageInput
                        name="image"
                        label="image"
                        defaultValue={
                            Id &&
                            partfolio?.find((item) => item._id === Id)?.image
                        }
                    />
                    {Categoryes && (
                        <MultiSelectInput
                            name="categories"
                            label="Select categories"
                            options={Categoryes.map((item) => ({
                                value: item._id,
                                label: item.title[currentLanguage],
                            }))}
                            defaultValue={
                                Id &&
                                partfolio?.find((item) => item._id === Id)
                                    ?.categories
                            }
                            // defaultValue={[
                            //     categoryOptions[0],
                            //     categoryOptions[2],
                            // ]} // default: Frontend & Fullstack
                            required
                        />
                    )}
                    <CheckboxInput
                        name="chackbox"
                        label="is detail page?"
                        onChange={(checked) => {
                            setisDetail(checked);
                        }}
                        defaultChecked={
                            Id
                                ? JSON.parse(
                                      partfolio?.find((item) => item._id === Id)
                                          ?.isdetail
                                  )
                                : isDetail
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
