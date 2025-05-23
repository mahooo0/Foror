import HomeServicesContent from '@/components/Content/ServicesHome';

export default function Home_Services() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Services</h1>
            <HomeServicesContent />
        </div>
    );
}
