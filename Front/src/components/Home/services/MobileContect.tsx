import MobileCard from './mobileCard';
import MobileSceleton from './mobileSceleton';

export default function MobileContect({ loading }: { loading: boolean }) {
    return (
        <div className="max-md:flex hidden flex-col gap-4 px-[12px]">
            {loading
                ? Array.from({ length: 5 }).map((_, i) => (
                      <MobileSceleton i={i} />
                  ))
                : Array.from({ length: 5 }).map((_, i) => (
                      <MobileCard key={i} isBlack={i % 2 === 1} />
                  ))}
        </div>
    );
}
