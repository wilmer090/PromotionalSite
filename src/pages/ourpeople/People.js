import React from 'react';
import Card from '../../components/common/Card/Card';
import GoogleIcon from '../../components/ui/Icons/GoogleIcon';
import IndeedIcon from '../../components/ui/Icons/IndeedIcon';
import { Link } from 'react-router-dom';
import ListComponent from '../../components/common/ListComponent/ListComponent';
import { COLORS } from '../../constant/constant';


const PeopleCard = ({person}) =>{
    return (
        <Card>
            <div className={`people-card-container ${COLORS[Math.floor(Math.random() * COLORS.length)]}`}></div>
            <Card.Title className="people-name">{`${person.firstname} ${person.lastname}`}</Card.Title>
            <Card.Description className="people-position">{`${person.company.bs}`}</Card.Description>
                <div className="icon-container">
                    <GoogleIcon width="1em" height="1em" fill="#333333AD"/>
                    <IndeedIcon width="1em" height="1em" fill="#333333AD" /> 
                </div>
            <Card.Description><Link className="people-bio" to={`/our-people/${person.id}`}>Show bio</Link></Card.Description>
        </Card>
    )
}

const People = React.memo(({ people }) => {
    
    return (
        <div className="people-list">
        <div className="people-grid-container">
            <ListComponent 
                data={people} 
                renderItem={(person, index) =>(
                    <PeopleCard key={index} person={person} />
                )} />
        </div>
    </div>
    );
})



export default People;