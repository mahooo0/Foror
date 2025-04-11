import HomeAboutContent from '@/components/Content/Home/About';


export default function Home_About() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Home About</h1>
            <HomeAboutContent />
        </div>
    );
}
