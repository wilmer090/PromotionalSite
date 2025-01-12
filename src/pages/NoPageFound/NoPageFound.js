import React from 'react';
import "./NoPageFound.css";
import Button from '../../components/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

const NoPageFound = () => {
    const navigate = useNavigate();

    const handleBtnClick = () =>{
        navigate("/");
    }
    return (
    <div className="container">
        <div className='content'>
            <h1 className='four_O_four_text'>404</h1>
            <h2>Looks like you are lost.</h2>
            <p>We can’t seem to find the page you’re looking for.</p>
            <Button  btnAction={handleBtnClick} customClass={"four_O_four_btn"} iconEnd={<i aria-hidden="true" className="lqd-icn-ess icon-md-arrow-forward"></i>}>Back to home</Button>
        </div>
      
    </div>
    );
}



export default NoPageFound;