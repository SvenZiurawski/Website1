import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,

} from './Navbar.elements';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  }, []);



  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon src={require('../../Images/peakconcepts-logo.jpg')} />
            PEAKCONCEPTS
          </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>Leistungen</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/referenzen' onClick={closeMobileMenu}>Referenzen</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/kontakt' onClick={closeMobileMenu}>Kontakt</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>Services</NavLinks>
              </NavItem>

            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
