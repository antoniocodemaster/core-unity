import { Link } from 'react-router-dom';

interface TableProps {
  columns: { key: string; label: string }[];
  tableItems: any[];
  options?: {
    viewContact?: string;
    editContact?: boolean;
    deleteContact?: boolean;
  };
}

const Table = ({ columns, tableItems, options }: TableProps) => (
  <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded-md overflow-hidden">
    {/* Table header */}
    <thead className="bg-gray-300">
      <tr>
        {columns.map((column, i) => (
          <th
            key={i}
            className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b"
          >
            {column.label}
          </th>
        ))}
        {(options?.viewContact ||
          options?.editContact ||
          options?.deleteContact) && (
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
            Opciones
          </th>
        )}
      </tr>
    </thead>
    {/* Table body */}
    <tbody className="divide-y divide-gray-100">
      {tableItems.map((item, i) => (
        <tr key={i} className="hover:bg-gray-50">
          {columns.map((column, j) => (
            <td key={j} className="px-4 py-2 text-sm text-gray-800 border-b">
              {item[column.key]}
            </td>
          ))}
          {(options?.viewContact ||
            options?.editContact ||
            options?.deleteContact) && (
            <td className="px-4 py-2 text-sm text-gray-800 border-b">
              <div className="flex items-center gap-2">
                {options?.viewContact && (
                  <Link to={`${options.viewContact}/${item.id}`}>
                    <button className="text-blue-500 hover:underline">Ver</button>
                  </Link>
                )}
                {options?.editContact && (
                  <button className="text-yellow-600 hover:underline">
                    Editar
                  </button>
                )}
                {options?.deleteContact && (
                  <button className="text-red-500 hover:underline">
                    Eliminar
                  </button>
                )}
              </div>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
