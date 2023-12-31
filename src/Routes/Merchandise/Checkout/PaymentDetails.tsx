import { Form, Formik } from 'formik';
import { CustomInput } from '../../../Components/Forms/Inputs/CustomInput';
import { SubmitButton } from '../../../Components/Forms/SubmitButton';
import * as Yup from 'yup';
import { useState } from 'react';
import { ErrorMessage, FormErrorType } from '../../../Components/ErrorMessage';
import { useNavigate, useOutletContext } from 'react-router';
import {
  CustomerContextType,
  SelectedShippingContextType
} from '../../RouteWrappers/checkoutWrapper';
import { CartContextType } from '../../RouteWrappers/storeWrapper';

export interface CardDetailsFormType {
  cardNumber: string;
  nameOnCard: string;
  expirationDate: string;
  securityCode: string;
}
export const PaymentDetails = () => {
  const outletContext = useOutletContext();
  const { customer, setCustomer } = outletContext as CustomerContextType;
  const { cart, setCart } = outletContext as CartContextType;
  const { selectedShipping, setSelectedShipping } = outletContext as SelectedShippingContextType;
  const [error, setError] = useState<FormErrorType | null>(null);
  const navigate = useNavigate();
  console.log('PDCustomer', customer);
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string()
      //TODO: Investigate using regex for more detailed validaion.
      .length(16, 'Card number must be 16 digits')
      .required('Card number is required'),
    nameOnCard: Yup.string().required('Name on card is required'),
    expirationDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Invalid expiration date')
      .required('Expiration date is required'),
    securityCode: Yup.string()
      .length(3, 'Security code must be 3 digits')
      .required('Security code is required')
  });

  const handleSubmit = async (
    values: CardDetailsFormType,
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    console.log('CardValues', values);
    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify({ formValues: values, customer, cart, selectedShipping }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    };

    try {
      const response = await fetch('http://localhost:2001/process-order', requestOptions);
      if (!response.ok) {
        const data: FormErrorType = await response.json();
        setError({ type: data.type, message: data.message });
        throw new Error(`Network response was not ok: ${data.message}`);
      }
      console.log('res', response);
      const data = await response.json();
      console.log('dat', data);
      const { customerEmail, trackingId } = data.orderSummary;
      setCustomer(null);
      setCart(null);
      setSelectedShipping(null);
      setSubmitting(false);
      navigate(`/orderConfirmation/${customerEmail}/${trackingId}`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        setSubmitting(false);
        return;
      }

      console.error('An unexpected error occurred:', error);
      setSubmitting(false);
    }
  };

  const isCardNumberError = error?.type === 'cardNumber';
  const isNameOnCardError = error?.type === 'nameOnCard';
  const isEpirationDateError = error?.type === 'cardExpiration';
  const isSecurityCodeError = error?.type === 'cardSecurityCode';
  const isNetworkError = error?.type === 'network' || false;

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        cardNumber: '5688276923105021',
        nameOnCard: 'Mr Test',
        expirationDate: '11/24',
        securityCode: '666'
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}>
      {(formik) => (
        <Form>
          <ErrorMessage
            display={isNetworkError}
            variant="danger"
            message={error?.message ?? null}
            setError={setError}
          />
          <h2>Credit card</h2>
          <CustomInput
            name="cardNumber"
            label="Card Number"
            type="tel"
            inputMode="numeric"
            placeholder="5688 2769 2310 5021"
            error={isCardNumberError ? error.message : undefined}
          />
          <CustomInput
            name="nameOnCard"
            label="Name On Card"
            type="text"
            error={isNameOnCardError ? error.message : undefined}
          />
          <CustomInput
            name="expirationDate"
            label="Expiration Date (MM / YY)"
            type="text"
            inputMode="numeric"
            error={isEpirationDateError ? error.message : undefined}
          />
          <CustomInput
            name="securityCode"
            label="Security Code"
            type="tel"
            inputMode="numeric"
            error={isSecurityCodeError ? error.message : undefined}
          />
          <SubmitButton
            isSubmitting={formik.isSubmitting}
            text="Pay Now"
            loadingText="Processing"
          />
        </Form>
      )}
    </Formik>
  );
};
