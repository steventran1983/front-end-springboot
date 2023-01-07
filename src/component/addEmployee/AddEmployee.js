import React, { useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addEmployee.css";
import { FaUserPlus } from "react-icons/fa";

const AddEmployee = () => {
  const emailRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employee = {
      empEmail: e.target.empEmail.value,
      empFirstName: e.target.empFirstName.value,
      empLastName: e.target.empLastName.value,
      empGender: e.target.empGender.value,
      empPhoneNumber: e.target.empPhoneNumber.value,
    };
    console.log(employee);

    try {
      const res = await axios.post(
        "https://springboot-employees.herokuapp.com/employees",
        employee
      );
      console.log(res.data);
      toast.success("Employee create successfully");
      e.target.reset();
      emailRef.current.focus();
    } catch (err) {
      console.log("err");
      toast.error("Employee create failed");
    }
  };
  return (
    <section className="addemployee grid">
      <div className="addemp-container">
        <div className="add-title">
          <p>Adding New Employee</p>
          <div className="avatar">
            <FaUserPlus />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="adding-form submit">
          <label className="label">
            Email
            <input
              className="input-form-add"
              name="empEmail"
              type="email"
              ref={emailRef}
            />
          </label>
          <label className="label">
            First Name
            <input className="input-form-add" name="empFirstName" type="text" />
          </label>

          <label className="label">
            Last Name
            <input className="input-form-add" name="empLastName" type="text" />
          </label>

          <label className="label">
            Gender
            <input className="input-form-add" name="empGender" type="text" />
          </label>
          <label className="label">
            Phone Number
            <input
              className="input-form-add"
              name="empPhoneNumber"
              type="text"
            />
          </label>

          <button type="submit" className="submit-button">
            {" "}
            Adding New Employee
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddEmployee;
