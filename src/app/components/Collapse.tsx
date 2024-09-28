"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

interface CollpaseProps{
    title: string
}

const moodFilterItems = [
    "aggressive",
    "anthemic",
    "burdened",
    "chill",
    "cinematic"
]
const Collapse: React.FC<CollpaseProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleCollapse}
        className='bg-transparent text-white cursor-pointer w-full px-[10px] py-[5px]'
      >
        {isOpen ? <div className='flex justify-between items-center'>
            <p>Hide {title}</p>
            <FontAwesomeIcon icon={faPlus} size="1x" /> 
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
                {moodFilterItems.map((_, index) => (
                    <div key={index} className='flex items-center'>
                        <input type='checkbox' className='mr-2'/>
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
