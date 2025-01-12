import React, { Children } from 'react';
import "./Footer.css";
import Typography from '../../ui/Typography/Typography'
import ListComponent from '../ListComponent/ListComponent';

const Footer = ({children}) => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                
                <Image src={"https://m2comms.com/wp-content/uploads/2021/07/M2-Logo-Horizontal-Purple.svg"} />

                <Address />
                
                <Items 
                    customClass={"footer-menu-one"} 
                    items={["Reputation", "Data & Analytics", "Advisory", "Creatives"]} 
                />

                <Items 
                    customClass={"footer-menu-two"} 
                    items={["Case Studies", "Blog", "About Us", "Contact"]}
                />

                <CopyRight />

                {children}
            </div>   
        </footer>
    );
}

const Image = ({src}) =>{
    return (
        <div className="footer-logo-container">
            <img className="footer-logo" src={src} />
        </div>
    )
}

const Address = () =>{
    return (
        <div className="footer-address">
            <Typography type="p"> #94 Scout Castor, Brgy. Laging Handa, Quezon City, Philippines</Typography>
            <Typography type="p"> +63 - 2 - 8376 - 5424</Typography>
            <Typography type="p"> hello@m2online.ph</Typography>
        </div>
    )
}

const Items = ({items, customClass}) =>{
    return (
        <div className={`${customClass}`}>
            <ul>
                <ListComponent data={items} renderItem={(item, index) => (<li key={index}>{item}</li>)}/>
            </ul>
        </div>
    )
}

const CopyRight = () =>{
    <div className="copy-right">
        <p> © 2024 M2.0 Communications</p>
    </div>
}
export default Footer;