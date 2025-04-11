import ContactContent from '@/components/Content/About/Contacts';

export default function Contact() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Contact</h1>
            <ContactContent />
        </div>
    );
}
