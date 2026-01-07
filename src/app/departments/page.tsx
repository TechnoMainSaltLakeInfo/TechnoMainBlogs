import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { departments } from "@/lib/data";

export default function DepartmentsPage() {
  return (
    <div className="fade-in container py-12">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Academic Departments
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover our diverse range of departments, each a center of excellence and innovation in its field.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <Card key={dept.name} className="flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <dept.icon className="h-10 w-10" />
              </div>
              <CardTitle className="font-headline pt-4">{dept.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{dept.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
