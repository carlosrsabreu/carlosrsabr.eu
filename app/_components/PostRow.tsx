import { Link } from 'next-view-transitions'
import type { getPosts } from '../posts/get-posts'

type Post = Awaited<ReturnType<typeof getPosts>>[number]

function formatDate(input: string) {
  const date = new Date(input)
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  return `${yyyy}.${mm}.${dd}`
}

export function PostRow({ post }: { post: Post }) {
  const { date, description } = post.frontMatter
  return (
    <Link href={post.route} className="post-row">
      <time className="post-row__date" dateTime={new Date(date).toISOString()}>
        {formatDate(date)}
      </time>
      <span>
        <span className="post-row__title">{post.title}</span>
        {description ? (
          <span className="post-row__desc">{description}</span>
        ) : null}
      </span>
    </Link>
  )
}
