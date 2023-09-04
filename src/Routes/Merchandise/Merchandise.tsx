import { Featured } from './Featured';
import { Products } from './Products';
import './merchandise.scss';

export const Merchandise: React.FC = () => {
  console.log('merch page');
  return (
    <main>
      <h1>Swag</h1>
      <Featured />
      <Products />
    </main>
  );
};
