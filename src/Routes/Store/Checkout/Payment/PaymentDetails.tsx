import { Form, Formik } from 'formik';
import { CustomInput } from '../../../../Components/FormComponents/Inputs/CustomInput';
import { SubmitButton } from '../../../../Components/FormComponents/SubmitButton';
import { useState } from 'react';
import { ErrorMessage } from '../../../../Components/ErrorMessages/ErrorMessage';
import { useNavigate } from 'react-router';
import { serverUrl } from '../../../../Server/serverUrl';
import { FormErrorType } from '../../../../Types/errorTypes';
import { useStore } from '../../../../Store/useStore';
import { paymentValidationSchema } from '../../../../Schemas/formSchemas';

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
      validationSchema={paymentValidationSchema}
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
          <CustomInput name="cardNumber" placeholder="Card Number" type="tel" inputMode="numeric" error={isCardNumberError ? error.message : null} />
          <CustomInput name="nameOnCard" placeholder="Name On Card" type="text" error={isNameOnCardError ? error.message : null} />
          <CustomInput
            name="expirationDate"
            placeholder="Expiration Date (MM / YY)"
            type="text"
            inputMode="numeric"
            error={isEpirationDateError ? error.message : null}
          />
          <CustomInput
            name="securityCode"
            placeholder="Security Code"
            type="tel"
            inputMode="numeric"
            error={isSecurityCodeError ? error.message : null}
          />
          <div className="py-4 text-center">
            <SubmitButton isSubmitting={formik.isSubmitting} text="Pay Now" loadingText="Processing" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
