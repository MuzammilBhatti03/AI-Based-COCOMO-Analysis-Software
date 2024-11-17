import React, { useState } from "react";
import styles from "./home.css";

const Home = ({ handleLogout }) => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);

  const [newEmployee, setNewEmployee] = useState({ name: "", role: "" });

  // Add a new company
  const addCompany = () => {
    if (newCompany.trim()) {
      setCompanies([
        ...companies,
        { id: Date.now(), name: newCompany, employees: [] },
      ]);
      setNewCompany("");
    } else {
      alert("Company name cannot be empty.");
    }
  };

  // Delete a company
  const deleteCompany = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
    if (selectedCompany?.id === id) setSelectedCompany(null); // Deselect deleted company
  };

  // Add an employee to the selected company
  const addEmployee = () => {
    if (!selectedCompany) {
      alert("Please select a company first.");
      return;
    }

    if (newEmployee.name.trim() && newEmployee.role.trim()) {
      const updatedCompanies = companies.map((company) =>
        company.id === selectedCompany.id
          ? {
              ...company,
              employees: [
                ...company.employees,
                { id: Date.now(), ...newEmployee },
              ],
            }
          : company
      );

      setCompanies(updatedCompanies);
      setNewEmployee({ name: "", role: "" });
    } else {
      alert("Employee name and role cannot be empty.");
    }
  };

  // Delete an employee
  const deleteEmployee = (employeeId) => {
    const updatedCompanies = companies.map((company) =>
      company.id === selectedCompany.id
        ? {
            ...company,
            employees: company.employees.filter(
              (employee) => employee.id !== employeeId
            ),
          }
        : company
    );

    setCompanies(updatedCompanies);
  };

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1>Welcome to the Company Management System</h1>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </header>

      <div className={styles.content}>
        <section className={styles.companySection}>
          <h2>Companies</h2>
          <div className={styles.addCompany}>
            <input
              type="text"
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
              placeholder="Enter company name"
              className={styles.input}
            />
            <button onClick={addCompany} className={styles.button}>
              Add Company
            </button>
          </div>

          <ul className={styles.companyList}>
            {companies.map((company) => (
              <li
                key={company.id}
                className={`${styles.companyItem} ${
                  selectedCompany?.id === company.id ? styles.selectedCompany : ""
                }`}
                onClick={() => setSelectedCompany(company)}
              >
                {company.name}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteCompany(company.id);
                  }}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.employeeSection}>
          <h2>Employees</h2>
          {selectedCompany ? (
            <>
              <div className={styles.addEmployee}>
                <input
                  type="text"
                  value={newEmployee.name}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, name: e.target.value })
                  }
                  placeholder="Employee name"
                  className={styles.input}
                />
                <input
                  type="text"
                  value={newEmployee.role}
                  onChange={(e) =>
                    setNewEmployee({ ...newEmployee, role: e.target.value })
                  }
                  placeholder="Employee role"
                  className={styles.input}
                />
                <button onClick={addEmployee} className={styles.button}>
                  Add Employee
                </button>
              </div>
              <ul className={styles.employeeList}>
                {selectedCompany.employees.map((employee) => (
                  <li key={employee.id} className={styles.employeeItem}>
                    {employee.name} - {employee.role}
                    <button
                      onClick={() => deleteEmployee(employee.id)}
                      className={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className={styles.noCompanyMessage}>
              Select a company to view or add employees.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
