import React from 'react';
import Sidebar from "../components/sidebar/sidebar"

import './layout.css'
const Layout = ({children}:  { children: React.ReactNode }) => {
    return (
        <div className="grid-layout gap-2 h-screen ">
            <Sidebar/>
            {children}
        </div>
    )
}

export default Layout