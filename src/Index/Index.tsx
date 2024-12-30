import { Route, Routes } from "react-router-dom"

import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import AppLayout from "../AppLayout/AppLayout"
import Dashboard from "../pages/Dashboard/Dashboard"
import Uom from "../pages/Uom/Uom"
import Item from "antd/es/list/Item"
import Reports from "../pages/Reports/Reports"
import Sales from "../pages/Sales/Sales"
import Invoice from "../pages/Invoice/Invoice"
import Items from "../pages/Items/Items"

export const Index = () => {
    return (
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="" element={<SignIn />} />
            <Route path="/dashboard" element={<AppLayout />} >
                <Route index element={<Dashboard />} />
                <Route path="uom" element={<Uom />} />
                <Route path="items" element={<Items />} />
                <Route path="invoice" element={<Invoice />} />
                <Route path="sales" element={<Sales />} />
                <Route path="reports" element={<Reports />} />
            </Route>
        </Routes>
    )
}
