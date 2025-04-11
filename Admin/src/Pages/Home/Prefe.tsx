import HomePrefeContent from '@/components/Content/Home/Prefe';

export default function Home_Prefe() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Home Prefe For</h1>
            <HomePrefeContent />
        </div>
    );
}
