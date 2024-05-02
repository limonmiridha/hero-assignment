'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '@/views/appbars/Sidebar';
import Topbar from '@/views/appbars/Topbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <div className="flex">
            <Sidebar />
            <div className="flex-1">
              <Topbar />
              <div className="mx-6">{children}</div>
            </div>
          </div>
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
