import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { FaTimes, FaUserEdit } from "react-icons/fa";
import "./modifyEmployee.css";

const ModifyEmployee = ({ data }) => {
  const { setModify, employeeId, setUpdate, update } = data;

  const handleModify = async (e) => {
    e.preventDefault();
    const newEmployee = {
      empId: employeeId,
      empEmail: e.target.empEmail.value,
      empFirstName: e.target.empFirstName.value,
      empLastName: e.target.empLastName.value,
      empGender: e.target.empGender.value,
      empPhoneNumber: e.target.empPhoneNumber.value,
    };
    console.log(newEmployee);
    try {
      await axios.put(
        "https://springboot-employees.herokuapp.com/employees",
        newEmployee
      );
      toast.success("Employee create successfully");
      setUpdate(!update);
      setModify(false);
    } catch (err) {
      toast.error("Employee modify false");
    }
  };
  return (
    <section className="modify gird">
      <div className="modify-container">
        <div className="modify-modal">
          <p className="title">Employee Modification ID : {employeeId}</p>
          <div className="avatar">
            <FaUserEdit />
          </div>
          <form onSubmit={handleModify} className="adding-form submit">
            <label className="label">
              Email
              <input className="input-form" name="empEmail" type="email" />
            </label>
            <label className="label">
              First Name
              <input className="input-form" name="empFirstName" type="text" />
            </label>

            <label className="label">
              Last Name
              <input className="input-form" name="empLastName" type="text" />
            </label>

            <label className="label">
              Gender
              <input className="input-form" name="empGender" type="text" />
            </label>
            <label className="label">
              Phone Number
              <input className="input-form" name="empPhoneNumber" type="text" />
            </label>

            <button type="submit" className="submit-button">
              {" "}
              Submit
            </button>
          </form>

          <button className="close-button" onClick={() => setModify(false)}>
            <FaTimes />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModifyEmployee;
