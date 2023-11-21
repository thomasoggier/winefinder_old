import { prisma } from './database.server';
import { Carafe } from '@prisma/client'

export async function addCarafe(carafeData:any, wineId: string) {
    try {
      console.log(carafeData)
    return await prisma.carafe.create({
      data: {
        number: carafeData.number,
        Wine: { connect: { id: wineId } },
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function getCarafe(wineId: string) {
    try {
    const carafe = await prisma.carafe.findFirst({ where: { wineId } });
    return carafe;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function updateCarafe(id: string|undefined, carafeData: any, wineId: string) {
  try {
      await prisma.carafe.update({
      where: { id },
      data: {
        number: carafeData.number,
        Wine: { connect: { id: wineId } },
      },
    });
  } catch (error) {
    throw new Error('Failed to update wine.');
  }
}

export async function deleteCarafe(id:string|undefined) {
  try {
    await prisma.wine.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Failed to delete wine.');
  }
}
