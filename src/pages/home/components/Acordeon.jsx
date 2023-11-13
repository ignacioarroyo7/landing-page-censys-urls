import { useRef } from 'react';
import {Accordion, AccordionItem, Avatar,Link,Snippet} from "@nextui-org/react";
import { UrlsBanks } from './UrlBanks';

const Acordeon = ( ) => {
    const linkRef = useRef(null);
    const listBank = UrlsBanks

    const copyToClipboard = (url) => {
        // Obtén el contenido del enlace
        const textToCopy = `https://${url}/#/auth/login`
        // Crea un elemento temporal para copiar el texto
        const tempInput = document.createElement("input");
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
    
        // Selecciona y copia el texto al portapapeles
        tempInput.select();
        document.execCommand('copy');
    
        // Elimina el elemento temporal
        document.body.removeChild(tempInput);
      };
    return (
        <Accordion isCompact selectionMode="multiple">
{listBank.map(({id,nombre,url,image,entorno})=>(
      <AccordionItem
        key={id}
        aria-label={nombre}
        startContent={
          <Avatar
          size="sm"
            isBordered
            color="gray"
            radius="lg"
            src={`../../public/resources/images/${image}`}
          />
        }
        // subtitle="4 unread messages"
        title={nombre}
      >
        <div className='w-full flex flex-row justify-between'>
        <Snippet codeString={`https://${url}/#/auth/login`} size='sm' tooltipProps={{
        content: "Copiar enlace",
      }} symbol="" color="default">
        <Link ref={linkRef} size='sm' href={`https://${url}/#/auth/login`} target="_blank" underline="focus">
          {`${entorno} ${nombre}`}
        </Link>
        </Snippet>
        
        {/* <Tooltip
          key={'top-end'}
          placement={'top-end'}
          content={'Copiar enlace'}
          color="primary"
        >
        <Button onClick={()=>{copyToClipboard(url)}} className='ms-2' size='sm' isIconOnly color="primary" aria-label="Like">
        <FontAwesomeIcon icon={faCopy} />
      </Button>
        </Tooltip> */}
        </div>
      </AccordionItem>
))}
    </Accordion>
    );
};

export default Acordeon;