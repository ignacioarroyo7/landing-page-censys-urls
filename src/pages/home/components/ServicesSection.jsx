import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip,
  faUser,
  faListCheck,
  faCircleInfo,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import {Card,CardBody} from "@nextui-org/react";

{/* <FontAwesomeIcon icon={faPaperclip} /> */}
const ServicesSection = () => {
  return (
    <>
    <div id="seccion-servicios" className="flex items-center justify-center py-10">
        <h1 className="text-4xl font-bold">Servicios</h1>
     </div>
     <div className="flex items-center justify-center">
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 pt-10 pb-20">
    <Card className="col-span-12 sm:col-span-4 h-[200px]">
      <CardBody>
         <div className=" flex items-center justify-center">
         <div className="flex flex-col max-w-md mx-auto p-4">
       {/* Primera Fila - Titulo e icono */}
       <div className="flex items-center mb-4">
         <FontAwesomeIcon icon={faPaperclip} className="text-blue-500 mr-2" />
       <h2 className="text-lg font-bold">Accesos WEB</h2>
       </div>
       {/* Segunda Fila  - Descripcion*/}
       <div>
       <p>Encontrá aquí los accesos a las páginas principales de los ambientes de desarrollo y testing</p>
       </div>
    </div>
    </div>
      </CardBody>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[200px]">
    <CardBody>
         <div className=" flex items-center justify-center">
         <div className="flex flex-col max-w-md mx-auto p-4">
       {/* Primera Fila - Titulo e icono */}
       <div className="flex items-center mb-4">
       <FontAwesomeIcon icon={faUser} className="text-blue-500 mr-2" />
    <h2 className="text-lg font-bold">Usuarios</h2>
       </div>
       {/* Segunda Fila  - Descripcion*/}
       <div>
       <p>Encontrá aquí un usuario y contraseña con la configuración perfecta para agilizar tus pruebas</p>
       </div>
    </div>
    </div>
      </CardBody>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[200px]">
    <CardBody>
         <div className=" flex items-center justify-center">
         <div className="flex flex-col max-w-md mx-auto p-4">
       {/* Primera Fila - Titulo e icono */}
       <div className="flex items-center mb-4">
       <FontAwesomeIcon icon={faListCheck} className="text-blue-500 mr-2" />
    <h2 className="text-lg font-bold">Postman</h2>
       </div>
       {/* Segunda Fila  - Descripcion*/}
       <div>
       <p>Descargá la última versión de las colecciones de pruebas de nuestras API`s</p>
       </div>
    </div>
    </div>
      </CardBody>
    </Card>
    <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-5">
    <CardBody>
         <div className=" flex items-center justify-center">
         <div className="flex flex-col max-w-md mx-auto p-4">
       {/* Primera Fila - Titulo e icono */}
       <div className="flex items-center mb-4">
       <FontAwesomeIcon icon={faCircleInfo} className="text-blue-500 mr-2" />
   <h2 className="text-lg font-bold">Help</h2>
       </div>
       {/* Segunda Fila  - Descripcion*/}
       <div>
       <p>Encontrá aquí la lista de Help, para visualizar las API`s publicadas en cada ambiente.</p>
       </div>
    </div>
    </div>
      </CardBody>
    </Card>
    <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-7">
    <CardBody>
         <div className=" flex items-center justify-center">
         <div className="flex flex-col max-w-md mx-auto p-4">
       {/* Primera Fila - Titulo e icono */}
       <div className="flex items-center mb-4">
       <FontAwesomeIcon icon={faMobileScreenButton} className="text-blue-500 mr-2" />
    <h2 className="text-lg font-bold">Mobile - Tablet</h2>
       </div>
       {/* Segunda Fila  - Descripcion*/}
       <div>
       <p>Descargá versiones Mobile/Tablet para Android como ios</p>
       </div>
    </div>
    </div>
      </CardBody>
    </Card>
  </div>
     </div>
  </>

  );
};

export default ServicesSection;
