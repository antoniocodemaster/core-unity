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
    <div
      className={`flex ${
        gridType === 'row'
          ? 'flex-col md:flex-row'
          : 'flex-col'
      } gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerGrid;
