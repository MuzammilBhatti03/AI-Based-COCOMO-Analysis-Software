import React, { useState, useCallback } from "react";
import styles from "./home.css";
import CocomoWizard from "./CocomoWizard";
import LoadingScreen from "./LoadingScreen";  // Import LoadingScreen

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

  // Loading state
  const [loading, setLoading] = useState(false); // Add loading state

  // Add a new company
  const addCompany = useCallback(() => {
    if (newCompany.trim()) {
      setCompanies([
        ...companies,
        { id: Date.now(), name: newCompany, employees: [] },
      ]);
      setNewCompany("");
    } else {
      alert("Company name cannot be empty.");
    }
  }, [companies, newCompany]);

  // Delete a company
  const deleteCompany = (id) => {
    const updatedCompanies = companies.filter((company) => company.id !== id);
    setCompanies(updatedCompanies);
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
    setLoading(true);  // Start loading
    const { size, laborRate } = cocomoInputs;
    const effort = (size * 1.25).toFixed(1); // Effort = size * constant
    const schedule = (effort / 3.8).toFixed(1); // Schedule = Effort / 3.8
    const cost = (effort * laborRate).toFixed(1); // Cost = Effort * laborRate
    setCocomoResults({ effort, schedule, cost });
    setLoading(false);  // End loading
  };

  return (
    <div>
      <header>
        <h1>Company Management and COCOMO Estimation</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>

      {/* Show loading screen while calculating */}
      {loading && <LoadingScreen loadingText="Calculating COCOMO..." />}

      {/* COCOMO Wizard */}
      <CocomoWizard calculateCocomo={calculateCocomo} />

      {/* Results */}
      {cocomoResults && !loading && (
        <div className="cocomo-results">
          <h3>COCOMO Results:</h3>
          <p>Effort: {cocomoResults.effort} Person-Months</p>
          <p>Schedule: {cocomoResults.schedule} Months</p>
          <p>Cost: ${cocomoResults.cost}</p>
        </div>
      )}

      {/* Company Management */}
      <div className="company-management">
        <input
          type="text"
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
          placeholder="Add a new company"
        />
        <button onClick={addCompany}>Add Company</button>

        <div>
          {companies.map((company) => (
            <div key={company.id}>
              <h2>{company.name}</h2>
              <button onClick={() => deleteCompany(company.id)}>
                Delete Company
              </button>
              <button onClick={() => setSelectedCompany(company)}>
                Select Company
              </button>

              {selectedCompany?.id === company.id && (
                <div>
                  <h3>Employees:</h3>
                  <input
                    type="text"
                    value={newEmployee.name}
                    onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                    placeholder="Employee name"
                  />
                  <input
                    type="text"
                    value={newEmployee.role}
                    onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
                    placeholder="Employee role"
                  />
                  <button onClick={addEmployee}>Add Employee</button>

                  <ul>
                    {company.employees.map((employee) => (
                      <li key={employee.id}>
                        {employee.name} - {employee.role}
                        <button onClick={() => deleteEmployee(employee.id)}>
                          Delete Employee
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
