import { notFound } from "next/navigation";
import Image from "next/image";
import { departments } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateStaticParams() {
  return departments.map((dept) => ({
    slug: dept.slug,
  }));
}

const getImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((img) => img.id === id);

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const department = departments.find((d) => d.slug === params.slug);

  if (!department) {
    notFound();
  }

  return (
    <div className="fade-in container max-w-5xl py-12">
      <div className="text-center mb-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
          <department.icon className="h-10 w-10" />
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          {department.name}
        </h1>
      </div>
      
      <div>
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Faculty</h2>
        {department.teachers.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {department.teachers.map((teacher) => {
              const image = getImage(teacher.imageId);
              return (
                <Card key={teacher.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="items-center">
                    {image && (
                      <div className="relative h-24 w-24">
                        <Image
                          src={image.imageUrl}
                          alt={`Portrait of ${teacher.name}`}
                          width={200}
                          height={200}
                          className="rounded-full object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <CardTitle className="font-headline pt-4 text-xl">{teacher.name}</CardTitle>
                    <p className="text-sm font-medium text-primary">{teacher.role}</p>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Faculty information coming soon.</p>
        )}
      </div>
    </div>
  );
}
