import './globals.css';
import Providers from './providers';
import PageWrapper from '@/components/shared/PageWrapper';
import Dock from '../components/Dock';

export const metadata = {
  title: "Next.js & TailwindCSS & TypeScript Portfolio Project",
  description: "Simple Page application with Next.js, TailwindCSS and TypeScript",
  keywords: "next,js,tailwindcss,typescript,portfolio,project,web,ui",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col overflow-x-hidden">
        <Providers>
          {/* Client-side Dock */}
          <div className="z-50 fixed bottom-2 left-1/2 -translate-x-1/2">
            <Dock />
          </div>

          <main className="flex-grow mb-24 min-h-screen">
            <PageWrapper>{children}</PageWrapper>
          </main>
        </Providers>
      </body>
    </html>
  );
}
