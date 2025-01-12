import React from 'react';
import Card from '../../components/common/Card/Card';
import { FEATURED_PROJECT_DATA } from "../../constant/constant";
import Typography from '../../components/ui/Typography/Typography';
import ListComponent from '../../components/common/ListComponent/ListComponent';


const FeaturedCard = ({item}) =>{
    return ( 
    <Card className={"card-container"}>
        <div className="card-frame" style={{backgroundImage: `url(${item.img})`}}/>
        <Card.Title className={"card-title"}>{item.title}</Card.Title>
    </Card>
    )
}


const FeaturedProjectsSection = () => {

    return (
    <div className="featured-projects-container">
        <div className="fp-txt-container">
            <Typography type="h1" className="fp-title">Some of our <Typography type="span">featured projects</Typography></Typography>
            <Typography className="text-paragraph-standard fp-txt" type="p">M2.0 Communications strives to make real impact, not just noise. <br />
                We are a PR firm that constantly explores ways to help clients tell meaningful narratives. <br />
                Our featured projects can relay how we were able to go above and beyond to narrate the stories that our clients want to tell.
            </Typography>
        </div>
        
        <div className="cards-section">
            <ListComponent 
                data={FEATURED_PROJECT_DATA}
                renderItem={(item)=>(<FeaturedCard key={item.id} item={item} />)}
            />
        </div>
    </div>
    );
}



export default FeaturedProjectsSection;