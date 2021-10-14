import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';
import Hired from '../Hired/Hired';
import './EmployeeList.css'

const EmployeeList = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const [hired, setGetHired] = useState([])

    useEffect(() => {
        fetch('./employee.JSON')
        .then ( res => res.json())
        .then ( data => setEmployeeList(data))
    }, []);

    // Hired Button Event Handler 

    const handleGetHired = (employee) => {
        employee.isAdded = true;
        const newGetHired = [...hired, employee];
        setGetHired(newGetHired);
    }

    return (
        <div className="emp-list-container">
            <div>
                <Hired hired={hired}></Hired>
            </div>
            <div className="emp-container">
                {
                    employeeList.map( employee => 
                    <Employee
                        key = {employee.id}
                        employee ={employee}
                        handleGetHired={handleGetHired}
                        >
                    </Employee>)
                }
            </div>
            
        </div>
    );
};

export default EmployeeList;