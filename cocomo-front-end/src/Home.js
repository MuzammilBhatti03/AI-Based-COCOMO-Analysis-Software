import React, { useState } from "react";
import styles from "./home.css";
import CocomoWizard from "./CocomoWizard";

const Home = ({ handleLogout }) => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);

  const [newEmployee, setNewEmployee] = useState({ name: "", role: "" });

  // COCOMO State
  const [cocomoInputs, setCocomoInputs] = useState({
    size: 100,
    language: "C",
    laborRate: 10,
  });

  const [cocomoResults, setCocomoResults] = useState(null);

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

  // Handle COCOMO Inputs
  const handleCocomoInputChange = (e) => {
    const { name, value } = e.target;
    setCocomoInputs({ ...cocomoInputs, [name]: value });
  };

  // Calculate COCOMO Estimates
  const calculateCocomo = () => {
    const { size, laborRate } = cocomoInputs;
    const effort = (size * 1.25).toFixed(1); // Effort = size * constant
    const schedule = (effort / 3.8).toFixed(1); // Schedule = Effort / 3.8
    const cost = (effort * laborRate).toFixed(1); // Cost = Effort * laborRate
    setCocomoResults({ effort, schedule, cost });
  };

  return (
    <div>
    <header>
      <h1>Company Management and COCOMO Estimation</h1>
      <button onClick={handleLogout}>Logout</button>
    </header>

    {/* COCOMO Wizard */}
    <CocomoWizard calculateCocomo={calculateCocomo} />

    {/* Results */}
    {cocomoResults && (
      <div className="cocomo-results">
        <h3>COCOMO Results:</h3>
        <p>Effort: {cocomoResults.effort} Person-Months</p>
        <p>Schedule: {cocomoResults.schedule} Months</p>
        <p>Cost: ${cocomoResults.cost}</p>
        <p>Resources: {cocomoResults.resources}</p>
      </div>
    )}
  </div>
  );
};

export default Home;
