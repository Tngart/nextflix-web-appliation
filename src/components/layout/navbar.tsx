'use client';

import { Menu, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { ModeToggle } from './mode-toggle';

const menu = [
  { label: 'Browse', path: 'browse' },
  { label: 'TV Shows', path: 'tv-shows' },
  { label: 'Movies', path: 'movies' },
  { label: 'New Popular', path: 'new-popular' },
  { label: 'My List', path: 'my-list' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname.split('/')[1];

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-background to-transparent px-16 py-2">
      <div className="flex flex-row justify-between">
        <div className="flex h-12 items-center justify-between gap-4 md:justify-start">
          <Image src="/logo.png" alt="logo" width={40} height={24} className="hidden h-auto w-[90px] md:flex" />
          <Image src="/n-logo.png" alt="logo" width={40} height={24} className="flex h-[24px] w-auto md:hidden" />

          <nav className="hidden items-center gap-6 text-sm md:flex">
            {menu.map((item) => (
              <Link
                key={item.path}
                href={`/${item.path}`}
                className={currentPath === item.path ? 'font-bold' : 'font-thin'}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Center nav for mobile */}
          <div className="mx-auto flex items-center justify-center gap-4 text-sm font-medium md:hidden">
            <button>TV Shows</button>
            <button>Movies</button>
            <button className="flex items-center gap-1">
              Categories <ChevronDown className="size-4" />
            </button>
          </div>

          {/* Right: menu toggle & dark mode */}
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu />
            </Button>
          </div>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
