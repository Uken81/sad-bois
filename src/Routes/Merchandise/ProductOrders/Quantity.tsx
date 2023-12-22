import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

export const Quantity: React.FC<{
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}> = ({ quantity, setQuantity }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = parseInt(e.target.value, 10);
    setQuantity(amount);
  };

  return (
    <div className="flex flex-row">
      <p
        className="w-10 border-2 border-primary bg-accent p-2 text-center text-lg hover:cursor-pointer"
        onClick={() => setQuantity((count) => Math.max(count - 1, 1))}>
        <FaMinus />
      </p>
      <input
        className=" w-10 bg-primary text-center text-secondary"
        type="number"
        id="numberInput"
        name="quantity-input"
        defaultValue={1}
        value={quantity}
        onChange={(e) => handleChange(e)}
      />
      <p
        className="w-10 border-2 border-primary bg-accent p-2 text-center text-lg hover:cursor-pointer"
        onClick={() => setQuantity((count) => count + 1)}>
        <FaPlus />
      </p>
    </div>
  );
};
