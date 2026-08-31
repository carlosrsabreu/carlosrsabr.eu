import type { PageMapItem } from 'nextra'
import { normalizePages } from 'nextra/normalize-pages'
import { Link } from 'next-view-transitions'
import type { FC, ReactNode } from 'react'
import { NavbarLink } from './NavbarLink'

type NavbarProps = {
  children?: ReactNode
  pageMap: PageMapItem[]
}

export const Navbar: FC<NavbarProps> = ({ children, pageMap }) => {
  const { topLevelNavbarItems } = normalizePages({ list: pageMap, route: '/' })
  return (
    <header className="site-nav" data-pagefind-ignore="all">
      <Link href="/" className="site-nav__brand" aria-label="Home">
        ⌂
      </Link>
      <nav className="site-nav__links">
        {topLevelNavbarItems.map((nav) => (
          <NavbarLink key={nav.route} href={nav.route}>
            {nav.title}
          </NavbarLink>
        ))}
        {children}
      </nav>
    </header>
  )
}
