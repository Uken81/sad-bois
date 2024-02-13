import bannerImage from './banner1.png';
export const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div
        className="h-[32rem] w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      {/* <div className="h-[32rem] w-screen bg-[url('./banner1.png')] bg-cover bg-center" /> */}
    </div>
  );
};
