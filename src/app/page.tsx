import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { featuredContent, departmentCategories, blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

const getImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((img) => img.id === id);

export default function Home() {
  const recentPosts = blogPosts.slice(0, 2);
  const featuredDepartments = departmentCategories.flatMap(d => d.departments).slice(0, 3);


  return (
    <div className="fade-in space-y-16 lg:space-y-24">
      <section className="relative h-[500px] w-full">
        <Carousel
          className="h-full w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {featuredContent.map((item, index) => {
              const image = getImage(item.imageId);
              return (
                <CarouselItem key={index} className="relative h-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      priority={index === 0}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <div className="container">
                      <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        {item.title}
                      </h1>
                      <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
                        {item.description}
                      </p>
                      <Button asChild className="mt-8">
                        <Link href={item.link}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white" />
        </Carousel>
      </section>

      <section className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome to AbouTMSL
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore a world of knowledge, innovation, and community. At The Modern School of Learning, we are dedicated to fostering the next generation of leaders and thinkers.
          </p>
        </div>
      </section>

      <section className="container">
        <h2 className="font-headline mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Our Departments
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDepartments.map((dept) => (
             <Link href={`/departments/${dept.slug}`} key={dept.slug} className="block hover:no-underline">
                <Card className="flex h-full flex-col items-center text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <dept.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-headline pt-4 text-lg">{dept.name}</CardTitle>
                  </CardHeader>
                </Card>
             </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
            <Button asChild variant="outline">
                <Link href="/departments">View All Departments</Link>
            </Button>
        </div>
      </section>

      <section className="container">
        <h2 className="font-headline mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Latest News
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {recentPosts.map((post) => {
            const image = getImage(post.imageId);
            return (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                {image && (
                   <div className="aspect-video relative">
                     <Image
                       src={image.imageUrl}
                       alt={post.title}
                       fill
                       className="object-cover"
                       data-ai-hint={image.imageHint}
                     />
                   </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                   <p className="text-sm text-muted-foreground mt-4">{post.date} &middot; by {post.author}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-8 text-center">
            <Button asChild>
                <Link href="/blog">Read More on Our Blog</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
