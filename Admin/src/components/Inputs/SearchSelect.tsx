'use client';

import { useEffect, useState, useMemo } from 'react';
import Select, { MultiValue, ActionMeta } from 'react-select';
import { Label } from '@/components/ui/label';
import { useFormData } from './ForumWrapper';

interface Option {
    value: string;
    label: string;
}

interface MultiSelectInputProps {
    name: string;
    label?: string;
    options: Option[];
    defaultValue?: string[]; // <-- string array instead of Option[]
    onChange?: (value: Option[]) => void;
    required?: boolean;
    disabled?: boolean;
}

export function MultiSelectInput({
    name,
    label,
    options,
    defaultValue = [],
    onChange,
    required = false,
    disabled = false,
}: MultiSelectInputProps) {
    const { updateField, getFieldValue } = useFormData();
    const formValue = getFieldValue(name);

    // 🧠 Convert string[] to Option[]
    const defaultOptions = useMemo(() => {
        return options.filter((opt) => defaultValue.includes(opt.value));
    }, [defaultValue, options]);

    const [selectedOptions, setSelectedOptions] = useState<Option[]>(
        formValue ?? defaultOptions
    );

    useEffect(() => {
        if (!formValue && defaultOptions.length > 0) {
            updateField(
                name,
                defaultOptions.map((opt) => opt.value)
            );
        }
    }, [formValue, defaultOptions, name, updateField]);

    const handleChange = (
        selected: MultiValue<Option>,
        _actionMeta: ActionMeta<Option>
    ) => {
        const selectedArray = [...selected]; // Convert readonly to mutable array
        setSelectedOptions(selectedArray);

        const onlyValues = selectedArray.map((opt) => opt.value);
        updateField(name, onlyValues);

        onChange?.(selectedArray);
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
                id={name}
                isMulti
                isDisabled={disabled}
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                placeholder="Select or type to search..."
                className="react-select-container"
                classNamePrefix="react-select"
            />
        </div>
    );
}
