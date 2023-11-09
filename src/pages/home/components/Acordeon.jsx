import React, { useRef } from 'react';
import {Accordion, AccordionItem, Avatar,Link,Button} from "@nextui-org/react";
import { UrlsBanks } from './UrlBanks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
const Acordeon = ( props ) => {
    const linkText = "Texto del enlace";
    const linkRef = useRef(null);
    const listBank = UrlsBanks

    const copyToClipboard = () => {
        // Obtén el contenido del enlace
        const textToCopy = `https://${ linkRef.current.textContent}/#/auth/login`
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
        <Accordion selectionMode="multiple">
{listBank.map(({id,nombre,url,image})=>(
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
        <div className='flex flex-row justify-between'>
        <Link ref={linkRef} size='sm' href={`https://${url}/#/auth/login`} target="_blank" underline="focus">{url}
        </Link>
        <Button onClick={copyToClipboard} className='ms-2' size='sm' isIconOnly color="primary" aria-label="Like">
        <FontAwesomeIcon icon={faCopy} />
      </Button>
        </div>
      </AccordionItem>
))}
    </Accordion>
    );
};

export default Acordeon;