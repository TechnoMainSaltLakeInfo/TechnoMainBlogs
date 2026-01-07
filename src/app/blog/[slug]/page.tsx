import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const getImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((img) => img.id === id);

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = getImage(post.imageId);

  return (
    <article className="fade-in container max-w-4xl py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {post.date} &middot; By {post.author}
        </p>
      </div>

      {image && (
        <div className="relative aspect-video mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={image.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
            priority
          />
        </div>
      )}

      <div
        className="prose prose-lg dark:prose-invert max-w-none mx-auto
                   prose-p:text-foreground/80
                   prose-headings:font-headline prose-headings:text-foreground
                   prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
