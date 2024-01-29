import Raect from 'react'
import ReceiptImg from '../../../public/receipt.svg'

interface ButtonProps {
    imgPath: string;
    label: string;
}

const SidebarButton = (props: ButtonProps) => {
    return (
        //<button className='flex items-center justify-start gap-2 px-2 p-2 hover:bg-[#242a38] hover:brightness-125 rounded-md'>
        <button className='flex items-center justify-start gap-4 px-2 p-2 hover:bg-[#2070e9] hover:text-[#ffffff] rounded-md'>
            <ReceiptImg className='fill-current'/>
            <span>{props.label}</span>
        </button>
    )
}

export default SidebarButton