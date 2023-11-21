// /wines/<some-id> => /wines/wine-1, /wines/e-1

import { ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { useNavigate } from '@remix-run/react';

import Modal from '~/components/util/Modal';
import WineForm from "~/components/wines/WineForm";
import { validateWineInput } from "~/data/validation.server";
import { getWine, updateWine, deleteWine } from "~/data/wines.server";



export const loader: LoaderFunction = async ({ params, request, context, }:LoaderFunctionArgs) => {
    const wineId = params.id;
    const wine = wineId?await getWine(wineId):undefined;
    return wine;
}


export default function UpdateWinePage() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  }

  return (
    <Modal onClose={closeHandler}>
      <WineForm />
    </Modal>
  );
}


export async function action({ params, request }: ActionFunctionArgs) {
  const wineId = params.id;
  console.log(`action with wine id: ${wineId} `)
  if (request.method === 'PATCH') {
    const formData = await request.formData();
    const wineData = Object.fromEntries(formData);
    try {
      validateWineInput(wineData);
    } catch (error) {
      return error;
    }
    await updateWine(wineId, wineData);
    return redirect('/wines');
  } else if (request.method === 'DELETE') {
    await deleteWine(wineId);
    return { deletedId: wineId };
  }
}
