import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faPhone} from '@fortawesome/free-solid-svg-icons';
import './Employee.css'

const Employee = (props) => {
    const {first_name, last_name, Number, country, email, gender, age, jobTitle, picture, sallery} = props.employee;
    return (
        <div className='emp-biodata'>
            <div className="emp-title">
                <div className="emp-image">
                    <img src={picture} alt="Profile-Pic" />
                </div>
                <h3><FontAwesomeIcon icon={faUser}/> {first_name} {last_name}</h3>
                <h5>{jobTitle}</h5>
                <div className="age-info">
                    <p><small>Age:{age} <span> | </span> {gender}</small></p>
                </div>
                <span className="emp-social">
                    <a href="/fb"><i className="fab fa-facebook"></i></a>
                    <a href="/tw"><i className="fab fa-twitter"></i></a>
                    <a href="/ld"><i className="fab fa-linkedin"></i></a>
                </span> 
            </div>
             

            <div className="vl"></div>
            <div className="emp-info">
                <p className="country">{country}</p>
                <p><small>{email}</small></p>
                <p><small><FontAwesomeIcon icon={faPhone}/> {Number}</small></p>
                <p className="country">Sallery: ${sallery}</p>
                {props.employee.isAdded ? (
                    <button className="added"><FontAwesomeIcon icon={faShoppingCart}/> Added</button>
                
                ) : (
                    <button onClick={ () => props.handleGetHired(props.employee)}><FontAwesomeIcon icon={faShoppingCart}/> Get Hired</button>
                )}
            </div>  
        </div>
    );
};

export default Employee;