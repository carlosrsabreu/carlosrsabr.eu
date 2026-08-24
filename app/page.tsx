import Link from 'next/link'

export const metadata = {
  title: 'About'
}

export default async function IndexPage() {
  return (
    <div data-pagefind-ignore="all">
      <h1>{metadata.title}</h1>
      <div
        className="not-prose"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
      >
        <p>
          Carlos is a blockchain enthusiast and TypeScript adventurer. He is a
          frontend developer at{' '}
          <Link href="https://blip.pt" style={{ textDecoration: 'underline' }}>
            Blip
          </Link>{' '}
          today, after joining the team at{' '}
          <Link
            href="https://yacooba.com"
            style={{ textDecoration: 'underline' }}
          >
            Yacooba
          </Link>{' '}
          — a blockchain-based shared-economy platform for event promoters and
          travellers — and getting his start at a banking software company.
        </p>

        <p>
          On the side, he runs{' '}
          <Link
            href="https://gdgmadeira.xyz"
            style={{ textDecoration: 'underline' }}
          >
            GDG Madeira
          </Link>
          , the island&apos;s Google Developer Group chapter.
        </p>

        <b>
          You can find my resume{' '}
          <Link href="/resume.pdf" style={{ textDecoration: 'underline' }}>
            here
          </Link>
          .
        </b>
      </div>
    </div>
  )
}
