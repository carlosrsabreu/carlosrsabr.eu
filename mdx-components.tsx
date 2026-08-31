import { useMDXComponents as useMDX } from 'nextra-theme-blog'
import type { MDXComponents } from 'mdx/types'

// Nextra's `useMDXComponents` is a factory called at module scope, not a React
// hook, despite the `use` name — the rules-of-hooks match here is a false positive.
// eslint-disable-next-line react-hooks/rules-of-hooks
const blogComponents = useMDX({
  DateFormatter: ({ date }) =>
    `Last updated at ${date.toLocaleDateString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })}`
})

export function useMDXComponents(components?: Readonly<MDXComponents>) {
  return {
    ...blogComponents,
    ...components
  }
}
