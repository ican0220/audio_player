"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface CollpaseProps{
    title: string,
    moodFilterItems: any,
    filterList: any,
    addItem: (x: string) => void,
    removeItem: (x: string) => void,
}

const Collapse: React.FC<CollpaseProps> = ({ title, moodFilterItems, filterList, addItem, removeItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleCheck = ( _: string) => {
    if(filterList.filter((item: any) => item == _).length > 0){
        removeItem(_)
    } else {
        addItem(_);
    }
  }
  return (
    <div>
      <button
        onClick={toggleCollapse}
        className='bg-transparent dark:text-white text-stone-800 cursor-pointer w-full px-[10px] py-[5px]'
      >
        {isOpen ? <div className='flex justify-between items-center'>
            <p>Hide {title}</p>
            <FontAwesomeIcon icon={faMinus} size="1x" /> 
        </div> :(
            <div className='flex justify-between items-center'>
            <p>Show {title}</p>
            <FontAwesomeIcon icon={faPlus} size="1x" /> 
        </div>
        ) }
      </button>
      <div
        style={{
          height: isOpen ? 'auto' : '0',
          overflow: 'hidden',
          transition: 'height 0.3s ease',
        }}
      >
        {isOpen && (
          <div style={{ padding: '10px 0' }}>
                {moodFilterItems.map((_: any, index: any) => (
                    <div key={index} className='flex items-center' onClick={() => handleCheck(_)}>
                        <input type='checkbox' className='mr-2  hover:cursor-pointer'  checked={filterList.filter((item: any) => item == _).length > 0}/>
                        <label className='hover:cursor-pointer'>{_}</label>
                    </div>
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
