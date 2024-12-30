import React, { useState } from "react";
import { Input, Dropdown, Menu as AntMenu, Avatar } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";

interface NavigationBarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ collapsed, onToggle }) => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSignOut = () => {
    console.log("Sign out clicked");
  };

  const userMenu = (
    <AntMenu>
      <AntMenu.Item key="1" onClick={handleSignOut}>
        Sign Out
      </AntMenu.Item>
    </AntMenu>
  );

  return (
    <div className="bg-white px-4 shadow flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* Toggle Button */}
        <div>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger text-xl cursor-pointer",
            onClick: onToggle,
          })}
        </div>
        {/* Search Bar */}
        <div className="flex items-center border rounded-lg p-2 bg-gray-100">
          <SearchOutlined className="text-xl text-gray-600" />
          <Input
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="border-0 outline-none bg-transparent focus:ring-0 ml-2"
            style={{ width: 200 }}
          />
        </div>
      </div>

      <div className="flex items-center">

        {/* User Dropdown */}
        <Dropdown overlay={userMenu} trigger={['click']} className="ml-4">
          <div className="cursor-pointer flex items-center space-x-2">
            <span>Username</span>
            <Avatar icon={<UserOutlined />} className="text-lg" />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavigationBar;
