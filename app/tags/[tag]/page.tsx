import { getPosts, getTags } from '../../posts/get-posts'
import { PostRow } from '../../_components/PostRow'

type TagPageProps = {
  params: Promise<{ tag: string }>
}

export async function generateMetadata(props: TagPageProps) {
  const params = await props.params
  return {
    title: `Posts Tagged with “${decodeURIComponent(params.tag)}”`
  }
}

export async function generateStaticParams() {
  const allTags = await getTags()
  return [...new Set(allTags)].map((tag) => ({ tag }))
}

export default async function TagPage(props: TagPageProps) {
  const params = await props.params
  const { title } = await generateMetadata({ params: props.params })
  const posts = await getPosts()
  return (
    <div className="post-list">
      <h1>{title}</h1>
      {posts
        .filter((post) =>
          post.frontMatter.tags.includes(decodeURIComponent(params.tag))
        )
        .map((post) => (
          <PostRow key={post.route} post={post} />
        ))}
    </div>
  )
}
