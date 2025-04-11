import BlogsContent from '@/components/Content/Blogs';

export default function Blogs() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Blogs</h1>
            <BlogsContent />
        </div>
    );
}
