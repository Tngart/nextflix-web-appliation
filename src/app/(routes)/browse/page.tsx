import dynamic from 'next/dynamic';

const MainMovie = dynamic(() => import('./sections/main-movie'));

export default function Browse() {
  return (
    <main>
      <div className="relative w-full pt-[56.25%]">
        <div className="absolute inset-0 bg-[url('/movie-bg.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent" />
        </div>
      </div>
      <MainMovie />
    </main>
  );
}
