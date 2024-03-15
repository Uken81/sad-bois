export const UnavailableShow: React.FC<{ status: string }> = ({ status }) => {
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
        'The requested show has been postponed, please check back later to for confirmation of new date.';
      break;
    default:
      text = 'Sorry but tickets for the requested show can not be purchased at this time';
  }
  <main>
    <h1>{text}</h1>
  </main>;
};
