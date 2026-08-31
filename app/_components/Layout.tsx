import { ThemeProvider } from 'next-themes'
import { ViewTransitions } from 'next-view-transitions'
import type { FC, ReactNode } from 'react'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <article
        className="x:container x:px-4 x:prose x:max-md:prose-sm x:dark:prose-invert"
        dir="ltr"
        data-pagefind-body
      >
        <ViewTransitions>{children}</ViewTransitions>
      </article>
    </ThemeProvider>
  )
}
