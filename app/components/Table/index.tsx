import React from "react";
import { Table, TableProps } from "antd";

function BasicTable<T extends object>({ ...props }: TableProps<T>) {
  return <Table<T> pagination={false} {...props} />;
}

export default BasicTable;
