import { InfoIcon, PlayIcon } from 'lucide-react';

import { ModeToggle } from '@/components/layout/mode-toggle';
import { Button } from '@/components/ui/button';

export default function Browse() {
  return (
    <main className="min-w-screen flex min-h-screen flex-row items-center justify-start gap-2 p-6 text-foreground">
      <Button variant={'default'}>
        <PlayIcon fill="text-foreground" /> Play
      </Button>
      <Button variant={'secondary'}>
        <InfoIcon />
        More Info
      </Button>
      <ModeToggle />
    </main>
  );
}
