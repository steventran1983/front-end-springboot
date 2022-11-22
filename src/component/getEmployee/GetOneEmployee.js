import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const GetOneEmployee = () => {
  const [employee, setEmployee] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.empId.value;
    try {
      const res = await axios.get(`http://localhost:8080/employees/${id}`);
      setEmployee(res.data);
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
          Employee Id
          <input
            type="text"
            name="empId"
            className="adding-one-input"
            required
          />
        </label>
        <button className="btn-get-employee">Submit</button>
      </form>

      <div className="employee-info">
        <p className="employee-info">Id: {employee.empId}</p>
        <p className="employee-info">Email: {employee.empEmail}</p>
        <p className="employee-info">First Name: {employee.empFirstName}</p>
        <p className="employee-info">Last Name{employee.empLastName}</p>
        <p className="employee-info">Gender: {employee.empGender}</p>
        <p className="employee-info">Phone Number: {employee.empPhoneNumber}</p>
      </div>
    </div>
  );
};

export default GetOneEmployee;
