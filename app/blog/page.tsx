import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/posts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Actionable intelligence and insights from the front lines of cross-border fraud investigation.",
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative border-b border-border/40 bg-secondary/20 py-24 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            RedCell Intelligence Briefing
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Actionable insights from our global investigations. We dissect fraud schemes, share verification techniques,
            and provide the intelligence you need to operate securely.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="mt-4 text-2xl font-bold text-white transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{post.meta}</p>
                  <p className="mt-4 font-semibold text-primary">Read Article →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
