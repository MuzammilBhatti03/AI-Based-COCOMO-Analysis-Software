import React, { useState } from "react";
import "./CocomoEstimationPage.css"; 

const CocomoEstimationPage = ({ projectTitle }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleFileUpload = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const handleGenerateEstimate = () => {
    if (!selectedOption) {
      alert("Please select an option: SRS or Project Description");
      return;
    }
    if (!uploadedFile) {
      alert("Please upload a document");
      return;
    }
    console.log("Selected Option:", selectedOption);
    console.log("Uploaded File:", uploadedFile.name);
    alert("Estimation request submitted!");
  };

  return (
    <div className="container">
      <h1 className="title">COCOMO Estimation</h1>
      <h2 className="subtitle">{projectTitle}</h2>

      <div className="options">
        <label>
          <input
            type="radio"
            value="SRS"
            checked={selectedOption === "SRS"}
            onChange={() => handleOptionChange("SRS")}
          />
          SRS
        </label>
        <label className="radio-label">
          <input
            type="radio"
            value="Project Description"
            checked={selectedOption === "Project Description"}
            onChange={() => handleOptionChange("Project Description")}
          />
          Project Description
        </label>
      </div>

      <div className="file-upload">
        <label htmlFor="upload-file" className="upload-button">
          Add Document
        </label>
        <input
          id="upload-file"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        {uploadedFile && <p>Uploaded: {uploadedFile.name}</p>}
      </div>

      <button className="generate-button" onClick={handleGenerateEstimate}>
        Generate AI Estimate
      </button>
    </div>
  );
};

export default CocomoEstimationPage;
