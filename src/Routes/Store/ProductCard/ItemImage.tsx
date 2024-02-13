export const ItemImage: React.FC<{ img: string; isFeatured: boolean }> = ({ img, isFeatured }) => {
  return (
    <figure className="h-1/1 flex flex-col p-4">
      {isFeatured ? (
        <div className="badge badge-accent self-end rounded-full font-bold">On Sale</div>
      ) : null}
      <img
        src={`../../../public/Assets/Products/${img}`}
        className="h-full w-full object-contain"
      />
    </figure>
  );
};
