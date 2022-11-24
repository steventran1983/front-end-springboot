import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AddEmployee from "../addEmployee/AddEmployee";
import "./getemployee.css";
import GetOneEmployee from "./GetOneEmployee";
const GetEmployee = () => {
  const [load, setLoad] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [employees, setEmployees] = useState([]);

  const handleGetEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:8080/employees/all");
      setEmployees(res.data);
      toast.success("Get Employees Completed");
    } catch (error) {
      toast.error("Cannot coonect DB");
    }
    setToggle(true);
  };

  const handleDelete = async (empId) => {
    console.log(empId);
    try {
      await axios.delete(`http://localhost:8080/employees/${empId}`);
      toast.success("Employee Deleted");
      setLoad(!load);
    } catch (error) {
      toast.error("Employee cannot Deleted");
    }
  };

  // useEffect(() => {
  //   handleGetEmployees();
  // }, [load]);

  return (
    <section className="get-employee grid">
      <div className="get-employee-conatiner">
        <div className="getemployee-button">
          <button className="btn-get-employee" onClick={handleGetEmployees}>
            Get All Employee
          </button>
          <button className="btn-get-employee" onClick={() => setToggle(false)}>
            Get One Employee
          </button>
        </div>
        {toggle ? (
          <ul className="get-employees-list">
            <li className="get-employee-item">
              <p className="employee-info">Emp ID</p>
              <p className="employee-info">Emp Email</p>
              <p className="employee-info">FName</p>
              <p className="employee-info">LName</p>
              <p className="employee-info">Gender</p>
              <p className="employee-info">Phone#</p>
              <p className="employee-info">Delete</p>
            </li>
            {employees.map((employee, index) => {
              const {
                empId,
                empEmail,
                empFirstName,
                empLastName,
                empGender,
                empPhoneNumber,
              } = employee;
              return (
                <li key={index} className="get-employee-item">
                  <p className="employee-info">{empId}</p>
                  <p className="employee-info">{empEmail}</p>
                  <p className="employee-info">{empFirstName}</p>
                  <p className="employee-info">{empLastName}</p>
                  <p className="employee-info">{empGender}</p>
                  <p className="employee-info">{empPhoneNumber}</p>
                  <button onClick={() => handleDelete(empId)}> Delete</button>
                </li>
              );
            })}
          </ul>
        ) : (
          <GetOneEmployee />
        )}
      </div>
    </section>
  );
};

export default GetEmployee;
