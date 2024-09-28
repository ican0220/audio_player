import React from 'react';

interface FooterProps{

};

const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <div className='py-[20px]'>
            <h1 className='text-center'>@2024</h1>
        </div>
    )
}

export default Footer;