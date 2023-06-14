import '@styles/globals.css';

import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/assets/icons/brasao.png',
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
      <body className='flex flex-col min-h-[100dvh]'>
        <Nav></Nav>
        <main className='font-poppins'>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  )
}
