interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'transparent';
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
    case 'danger':
      variantStyle = `bg-danger text-white hover:bg-danger-dark`;
      break;
    case 'warning':
      variantStyle = `bg-warning text-white hover:bg-warning-dark`;
      break;
    default:
      variantStyle = `bg-primary text-white hover:bg-primary-dark`;
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
