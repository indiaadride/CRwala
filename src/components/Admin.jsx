import React from 'react';
import '../styles/Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">CR Wala</h2>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>Clients</li>
            <li>Packages</li>
            <li>Payments</li>
          </ul>
        </nav>
        <div className="logout">Log out</div>
      </aside>

      <main className="main-content">
        <header className="header">
          <h3>Details</h3>
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="profile">
            <span>Mary Rose</span>
          </div>
        </header>

        <section className="stats">
          <div className="card black-card">
            <p>Total Profit</p>
            <h3>$47,250</h3>
          </div>
          <div className="card">
            <p>Total Clients</p>
            <h3>125</h3>
          </div>
          <div className="card">
            <p>Ongoing Campaigns</p>
            <h3>32</h3>
          </div>
        </section>

        <section className="client-management">
          <div className="client-header">
            <h3>Client Management</h3>
            <button className="add-client-btn">Add New Client</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>PR Plan</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Smith</td>
                <td>Monthly</td>
                <td className="status active">Active</td>
                <td>20-11-24</td>
                <td>🗑 ✏️</td>
              </tr>
              <tr>
                <td>Sarah Lee</td>
                <td>Personal</td>
                <td className="status inactive">Inactive</td>
                <td>17-11-24</td>
                <td>🗑 ✏️</td>
              </tr>
              <tr>
                <td>Olivia Taylor</td>
                <td>Bundles</td>
                <td className="status active">Active</td>
                <td>11-11-24</td>
                <td>🗑 ✏️</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="analytics">
          <h3>Sales Analytics</h3>
          <div className="chart">
            <div className="bar" style={{ height: "50%" }}></div>
            <div className="bar" style={{ height: "70%" }}></div>
            <div className="bar" style={{ height: "90%" }}></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
