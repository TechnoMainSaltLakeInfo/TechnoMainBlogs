import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { departmentCategories } from "@/lib/data";

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

      <div className="mt-12 space-y-12">
        {departmentCategories.map((category) => (
          <div key={category.name}>
            <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
              <category.icon className="h-7 w-7 text-primary" />
              {category.name}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.departments.map((dept) => (
                <Link href={`/departments/${dept.slug}`} key={dept.slug} className="block hover:no-underline">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="flex-row items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                        <dept.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="font-headline text-base">{dept.name}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
