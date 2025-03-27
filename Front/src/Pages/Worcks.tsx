import ProjectCard from '@/components/Home/ProjectCard';
import { PaginationDemo } from '@/components/Pagination';
import CategoryFilter from '@/components/Worcks/CategoryFilter';

export default function Worcks() {
    const isLoading = false;

    return (
        <div className="flex flex-col gap-[40px] py-[40px]">
            {/* Heading Skeleton */}
            {isLoading ? (
                <div className="h-[48px] bg-neutral-700 rounded w-[60%] mx-auto animate-pulse" />
            ) : (
                <h2 className="rb-5 mb-5 text-4xl text-center font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    heading
                </h2>
            )}

            {/* Category Filter Skeleton */}
            <div className="flex justify-center">
                <CategoryFilter
                    isLoading={isLoading}
                    onCategoryChange={(category) =>
                        console.log(`Selected category: ${category}`)
                    }
                />
            </div>

            {/* Grid of Cards or Skeletons */}
            <div className="grid grid-cols-1 gap-[26px] md:grid-cols-2 lg:grid-cols-3 lg:px-[100px] md:px-[60px] px-[12px]">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i}>
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
                            <ProjectCard />
                        )}
                    </div>
                ))}
            </div>

            {/* Pagination (Optional Skeleton) */}
            <div>
                {isLoading ? (
                    <div className="h-[48px] w-[200px] mx-auto bg-neutral-800 rounded animate-pulse" />
                ) : (
                    <PaginationDemo />
                )}
            </div>
        </div>
    );
}
