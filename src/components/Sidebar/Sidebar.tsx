import { Menu } from "antd";
import { Link } from "react-router-dom";

import { items } from "../../Data/navigationConstance";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
    <div className="h-full bg-gray-800">
      <div className="logo text-white text-center py-4 text-lg font-bold">
        {collapsed ? "Logo" : "DEALERSHIP"}
      </div>
      <Menu
        className="mt-1 py-3" theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
      >
        {items.map((item, index) => (
          <Menu.Item key={index + 1} icon={item.icon}>
            <Link to={item.path}>
              {collapsed ? null : item.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Sidebar;