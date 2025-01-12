import React from 'react';
import BackgroundVideoSection from "./Background";
import MediumSection from "./Medium/Medium";
import CustomerSection from "./CustomerSection";
import FeaturedProjectsSection from "./FeaturedProjects";
import ConsultSection from './Consult';


const HomePage = () => {
    return (
    <div>
        <BackgroundVideoSection />
        <MediumSection />
        <CustomerSection />
        <FeaturedProjectsSection />
        <ConsultSection />
    </div>
    );
}


export default HomePage;