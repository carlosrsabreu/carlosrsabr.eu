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
          Carlos is a Blockchain enthusiast and Typescript adventurer who
          previously served a company specialising in the development of banking
          software. He's also running a Google Developer Group's chapter in
          Madeira island -&gt;{' '}
          <Link
            href="https://gdgmadeira.xyz"
            style={{ textDecoration: 'underline' }}
          >
            GDG Madeira
          </Link>
          .
        </p>

        <p>
          Currently working as a frontend developer at{' '}
          <Link
            href="https://yacooba.com"
            style={{ textDecoration: 'underline' }}
          >
            Yacooba
          </Link>
          , a shared economy community platform for event promoters and
          travellers using blockchain technology.
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
