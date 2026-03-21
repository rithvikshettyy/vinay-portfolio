import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: '--font-heading' });
const poppins = Poppins({ weight: "600", subsets: ["latin"], variable: '--font-subheading' });

export const metadata: Metadata = {
  title: 'Vinay | Portfolio',
  description: 'Frontend developer and freelancer specializing in modern web design and development.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} ${poppins.variable} font-sans antialiased text-[#0C0407] bg-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
