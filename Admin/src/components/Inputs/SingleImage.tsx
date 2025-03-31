'use client';

import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useFormData } from './ForumWrapper';
import { Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SingleImageInputProps {
    name: string;
    label?: string;
    defaultValue?: string; // Optional URL to show as initial preview
    className?: string;
}

export function SingleImageInput({
    name,
    label,
    defaultValue,
    className,
}: SingleImageInputProps) {
    const { updateField } = useFormData();
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(defaultValue || null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        // Return actual File object to form state
        updateField(name, file);
    }, [file, name, updateField]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0];
        if (selected) {
            setFile(selected);
            setPreview(URL.createObjectURL(selected));
        }
    };

    const handleRemove = () => {
        setFile(null);
        setPreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className={cn('space-y-2', className)}>
            {label && <Label>{label}</Label>}

            <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="cursor-pointer"
            />

            {preview && (
                <div className="relative mt-2 w-fit">
                    <img
                        src={preview}
                        alt="Selected"
                        className="h-[200px] rounded-xl border shadow"
                    />
                    <Button
                        type="button"
                        size="sm"
                        variant="destructive"
                        onClick={handleRemove}
                        className="absolute top-2 right-2 h-8 w-8 p-1 rounded-full shadow-md"
                    >
                        <Trash2 className="w-4 h-4" />
                    </Button>
                </div>
            )}
        </div>
    );
}
