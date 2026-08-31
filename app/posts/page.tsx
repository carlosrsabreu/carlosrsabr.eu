import Link from 'next/link'
import { getPosts, getTags } from './get-posts'
import { PostRow } from '../_components/PostRow'

export const metadata = {
  title: 'Posts'
}

export default async function PostsPage() {
  const tags = await getTags()
  const posts = await getPosts()
  const allTags: Record<string, number> = Object.create(null)

  for (const tag of tags) {
    allTags[tag] ??= 0
    allTags[tag] += 1
  }
  return (
    <div className="post-list" data-pagefind-ignore="all">
      <h1>{metadata.title}</h1>
      <div className="not-prose tag-list">
        {Object.entries(allTags).map(([tag, count]) => (
          <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
            {tag} ({count})
          </Link>
        ))}
      </div>
      {posts.map((post) => (
        <PostRow key={post.route} post={post} />
      ))}
    </div>
  )
}
