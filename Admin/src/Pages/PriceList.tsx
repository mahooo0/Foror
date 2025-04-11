import PriceListContent from '@/components/Content/Price';

export default function PriceList() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">PriceList</h1>
            <PriceListContent />
        </div>
    );
}
