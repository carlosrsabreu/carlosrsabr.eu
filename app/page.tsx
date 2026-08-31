import Link from 'next/link'

export const metadata = {
  title: 'About'
}

export default async function IndexPage() {
  return (
    <div data-pagefind-ignore="all">
      <h1>Frontend developer.</h1>
      <div className="not-prose intro">
        <p>
          Carlos is a blockchain enthusiast and TypeScript adventurer. He is a
          frontend developer at <Link href="https://blip.pt">Blip</Link> today,
          after joining the team at Yacooba — a blockchain-based shared-economy
          platform for event promoters and travellers — and getting his start at
          a banking software company.
        </p>
        <p>
          On the side, he runs{' '}
          <Link href="https://gdgmadeira.xyz">GDG Madeira</Link>, the
          island&apos;s Google Developer Group chapter.
        </p>
        <Link href="/resume.pdf" className="resume">
          Résumé →
        </Link>
      </div>
    </div>
  )
}
