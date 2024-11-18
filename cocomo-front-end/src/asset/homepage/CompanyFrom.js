import React, { useState } from "react";

const CompanyForm = ({ addCompany }) => {
  const [companyName, setCompanyName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (companyName.trim() === "") return;
    addCompany(companyName);
    setCompanyName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Enter company name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        style={{
          padding: "10px",
          marginRight: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add Company
      </button>
    </form>
  );
};

export default AddCompanyForm;
