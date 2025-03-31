'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormData } from './ForumWrapper';

interface TextInputProps {
    name: string;
    label?: string;
    isLang?: boolean;
    defaultValue?: string | { az?: string; en?: string; ru?: string };
}

export function TextInput({
    name,
    label,
    isLang = false,
    defaultValue,
}: TextInputProps) {
    const { updateField, currentLang } = useFormData();

    const [values, setValues] = useState(() => {
        if (isLang) {
            return {
                az: (defaultValue as any)?.az ?? '',
                en: (defaultValue as any)?.en ?? '',
                ru: (defaultValue as any)?.ru ?? '',
            };
        }
        return (defaultValue as string) ?? '';
    });

    useEffect(() => {
        updateField(name, values);
    }, [values, name, updateField]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;

        if (isLang) {
            setValues((prev) => ({
                ...(prev as any),
                [currentLang]: val,
            }));
        } else {
            setValues(val);
        }
    };

    const inputValue = isLang
        ? typeof values === 'object'
            ? values[currentLang as 'az' | 'en' | 'ru'] ?? ''
            : ''
        : (values as string);

    return (
        <div>
            {label && <Label className="mb-2 block">{label}</Label>}
            <Input
                placeholder={`Enter ${label ?? name}${
                    isLang ? ` (${currentLang.toUpperCase()})` : ''
                }`}
                value={inputValue}
                onChange={handleChange}
            />
        </div>
    );
}
