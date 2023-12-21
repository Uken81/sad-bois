import { Dispatch } from 'react';

export const SizeSelectors: React.FC<{
  size: string;
  setSize: Dispatch<React.SetStateAction<string>>;
  display: boolean;
}> = ({ size, setSize, display }) => {
  return display ? (
    <div className="flex flex-row">
      <div className="flex w-fit flex-col text-center">
        <label
          htmlFor="small"
          className={`${size === 's' ? 'font-bold text-accent' : 'text-primary'}`}>
          S
        </label>
        <input
          id="small"
          type="radio"
          name="size"
          checked={size === 's'}
          className="radio-primary radio mx-4"
          onChange={() => setSize('s')}
        />
      </div>
      <div className="flex w-fit flex-col text-center">
        <label
          htmlFor="medium"
          className={`${size === 'm' ? 'font-bold text-accent' : 'text-primary'}`}>
          M
        </label>
        <input
          id="medium"
          type="radio"
          name="size"
          checked={size === 'm'}
          className="radio-primary radio mx-4"
          onChange={() => setSize('m')}
        />
      </div>
      <div className="flex w-fit flex-col text-center">
        <label
          htmlFor="large"
          className={`${size === 'l' ? 'font-bold text-accent' : 'text-primary'}`}>
          L
        </label>
        <input
          id="large"
          type="radio"
          name="size"
          checked={size === 'l'}
          className="radio-primary radio mx-4"
          onChange={() => setSize('l')}
        />
      </div>
      <div className="flex w-fit flex-col text-center">
        <label
          htmlFor="extra-large"
          className={`${size === 'xl' ? 'font-bold text-accent' : 'text-primary'}`}>
          XL
        </label>
        <input
          id="extra-large"
          type="radio"
          name="size"
          checked={size === 'xl'}
          className="radio-primary radio mx-4"
          onChange={() => setSize('xl')}
        />
      </div>
      <div className="flex w-fit flex-col text-center">
        <label
          htmlFor="extra-extra-large"
          className={`${size === 'xxl' ? 'font-bold text-accent' : 'text-primary'}`}>
          XXL
        </label>
        <input
          id="extra-extra-large"
          type="radio"
          name="size"
          checked={size === 'xxl'}
          className="radio-primary radio mx-4"
          onChange={() => setSize('xxl')}
        />
      </div>
    </div>
  ) : null;
};
