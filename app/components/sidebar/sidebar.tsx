"use client";
import React from 'react';
import SidebarButton from './sidebarButton';
import receiptImg from '../../../public/receipt.svg'
import { usePathname  } from 'next/navigation';

const Sidebar = () => {
    const currentPath = usePathname();
    return (
        <div className="sidebar bg-[#16181b] text-[#4a4b4c]">
            <p className='justify-start text-2xl p-4 text-[#ffffff]'>Bill Splitter</p>
            <p className='justify-start text-xs px-4 pt-4 text-[#ffffff]'>Navigation</p>

            <div className='flex flex-col p-3'>
                <SidebarButton imgPath={receiptImg} label='Receipts' path='/split' currentPath={currentPath}/>
            </div>
        </div>
    ) 
}

export default Sidebar