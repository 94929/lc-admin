import React from "react";
import { Pagination, PaginationProps } from "antd";

function BasicPagination({ ...props }: PaginationProps) {
  return <Pagination showSizeChanger={false} {...props} />;
}

export default BasicPagination;
