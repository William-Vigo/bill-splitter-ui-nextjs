import React from 'react';
import SidebarButtonList from './sidebarButton';
interface SidebarProps {
    width: number;
}

const Sidebar = () => {
    return (
        <div className="sidebar border-2 border-red-800">
            {/* App Name */}
            <h1 className='justify-center'>Bill Splitter</h1>

            <div className='flex flex-col'>
                <SidebarButtonList imgPath='' label='Dashboard'/>

                <SidebarButtonList imgPath='' label='Splitter'/>
                <SidebarButtonList imgPath='' label='Receipts'/>
                <SidebarButtonList imgPath='' label='People'/>
            </div>
        </div>
    ) 
}

export default Sidebar