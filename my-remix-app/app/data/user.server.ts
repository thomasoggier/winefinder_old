import { User } from "@prisma/client";
import { prisma } from "./database.server";

export async function getUsers() {
  try {
    const users: User[] = await prisma.user.findMany({
      //orderBy: { date: 'desc' },
    });
    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
}