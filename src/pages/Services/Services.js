import React from 'react';
import bg2 from '../../assets/Video-Landing-440kb.m4v';
import ServicesHero from './ServicesHero';
import Card from '../../components/common/Card/Card';
import ListComponent from '../../components/common/ListComponent/ListComponent';
import { ServiceData, ServicesData } from '../../constant/constant';

const ServicesCards = () =>{
    return (
        <div className="services-cards-container">
            <ListComponent 
                data={ServiceData}
                renderItem={(item) =>(
                    <Card className="services-card" key={item.id}>
                        <Card.Title className="standard-header-size services-card-header">{item.title}</Card.Title>
                        <div className="services-cards-body">
                            <ul>
                                <ListComponent data={item.child} renderItem={(child, index) => <li key={index}>{child}</li>}/>
                            </ul>
                        </div>
                        <Card.Description>Learn More</Card.Description>
                    </Card>
                )}
            />
        </div>
    )
}

const ServicesSummary = () =>{
    return (
        <div className="services-brief-container">
            <ListComponent 
                data={ServicesData}
                renderItem={(service, index) =>(
                    <div key={index} className="services-row">
                        <div className="col-1">
                            <div className="services-brief-name-container"> 
                                
                                <h1 className="service-count">{`0${service.id}`}</h1>
                                
                                <h1 className="service-name">{service.serviceName}</h1>
                            </div>
                        </div>
                        <div className="col-2">
                            <h2>{service.header}</h2>
                            <p className="text-paragraph-standard">{service.content}</p>
                        </div>
                    </div>
                )}
            />
        </div>
    )
}

const Services = () => {
    return (
        <>
            <ServicesHero />
            <div className="services-content">
                <ServicesCards />
                <ServicesSummary />
            </div> 
        </>
    );
}


export default Services;