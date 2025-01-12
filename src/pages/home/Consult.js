import React from 'react';
import Button from '../../components/ui/Button/Button';
import Typography from '../../components/ui/Typography/Typography';


const ConsultSection = () => {
    return (
    <div className="little-banner">
       <Typography type="h1">Consult with our experts.</Typography>
        <Button iconEnd={<i aria-hidden="true" className="lqd-icn-ess icon-md-arrow-forward"></i>}>Set Meeting</Button>
    </div>
    );
}


export default ConsultSection;