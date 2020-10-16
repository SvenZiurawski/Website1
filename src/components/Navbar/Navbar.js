import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from './Navbar.elements';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);


  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  }, []);



  return (
    <>
    <IconContext.Provider value={ {color: '#fff'}}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            ULTRA
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/products'>Products</NavLinks>
            </NavItem>
            <NavItemBtm>
              {button ? (
                <NavBtnLink to="/sign-up">
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <Button fontBig primary>
                  SIGN UP
                </Button>
              )}
            </NavItemBtm>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
