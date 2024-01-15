export const SubmitButton: React.FC<{
  isSubmitting: boolean;
  text?: string | undefined;
  loadingText?: string | undefined;
}> = ({ isSubmitting, text, loadingText }) => {
  const buttonText = text ? text : 'Submit';
  const loadingButtonText = loadingText ? loadingText : 'Submitting';

  return (
    <button className="btn btn-primary btn-md w-48" type="submit">
      {isSubmitting ? loadingButtonText : buttonText}
    </button>
  );
};
