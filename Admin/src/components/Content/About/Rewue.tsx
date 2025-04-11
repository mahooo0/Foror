'use client';

import { TableDemo } from '@/components/Table';
import { useState } from 'react';

import { ForumWrapper } from '@/components/Inputs/ForumWrapper';
import { TextInput } from '@/components/Inputs/Text';
import { SingleImageInput } from '@/components/Inputs/SingleImage';
import { DeleteModal } from '@/components/DeleteModal';
import { useAtom } from 'jotai';
import { LangAtom } from '@/lib/State';
import GETRequest from '@/helpers/reques';
import { useQueryClient } from '@tanstack/react-query';
import instanceAxios from '@/helpers/axios';
import toast from 'react-hot-toast';

export default function HomeAboutContent() {
    const [open, setOpen] = useState(false);
    const [Delopen, setDelOpen] = useState(false);
    const [Id, setId] = useState('');
    const [currentLanguage] = useAtom(LangAtom);
    const queryClient = useQueryClient();

    // Fetch translations data
    const { data: HeroData } = GETRequest<any[]>('rewue', 'rewue', []);
    console.log('HeroData', HeroData);
    const closeForm = () => {
        setOpen(false);
        setId('');
    };
    const handleSubmit = async (data: any) => {
        const formData = new FormData();
        console.log('data', data);
        const strTitle = JSON.stringify(data.title);
        const strPreTitle = JSON.stringify(data.preTitle);
        const strdescription = JSON.stringify(data.description);
        try {
            if (Id) {
                formData.append('title', strTitle);
                formData.append('preTitle', strPreTitle);
                formData.append('description', strdescription);
                if (data.image) {
                    formData.append('image', data.image);
                }
                await instanceAxios.put(`rewue`, formData);
                toast.success('logo edited successfully');
            } else {
                formData.append('type', data.type);
                formData.append('image', data.image);

                await instanceAxios.post('logo', formData).then(() => {
                    console.log('logo created successfully');
                });

                toast.success('logo created successfully');
            }
            queryClient.invalidateQueries({ queryKey: ['rewue'] });
            closeForm();
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

    // Convert object to array format with _id

    const structure = [
        {
            HeadTitle: 'preTitle',
            key: ['preTitle', currentLanguage],
            type: 'str' as 'str',
        },
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
        { HeadTitle: 'image', key: ['image'], type: 'img' as 'img' },
    ];

    const handleEdit = (id: string | number) => {
        console.log('Edit:', id);
        setId(id as string);
        setOpen(true);
    };

    return (
        <div className="relative">
            {open || (
                <>
                    {HeroData && (
                        <TableDemo
                            structure={structure}
                            data={HeroData}
                            onEdit={handleEdit}
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
                        name="preTitle"
                        label="preTitle"
                        isLang
                        defaultValue={
                            Id &&
                            HeroData?.find((item) => item._id === Id)?.preTitle
                        }
                    />
                    <TextInput
                        name="title"
                        label="title"
                        isLang
                        defaultValue={
                            Id &&
                            HeroData?.find((item) => item._id === Id)?.title
                        }
                    />
                    <TextInput
                        name="description"
                        label="description"
                        isLang
                        defaultValue={
                            Id &&
                            HeroData?.find((item) => item._id === Id)
                                ?.description
                        }
                    />
                    <SingleImageInput
                        name="image"
                        label="image"
                        defaultValue={
                            Id &&
                            HeroData?.find((item) => item._id === Id)?.image
                        }
                    />
                </ForumWrapper>
            )}
            <DeleteModal
                isOpen={Delopen}
                onClose={() => {
                    setDelOpen(false), setId('');
                }}
                onDelete={() => {
                    setDelOpen(false), setId('');
                }}
            />
        </div>
    );
}
