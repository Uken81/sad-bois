export const ProductImage: React.FC<{ imageSrc: string; quantity: number }> = ({
  imageSrc,
  quantity
}) => {
  return (
    <div className="indicator ">
      <span className="badge indicator-item badge-primary bg-accent text-primary">{quantity}</span>
      <img
        className="grid h-32 w-32 place-items-center bg-base-300 p-2"
        src={`/Assets/Products/${imageSrc}`}></img>
    </div>
  );
};
