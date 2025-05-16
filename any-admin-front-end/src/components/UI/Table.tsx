import { Link } from 'react-router-dom';
import Button from './Button';

interface TableProps {
  columns: { key: string; label: string }[];
  tableItems: any[];
  options?: {
    viewItem?: string;
    editItem?: (item: any) => void;
    deleteItem?: (item: any) => void;
  };
}

const Table = ({ columns, tableItems, options }: TableProps) => (
  <div className="w-full overflow-x-auto scroll-visible-x">
    <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-sm overflow-hidden">
      {/* Table header */}
      <thead className="bg-primary">
        <tr>
          {columns.map((column, i) => (
            <th
              key={i}
              className="px-4 py-2 text-left text-sm font-semibold text-white border-b text-nowrap"
            >
              {column.label}
            </th>
          ))}
          {(options?.viewItem || options?.editItem || options?.deleteItem) && (
            <th className="px-4 py-2 text-left text-sm font-semibold text-white border-b">
              Opciones
            </th>
          )}
        </tr>
      </thead>
      {/* Table body */}
      <tbody className="divide-y divide-gray-100">
        {tableItems.map((item, i) => (
          <tr key={i} className="hover:bg-info-light">
            {columns.map((column, j) => (
              <td key={j} className="px-4 py-2 text-sm text-gray-800 border-b">
                {item[column.key]}
              </td>
            ))}
            {(options?.viewItem ||
              options?.editItem ||
              options?.deleteItem) && (
              <td className="px-4 py-2 text-sm text-gray-800 border-b">
                <div className="flex items-center gap-2">
                  {options?.viewItem && (
                    <Link to={`${options.viewItem}/${item.id}`}>
                      <Button variant="transparent" className="text-info">
                        Ver
                      </Button>
                    </Link>
                  )}
                  {options?.editItem && (
                    <Button
                      variant="transparent" 
                      className="text-warning"
                      onClick={() => options.editItem && options.editItem(item)}
                    >
                      Editar
                    </Button>
                  )}
                  {options?.deleteItem && (
                    <Button
                      variant="transparent"
                      className="text-danger"
                      onClick={() =>
                        options.deleteItem && options.deleteItem(item)
                      }
                    >
                      Eliminar
                    </Button>
                  )}
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
