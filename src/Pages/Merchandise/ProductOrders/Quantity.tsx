import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export const Quantity: React.FC<{
  setQuantity: Dispatch<SetStateAction<number>>;
}> = ({ setQuantity }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = parseInt(e.target.value, 10);
    setQuantity(amount);
  };

  return (
    <div>
      <label htmlFor="quantity-input">Quantity</label>
      <input
        type="number"
        className="quantity-input"
        id="numberInput"
        name="quantity-input"
        defaultValue={1}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
