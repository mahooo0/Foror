import DevStepsContent from '@/components/Content/About/Devsteps';

export default function Dev_Steps() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Dev Steps</h1>
            <DevStepsContent />
        </div>
    );
}
