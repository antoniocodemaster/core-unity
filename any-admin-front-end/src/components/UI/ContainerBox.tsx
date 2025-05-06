interface ContainerBoxProps {
  children: React.ReactNode;
  className?: string;
  widthType?: 'full' | 'half' | 'quarter' | 'three-quarter';
}

const widthMap = {
  full: 'w-full',
  half: 'w-1/2',
  quarter: 'w-1/4',
  'three-quarter': 'w-3/4',
} as const;

const ContainerBox = ({
  children,
  className = '',
  widthType = 'full',
}: ContainerBoxProps) => {
  const widthClass = widthMap[widthType] || widthMap.full;

  return (
    <div
      className={`p-4 bg-white rounded-lg shadow-md mb-4 ${widthClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerBox;
