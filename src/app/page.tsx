import { ModeToggle } from '@/components/layout/mode-toggle';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-foreground">
      <h1 className="text-text-primary mb-4 text-4xl font-bold">Welcome to Netflix 🍿</h1>
      <p className="text-text-secondary mb-6">Your favorite movies in one place.</p>
      <Button variant={'secondary'}>Get Started</Button>
      <ModeToggle />
    </main>
  );
}
