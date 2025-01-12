import React from 'react';
import bg2 from '../../assets/Video-Landing-440kb.m4v';
import {ReactComponent as Icon1} from '../../assets/svg/img1.svg'
import {ReactComponent as Icon2} from '../../assets/svg/img2.svg'
import {ReactComponent as Icon3} from '../../assets/svg/img3.svg'
import {ReactComponent as Icon4} from '../../assets/svg/img4.svg'
import Button from '../../components/ui/Button/Button';
import "./Home.css";
import Typography from '../../components/ui/Typography/Typography';
import ListComponent from '../../components/common/ListComponent/ListComponent';


const BackgroundVideoSection = () => {

    const BUTTONS  = [
        {
            key: 1,
            label:"Data Analytics",
            icon: <Icon1 />
        },
        {
            key: 2,
            label:"Reputation",
            icon:<Icon2 />
        },
        {
            key: 3,
            label:"Advisory",
            icon:<Icon3 />
        },
        {
            key: 4,
            label:"Creatives",
            icon:<Icon4 />
        }
    ]
    return( 
    <div className="background-container">
        <div className="background-overlay"></div>
        <video className="background-video" src={bg2} autoPlay loop muted />
        <div className="background-content">
            <div className="text-holder">
                 <Typography type="h1" className="content-main-text text-header-5vw">Stand out with<br /> meaningful,<br/> data-driven narratives.</Typography>
                 <div className="btn-holder">
                    <ListComponent 
                        data={BUTTONS}
                        renderItem={(item) => (<Button iconStart={item.icon} key={item.key}>{item.label}</Button>)}
                    />
                </div>
            </div>
        </div>
    </div>)
}



export default BackgroundVideoSection;