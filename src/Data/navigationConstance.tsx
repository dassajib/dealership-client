import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { SettingOutlined } from "@ant-design/icons";

export const items=[
    { path: "/dashboard", icon: <AiOutlineDashboard />, label: "Dashboard" },
    { path: "/dashboard/uom", icon: <AiOutlineUser />, label: "UOM" },
    { path: "/dashboard/items", icon: <SettingOutlined />, label: "Items" },
    { path: "/dashboard/invoice", icon: <AiOutlineDashboard />, label: "Invoice" },
    { path: "/dashboard/sales", icon: <AiOutlineUser />, label: "Sales" },
    { path: "/dashboard/reports", icon: <SettingOutlined />, label: "Reports" },
  ]