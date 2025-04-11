import LogoContent from '@/components/Content/Logo&favicon';

export default function Logo() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Logo & favicon</h1>
            <LogoContent />
        </div>
    );
}
