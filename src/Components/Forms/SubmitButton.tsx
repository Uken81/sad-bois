export const SubmitButton: React.FC<{
  isSubmitting: boolean;
  text?: string | undefined;
  loadingText?: string | undefined;
}> = ({ isSubmitting, text, loadingText }) => {
  const buttonText = text ? text : 'Submit';
  const loadingButtonText = loadingText ? loadingText : 'Submitting';
  const hoverStyles = 'bg-gradient-to-r from-yellow-400 to-black';

  return (
    <button
      className={`bg-yellow-400 hover:${hoverStyles} text-gray-800 font-semibold py-2 px-4 m-2 border border-gray-400 rounded shadow`}>
      {isSubmitting ? loadingButtonText : buttonText}
    </button>
  );
};
