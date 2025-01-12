import React from 'react';
import TabComponent from '../../components/common/Tab/Tab';
import Typography from '../../components/ui/Typography/Typography';
import { CustomerTabs } from '../../constant/constant';
import ListComponent from '../../components/common/ListComponent/ListComponent';

const GridLayout = ({children}) =>{
    
    return <ListComponent data={children} renderItem={(path, index) => (<img key={index} src={path} />)} />
}
const CustomerSection = () => { 

    return( 
    <div className="customer-container">
        <div className="cx-content-wrapper">
            <div className="cx-heading">
                <Typography type="h1" className="cx-header">No problem is unsolvable.</Typography>
                <Typography className="text-paragraph-standard cx-txt" type="p">M2.0 Communications has been working with a number of businesses in various industries.</Typography>
                <Typography className="text-paragraph-standard cx-txt" type="p">As a communications agency, we offer a range of services that provide solutions depending on the needs of our clients. </Typography>
                <Typography className="text-paragraph-standard cx-txt" type="p">Check out the different brands we’ve helped over the years.</Typography>
            </div>
            <TabComponent tabs={CustomerTabs} layout={GridLayout}/>
        </div>
    </div>
    )
}


export default CustomerSection;