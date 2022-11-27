import axios from "axios";
import React, {useState} from "react";
import toast from "react-hot-toast";
import {FaUserTie} from 'react-icons/fa'

const GetOneEmployee = () => {
    const [employee, setEmployee] = useState({});
    const [showInfo, setShowInfo] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = e.target.empId.value;
        try {
            const res = await axios.get(`http://localhost:8080/employees/${id}`);
            setEmployee(res.data);
            setShowInfo(true)
            toast.success("Get Employee Info Success");
        } catch (error) {
            toast.error("Cannot connect Back End");
        }
    };
    return (
        <div className="get-employee-one">
            <div className="title">Fill In Employee ID</div>
            <form className="adding-one-form" onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        name="empId"
                        className="adding-one-input"
                        required
                        placeholder="Employee ID"
                    />
                </label>
                <button className="btn-get-one-employee">Submit</button>
            </form>
            {showInfo ?
                <div className="employee-info">
                    <FaUserTie className="usertie"/>
                    <p className="employee-info-one">First Name: {employee.empFirstName}</p>
                    <p className="employee-info-one">Last Name: {employee.empLastName}</p>
                    <p className="employee-info-one">Email: {employee.empEmail}</p>
                    <p className="employee-info-one">Email: {employee.empEmail}</p>
                    <p className="employee-info-one">Gender: {employee.empGender}</p>
                    <p className="employee-info-one">Phone Number: {employee.empPhoneNumber}</p>
                </div> : ""}
        </div>
    );
};

export default GetOneEmployee;
