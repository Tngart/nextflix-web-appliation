import dynamic from 'next/dynamic';

const Popular = dynamic(() => import('./sections/popular'));
const MainMovie = dynamic(() => import('./sections/main-movie'));

export default function Browse() {
  return (
    <main>
      <div className="absolute inset-0">
        <div className="relative w-full pt-[56.25%]">
          <div className="absolute inset-0 -z-20 bg-[url('/movie-bg.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
          </div>
        </div>
      </div>
      {/* <div className="sticky inset-0 mt-[calc(7%+48px)] flex origin-top-left scale-[0.5] flex-col items-start justify-start gap-12 text-foreground sm:scale-[0.7] md:scale-[0.85] lg:scale-100"> */}
      <div className="sticky inset-0 mt-[calc(7%+48px)] flex origin-top-left scale-y-[0.5] flex-col items-start justify-start gap-12 text-foreground sm:scale-y-[0.7] md:scale-y-[0.85] lg:scale-y-100">
        <MainMovie />
        <Popular />
        <Popular />
        <Popular />
        <Popular />
      </div>
    </main>
  );
}
