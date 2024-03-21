import { ImageWithLoading } from '../../../Components/ImageWithLoading';

export const ItemImage: React.FC<{ img: string; isFeatured: boolean }> = ({ img, isFeatured }) => {
  return (
    <figure className="flex h-72 flex-col p-4">
      {isFeatured ? (
        <div className="badge badge-accent self-end rounded-full font-bold">On Sale</div>
      ) : null}
      <ImageWithLoading
        src={`/Assets/Products/${img}.png`}
        style={{ height: '100%', width: '100%', objectFit: 'contain' }}
      />
    </figure>
  );
};
