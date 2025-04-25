import Loader from "./Loader";

const FullScreenLoader = () => {
  return (
    <div className="bg-white flex justify-center h-full items-center">
      <Loader size="lg" />
    </div>
  );
};

export default FullScreenLoader;
