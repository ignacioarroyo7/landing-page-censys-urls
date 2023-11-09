import React from 'react';
import { Button, Image,Card,CardHeader,CardFooter,CardBody } from '@nextui-org/react';
import BackgroundBanner from './BackgroundBanner';

const BannerSection = () => {
    return (
        <div className="max-w-[900px]  gap-2 grid grid-cols-12 grid-rows-2 px-8">
    <Card radius='none' className="col-span-12 sm:col-span-4">
      <CardBody className="absolute z-10 top-1 flex-col text-center flex !items-center">
      <h3 className="text-white/60 font-medium text-xl">I+D</h3>
        <h4 className="text-white/60 font-medium text-large">Accesos WEB, Servicios, Pruebas, Helpers, Usuarios</h4>
      </CardBody>
      <Image
        radius='none'
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="../../../../public/resources/images/background.jpg"
      />
    </Card>
  </div>
    );
};

export default BannerSection;