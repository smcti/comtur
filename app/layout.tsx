import '@styles/globals.css';

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Script from 'next/script';
// import { Suspense } from 'react';
// import Analytics from '@components/analytics/Analytics';

export const metadata = {
  title: 'COMTUR',
  description: 'Página inicial do Conselho Municipal de Turismo',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/assets/icons/C-round.png',
      // media: '(prefers-color-scheme: dark)'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className='flex flex-col min-h-[100dvh] bg-zircon'>
        {/* <Suspense>
          <Analytics />
        </Suspense> */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-H6XV7ZJVVE" />
        <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-H6XV7ZJVVE');
            `,
            }} />
        <Nav></Nav>
        <main className='font-poppins text-gray-700'>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  )
}

