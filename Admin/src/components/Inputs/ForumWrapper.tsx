'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X } from 'lucide-react'; // Close icon

// Define a proper type for the context
interface FormContextType {
    formData: Record<string, any>;
    currentLang: string;
    updateField: (name: string, value: any) => void;
    getFieldValue: (name: string) => any;
}

// Create context with default values
const FormContext = createContext<FormContextType>({
    formData: {},
    currentLang: 'az',
    updateField: () => {},
    getFieldValue: () => undefined,
});

export const useFormData = () => useContext(FormContext);

export function ForumWrapper({
    children,
    onSubmit,
    onClose,
    initialData = {},
    initialLang = 'az',
}: {
    children: React.ReactNode;
    onSubmit: (data: Record<string, any>) => void;
    onClose: () => void;
    initialData?: Record<string, any>;
    initialLang?: 'az' | 'en' | 'ru';
}) {
    const [formData, setFormData] = useState<Record<string, any>>(initialData);
    const [currentLang, setCurrentLang] = useState<string>(initialLang);

    // Memoize the updateField function to prevent unnecessary re-renders
    const updateField = useCallback((name: string, value: any) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);

    // Add a function to get field values
    const getFieldValue = useCallback(
        (name: string) => {
            return formData[name];
        },
        [formData]
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <FormContext.Provider
            value={{ formData, currentLang, updateField, getFieldValue }}
        >
            <form
                onSubmit={handleSubmit}
                className="w-full relative p-6 bg-background border rounded-lg shadow-sm"
            >
                {/* Close icon at top right */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground rounded-full p-1 hover:bg-muted transition-colors"
                    aria-label="Close"
                >
                    <X className="h-5 w-5" />
                </button>

                <Tabs
                    defaultValue={currentLang}
                    value={currentLang}
                    onValueChange={(lang) => setCurrentLang(lang)}
                    className="mb-6"
                >
                    <TabsList className="grid grid-cols-3 mb-4 mt-2">
                        <TabsTrigger value="az">AZ</TabsTrigger>
                        <TabsTrigger value="en">EN</TabsTrigger>
                        <TabsTrigger value="ru">RU</TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {children}
                </div>

                <div className="flex justify-between mt-8 pt-4 border-t">
                    <Button variant="outline" type="button" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </FormContext.Provider>
    );
}
