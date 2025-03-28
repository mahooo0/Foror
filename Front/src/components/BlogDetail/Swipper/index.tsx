import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import 'swiper/swiper-bundle.css';
import { BlogCard } from '@/components/Blogs/Card';

const BlogsSwipper = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const isLoading = false; // Set to true to show skeletons

    const blogs = [
        { title: 'Blog 1', summary: 'This is blog 1' },
        { title: 'Blog 2', summary: 'This is blog 2' },
        { title: 'Blog 3', summary: 'This is blog 3' },
        { title: 'Blog 4', summary: 'This is blog 4' },
        { title: 'Blog 5', summary: 'This is blog 5' },
        { title: 'Blog 6', summary: 'This is blog 6' },
    ];

    const skeletonSlides = Array(3).fill(null);

    return (
        <div className="w-full lg:px-[100px] md:px-[60px] relative px-[12px] mx-auto p-6">
            <Swiper
                spaceBetween={20}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 2 },
                }}
            >
                {isLoading
                    ? skeletonSlides.map((_, index) => (
                          <SwiperSlide key={`skeleton-${index}`}>
                              <div className="flex size-full flex-col items-center justify-start animate-pulse p-4">
                                  <div className="mb-6 w-full">
                                      <div className="aspect-video w-full bg-neutral-800 rounded" />
                                  </div>
                                  <div className="flex w-full flex-col items-start justify-start gap-2">
                                      <div className="h-6 w-3/4 bg-neutral-700 rounded" />
                                      <div className="h-4 w-full bg-neutral-800 rounded" />
                                      <div className="h-4 w-5/6 bg-neutral-800 rounded" />
                                  </div>
                              </div>
                          </SwiperSlide>
                      ))
                    : blogs.map((blog, index) => (
                          <SwiperSlide key={index}>
                              <BlogCard
                                  image={{
                                      src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
                                      alt: 'Cover',
                                  }}
                                  url="/blog/how-to-build-ui"
                                  category="Design"
                                  readTime="5 min read"
                                  title={blog.title}
                                  description={blog.summary}
                                  button={{
                                      title: 'Read More',
                                      onClick: () =>
                                          console.log('Clicked Read More'),
                                  }}
                              />
                          </SwiperSlide>
                      ))}
            </Swiper>

            {/* Prev Button */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 lg:left-[50px] md:left-[30px] max-sm:hidden left-[20px] z-30 border rounded-xl overflow-hidden cursor-pointer"
            >
                <svg
                    width="41"
                    height="42"
                    viewBox="0 0 41 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M39.5523 34.9695C39.557 38.0071 37.0983 40.4733 34.0608 40.4779L6.0608 40.5208C3.02323 40.5255 0.557033 38.0668 0.552379 35.0293L0.509488 7.0293C0.504835 3.99173 2.96349 1.52553 6.00106 1.52088L34.001 1.47799C37.0386 1.47334 39.5048 3.93199 39.5094 6.96956L39.5523 34.9695Z"
                        fill="white"
                    />
                    <path
                        d="M22.0249 16.9961L18.031 21.0022L22.0371 24.9961"
                        stroke="#09090B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Next Button */}
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-1/2 rotate-180 lg:right-[50px]  max-sm:hidden md:right-[30px] right-[20px] z-30 border rounded-xl overflow-hidden cursor-pointer"
            >
                <svg
                    width="41"
                    height="42"
                    viewBox="0 0 41 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M39.5523 34.9695C39.557 38.0071 37.0983 40.4733 34.0608 40.4779L6.0608 40.5208C3.02323 40.5255 0.557033 38.0668 0.552379 35.0293L0.509488 7.0293C0.504835 3.99173 2.96349 1.52553 6.00106 1.52088L34.001 1.47799C37.0386 1.47334 39.5048 3.93199 39.5094 6.96956L39.5523 34.9695Z"
                        fill="white"
                    />
                    <path
                        d="M22.0249 16.9961L18.031 21.0022L22.0371 24.9961"
                        stroke="#09090B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default BlogsSwipper;
