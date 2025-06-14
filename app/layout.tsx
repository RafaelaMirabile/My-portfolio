import './globals.css';
import Header from '../components/shared/Header';
import Providers from './providers';
import PageWrapper from '@/components/shared/PageWrapper';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='min-h-screen flex flex-col overflow-x-hidden'>
        <Providers>
          <Header />
          <main className="flex-grow mb-24">
            <PageWrapper>
              {children}
            </PageWrapper>
          </main>
          </Providers>
      </body>
    </html>
  );
}