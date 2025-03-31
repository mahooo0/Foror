import { Editor } from 'primereact/editor';
import { Label } from '@/components/ui/label';
import { useFormData } from './ForumWrapper';
import { useState, useEffect } from 'react';

interface PrimeEditorProps {
    name: string;
    label?: string;
    isLang?: boolean;
    placeholder?: string;
    defaultValue?: string | { az?: string; en?: string; ru?: string };
}

export function PrimeEditor({
    name,
    label,
    isLang = false,
    placeholder = 'Start typing...',
    defaultValue,
}: PrimeEditorProps) {
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

    const currentValue = isLang
        ? (values as any)?.[currentLang] || ''
        : (values as string);

    const handleChange = (content: string) => {
        if (isLang) {
            setValues((prev) => ({
                ...(prev as any),
                [currentLang]: content,
            }));
        } else {
            setValues(content);
        }
    };

    useEffect(() => {
        updateField(name, values);
    }, [values, name, updateField]);

    return (
        <div className="space-y-2">
            {label && <Label>{label}</Label>}

            <Editor
                value={currentValue}
                onTextChange={(e) => handleChange(e.htmlValue || '')}
                style={{ height: '200px' }}
                placeholder={placeholder}
            />

            {isLang && (
                <div className="text-xs text-muted-foreground">
                    Current language: {currentLang.toUpperCase()}
                </div>
            )}
        </div>
    );
}
