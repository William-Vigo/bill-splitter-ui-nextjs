import ReceiptImg from '../../../public/receipt.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ButtonProps {
    imgPath: string;
    label: string;
    path: string;
    currentPath: string;
}

const SidebarButton = (props: ButtonProps) => {
    const isActive =  props.currentPath === props.path
    return (
        <Link href={props.path} className={`hover:bg-[#2070e9] rounded-md ${isActive ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-blue-500 hover:text-white'} `}>
            <button className='flex items-center justify-start gap-4 px-2 p-2 '>
                <ReceiptImg className='fill-current'/>
                <span>{props.label}</span>
            </button>
        </Link>
    )
}

export default SidebarButton