import React, { createContext, useContext, useState } from 'react';
import { Link, useNavigate, useLocation   } from "react-router-dom";
import "../Nav/Nav.css";
import { ROUTE } from "../../../constant/constant";
import BurgerIcon from '../../ui/Icons/BurgerIcon';
import CloseIcon from '../../ui/Icons/CloseIcon';

const NavContext = createContext();

const Nav = ({items, logo}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClickBurgerIcon = () => {
        setIsActive(prev => !prev)
    }
    return (
        <NavContext.Provider value={{ isActive, setIsActive }}>
            <nav>
                <div>
                    <DesktopMenu items={items} logo={logo} />
                    <MobileMenu items={items} isActive={isActive} action={handleClickBurgerIcon}/>
                    <MobileNav action={handleClickBurgerIcon}/>
                </div>
            </nav>
        </NavContext.Provider>
    )
}


const DesktopMenu = ({items, logo}) =>{
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleImgClick = () =>{
        navigate("/");
    }
    const checkLocation = () =>{
        const loc = [...ROUTE, {key:8 , label: "people details", link:"/our-people/3"}];
        let notfound = true;
        loc.forEach((item) =>{
            if(location.pathname === item.link || location.pathname.includes(item.link) ) 
                notfound = false
        });
    
        return notfound;
        
    }
    return (
        <div className={`desktop-menu-container ${!checkLocation() ? location.pathname ==="/services"? "" : "desktop-menu-dark-bg nav-static" : ""}`}>
            <div className="desktop-menu-items">
                <Logo imgAction={handleImgClick} imgSrc={logo}/>
                <Items items={items}/>
            </div>
        
        </div>
    )
}

const MobileNav= ({action}) =>{
    return(
        <>
            <div className={`mobile-nav`}>
                <BurgerIcon action={action} />
            </div>

        </>


    )
}

const MobileMenu = ({items, isActive, action}) =>{
    return(
        <div className={`mobile-menu-container ${isActive? 'active' : 'hide-menu'}`}>
            <CloseIcon action={action}/>
            <Items items={items} />
        </div>
    )
}

const Items = ({items}) =>{
  
    return (
        <ul>
            {items.map((item) => {
                return(
                    <Item key={item.key}><Link className="link" to={item.link}>{item.label}</Link></Item>
                )
            })}
        </ul>
    )
}
const Item = ({children}) =>{
    const {isActive, setIsActive} = useContext(NavContext)
    return (
        <li onClick={() => setIsActive(false)}>{children}</li>
    )
}

const Logo = ({imgSrc, imgAction}) =>{

    const handleLogoClick = () =>{
        imgAction();
    }

    return (
        <img onClick={handleLogoClick} src={imgSrc} />
    )
}


export default Nav;