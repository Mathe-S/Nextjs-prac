import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.iamges.findMany({
    orderBy: (model, { desc }) => desc(model.name),
  });

  return (
    <main className="flex flex-wrap gap-10">
      {images.map((img) => (
        <div key={img.id}>
          <img src={img.url} alt={img.name} className="w-48" />
          <div>{img.name}</div>
        </div>
      ))}
    </main>
  );
}
