import { useLoaderData } from 'react-router';
import { Article } from '../../DataLoaders/newsLoader';
import { format } from 'date-fns';
import { ShareButton } from '../../Components/Share/ShareButton';
import { ShareOptions } from '../../Components/Share/ShareOptions';

export const NewsArticle = () => {
  const loaderData = useLoaderData() as Article;
  const { img, date, title, text } = loaderData;
  const formattedDate = format(new Date(date), 'dd/MM/yyyy');

  return (
    <main className=" md:mx-24 lg:mx-48 xl:mx-64">
      <h1 className="h1-font my-2  text-center md:m-4 md:text-5xl">{title}</h1>
      <div className="divider" />

      <div className="mx-8 flex flex-row justify-between md:my-4">
        <div className="flex flex-row justify-center md:text-xl">
          <p className="mr-2 border-r px-1 font-bold text-accent">NEWS</p>
          <span className="text-gray-500">{formattedDate}</span>
        </div>
        <div className="flex justify-center">
          <div className="hidden md:block">
            <ShareButton />
          </div>
          <div className="md:hidden">
            <ShareOptions showOptions={true} />
          </div>
        </div>
      </div>
      <figure className="flex justify-center">
        <img className="my-4 h-96" src={`/Assets/News/${img}.png`} alt={title} />
      </figure>
      <div className="divider" />
      <div className="my-4 px-8 font-mono text-lg leading-relaxed lg:text-2xl">{text}</div>
    </main>
  );
};
