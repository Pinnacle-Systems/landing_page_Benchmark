import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ImageGallery } from "@/components/image-gallery";
import fs from "fs";
import path from "path";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { id: "step-1" },
    { id: "step-2" },
    { id: "step-3" },
    { id: "step-4" },
  ];
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  // Map step IDs to folder names
  const folderMap: { [key: string]: string } = {
    "step-1": "step-1_products",
    "step-2": "step-2_products",
    "step-3": "step-3_products",
    "step-4": "step-4_products",
  };

  // Map step IDs to titles
  const titleMap: { [key: string]: string } = {
    "step-1": "Men's Clothing",
    "step-2": "Women's Clothing",
    "step-3": "Children's Clothing",
    "step-4": "Infant Wear",
  };

  const folderName = folderMap[id] || `${id}_products`;
  const title = titleMap[id] || "Products";
  
  const publicDir = path.join(process.cwd(), "public");
  const productsDir = path.join(publicDir, "products", folderName);
  
  let images: string[] = [];
  try {
    if (fs.existsSync(productsDir)) {
      const files = fs.readdirSync(productsDir);
      images = files.filter(file => 
        /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file)
      ).sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
      });
    }
  } catch (error) {
    console.error("[ProductPage] Error reading directory:", error);
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mb-12">
          <Link 
            href="/#apparels" 
            className="text-sm font-medium text-accent hover:underline mb-4 inline-block"
          >
            ← Back to Apparels
          </Link>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground capitalize">
            Explore our exclusive collection of {title.toLowerCase()}.
          </p>
        </div>

        {images.length > 0 ? (
          <ImageGallery images={images} folderName={folderName} title={title} />
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No products found in this category.</p>
            <p className="text-sm text-muted-foreground mt-2">Checked directory: {folderName}</p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
