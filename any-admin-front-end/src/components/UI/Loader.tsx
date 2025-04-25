interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
}

const Loader = ({ size = 'sm' }: LoaderProps) => {
  const sizeMap = {
    sm: 'border-2 h-6 w-6',
    md: 'border-4 h-10 w-10',
    lg: 'border-4 h-16 w-16',
  };
  return (
    <div
      className={`border-gray-300 ${sizeMap[size]} rounded-full animate-spin`}
      style={{ borderTopColor: '#ef4444' }}
    ></div>
  );
};

export default Loader;
