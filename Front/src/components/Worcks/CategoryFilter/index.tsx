'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
    categories?: string[];
    onCategoryChange?: (category: string) => void;
    isLoading?: boolean; // 👈 new optional prop
}

export default function CategoryFilter({
    categories = [
        'Category one',
        'Category two',
        'Category three',
        'Category four',
    ],
    onCategoryChange,
    isLoading = false,
}: CategoryFilterProps) {
    const [activeCategory, setActiveCategory] = useState<string>('View all');

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        if (onCategoryChange) {
            onCategoryChange(category);
        }
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 items-center">
            {isLoading ? (
                // 🦴 Skeleton Buttons
                <>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-[42px] w-[110px] bg-neutral-200 rounded-lg animate-pulse"
                        />
                    ))}
                </>
            ) : (
                <>
                    <button
                        onClick={() => handleCategoryClick('View all')}
                        className={cn(
                            'px-6 py-3 text-base transition-colors rounded-[8px]',
                            activeCategory === 'View all'
                                ? 'border border-black'
                                : 'bg-gray-100'
                        )}
                    >
                        View all
                    </button>

                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={cn(
                                'px-6 py-3 text-base transition-colors rounded-[8px]',
                                activeCategory === category
                                    ? 'border border-black'
                                    : 'bg-gray-100 '
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </>
            )}
        </div>
    );
}
