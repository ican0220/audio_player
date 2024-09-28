import React from 'react';
import Collapse from './Collapse';

interface SideBarProps{
    moodFilterItems: any,
    addItem: (x: string) => void,
    removeItem: (x: string) => void,
};

const SideBar: React.FC<SideBarProps> = ({moodFilterItems, addItem, removeItem}) => {
    return (
        <div className='px-[10px] py-[20px]'>
            <Collapse title='Mood Filter' moodFilterItems={moodFilterItems} addItem = {addItem} removeItem={removeItem}/>
        </div>
    )
}

export default SideBar;