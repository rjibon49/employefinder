import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Hired.css';
import Hire from './Hire/Hire';

const Hired = (props) => {
    const hired = props.hired;
    
    let total = 0;

    for ( const employee of hired) {
        total = total + employee.sallery;
        // addDiv = hired , 
    }
    
    return (
        <div className="hired-info">
            <div className="hired-title">
                <h2>Hired Details</h2>
                <div className="hr"></div>
            </div>
            <div className="hired-details">
            <span><FontAwesomeIcon icon={faShoppingCart}/> {hired.length}</span>
            <h3>Total Sallery= ${total}</h3>
            </div>
            {
                hired.map(hire => <Hire
                key= {hire.id}
                hire = {hire}
                ></Hire>)
            }
            
        </div>
    );
};

export default Hired;