import PartfolioCategoryContent from '@/components/Content/Partfolio/Category';

export default function PartfolioCategory() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Partfolio</h1>
            <PartfolioCategoryContent />
        </div>
    );
}
