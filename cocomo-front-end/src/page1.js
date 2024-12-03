import React from "react";
import "./Page1.css"; // CSS for styling

const Page1 = () => {
  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="logo">CocomoApp</div>
        <nav className="tabs">
          <button className="tab">Projects</button>
          <button className="tab">Invites</button>
          <button className="tab logout">Logout</button>
        </nav>
      </header>

      {/* Sidebar and Main Content */}
      <div className="content">
        <aside className="sidebar">
          <button className="create-project-btn">Create Project</button>
          <h2>Dashboard</h2>
        </aside>

        <main className="main">
          <h2>Your Role</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample rows (replace with dynamic content) */}
              <tr>
                <td>John Doe</td>
                <td>Developer</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>Project Manager</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default Page1;
