// /wines/add

import { ActionFunctionArgs, redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';

import Modal from '~/components/util/Modal';
import { addWine } from '~/data/wines.server';
import WineForm from '~/components/wines/WineForm';
import { Wine } from '@prisma/client';
import { validateWineInput } from '~/data/validation.server';
import { requireUserSession } from '~/data/auth.server';

export default function AddwinesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    navigate('..');
  }

  return (
    <Modal onClose={closeHandler}>
      <WineForm />
    </Modal>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const userId = await requireUserSession(request);

  const formData = await request.formData();
  const wineData = Object.fromEntries(formData);

  try {
    validateWineInput(wineData);
  } catch (error) {
    return error;
  }

  await addWine(wineData);
  return redirect('/app/wines');
}

