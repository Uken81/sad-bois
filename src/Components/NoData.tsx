export const NoData: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4 rounded border bg-secondary p-10 md:w-1/2">
        <h1 className="text-h1 font-h1">Server Error: {title}</h1>
        <p className="my-2 text-primary">Please refresh page or try again later.</p>
      </div>
    </div>
  );
};
