import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from "../../../components/common/Card/Card";
import ListComponent from '../../../components/common/ListComponent/ListComponent';

const MediumCards = ({ post }) => {
    const [isFlip, setIsFlip] = useState([false, false, false, false]);

    const handleMouseEnter = (index) =>{
        const newIsFlipped = [...isFlip];
        newIsFlipped.forEach((_, cardIdx) => {
            newIsFlipped[cardIdx] = cardIdx === index;
        })
        setIsFlip(newIsFlipped);
    }
    const handleMouseLeave = (index) =>{
        const newIsFlipped = [false, false, false, false];
        setIsFlip(newIsFlipped);
    }
    return (
        <ListComponent 
            data={post}
            renderItem={(item, index) => (
                <div style={{display: "flex", alignItems: "center"}} key={index} onMouseEnter={() => handleMouseEnter(index)}  onMouseLeave={() => handleMouseLeave(index)} >
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlip[index]}>
                        <Card className={item.class}>
                            <Card.Image imageSrc={item.img}/>
                            <Card.Title className="medium-title">{item.title}</Card.Title>
                            <Card.Description>
                               {item.description}
                            </Card.Description>
                        </Card>

                        <Card  className={item.backContent.class}>
                            <Card.Title className="standard-header-size">{item.backContent.title}</Card.Title>
                            <ListComponent 
                                data={item.backContent.description}
                                renderItem={(desc, indx) =>(<Card.Description key={indx}>{desc}</Card.Description>)}
                            />
                        </Card>
                    </ReactCardFlip>
                </div>
            )}
        />
    );
}


export default MediumCards;