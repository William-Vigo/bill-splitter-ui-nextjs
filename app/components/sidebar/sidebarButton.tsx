import Raect from 'react'

interface ButtonProps {
    imgPath: string;
    label: string;
}

const SidebarButtonList = (props: ButtonProps) => {
    console.log("will",props.imgPath)
    return (
        <button className='flex items-center justify-start'>
            <img src={props.imgPath}/>
            <span>{props.label}</span>
        </button>
    )
}

export default SidebarButtonList