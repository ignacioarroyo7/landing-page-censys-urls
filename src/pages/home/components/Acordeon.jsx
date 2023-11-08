import React from 'react';
import {Accordion, AccordionItem, Avatar,Link,Button} from "@nextui-org/react";
import { UrlsBanks } from './UrlBanks';
const Acordeon = ( props ) => {

    const listBank = UrlsBanks


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
            color="primary"
            radius="lg"
            src={`../../public/resources/images/${image}`}
          />
        }
        // subtitle="4 unread messages"
        title={nombre}
      >
        <Link href={url} target="_blank" underline="focus">{url}
        </Link> 
      </AccordionItem>
))}
    </Accordion>
    );
};

export default Acordeon;