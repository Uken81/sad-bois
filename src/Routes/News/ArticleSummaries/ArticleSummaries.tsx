import { format } from 'date-fns';
import { Article } from '../../../DataLoaders/newsLoader';
import { useNavigate } from 'react-router';
import { capitaliseWords } from '../../../Utils/Formatters/capitaliseWords';
import { ArticleLink } from './ArticleLink';
import { ImageWithLoading } from '../../../Components/ImageWithLoading';

export const ArticleSummaries: React.FC<{ articles: Article[]; isLatest: boolean }> = ({
  articles,
  isLatest
}) => {
  const navigate = useNavigate();
  const dateHeading = isLatest ? 'LATEST NEWS' : 'NEWS';

  return (
    <>
      {articles.map((article) => {
        const { id, img, date, title } = article;
        const formattedDate = format(new Date(date), 'dd/MM/yyyy');

        return (
          <div
            key={id}
            className="flex w-60 flex-col space-y-8 align-middle hover:cursor-pointer md:w-72"
            onClick={() => navigate(`/news/article/${id}`)}>
            <figure className="mt-2  max-h-72 w-full bg-base-300">
              <ImageWithLoading
                src={`/Assets/News/${img}.png`}
                style={{ maxHeight: '18rem', width: '100%' }}
              />
            </figure>
            <div>
              <div className="h-24 md:h-32">
                <div className="flex items-center">
                  <span className="mr-2 font-bold">{dateHeading}:</span>
                  <span>{formattedDate}</span>
                </div>
                <h3 className="card-title text-base text-primary lg:text-xl lg:leading-7">
                  {capitaliseWords(title)}
                </h3>
              </div>
              <div className="mt-auto hidden md:block">
                <ArticleLink id={id} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
