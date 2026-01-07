import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clubs } from "@/lib/data";

export default function ClubsPage() {
  return (
    <div className="fade-in container py-12">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Student Clubs & Organizations
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find your community and explore your passions outside the classroom.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {clubs.map((club) => (
          <Card key={club.name} className="flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <club.icon className="h-10 w-10" />
              </div>
              <CardTitle className="font-headline pt-4">{club.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{club.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
