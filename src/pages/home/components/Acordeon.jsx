import { useRef, useEffect,useState } from 'react';
import {Accordion, AccordionItem, Avatar,Link,Snippet} from "@nextui-org/react";
import { UrlsBanks } from './UrlBanks';

const Acordeon = ({UrlsBankss}) => {
  // useEffect(() => {
  // console.log('UrlsBankss props',UrlsBankss);
  // setListUrl(UrlsBankss)
  // },[])
  // const [ListUrl, setListUrl] = useState([])
  
    const linkRef = useRef(null);
    // const listBank = urls
    return (
        <Accordion isCompact selectionMode="multiple">
{UrlsBankss.map(({id,nombre,url,image,entorno})=>(
      <AccordionItem
        key={id}
        aria-label={nombre}
        startContent={
          <Avatar
          size="sm"
            isBordered
            color="gray"
            radius="lg"
            src={`/assets/${image}`}
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
        </div>
      </AccordionItem>
))}
    </Accordion>
    );
};
export default Acordeon;
