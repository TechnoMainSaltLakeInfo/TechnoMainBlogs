import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { facilities } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

const getImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((img) => img.id === id);

export default function FacilitiesPage() {
  return (
    <div className="fade-in container py-12">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Campus Facilities
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our world-class facilities, designed to support learning, research, and student life.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {facilities.map((facility) => {
          const image = getImage(facility.imageId);
          return (
            <Card key={facility.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              {image && (
                <div className="aspect-video relative">
                  <Image
                    src={image.imageUrl}
                    alt={facility.name}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{facility.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{facility.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
