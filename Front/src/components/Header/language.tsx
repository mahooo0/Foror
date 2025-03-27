'use client'; // if you're using Next.js App Router (optional)

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';

export function LanguageSelect() {
    const [language, setLanguage] = useState<string>('Az'); // default

    // Load saved language from localStorage on first render
    useEffect(() => {
        const storedLang = localStorage.getItem('lang');
        if (storedLang) {
            setLanguage(storedLang);
        }
    }, []);

    // Save language to localStorage whenever it changes
    const handleChange = (value: string) => {
        setLanguage(value);
        localStorage.setItem('lang', value);
    };

    return (
        <Select value={language} onValueChange={handleChange}>
            <SelectTrigger className="w-full  border border-black">
                <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent className=" border border-black">
                <SelectGroup>
                    <SelectItem value="Az">Az</SelectItem>
                    <SelectItem value="En">En</SelectItem>
                    <SelectItem value="Ru">Ru</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
