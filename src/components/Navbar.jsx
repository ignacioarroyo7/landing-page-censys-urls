import {
    Navbar, NavbarBrand, NavbarContent,NavbarMenuItem ,Link,NavbarMenuToggle, NavbarMenu,NavbarItem
} from "@nextui-org/react";
import { CensysLogo } from "../pages/home/components/Logo";
import { dataHeader } from "./DataHeader";
import { useState } from "react";
import {isMobile} from 'react-device-detect';

const NavbarHeader = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar  onMenuOpenChange={setIsMenuOpen} className='mb-20'>
        <NavbarContent>
        {isMobile?
         <NavbarMenuToggle
         aria-label={isMenuOpen ? "Close menu" : "Open menu"}
         className="sm:hidden"
         /> 
          :
        <></>
        }
        <NavbarBrand>
            <CensysLogo/>
            <p className="font-bold text-inherit">Censys S.A.</p>
        </NavbarBrand>
        </NavbarContent >
        {
          isMobile ? 
              <NavbarMenu className="sm:flex gap-4" justify="center">
              {dataHeader.map(({id,name,idLink})=>(
              <NavbarMenuItem key={`${id}-${name}`}>
                <Link className="w-full" underline="hover" key={id} color="foreground" href={idLink}>
                  {name}
                </Link>
              </NavbarMenuItem >
              ))}
              </NavbarMenu>
          : 
          <NavbarContent className="sm:flex gap-4" justify="center">
              {dataHeader.map(({id,name,idLink})=>(
              <NavbarItem key={`${id}-${name}`} className="px-4">
                <Link underline="hover" key={id} color="foreground" href={idLink}>
                  {name}
                </Link>
              </NavbarItem>
              ))}
            </NavbarContent>
        }
        
        
      </Navbar>
    );
};

export default NavbarHeader;