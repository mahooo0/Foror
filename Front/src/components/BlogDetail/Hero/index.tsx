import SocialShare from '../Socials';

export default function BlogDetailHero() {
    const isLoading = false;

    return (
        <section className="flex flex-col gap-[40px] py-[40px] lg:px-[100px] md:px-[60px] px-[12px]">
            {isLoading ? (
                <div className="h-[48px] bg-neutral-700 rounded w-[60%] mx-auto animate-pulse" />
            ) : (
                <h2 className="rb-5 text-4xl text-center font-bold md:text-5xl lg:text-6xl">
                    {'heading'}
                </h2>
            )}

            {isLoading ? (
                <div className="w-full aspect-video bg-neutral-800 rounded-2xl animate-pulse" />
            ) : (
                <img
                    src="https://s3-alpha-sig.figma.com/img/2dd6/a9f9/64a6edc43352a39a227caf24c4d3dc9a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CCkQLAh4PK7pjVWVK12kibUiI5v6oaR-wOA8ElFEMNCy67CTWoivbAFRrWdLtFE2iTPeJJzl23trecoE3R66NQNQfWzBlyiqlKHN9cFvF3LFaD1SWXrMhQlxPjDG05iuQU2xKv7M3zitPkqU7viTdbM~CV4AGHGqzy6zRcsizqaXcAHKq~9veqzhH7KjjZ~axVKRcloxSVLAQsBQRTgXLArPwxUQNmiqeVczcEuZZOfB8NPKpDCuT30QlLwFrv0ezaNB5~nBEDwZilOmtG~EwhOaLvdJnFumhGmZt1kRhMR04nh2LuudWm3TzhR-dFnCYUj798elVMVJgs1bW4opOw__"
                    className="w-full rounded-2xl"
                    alt="Blog hero"
                />
            )}

            {isLoading ? (
                <div className="flex flex-col gap-3 animate-pulse">
                    <div className="h-4 w-full bg-neutral-800 rounded" />
                    <div className="h-4 w-5/6 bg-neutral-800 rounded" />
                    <div className="h-4 w-4/6 bg-neutral-800 rounded" />
                    <div className="h-4 w-3/4 bg-neutral-800 rounded" />
                    <div className="h-4 w-2/4 bg-neutral-800 rounded" />
                </div>
            ) : (
                <p className="lg:text-xl text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus, vel. Veritatis, eveniet culpa! Obcaecati commodi
                    aut quaerat delectus dignissimos, accusamus harum facere,
                    nihil dicta repellat numquam atque, adipisci laborum
                    ducimus?Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Corrupti accusamus totam facere provident vel odit
                    sapiente aperiam voluptas officiis aut earum, nam, illum
                    nemo natus recusandae quos? Sit, ut culpa?Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Illo recusandae,
                    vitae veniam exercitationem nostrum, unde ipsum laboriosam
                    aliquid repudiandae ab a. Maiores, minus fugit quis
                    praesentium maxime reiciendis suscipit voluptas.
                </p>
            )}

            {!isLoading && <SocialShare />}
        </section>
    );
}
