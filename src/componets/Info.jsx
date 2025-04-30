import { Card, List } from "antd"
import { LockOutlined, EditOutlined, FieldTimeOutlined } from "@ant-design/icons"

import { data } from "../consts/info"

const icons = {
  LockOutlined: <LockOutlined />,
  EditOutlined: <EditOutlined />,
  FieldTimeOutlined: <FieldTimeOutlined />,
}

const renderIcon = (iconName) => {
  return icons[iconName] || null // возвращаем соответствующую иконку
}

const Info = () => (
  <List
    grid={{ gutter: 16, column: 3 }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card
          title={
            <>
              <div className='text-center text-[30px] text-amber-500'>{renderIcon(item.icon)}</div>
              <h3 className='text-2xl text-center mb-2'>{item.title}</h3>
            </>
          }
        >
          <p className='text-center'>{item.description}</p>
        </Card>
      </List.Item>
    )}
  />
)

export default Info
