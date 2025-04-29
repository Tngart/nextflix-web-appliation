import { InfoIcon, PlayIcon } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function MainMovie() {
  return (
    <div className="px-16">
      <div className="flex origin-top-left scale-x-[0.5] sm:scale-x-[0.7] md:scale-x-[0.85] lg:scale-x-100">
        <div className="flex flex-col gap-4">
          <Image src="/n-series.png" alt="n-series" width={150} height={200} />
          <Image src="/movie-logo.png" alt="movie-logo" width={500} height={200} />

          <div className="flex items-center gap-2">
            <Image src="/top-10.png" alt="top-10" width={30} height={30} />
            <p className="text-sm font-semibold md:text-lg">#1 in TV Shows Today</p>
          </div>

          <p className="max-w-lg text-xs sm:text-sm md:text-base">
            Determined to protect a young patient who escaped a mysterious cult, a psychiatrist takes the girl in,
            putting her own family — and life — in danger.
          </p>

          <div className="flex gap-3">
            <Button variant="default" className="flex items-center gap-2 px-4 text-sm md:text-base">
              <PlayIcon fill="background" /> Play
            </Button>
            <Button variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm md:text-base">
              <InfoIcon /> More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
