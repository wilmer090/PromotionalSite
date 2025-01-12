import React from 'react';
import "../../../pages/ourpeople/OurPeople.css"
const Hero = ({children, customClass}) => {
    return (
        <div className={customClass}>
            {children}
        </div>
    );
}

const Section = ({children, className}) =>{
    return (
        <div className={className}>
            {children}
        </div>
    )
}

const Typography = ({type : Element = "h1", children, className}) =>{
    return (
        <Element className={className}>{children}</Element>
    )
}

Hero.Typography = Typography;
Hero.Section = Section;

export default Hero;