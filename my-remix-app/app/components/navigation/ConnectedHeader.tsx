import { Form, NavLink, useLoaderData } from '@remix-run/react';

import Logo from '../util/Logo';
import { requireUserSession } from '~/data/auth.server';
import { LoaderFunction, LoaderFunctionArgs, json } from '@remix-run/node';
/*
export const loader: LoaderFunction = async ({ params, request, context, }: LoaderFunctionArgs) => {
  console.log('tete')
  const [userId, admin] = await requireUserSession(request);
  console.log(`UserConnected: ${userId} - ${admin}`);

  console.log(`header ${header}`)
    return header;
}
*/

export default function ConnectedHeader() {

    const admin = useLoaderData();
  
  const header = admin
    ? <h1>tatati je suis admin</h1>
    : <h1>snif snif</h1>
  
  //console.log(`ConnectedHeader ${data}`);
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/app/wines" end>
              Manage Wines
            </NavLink>
          </li>
          <li>
          {header}
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <Form method="post" action="/logout">
          <button className="cta">Logout</button>
        </Form>
      </nav>
    </header>
  );
}

