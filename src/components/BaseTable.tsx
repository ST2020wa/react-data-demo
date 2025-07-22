import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface BaseTableProps<T> extends TableProps<T> {
  columns: ColumnsType<T>;
  dataSource: T[];
}

const BaseTable = <T extends object>({ columns, dataSource, ...rest }: BaseTableProps<T>) => {
  return <Table columns={columns} dataSource={dataSource} {...rest} />;
};

export default BaseTable;