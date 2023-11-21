// /wines => shared layout
import { Wine } from '@prisma/client';
import { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { FaPlus, FaDownload } from 'react-icons/fa';
import WinesList from '~/components/wines/WinesList';
import { requireUserSession } from '~/data/auth.server';


import { addWine, getWines } from '~/data/wines.server';
import { getUsers } from '~/data/user.server' 
export const loader: LoaderFunction = async ({ params, request, context, }: LoaderFunctionArgs) => {


  const [userId, admin] = await requireUserSession(request);
  
  console.log(userId);
    const wines = await getWines();
    return { wines };
}
export default function winesLayout() {
    
    const data = useLoaderData<typeof loader>();
    const wines: Wine[] = data.wines;
  return (
    <>
      <Outlet />
      <main>
        <section id="wines-actions">
          <Link to="add">
            <FaPlus/>
            <span>Add wine</span>
          </Link>
          <a href="/wines/raw">
            <FaDownload/>
            <span>Load Raw Data</span>
          </a>
        </section>
        <WinesList wines={wines} />
      </main>
    </>
  );
}

