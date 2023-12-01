import { Button } from 'react-bootstrap';

export const SubmitButton: React.FC<{
  isSubmitting: boolean;
  text?: string | undefined;
  loadingText?: string | undefined;
}> = ({ isSubmitting, text, loadingText }) => {
  const buttonText = text ? text : 'Submit';
  const loadingButtonText = loadingText ? loadingText : 'Submitting';

  return (
    <Button type="submit" size="lg" variant="warning" disabled={isSubmitting}>
      {isSubmitting ? loadingButtonText : buttonText}
    </Button>
  );
};
