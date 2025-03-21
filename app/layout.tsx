import type { Metadata } from 'next'
import { ThemeSwitch } from 'nextra-theme-blog'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { GoogleAnalytics } from '@next/third-parties/google'
import 'nextra-theme-blog/style.css'
import '../styles/main.css'
import { Navbar } from './_components/Navbar'
import { Footer } from './_components/Footer'
import { Layout } from './_components/Layout'

export const metadata: Metadata = {
  title: 'Carlos Silva Abreu',
  description: 'A simple website that describes one programmer.',
  openGraph: {
    title: 'Carlos Silva Abreu',
    description: 'A simple website that describes one programmer.',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/18048652',
        alt: 'Carlos Silva Abreu'
      }
    ],
    siteName: 'Carlos Silva Abreu'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@carlorsabreu',
    title: 'Carlos Silva Abreu',
    description: 'A simple website that describes one programmer.',
    images: ['https://avatars.githubusercontent.com/u/18048652']
  },
  robots: {
    follow: true,
    index: true
  }
}

const GOOGLE_ANALYTICS_ID = process.env['NEXT_PUBLIC_GOOGLE_ANALYTICS']

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head backgroundColor={{ dark: '#0f172a', light: '#fefce8' }} />
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID!} />
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <Search placeholder="Search..." />
            <ThemeSwitch />
          </Navbar>
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  )
}
