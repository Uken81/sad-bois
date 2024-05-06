import { Form, Formik } from 'formik';
import { CustomInput } from '../../../../Components/FormComponents/Inputs/CustomInput';
import { SubmitButton } from '../../../../Components/FormComponents/SubmitButton';
import * as Yup from 'yup';
import { useState } from 'react';
import { ErrorMessage } from '../../../../Components/ErrorMessages/ErrorMessage';
import { useNavigate } from 'react-router';
import { serverUrl } from '../../../../Server/serverUrl';
import { FormErrorType } from '../../../../Types/errorTypes';
import { useStore } from '../../../../Store/useStore';

export interface CardDetailsFormType {
  cardNumber: string;
  nameOnCard: string;
  expirationDate: string;
  securityCode: string;
}

export const PaymentDetails = () => {
  const cart = useStore((state) => state.cartState.cart);
  const resetCart = useStore((state) => state.cartState.resetCart);
  const customer = useStore((state) => state.customerState.customer);
  const resetCustomer = useStore((state) => state.customerState.resetCustomer);
  const selectedShipping = useStore((state) => state.customerState.selectedShipping);
  const resetShipping = useStore((state) => state.customerState.resetShipping);
  const [error, setError] = useState<FormErrorType | null>(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    cardNumber: Yup.string().length(16, 'Card number must be 16 digits').required('Card number is required'),
    nameOnCard: Yup.string().required('Name on card is required'),
    expirationDate: Yup.string()
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Invalid expiration date')
      .required('Expiration date is required'),
    securityCode: Yup.string().length(3, 'Security code must be 3 digits').required('Security code is required')
  });

  const handleSubmit = async (values: CardDetailsFormType, setSubmitting: (isSubmitting: boolean) => void) => {
    const resetStoreStates = () => {
      resetCustomer();
      resetCart();
      resetShipping();
    };

    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify({ formValues: values, customer, cart, selectedShipping }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    };

    try {
      const response = await fetch(`${serverUrl}/process-order`, requestOptions);
      if (!response.ok) {
        const data: FormErrorType = await response.json();
        setError({ type: data.type, message: data.message });
        throw new Error(`Network response was not ok: ${data.message}`);
      }
      const data = await response.json();
      const { customerEmail, orderId } = data.orderSummary;
      resetStoreStates();
      setSubmitting(false);
      navigate(`/order-confirmation/${customerEmail}/${orderId}`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        setSubmitting(false);
        setError({ type: 'server', message: 'Error connecting to server' });
        return;
      }

      console.error('An unexpected error occurred:', error);
      setSubmitting(false);
      setError({ type: 'server', message: 'Error connecting to server' });
    }
  };

  const isCardNumberError = error?.type === 'cardNumber';
  const isNameOnCardError = error?.type === 'nameOnCard';
  const isEpirationDateError = error?.type === 'cardExpiration';
  const isSecurityCodeError = error?.type === 'cardSecurityCode';
  const isNetworkError = error?.type === 'network' || false;
  const isServerError = error?.type === 'server' || false;

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        cardNumber: '5688276923105021',
        nameOnCard: 'Mr Test',
        expirationDate: '11/24',
        securityCode: '111'
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}>
      {(formik) => (
        <Form className="px-4">
          <ErrorMessage display={isNetworkError || isServerError} variant="error" message={error?.message ?? null} setError={setError} />
          <CustomInput
            name="cardNumber"
            placeholder="Card Number"
            type="tel"
            inputMode="numeric"
            error={isCardNumberError ? error.message : undefined}
          />
          <CustomInput name="nameOnCard" placeholder="Name On Card" type="text" error={isNameOnCardError ? error.message : undefined} />
          <CustomInput
            name="expirationDate"
            placeholder="Expiration Date (MM / YY)"
            type="text"
            inputMode="numeric"
            error={isEpirationDateError ? error.message : undefined}
          />
          <CustomInput
            name="securityCode"
            placeholder="Security Code"
            type="tel"
            inputMode="numeric"
            error={isSecurityCodeError ? error.message : undefined}
          />
          <div className="py-4 text-center">
            <SubmitButton isSubmitting={formik.isSubmitting} text="Pay Now" loadingText="Processing" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
