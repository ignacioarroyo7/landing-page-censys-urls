import {
    Navbar, NavbarBrand, NavbarContent,NavbarItem,Link
} from "@nextui-org/react";
import { CensysLogo } from "../pages/home/components/Logo";
import { dataHeader } from "./DataHeader";
const NavbarHeader = () => {
    return (
        <Navbar className='mb-20'>
        <NavbarContent>
          <NavbarBrand>
            <CensysLogo/>
            <p className="font-bold text-inherit">Censys S.A.</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="sm:flex gap-4" justify="center">
        {dataHeader.map(({id,name,idLink})=>(
          <>
        <NavbarItem className="px-4">
          <Link underline="hover" key={id} color="foreground" href={idLink}>
            {name}
          </Link>
        </NavbarItem>
          </>
        ))}
      </NavbarContent>
      </Navbar>
    );
};

export default NavbarHeader;