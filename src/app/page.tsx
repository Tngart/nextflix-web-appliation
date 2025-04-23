import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-text-primary">
        Welcome to Nextflix 🍿
      </h1>
      <p className="text-text-secondary mb-6">
        Your favorite movies in one place.
      </p>
      <Button variant={"default"}>Get Started</Button>
    </div>
  );
}
