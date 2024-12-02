import React, { useState } from "react";
import Navbar from "./Navbar";
import CompanyList from "./CompanyList";
import AddCompanyForm from "./CompanyForm";

const App = () => {
  const [companies, setCompanies] = useState([]);

  const addCompany = (name) => {
    setCompanies((prevCompanies) => [
      ...prevCompanies,
      { id: Date.now(), name, employees: [] },
    ]);
  };

  const deleteCompany = (id) => {
    setCompanies((prevCompanies) => prevCompanies.filter((c) => c.id !== id));
  };

  const addEmployee = (companyId, employee) => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        company.id === companyId
          ? {
              ...company,
              employees: [...company.employees, employee],
            }
          : company
      )
    );
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <AddCompanyForm addCompany={addCompany} />
        <CompanyList
          companies={companies}
          deleteCompany={deleteCompany}
          addEmployee={addEmployee}
        />
      </div>
    </div>
  );
};

export default App;
