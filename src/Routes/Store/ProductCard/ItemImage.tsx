export const ItemImage: React.FC<{ img: string; productIsFeatured: boolean }> = ({
  img,
  productIsFeatured
}) => {
  return (
    <figure className="h-1/1 flex flex-col p-4">
      {productIsFeatured ? (
        <div className="badge badge-accent self-end rounded-full font-bold">On Sale</div>
      ) : null}
      <img
        src={`../../../public/Assets/Products/${img}`}
        className="h-full w-full object-contain"
      />
    </figure>
  );
};
