import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function WhiteBtn({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <Button
            variant="outline"
            className={`xl:px-3.5 px-2 py-2 rounded-none bg-white border border-[#222222] text-base text-[#222222] shadow-2xl cursor-pointer ${className}`}
        >
            {text}
        </Button>
    );
}
export function BlackBtn({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <Button
            className={`xl:px-5 px-2 py-2 rounded-none bg-[#222222] border border-[#222222] text-base shadow-2xl cursor-pointer ${className}`}
        >
            {text}
        </Button>
    );
}
export function ButtonLink({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <Button variant="link" className={` cursor-pointer ${className}`}>
            {' '}
            {text}{' '}
            <ChevronRight
                className={`
           w-6 h-6 mt-1`}
            />
        </Button>
    );
}
