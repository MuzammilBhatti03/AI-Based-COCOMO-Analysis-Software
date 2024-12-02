import React, { useState } from "react";

const EmployeeForm = ({ companyId, addEmployee }) => {
  const [employeeName, setEmployeeName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employeeName || !role || !salary) return;

    addEmployee(companyId, { name: employeeName, role, salary: Number(salary) });
    setEmployeeName("");
    setRole("");
    setSalary("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
      <input
        type="text"
        placeholder="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
        style={{ marginRight: "10px", padding: "5px", width: "150px" }}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ marginRight: "10px", padding: "5px", width: "150px" }}
      >
        <option value="">Select Role</option>
        <option value="Project Manager">Project Manager</option>
        <option value="Developer">Developer</option>
        <option value="QA Team">QA Team</option>
      </select>
      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        style={{ marginRight: "10px", padding: "5px", width: "100px" }}
      />
      <button
        type="submit"
        style={{
          padding: "5px 10px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployeeForm;
