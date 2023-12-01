import { type ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

import './globals.css';

import { locales } from '@/intl/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'wut'
};

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {
  if (!locales.includes(locale)) {
    return notFound();
  }

  return (
    <html className={inter.variable} lang={locale}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
