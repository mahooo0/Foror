import { BlogCard } from '@/components/Blogs/Card';
import { PaginationDemo } from '@/components/Pagination';

export default function Blogs() {
    const isLoading = false;
    return (
        <div className="flex flex-col gap-[40px] py-[40px]">
            {isLoading ? (
                <div className="h-[48px] bg-neutral-700 rounded w-[60%] mx-auto"></div>
            ) : (
                <h2 className="rb-5 mb-5 text-4xl text-center font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    {'heading'}
                </h2>
            )}

            <div className="grid grid-cols-1 gap-[26px] md:grid-cols-2 lg:grid-cols-2  lg:px-[100px] md:px-[60px] px-[12px]">
                {Array.from({ length: 8 }).map(() => (
                    <>
                        {isLoading ? (
                            <div className="flex size-full flex-col items-center justify-start animate-pulse">
                                <div className="mb-6 w-full">
                                    <div className="aspect-video w-full bg-neutral-800 rounded" />
                                </div>

                                <div className="flex w-full flex-col items-start justify-start gap-2">
                                    <div className="h-6 w-3/4 bg-neutral-700 rounded" />
                                    <div className="h-4 w-full bg-neutral-800 rounded" />
                                    <div className="h-4 w-5/6 bg-neutral-800 rounded" />
                                </div>
                            </div>
                        ) : (
                            <BlogCard
                                image={{
                                    src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
                                    alt: 'Cover',
                                }}
                                url="/blog/how-to-build-ui"
                                category="Design"
                                readTime="5 min read"
                                title="How to build great UI"
                                description="Explore the key principles of creating intuitive and beautiful user interfaces."
                                button={{
                                    title: 'Read More',
                                    onClick: () =>
                                        console.log('Clicked Read More'),
                                }}
                            />
                        )}
                    </>
                ))}
            </div>
            <div>
                <PaginationDemo />
            </div>
        </div>
    );
}
