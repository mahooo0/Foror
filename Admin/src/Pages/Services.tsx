import ServicesContent from '@/components/Content/Services';

export default function Services() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Services</h1>
            <ServicesContent />
        </div>
    );
}
