import React from 'react';
import './DataTable.css';

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  width?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (item: T) => void;
}

export function DataTable<T extends { id: string }>({
  columns,
  data,
  loading = false,
  emptyMessage = 'No data available',
  onRowClick,
}: DataTableProps<T>) {
  if (loading) {
    return (
      <div className="datatable datatable--loading">
        <div className="datatable__loader">
          <div className="spinner-large"></div>
          <p>Loading data...</p>
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="datatable datatable--empty">
        <div className="datatable__empty">
          <span className="datatable__empty-icon">📭</span>
          <p>{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="datatable">
      <div className="datatable__wrapper">
        <table className="datatable__table">
          <thead className="datatable__thead">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="datatable__th"
                  style={{ width: column.width }}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="datatable__tbody">
            {data.map((item) => (
              <tr
                key={item.id}
                className={`datatable__tr ${onRowClick ? 'datatable__tr--clickable' : ''}`}
                onClick={() => onRowClick?.(item)}
              >
                {columns.map((column) => (
                  <td key={column.key} className="datatable__td">
                    {column.render
                      ? column.render(item)
                      : (item as any)[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
