interface TitleProps {
  title: string;
  style?: 'PageTitle' | 'SectionTitle' | 'SubSectionTitle';
  className?: string;
}

const Title = ({
  title,
  style = 'PageTitle',
  className = '',
}: TitleProps) => {
  switch (style) {
    case 'PageTitle':
      return <h1 className={`text-2xl font-bold ${className}`}>{title}</h1>;
    case 'SectionTitle':
      return (
        <h2 className={`text-xl font-bold mb-2 ${className}`}>
          {title}
        </h2>
      );
    case 'SubSectionTitle':
      return <h3 className={`text-lg font-bold ${className}`}>{title}</h3>;
    default:
      return <h1 className={`text-2xl font-bold ${className}`}>{title}</h1>;
  }
};

export default Title;
