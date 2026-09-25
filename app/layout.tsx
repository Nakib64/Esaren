import type { Metadata } from 'next';
import { Geist, Geist_Mono, Raleway } from 'next/font/google';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ImageProtection from '@/components/ImageProtection';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://esaren.saasfactry.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Esaren Global | International Venture & Strategic Infrastructure',
  description:
    'Esaren Global partners with governments, corporations, investors, and development organizations to transform ambitious ideas into successful international ventures.',
  icons: {
    icon: [
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/icon-48x48.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Esaren Global | International Venture & Strategic Infrastructure',
    description:
      'International venture management & project management consulting across Singapore, London, Guangzhou, and Lagos.',
    url: 'https://www.esaren.global',
    siteName: 'Esaren Global',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Esaren Global - International Venture & Strategic Infrastructure',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esaren Global | International Venture & Strategic Infrastructure',
    description:
      'International venture management & project management consulting across Singapore, London, Guangzhou, and Lagos.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f9f6f0] text-[#0c1a30]">
        <ImageProtection />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
