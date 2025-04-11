import DevContent from '@/components/Content/About/DevTools';

export default function Dev_Tools() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Dev Tools</h1>
            <DevContent />
        </div>
    );
}
