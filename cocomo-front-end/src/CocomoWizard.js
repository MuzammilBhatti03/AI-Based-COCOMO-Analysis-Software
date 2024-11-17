import React, { useState } from "react";

const CocomoWizard = ({ calculateCocomo }) => {
  const [inputs, setInputs] = useState({
    modelType: "Basic", // Options: Basic, Intermediate, Advanced
    sizingMethod: "Function Points", // Options: Function Points, KLOC
    size: "",
    language: "C",
    laborRate: "",
    resources: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputs.size || !inputs.laborRate || !inputs.resources) {
      alert("Please fill all required fields!");
      return;
    }

    // Call the parent function to calculate results
    calculateCocomo(inputs);
  };

  return (
    <form onSubmit={handleSubmit} className="cocomo-form">
      <h3>COCOMO Estimation Wizard</h3>

      {/* Model Type */}
      <label>
        Which COCOMO model will you use? 
        <select
          name="modelType"
          value={inputs.modelType}
          onChange={handleChange}
          required
        >
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </label>

      {/* Sizing Method */}
      <label>
        Will you use Functional Points or KLOC for size estimation? 
        <select
          name="sizingMethod"
          value={inputs.sizingMethod}
          onChange={handleChange}
          required
        >
          <option value="Function Points">Function Points</option>
          <option value="KLOC">KLOC</option>
        </select>
      </label>

      {/* Size */}
      <label>
        Enter the size ({inputs.sizingMethod === "Function Points" ? "FP" : "KLOC"}):
        <input
          type="number"
          name="size"
          value={inputs.size}
          onChange={handleChange}
          placeholder="e.g., 100"
          required
        />
      </label>

      {/* Programming Language */}
      <label>
        Which programming language will you use? 
        <select
          name="language"
          value={inputs.language}
          onChange={handleChange}
          required
        >
          <option value="C">C</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </label>

      {/* Labor Rates */}
      <label>
        What are the labor rates (cost per person-month in $)? 
        <input
          type="number"
          name="laborRate"
          value={inputs.laborRate}
          onChange={handleChange}
          placeholder="e.g., 10"
          required
        />
      </label>

      {/* Resources */}
      <label>
        How many resources are available in the company? 
        <input
          type="number"
          name="resources"
          value={inputs.resources}
          onChange={handleChange}
          placeholder="e.g., 5"
          required
        />
      </label>

      <button type="submit" className="calculate-button">
        Calculate Estimates
      </button>
    </form>
  );
};

export default CocomoWizard;
