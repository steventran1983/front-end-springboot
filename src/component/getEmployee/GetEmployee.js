import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./getemployee.css";
import GetOneEmployee from "./GetOneEmployee";
import ModifyEmployee from "../modifyEmployee/ModifyEmployee";

const GetEmployee = () => {
  const [load, setLoad] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [modify, setModify] = useState(false);
  const [update, setUpdate] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const handleModify = (empId) => {
    setModify(true);
    setEmployeeId(empId);
  };

  const handleGetEmployees = async () => {
    try {
      const res = await axios.get(
        "https://springboot-employees.herokuapp.com/employees/all"
      );
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
      await axios.delete(
        `https://springboot-employees.herokuapp.com/employees/${empId}`
      );
      toast.success("Employee Deleted");
      setLoad(!load);
    } catch (error) {
      toast.error("Employee cannot Deleted");
    }
  };

  useEffect(() => {
    handleGetEmployees();
  }, [load, update]);

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
              <p className="employee-infos">ID</p>
              <p className="employee-infos email">Emp Email</p>
              <p className="employee-infos">FName</p>
              <p className="employee-infos">LName</p>
              <p className="employee-infos">Gender</p>
              <p className="employee-infos phone">Phone#</p>
              <p className="employee-infos">Modify</p>
              <p className="employee-infos">Delete</p>
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
                  <p className="employee-infos">{empId}</p>
                  <p className="employee-infos email">{empEmail}</p>
                  <p className="employee-infos">{empFirstName}</p>
                  <p className="employee-infos">{empLastName}</p>
                  <p className="employee-infos">{empGender}</p>
                  <p className="employee-infos phone">{empPhoneNumber}</p>
                  <p className="employee-infos">
                    <button
                      onClick={() => handleModify(empId)}
                      className="btn-modify"
                    >
                      {" "}
                      Modify
                    </button>
                  </p>
                  <p className="employee-infos">
                    <button
                      onClick={() => handleDelete(empId)}
                      className="btn-delete"
                    >
                      {" "}
                      Delete
                    </button>
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <GetOneEmployee />
        )}
      </div>
      {modify ? (
        <ModifyEmployee data={{ setModify, employeeId, update, setUpdate }} />
      ) : (
        ""
      )}
    </section>
  );
};

export default GetEmployee;
