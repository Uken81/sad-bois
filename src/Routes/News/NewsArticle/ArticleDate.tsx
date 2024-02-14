import { format } from 'date-fns';

export const ArticleDate: React.FC<{ date: Date }> = ({ date }) => {
  const formattedDate = format(new Date(date), 'dd/MM/yyyy');

  return (
    <time className="flex flex-row justify-center md:text-xl">
      <p className="mr-2 border-r px-1 font-bold text-accent">NEWS</p>
      <span className="text-gray-500">{formattedDate}</span>
    </time>
  );
};
