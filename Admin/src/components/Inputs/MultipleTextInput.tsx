'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useFormData } from './ForumWrapper';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';

interface Feature {
    az: string;
    en: string;
    ru: string;
}

interface FeatureListInputProps {
    name: string;
    label?: string;
    defaultValue?: Feature[];
}

export function Multiple_text_Input({
    name,
    label,
    defaultValue = [],
}: FeatureListInputProps) {
    const { currentLang, updateField } = useFormData();
    const [features, setFeatures] = useState<Feature[]>(defaultValue);

    const [currentInput, setCurrentInput] = useState<Feature>({
        az: '',
        en: '',
        ru: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setCurrentInput((prev) => ({
            ...prev,
            [currentLang]: val,
        }));
    };

    const handleAddFeature = () => {
        const allFilled =
            currentInput.az.trim() &&
            currentInput.en.trim() &&
            currentInput.ru.trim();

        if (!allFilled) {
            toast.error(
                'Please fill in all languages before adding the feature.'
            );
            return;
        }

        const newList = [...features, currentInput];
        setFeatures(newList);
        updateField(name, newList);

        setCurrentInput({ az: '', en: '', ru: '' });
    };

    const handleRemoveFeature = (index: number) => {
        const updated = features.filter((_, i) => i !== index);
        setFeatures(updated);
        updateField(name, updated);
    };

    return (
        <div className="space-y-2">
            {label && <Label>{label}</Label>}

            <div className="flex gap-2">
                <Input
                    placeholder={`Feature (${currentLang.toUpperCase()})`}
                    value={currentInput[currentLang as keyof Feature]}
                    onChange={handleChange}
                />
                <Button type="button" onClick={handleAddFeature}>
                    Add
                </Button>
            </div>

            {features.length > 0 && (
                <ul className="space-y-1 mt-2">
                    {features.map((feat, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center border rounded p-2 text-sm"
                        >
                            <div>
                                <span className="font-medium">AZ:</span>{' '}
                                {feat.az} |{' '}
                                <span className="font-medium">EN:</span>{' '}
                                {feat.en} |{' '}
                                <span className="font-medium">RU:</span>{' '}
                                {feat.ru}
                            </div>
                            <button
                                type="button"
                                onClick={() => handleRemoveFeature(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
