// /wines/add

import { Outlet } from '@remix-run/react';

import winesStyles from '~/styles/wine.css';
import ConnectedHeader from '~/components/navigation/ConnectedHeader';
import MainHeader from '~/components/navigation/MainHeader';
import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { requireUserSession } from '~/data/auth.server';

export const loader: LoaderFunction = async ({ request }: LoaderFunctionArgs) => {
  console.log('tete')
  const [userId, admin] = await requireUserSession(request);
  console.log(`UserConnected: ${userId} - ${admin}`);

    return admin;
}
export default function WinesAppLayout() {
  return (
    <>
      <ConnectedHeader />
      <Outlet />
    </>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: winesStyles }];
}
