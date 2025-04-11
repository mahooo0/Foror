'use client';

import React, { useState, useEffect } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useFormData } from './ForumWrapper';

interface CheckboxInputProps {
    name: string;
    label?: string;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void; // <-- Added here
}

export function CheckboxInput({
    name,
    label,
    defaultChecked = false,
    onChange, // <-- Receive the prop
}: CheckboxInputProps) {
    const { updateField } = useFormData();

    const [checked, setChecked] = useState(defaultChecked);

    useEffect(() => {
        setChecked(defaultChecked);
        updateField(name, defaultChecked);
    }, [defaultChecked, name, updateField]);

    const handleChange = (value: boolean | 'indeterminate') => {
        const isChecked = value === true;
        setChecked(isChecked);
        updateField(name, isChecked);

        if (onChange) {
            onChange(isChecked); // <-- Call onChange from props
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                checked={checked}
                onCheckedChange={handleChange}
                id={name}
            />
            {label && <Label htmlFor={name}>{label}</Label>}
        </div>
    );
}
