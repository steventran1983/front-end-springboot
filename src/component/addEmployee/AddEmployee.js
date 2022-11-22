import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./addEmployee.css";

const AddEmployee = () => {
  console.log("Thang Cong TU");
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
      const res = await axios.post("http://localhost:8080/employees", employee);
      console.log(res.data)
      toast.success("Employee create successfully");
    } catch (err) {
      console.log("err");
      toast.error("Employee create failed");
    }
  };
  return (
    <section className="addemployee-container grid">
      <div className="add-title">
        <p>Adding New Employee</p>
        <form onSubmit={handleSubmit} className="adding-form submit">
          <label className="label">
            Email
            <input className="input" name="empEmail" type="email" />
          </label>
          <label className="label">
            First Name
            <input className="input" name="empFirstName" type="text" />
          </label>

          <label className="label">
            Last Name
            <input className="input" name="empLastName" type="text" />
          </label>

          <label className="label">
            Gender
            <input className="input" name="empGender" type="text" />
          </label>
          <label className="label">
            Phone Number
            <input className="input" name="empPhoneNumber" type="text" />
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