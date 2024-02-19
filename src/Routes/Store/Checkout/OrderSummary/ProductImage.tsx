export const ProductImage: React.FC<{ imageSrc: string; quantity: number }> = ({
  imageSrc,
  quantity
}) => {
  return (
    <div className="indicator border-r bg-primary ">
      <span className="badge indicator-item badge-primary rounded-full bg-accent py-3 text-xs text-base-100">
        {quantity}
      </span>
      <img
        className="grid h-32 w-44 place-items-center bg-secondary p-1"
        src={`/Assets/Products/${imageSrc}.png`}></img>
    </div>
  );
};
