import {
    Navbar, NavbarBrand, NavbarContent,
} from "@nextui-org/react";
import { CensysLogo } from "../pages/home/components/Logo";
const NavbarHeader = () => {
    return (
        <Navbar className='mb-20'>
        <NavbarContent>
          <NavbarBrand>
            <CensysLogo/>
            <p className="font-bold text-inherit">Censys S.A.</p>
          </NavbarBrand>
        </NavbarContent>
      </Navbar>
    );
};

export default NavbarHeader;