import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export function LanguageSelect() {
    return (
        <Select>
            <SelectTrigger className="w-full rounded-none border border-black">
                <SelectValue placeholder="Az" />
            </SelectTrigger>
            <SelectContent className="rounded-none border border-black ">
                <SelectGroup className="">
                    <SelectItem value="Az">Az</SelectItem>
                    <SelectItem value="En">En</SelectItem>
                    <SelectItem value="Ru">Ru</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
