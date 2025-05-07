import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface BreadcrumbProps {
  items: {
    label: string;
    path: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center ">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <Link to={item.path} className="text-gray-500 hover:text-gray-700">
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <ChevronRightIcon className="w-4 h-4 text-gray-500 mx-2" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
