import React, { useState } from 'react';
import Typography from '../../../components/ui/Typography/Typography';
import { MEDIUM_CARD_DATA } from '../../../constant/constant';
import MediumCards from './MediumCards';

const MediumSection = () => {
 
    return (
        <div className="medium-container">
            <div className="medium-container-grid">
                <div className="item1 custom">
                    <Typography type="h2" className="medium-main-header">The medium<br />
                    <Typography type="span">is the message.</Typography></Typography>
                    <Typography className="text-paragraph-standard" type="p">The message won’t matter unless you say it properly. Find the right voice
                        through the conversations in relevant, traditional, and online platforms. 
                        Know how to creatively engage your audience and adapt with the best communication practices.</Typography>
                </div>
                <MediumCards post={MEDIUM_CARD_DATA}/>              
            </div>
        </div>

    )
}


export default MediumSection;