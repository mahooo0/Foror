import ContactInfoContent from '@/components/Content/ContactInfo';

export default function ContactInfo() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Contact Info</h1>
            <ContactInfoContent />
        </div>
    );
}
