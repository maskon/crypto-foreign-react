import { Menu, Switch } from "antd"

import React, { useState } from "react"

import { items } from "../consts/const"

function Header() {
  const [theme, setTheme] = useState("dark")
  const [current, setCurrent] = useState("1")
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light")
  }
  const onClick = (e) => {
    console.log("click ", e)
    setCurrent(e.key)
  }
  return (
    <div className='flex justify-between flex-wrap gap-2 mb-8'>
      <div>ICON</div>
      <div>
        <div className='mb-3'>
          <Menu
            theme={theme}
            onClick={onClick}
            style={{ width: 256 }}
            // defaultOpenKeys={["sub1"]}
            selectedKeys={[current]}
            mode='inline'
            items={items}
          />
        </div>
        <div className='text-right'>
          <Switch checked={theme === "dark"} onChange={changeTheme} checkedChildren='Dark' unCheckedChildren='Light' />
        </div>
      </div>
    </div>
  )
}

export default Header
