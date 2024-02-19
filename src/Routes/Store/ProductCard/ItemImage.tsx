export const ItemImage: React.FC<{ img: string; isFeatured: boolean }> = ({ img, isFeatured }) => {
  return (
    <figure className="flex flex-col p-4">
      {isFeatured ? (
        <div className="badge badge-accent self-end rounded-full font-bold">On Sale</div>
      ) : null}
      <img src={`/Assets/Products/${img}.png`} className="h-full w-full object-contain" />
    </figure>
  );
};
