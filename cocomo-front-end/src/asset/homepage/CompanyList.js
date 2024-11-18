import React from "react";
import EmployeeForm from "./AddEmployeeForm";

const CompanyList = ({ companies, deleteCompany, addEmployee }) => {
  return (
    <div>
      {companies.length === 0 ? (
        <p>No companies available. Add one to get started!</p>
      ) : (
        companies.map((company) => (
          <div
            key={company.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>
              {company.name}
              <button
                onClick={() => deleteCompany(company.id)}
                style={{
                  marginLeft: "15px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </h2>
            <h3>Employees:</h3>
            {company.employees.length === 0 ? (
              <p>No employees added yet.</p>
            ) : (
              <ul>
                {company.employees.map((employee, index) => (
                  <li key={index}>
                    {employee.name} - {employee.role} - ${employee.salary}
                  </li>
                ))}
              </ul>
            )}
            <AddEmployeeForm
              companyId={company.id}
              addEmployee={addEmployee}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default CompanyList;
