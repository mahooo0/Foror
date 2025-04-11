'use client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { Pencil } from 'lucide-react';

type Structure = {
    HeadTitle: string;
    key: (string | number)[];
    type: 'str' | 'img' | 'video';
};

interface Props {
    structure: Structure[];
    data: any[];
    onAdd?: () => void;
    onEdit?: (id: string | number) => void;
    onDelete?: (id: string | number) => void;
}

export function TableDemo({ structure, data, onAdd, onEdit, onDelete }: Props) {
    const [role, setRole] = useState<'admin' | 'editor' | ''>('admin');

    const getNestedValue = (obj: any, keys: (string | number)[]) => {
        return keys.reduce(
            (acc, key) => (acc && acc[key] !== undefined ? acc[key] : ''),
            obj
        );
    };

    return (
        <div className=" w-full">
            <Table className=" border">
                <TableCaption>Structured Data Table</TableCaption>
                <TableHeader>
                    <TableRow>
                        {structure.map((item, idx) => (
                            <TableHead
                                key={idx}
                                className="text-start whitespace-nowrap border "
                            >
                                {item.HeadTitle}
                            </TableHead>
                        ))}
                        {(onEdit || onDelete || onAdd) && (
                            <TableHead className="text-right">
                                {onAdd && role === 'admin' && (
                                    <Button onClick={onAdd}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-5 h-5 mr-2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>
                                        ADD
                                    </Button>
                                )}
                            </TableHead>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item, rowIndex) => (
                        <TableRow key={rowIndex} className=" ">
                            {structure.map((column, colIndex) => {
                                const value = getNestedValue(item, column.key);
                                return (
                                    <TableCell
                                        key={colIndex}
                                        className="text-start border "
                                    >
                                        {column.type === 'img' ? (
                                            <img
                                                src={value}
                                                alt="Image"
                                                className="max-w-[70px] rounded-md"
                                            />
                                        ) : column.type === 'video' ? (
                                            <video
                                                src={value}
                                                className="max-w-[100px]"
                                                controls
                                            />
                                        ) : (
                                            value
                                        )}
                                    </TableCell>
                                );
                            })}
                            {(onEdit || onDelete) && (
                                <TableCell className="text-right space-x-2">
                                    {onEdit && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => onEdit(item._id)}
                                        >
                                            <Pencil className="h-4 w-4 mr-1" />
                                            Edit
                                        </Button>
                                    )}
                                    {onDelete && role === 'admin' && (
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => onDelete(item._id)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-4 w-4 mr-1"
                                            >
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m5-2h4m-4 0a2 2 0 0 0-2 2m6-2a2 2 0 0 1 2 2" />
                                            </svg>
                                            Delete
                                        </Button>
                                    )}
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
