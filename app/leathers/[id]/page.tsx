import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LeatherImageGallery } from "@/components/leatherimagegallery";
import fs from "fs";
import path from "path";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return [
    { id: "leather-1" },
    { id: "leather-2" },
  ];
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;   // ⭐ important fix

  const folderMap: Record<string, string> = {
    "leather-1": "step-1_leather",
    "leather-2": "step-2_leather",
  };

  const titleMap: Record<string, string> = {
    "leather-1": "Leather",
    "leather-2": "Footwear",
  };

  const folderName = folderMap[id] || `${id}_leather`;
  const title = titleMap[id] || "Products";

  const productsDir = path.join(
    process.cwd(),
    "public",
    "products",
    folderName
  );

  let images: string[] = [];

  try {
    if (fs.existsSync(productsDir)) {
      const files = fs.readdirSync(productsDir);

      images = files
        .filter((file) => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file))
        .sort((a, b) =>
          a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
        );
    }
  } catch (error) {
    console.error("[LeatherPage] Error reading images:", error);
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mb-12">
          <Link
            href="/#leather"
            className="text-sm font-medium text-accent hover:underline mb-4 inline-block"
          >
            ← Back to Leather
          </Link>

          <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground capitalize">
            Explore our exclusive collection of {title.toLowerCase()}.
          </p>
        </div>

        {images.length > 0 ? (
          <LeatherImageGallery
            images={images}
            folderName={folderName}
            title={title}
          />
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No products found in this category.
            </p>

            <p className="text-sm text-muted-foreground mt-2">
              Checked directory: {folderName}
            </p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}