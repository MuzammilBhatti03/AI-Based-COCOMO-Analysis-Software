import React, { useState } from "react";
import "./page2.css"; // Import your CSS for styles

const Page2 = () => {
  const [projectName, setProjectName] = useState("");
  const [members, setMembers] = useState([{ name: "", role: "" }]);

  // Handle input change for project name
  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  // Handle input change for member's name or role
  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMembers = [...members];
    updatedMembers[index][name] = value;
    setMembers(updatedMembers);
  };

  // Add new member row
  const addMember = () => {
    setMembers([...members, { name: "", role: "" }]);
  };

  // Handle submit (you can customize this to send the data to the backend)
  const handleSubmit = () => {
    console.log("Project Name:", projectName);
    console.log("Project Members:", members);
    // You can add logic to submit this data, for example, send to an API
  };

  return (
    <div className="page2-container">
      <h2>Project Creation</h2>

      <div className="input-container">
        <label htmlFor="projectName">Project Name</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={handleProjectNameChange}
          placeholder="Enter project name"
        />
      </div>

      <div className="members-container">
        <h3>Project Members</h3>
        {members.map((member, index) => (
          <div className="member-row" key={index}>
            <input
              type="text"
              name="name"
              value={member.name}
              onChange={(e) => handleMemberChange(index, e)}
              placeholder="Enter member name"
            />
            <input
              type="text"
              name="role"
              value={member.role}
              onChange={(e) => handleMemberChange(index, e)}
              placeholder="Enter member role"
            />
          </div>
        ))}
        <button onClick={addMember} className="add-member-btn">
          Add Member
        </button>
      </div>

      <button onClick={handleSubmit} className="submit-btn">
        Submit Project
      </button>
    </div>
  );
};

export default Page2;
