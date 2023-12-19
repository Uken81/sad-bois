import { useLoaderData, useNavigate } from 'react-router';
import { capitaliseWords } from '../../Utils/capitaliseWords';
import { Article } from './DataLoaders/newsLoader';
import { format } from 'date-fns';

export const NewsPage: React.FC<{ latest?: Article[] }> = ({ latest }) => {
  const loaderData = useLoaderData() as Article[];
  const all = loaderData;
  const articles = latest || all;
  const dateHeading = articles.length === 3 ? 'LATEST NEWS' : 'NEWS';
  const navigate = useNavigate();

  return (
    <div className="mx-auto grid grid-cols-1 justify-items-center gap-6 md:grid-cols-3 md:gap-6 lg:gap-8 xl:gap-10">
      {articles.map((article) => {
        const { id, img, date, title } = article;
        const formattedDate = format(new Date(date), 'dd/MM/yyyy');
        return (
          <div key={id} className="card w-72 bg-base-100 shadow-xl lg:w-80 xl:w-96">
            <figure>
              <img src={`../../../public/Assets/News/${img}.png`} alt={title} />
            </figure>
            <div className="card-body">
              <div className="flex items-center space-x-2">
                <h5 className="font-bold text-accent">{dateHeading}:</h5>
                <h6>{formattedDate}</h6>
              </div>
              <h3 className="card-title">{capitaliseWords(title)}</h3>

              <div className="card-actions mr-auto mt-2 justify-end border-b border-l border-black duration-300 hover:bg-accent hover:text-white">
                <p className="px-1 text-lg " onClick={() => navigate(`/news/article/${id}`)}>
                  Read More
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
