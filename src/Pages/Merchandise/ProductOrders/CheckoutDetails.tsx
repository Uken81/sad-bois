import { Formik, Form, Field } from 'formik';
//change this to current form
interface LoginFormValues {
  email: string;
  password: string;
}

export const CheckoutDetails = () => {
  const handleSubmit = (
    values: LoginFormValues,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    console.log('values', values);
  };
  return (
    <div className="container mt-5">
      <h4>Contact</h4>
      <Formik
        initialValues={{
          email: '',
          emailOffers: false,
          country: 'Australia',
          firstName: '',
          lastName: '',
          company: '',
          address: '',
          apartment: '',
          suburb: '',
          state: '',
          postcode: '',
          phone: ''
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values, setSubmitting);
        }}>
        {(formik) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="form-control"
                label="EMAIL"
                id="email"
                placeholder="EMAIL"
              />
            </div>
            <div className="form-check mb-3">
              <Field
                name="emailOffers"
                type="checkbox"
                className="form-check-input"
                id="emailOffers"
              />
              <label className="form-check-label" htmlFor="emailOffers">
                Email me with news and offers
              </label>
            </div>

            <h4>Shipping address</h4>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country/region
              </label>
              <Field as="select" name="country" className="form-select" id="country">
                <option>Australia</option>
                {/* Add other countries here */}
              </Field>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <Field name="firstName" type="text" className="form-control" id="firstName" />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <Field name="lastName" type="text" className="form-control" id="lastName" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <Field name="address" type="text" className="form-control" id="address" />
            </div>
            <div className="mb-3">
              <label htmlFor="apartment" className="form-label">
                Apartment, suite, etc. (optional)
              </label>
              <Field name="apartment" type="text" className="form-control" id="apartment" />
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="suburb" className="form-label">
                  Suburb
                </label>
                <Field name="suburb" type="text" className="form-control" id="suburb" />
              </div>
              <div className="col-md-3">
                <label htmlFor="state" className="form-label">
                  State/territory
                </label>
                <Field as="select" name="state" className="form-select" id="state">
                  {/* Add states here */}
                </Field>
              </div>
              <div className="col-md-3">
                <label htmlFor="postcode" className="form-label">
                  Postcode
                </label>
                <Field name="postcode" type="text" className="form-control" id="postcode" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone (optional)
              </label>
              <Field name="phone" type="text" className="form-control" id="phone" />
            </div>
            <div className="form-check mb-3">
              <Field
                name="textOffers"
                type="checkbox"
                className="form-check-input"
                id="textOffers"
              />
              <label className="form-check-label" htmlFor="textOffers">
                Text me with news and offers
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Continue to shipping
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
