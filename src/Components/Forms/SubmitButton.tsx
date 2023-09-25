import { Button } from 'react-bootstrap';

export const SubmitButton: React.FC<{ isSubmitting: boolean }> = ({ isSubmitting }) => (
  <Button type="submit" size="lg" variant="warning" disabled={isSubmitting}>
    {isSubmitting ? 'Submitting' : 'Submit'}
  </Button>
);
