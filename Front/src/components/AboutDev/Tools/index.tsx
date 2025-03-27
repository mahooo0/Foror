import ToolCard from './toolCard';

export default function ToolsSection() {
    return (
        <section className=" lg:px-[100px] md:px-[60px] px-[12px] flex flex-col gap-5 text-center">
            <h2 className="text-5xl font-bold">Services</h2>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                <ToolCard />
                <ToolCard />
                <ToolCard />
                <ToolCard />
            </div>
        </section>
    );
}
