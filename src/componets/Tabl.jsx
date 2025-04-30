import { Table, Space, Tag } from "antd"
import { PayCircleOutlined } from "@ant-design/icons"

import { columnsData } from "../consts/table"

const columns = [
  {
    title: "Asset",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <a>
        <PayCircleOutlined style={{ color: "#8f421b" }} /> {text}
      </a>
    ),
  },
  {
    title: "Last Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "24hr Change",
    dataIndex: "change",
    key: "change",
  },
  {
    title: "Market Cap",
    key: "percent",
    dataIndex: "percent",
    render: (percent) => {
      let color = percent > 0 ? "green" : "red"
      return <Tag color={color}>{percent} %</Tag>
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size='middle'>
        <a>Delete</a>
      </Space>
    ),
  },
]

const Tabl = () => <Table columns={columns} dataSource={columnsData} />

export default Tabl
