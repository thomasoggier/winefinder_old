// /wines/<some-id> => /wines/wine-1, /wines/e-1

import { Wine, Carafe } from "@prisma/client";
import { ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData, useNavigate, useNavigation } from '@remix-run/react';

import Modal from '~/components/util/Modal';
import WineCarafeForm from "~/components/wines/WineCarafeForm";
import { addCarafe, deleteCarafe, getCarafe, updateCarafe } from "~/data/carafe.server";
import { validateCarafeInput } from "~/data/validation.server";
import { getWine, updateWine, deleteWine } from "~/data/wines.server";



export const loader: LoaderFunction = async ({ params, request, context, }:LoaderFunctionArgs) => {
  const wineId = params.id;
  const wine = wineId ? await getWine(wineId) : undefined;
  if (!wine)
    return;
  const carafe = await getCarafe(wine.id);
  console.log('1')
  console.log(wine)
  console.log(carafe)
  return json({ wine, carafe });
}


export default function UpdateWineCarafePage() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  }
  return (
    <Modal onClose={closeHandler}>
      <WineCarafeForm/>
    </Modal>
  );
}


export async function action({ params, request }: ActionFunctionArgs) {
  const wineId = params.id;
  if (!wineId)
    return;
  const formData = await request.formData();
  const carafeData = Object.fromEntries(formData);
  console.log(carafeData)
  console.log(request.method)
  if (request.method === 'PATCH') {
    try {
      validateCarafeInput(wineId, carafeData);
    } catch (error) {
      return error;
    }
    await updateCarafe(wineId, carafeData, wineId);
    return redirect('/app//wines');
  }
  else if (request.method == 'POST'){
        try {
      validateCarafeInput(wineId, carafeData);
    } catch (error) {
      return error;
    }
    await addCarafe(carafeData, wineId);
    return redirect('/app/wines');
  }
  /*else if (request.method === 'DELETE') {
    await deleteCarafe(carafeData.id);
    return { deletedId: wineId };
  }
  */
}
