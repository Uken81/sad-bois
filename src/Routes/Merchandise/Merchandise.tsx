import { Featured } from './Featured';
import { Products } from './Products';
import './merchandise.scss';

export const Merchandise: React.FC = () => {
  return (
    <main>
      <h1>Swag</h1>
      <Featured />
      <Products />
    </main>
  );
};
