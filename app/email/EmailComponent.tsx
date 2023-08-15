import { Table, Tag, TagProps, MenuProps, Dropdown } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TEmail, TEmails, TEmailType } from "@/app/types/email";
import { MoreOutlined } from "@ant-design/icons";
import BasicPagination from "@/app/components/Pagination";
import BasicTable from "@/app/components/Table";
interface IEmailComponent {
  emails: TEmails;
}

const getDropdownItem = (id: string): MenuProps["items"] => {
  return [
    {
      key: "1",
      label: "이동",
      onClick: () => {
        console.log("@@data id ", id);
      },
    },
  ];
};

const columns: ColumnsType<TEmail> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
    width: 50,
    render: (_, { id }) => <span>{id}</span>,
  },
  {
    title: "url",
    dataIndex: "url",
    key: "url",
    width: 300,
    ellipsis: true,
    render: (_, { thumb }) => <span>{thumb}</span>,
  },
  {
    title: "thumb",
    dataIndex: "thumb",
    key: "thumb",

    render: (_, { thumb }, index) => (
      <span>
        <img
          className="w-[80px] h-[80px] object-cover"
          src={thumb}
          alt={`thumb_${index}`}
        />
      </span>
    ),
  },
  {
    title: "gender",
    key: "gender",
    dataIndex: "gender",
    render: (_, { gender }) => (
      <Tag color={gender ? "geekblue" : "green"}>{String(gender)}</Tag>
    ),
  },
  {
    title: "type",
    key: "type",
    dataIndex: "type",
    render: (_, { type }) => {
      const getType = (type: TEmailType): TagProps["color"] => {
        switch (type) {
          case "A": {
            return "blue";
          }
          case "B": {
            return "purple";
          }
          case "C": {
            return "magenta";
          }
          default: {
            return "cyan";
          }
        }
      };
      return <Tag color={getType(type)}>{type}</Tag>;
    },
  },
  {
    title: "contents",
    dataIndex: "contents",
    key: "contents",
    width: 500,
    ellipsis: true,
    render: (_, { contents }) => <span>{contents}</span>,
  },
  {
    title: "createdAt",
    dataIndex: "createdAt",
    key: "createdAt",
    width: 120,
    ellipsis: true,
    render: (_, { createdAt }) => <span>{createdAt}</span>,
  },
  {
    title: "",
    dataIndex: "",
    key: "",
    width: 80,
    ellipsis: true,
    render: (_, { id }) => (
      <span>
        <Dropdown
          placement="bottomLeft"
          arrow
          menu={{
            items: getDropdownItem(id),
          }}
        >
          <MoreOutlined role="button" />
        </Dropdown>
      </span>
    ),
  },
];

function EmailComponent({ emails }: IEmailComponent) {
  return (
    <>
      <div className="mb-[20px]">
        <BasicTable columns={columns} dataSource={emails} />
      </div>
      <div className="flex-center">
        <BasicPagination />
      </div>
    </>
  );
}

export default EmailComponent;
