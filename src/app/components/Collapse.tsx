"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface CollpaseProps{
    title: string,
    moodFilterItems: any,
    addItem: (x: string) => void,
    removeItem: (x: string) => void,
}

const Collapse: React.FC<CollpaseProps> = ({ title, moodFilterItems, addItem, removeItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const handleCheck = (e: any, _: string) => {
    if(e.target.checked){
        addItem(_)
    } else {
        removeItem(_);
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
                    <div key={index} className='flex items-center'>
                        <input type='checkbox' className='mr-2'  onChange={(e) => handleCheck(e, _)}/>
                        <label>{_}</label>
                    </div>
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
