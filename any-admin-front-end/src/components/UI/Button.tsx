interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'go' | 'stop' | 'warning' | 'transparent';
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  fit?: 'fit' | 'full';
}

const Button = ({
  children,
  className,
  variant,
  type,
  size = 'medium',
  fit = 'fit',
  ...props
}: ButtonProps) => {
  let baseStyle = `w-${fit} rounded-md transition-all duration-300`;
  let variantStyle = '';
  let sizeStyle = '';

  switch (size) {
    case 'small':
      sizeStyle = 'p-1 text-sm';
      break;
    case 'large':
      sizeStyle = 'p-3 text-lg';
      break;
    default:
      sizeStyle = 'p-2';
      break;
  }

  switch (variant) {
    case 'transparent':
      variantStyle = `bg-transparent text-black hover:opacity-60`;
      break;
    case 'stop':
      variantStyle = `bg-red-500 text-white hover:bg-red-600`;
      break;
    case 'warning':
      variantStyle = `bg-yellow-500 text-white hover:bg-yellow-600`;
      break;
    default:
      variantStyle = `bg-primary text-white hover:bg-green-600`;
      break;
  }

  const finalClassName = `${baseStyle} ${variantStyle} ${sizeStyle} ${className || ''}`;

  return (
    <button type={type} className={finalClassName.trim()} {...props}>
      {children}
    </button>
  );
};

export default Button;
