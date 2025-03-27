export default function CompaniesSection() {
    const loading = false;

    return (
        <section
            data-scroll-section
            className="lg:px-[100px] md:px-[60px] px-[12px]"
        >
            {loading ? (
                <div className="w-full flex flex-col items-center gap-3 animate-pulse">
                    <div className="h-8 w-[150px] bg-gray-300 rounded" />
                </div>
            ) : (
                <>
                    <h2 className="text-[18px] font-bold text-center">
                        Used by the world's leading companies
                    </h2>
                </>
            )}

            <div className="flex flex-row justify-center gap-8 flex-wrap mt-8">
                {loading
                    ? Array.from({ length: 10 }).map((_, index) => (
                          <div
                              key={index}
                              className="w-[140px] h-[56px] rounded bg-gray-200 animate-pulse"
                          />
                      ))
                    : Array.from({ length: 10 }).map((_, index) => (
                          <div
                              key={index}
                              className="w-[140px] h-[56px] flex items-center justify-center"
                          >
                              <svg
                                  width="135"
                                  height="24"
                                  viewBox="0 0 135 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  {/* SVG content here */}
                              </svg>
                          </div>
                      ))}
            </div>
        </section>
    );
}
