import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import * as ga from '../lib/ga'
import 'nextra-theme-blog/style.css'
import '../styles/main.css'

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

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head backgroundColor={{ dark: '#0f172a', light: '#fefce8' }} />
      <GoogleAnalytics gaId={ga.GOOGLE_ANALYTICS_ID!} />
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <Search placeholder="Search..." />
            <ThemeSwitch />
          </Navbar>
          {children}
          <Footer>
            {new Date().getFullYear()} © Carlos Silva Abreu
            <a href="/rss.xml" style={{ float: 'right' }}>
              RSS
            </a>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
