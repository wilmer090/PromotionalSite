import React from 'react';
import Hero from '../../components/common/Hero/Hero';
import "../../../src/GlobalStyles.css";
import "../Services/Services.css";

const ServicesHero = () => {
    return (
        <>
        <Hero customClass="background-container">
            <Hero.Section className={"background-overlay"}></Hero.Section>
            <video className="background-video" src={`https://m2comms.com/wp-content/uploads/2023/05/Analytics-576p25-Compressed.m4v`} autoPlay loop muted></video>
            <Hero.Section className="background-content">
                <Hero.Section className="background-text-holder">
                    <Hero.Typography className="services text-paragraph-standard text-uppercase">services</Hero.Typography>
                    <Hero.Typography className="background-header text-header-5vw underline">Data & Analytics</Hero.Typography>
                    <Hero.Typography type="p" className="text-paragraph-standard">Stop reacting and start leading. Hear what your audience is <br /> saying about you and your competitors. Survey the collective <br/>sentiment—and act accordingly.</Hero.Typography>
                </Hero.Section>
            </Hero.Section>
        </Hero>
    </>
    );
}


export default ServicesHero;