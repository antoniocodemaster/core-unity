interface ContainerGridProps {
  children: React.ReactNode;
  gridType?: 'row' | 'col';
  className?: string;
}

const ContainerGrid = ({
  children,
  className = '',
  gridType = 'row',
}: ContainerGridProps) => {
  return (
    <div className={`flex flex-${gridType} gap-4 ${className}`}>{children}</div>
  );
};

export default ContainerGrid;
