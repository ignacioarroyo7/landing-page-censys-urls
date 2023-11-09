import { Image } from '@nextui-org/react';
import React from 'react';

const BackgroundBanner = () => {
    return (
        <div className='absolute -z-50 top-0'>
            <Image radius='none' className={'w-full object-cover bg-cover bg-center'} src='../../../public/resources/images/background.jpg'/>
        </div>
    );
};

export default BackgroundBanner;