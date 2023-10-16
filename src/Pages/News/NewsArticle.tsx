import { useLoaderData } from 'react-router';
import { Article } from './DataLoaders/newsLoader';
import { format } from 'date-fns';
import { useState } from 'react';
import { HiOutlineShare } from 'react-icons/hi2';
import { Share } from './ShareOptions';

export const NewsArticle = () => {
  const [showOptions, setShowOptions] = useState(false);
  const loaderData = useLoaderData() as Article;
  const { id, date, title, text } = loaderData;
  const formattedDate = format(new Date(date), 'dd/MM/yyyy');

  //todo: Change link value when website is published
  const link = `http://localhost:5173/news/${id}`;
  console.log('op', showOptions);

  return (
    <main>
      <div>
        <h1>{title}</h1>
        <div className="date">
          <p>
            NEWS | <span>{formattedDate}</span>
          </p>
        </div>
        <div>
          <HiOutlineShare onClick={() => setShowOptions(!showOptions)} />
          <Share showOptions={showOptions} link={link} />
        </div>
      </div>
      <div className="article-text">{text}</div>
    </main>
  );
};
