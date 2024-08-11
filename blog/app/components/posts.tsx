import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) return -1;
          return 1;
        })
        .map((post) => (
          <Link 
            key={post.slug} 
            className="flex flex-row items-start mb-4 transition-transform duration-200 hover:scale-103 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-4"
            href={`/blog/${post.slug}`}
          >
            {post.metadata.image && (
              <img
                src={post.metadata.image}
                alt={post.metadata.title}
                className="w-64 h-64 object-cover rounded-lg mr-6"
              />
            )}
            <div className="flex flex-col justify-center">
              <p className="text-neutral-900 dark:text-neutral-100 font-bold tracking-tight mb-1 text-xl hover:text-blue-600 hover:underline hover:decoration-2">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
