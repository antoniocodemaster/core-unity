interface TextProps {
  children: React.ReactNode;
  style?: 'muted' | 'default' | 'error';
  className?: string;
}

const Text = ({ children, style, className }: TextProps) => {
  const textClassName =
    style === 'muted' ? 'text-sm text-gray-500' :
    style === 'error' ? 'text-sm text-red-500' :
    'text-gray-600';
  return <p className={`${textClassName} ${className}`}>{children}</p>;
};

export default Text;
