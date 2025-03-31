'use client';

import { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select';
import { useFormData } from './ForumWrapper';

interface Option {
    value: string;
    name: string;
}

interface SelectInputProps {
    name: string;
    label?: string;
    options: Option[];
    defaultValue?: string;
    onChange?: (value: string) => void;
    required?: boolean;
    disabled?: boolean;
}

export function SelectInput({
    name,
    label,
    options,
    defaultValue,
    onChange,
    required = false,
    disabled = false,
}: SelectInputProps) {
    const { updateField, getFieldValue } = useFormData();
    const formValue = getFieldValue(name);
    const initialValue = formValue ?? defaultValue ?? '';

    const [selected, setSelected] = useState<string>(initialValue);

    useEffect(() => {
        if (formValue === undefined && defaultValue) {
            updateField(name, defaultValue);
        }
    }, [formValue, defaultValue, name, updateField]);

    const handleChange = (value: string) => {
        setSelected(value);
        updateField(name, value);
        onChange?.(value);
    };

    return (
        <div className="space-y-2">
            {label && (
                <Label
                    htmlFor={name}
                    className={
                        required
                            ? "after:content-['*'] after:ml-0.5 after:text-red-500"
                            : ''
                    }
                >
                    {label}
                </Label>
            )}

            <Select
                value={selected}
                onValueChange={handleChange}
                disabled={disabled}
                name={name}
            >
                <SelectTrigger className="w-full" id={name}>
                    <SelectValue placeholder="Select an option" />
                </SelectTrigger>

                <SelectContent>
                    {options.length > 0 ? (
                        options.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                                {opt.name}
                            </SelectItem>
                        ))
                    ) : (
                        <SelectItem value="no-options" disabled>
                            No options available
                        </SelectItem>
                    )}
                </SelectContent>
            </Select>
        </div>
    );
}
