import { Carafe, Wine } from '@prisma/client';
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from '@remix-run/react';
import { loader } from '~/routes/app.wines.$id.editcarafe';



export default function wineCarafeForm() {
  const validationErrors = useActionData();
  const data= useLoaderData<typeof loader>();
  console.log(data.wine)
  console.log(data.carafe)
  const navigation = useNavigation();

  const defaultValues = data.carafe
    ? {
        number: data.carafe.number,
        //wineId: carafeData.wineId,
      }
    : {
        number: '',
      };

  const isSubmitting = navigation.state !== 'idle';

  return (
    <Form
      method={data.carafe ? 'patch' : 'post'}
      className="form"
      id="wine-form"
    >
      <p>
        <label htmlFor="title">Dans quelle caraphe est mis le vin "{data.wine.name}" de {data.wine.year}?</label>
        <input
          type="number"
          id="number"
          name="number"
          required
          defaultValue={defaultValues.number}
        />
        <input
          type="string"
          id="wineId"
          name="wineIdafe"
          required
          hidden={true}
          defaultValue={data.wine.id}
        />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Sauvegarde...' : 'Sauver'}
        </button>
        <Link to="..">Annuler</Link>
      </div>
      {validationErrors? (
        <ul>
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      ):<></>}
    </Form>
  );
}

