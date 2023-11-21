import { Wine } from '@prisma/client';
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from '@remix-run/react';

function wineForm() {
  const validationErrors = useActionData();
  const wineData: Wine = useLoaderData();
  const navigation = useNavigation();

  const defaultValues = wineData
    ? {
        name: wineData.name,
        year: wineData.year,
        id: wineData.id,
      }
    : {
        name: '',
        year: '',
        id: '',
      };

  const isSubmitting = navigation.state !== 'idle';

  return (
    <Form
      method={wineData ? 'patch' : 'post'}
      className="form"
      id="wine-form"
      // onSubmit={submitHandler}
    >
      <p>
        <label htmlFor="title">wine Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={30}
          defaultValue={defaultValues.name}
        />
      </p>
      <p>
        <label htmlFor="year">wine year</label>
        <input
          type="text"
          id="year"
          name="year"
          required
          maxLength={4}
          defaultValue={defaultValues.year}
        />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save wine'}
        </button>
        <Link to="..">Cancel</Link>
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

export default wineForm;
