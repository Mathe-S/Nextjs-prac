import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: string }) {
  const idToNumber = parseInt(props.id, 10);
  if (Number.isNaN(idToNumber)) throw new Error("Invalid photo ID");

  const image = await getImage(idToNumber);

  return <img src={image.url} alt={image.name} className="w-96" />;
}
