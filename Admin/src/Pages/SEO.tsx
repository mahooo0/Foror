import SeoContent from '@/components/Content/SEO';

export default function Seo() {
    return (
        <div className=" flex flex-col gap-7 md:p-7 p-12">
            <h1 className="text-3xl text-bold">Seo</h1>
            <SeoContent />
        </div>
    );
}
