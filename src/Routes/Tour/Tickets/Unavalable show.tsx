import { useNavigate } from 'react-router';

export const UnavailableShow: React.FC<{ status: string }> = ({ status }) => {
  const navigate = useNavigate();
  let text: string;

  switch (status) {
    case 'sold-out':
      text = 'Sorry but tickets for the requested show are sold out.';
      break;
    case 'pending':
      text =
        'Sorry but tickets for the requested show are not available yet, please check again later.';
      break;
    case 'postponed':
      text =
        'The requested show has been postponed, please check back later for confirmation of new date.';
      break;
    default:
      text = 'Sorry but tickets for the requested show can not be purchased at this time';
  }

  return (
    <main className="mx-24 flex h-screen flex-col items-center justify-center">
      <h1 className="px-24 text-h1 font-h1">{text}</h1>
      <div className="btn btn-accent mt-4" onClick={() => navigate('/tour')}>
        Back to tours
      </div>
    </main>
  );
};
