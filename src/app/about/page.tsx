import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

const getImage = (id: string): ImagePlaceholder | undefined =>
  PlaceHolderImages.find((img) => img.id === id);

export default function AboutPage() {
  return (
    <div className="fade-in container py-12">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Meet the Team
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The brilliant minds behind the TMSL static site. A dedicated team of developers and designers.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {teamMembers.map((member) => {
          const image = getImage(member.imageId);
          return (
            <Card key={member.name} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="items-center">
                {image && (
                  <div className="relative h-24 w-24">
                    <Image
                      src={image.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      width={200}
                      height={200}
                      className="rounded-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardTitle className="font-headline pt-4 text-xl">{member.name}</CardTitle>
                <p className="text-sm font-medium text-primary">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
