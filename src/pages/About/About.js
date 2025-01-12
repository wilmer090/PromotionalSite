import React from 'react';
import Hero from '../../components/common/Hero/Hero';
import "./About.css";
import MapChart from '../../components/common/MapChart';
import ListComponent from '../../components/common/ListComponent/ListComponent';
import { AboutSectionParagraphs } from '../../constant/constant';

const HeroSection = () =>{
    return (
        <Hero customClass={"people_hero"}>
        <Hero.Section className={"people-text"}>
            <Hero.Typography type={"h5"}>about us</Hero.Typography>
            <Hero.Typography type={"h1"}>Telling <span className="special-text">meaningful stories</span></Hero.Typography>
            <Hero.Typography className="text-paragraph-standard" type={"p"}>Make real impact, not just noise—this is what we believe.</Hero.Typography>
            <Hero.Typography className="text-paragraph-standard" type={"p"}>Our multidisciplinary teams come together to measure the</Hero.Typography>
            <Hero.Typography className="text-paragraph-standard" type={"p"}>variables and design messages particular to each audience.</Hero.Typography>
        </Hero.Section>
    </Hero>
    )
}

const AboutSection = () =>{
    return(
        <div className="about-main-content">
            <div className="about-grid-container">
                <div className="about-heading-title">
                    <h1 className="text-header-5vw">What makes<br/> something<br/> <span className="special-text">'meaningful',</span><br/>anyway</h1>
                </div>
                <div className="about-paragraph">
                    <ListComponent data={AboutSectionParagraphs} renderItem={(item) => (<p className="text-paragraph-standard" key={item.key}>{item.text}</p>)} />
                </div>
            </div>
        </div>
    )
}

const PartnerSection = () =>{
    return (
        <div className="our-partners">
            <div>
                <h1 className="text-header-5vw">Taking part in the <span className="special-text">global story</span></h1>
                <p className="text-paragraph-standard">As a member of the Public Relations Organisation International,  we are a PR agency
                in the <br /> Philippines that partners with firms from around the world to help our clients make a mark in the<br /> global playing field.</p>
            </div>
        <MapChart />
      </div>
    )
}
const About = () => {
    return (
    <>
        <HeroSection />
        <AboutSection />
        <PartnerSection />
    </>
);
}



export default About;