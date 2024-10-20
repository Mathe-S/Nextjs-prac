import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getUserImages() {
  const user = auth();

  if (!user.userId) throw new Error("User not found");

  const images = await db.query.iamges.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId!),
    orderBy: (model, { desc }) => desc(model.name),
  });

  return images;
}
