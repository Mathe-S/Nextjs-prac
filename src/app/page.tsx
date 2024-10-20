import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getUserImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getUserImages();

  return images.map((img) => (
    <div key={img.id}>
      <Link href={`/img/${img.id}`}>
        // Image tag comes from Next.js and is used to optimize images
        <Image
          src={img.url}
          width={192}
          height={192}
          alt={img.name}
          className="w-48"
        />
      </Link>
      <div>{img.name}</div>
    </div>
  ));
}

export default async function HomePage() {
  return (
    <main className="flex flex-wrap gap-10">
      <SignedOut>
        <div className="w-full text-center text-2xl">Please sign in above</div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
