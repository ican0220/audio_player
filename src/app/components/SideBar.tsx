import React from 'react';
import Collapse from './Collapse';

interface SideBarProps{

};

const SideBar: React.FC<SideBarProps> = ({}) => {
    return (
        <div className='px-[10px] py-[20px]'>
            <Collapse title='Mood Filter'/>
        </div>
    )
}

export default SideBar;