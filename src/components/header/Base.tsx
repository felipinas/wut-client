import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BaseProps {
  children: ReactNode;
}

export default function Base({ children }: BaseProps) {
  return (
    <header className="bg-black h-16 flex items-center justify-between px-8 border-b-[1px] border-header-border">
      <Link href="/">
        <Image src="/img/wut.svg" width={47} height={20} alt="Wut logo" />
      </Link>

      {children}
    </header>
  );
}
