import { Button,Modal,ModalFooter,ModalContent,ModalHeader,ModalBody,useDisclosure } from '@nextui-org/react';
import IMAGES from '../../../images/Images'
// import imgBackground from '../../../images/background.jpg'

const BannerSection = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const handleOpen = () => {
    onOpen();
  }
    return (
      <>
        <div id='seccion-inicio'>
           <div className="relative">
      {/* Imagen de fondo */}
      <img
        src="/assets/background.jpg"
        // src={bannerImage}
        alt="Descripción de la imagen"
        className="w-full h-auto"
      />

      {/* Texto superpuesto */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
      <h3 className="text-white/60 text-4xl font-bold my-5">Investigación y Desarrollo</h3>
        <h4 className="text-white font-bold text-large">Accesos WEB, Servicios, Pruebas, Helpers, Usuarios</h4>
        <div className='mt-10'>
        <Button  
            size="lg"
            color="primary" variant="shadow"
            onPress={() => handleOpen()}
          >
           Iniciar Sesión
          </Button>
        </div>
      </div>
    </div>
        </div>
        <Modal placement={'center'} backdrop={'blur'} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">!Lo sentimos! Aún no está disponible</ModalHeader>
              <ModalBody>
                <p> 
                  Esta función aún se encuentra en desarrollo, proximamente estará a tu alcance.
                </p>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  
                </Button> */}
                <Button color="primary" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </>
    );
};

export default BannerSection;