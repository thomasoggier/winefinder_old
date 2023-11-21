import { Wine } from "@prisma/client";
import { prisma } from './database.server';

export async function addWine(wineData: any) {
  try {
    return await prisma.wine.create({
      data: {
        name: wineData.name,
        year: wineData.year,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getWines() {
  try {
    const wines: Wine[] = await prisma.wine.findMany({
      //orderBy: { date: 'desc' },
    });
    return wines;
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function getWine(id: string) {
  try {
    const wine = await prisma.wine.findFirst({ where: { id } });
    return wine;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateWine(id: string|undefined, wineData: any) {
  try {
    await prisma.wine.update({
      where: { id },
      data: {
        name: wineData.name,
        year: wineData.year,
      },
    });
  } catch (error) {
    throw new Error('Failed to update wine.');
  }
}

export async function deleteWine(id:string|undefined) {
  try {
    await prisma.wine.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Failed to delete wine.');
  }
}
