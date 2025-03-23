import React from "react";
import "./Dashboard.css";
import Page from "./../../../containers/page/Page";

const Dashboard = () => {
  const stats = [
    { label: "Total Posts", value: 32 },
    { label: "Views This Month", value: "8,245" },
    { label: "Followers", value: "1,220" },
  ];

  const recentPosts = [
    { title: "How to Make Perfect Pancakes", date: "March 15, 2025" },
    { title: "10-Minute Pasta Recipes", date: "March 12, 2025" },
    { title: "Ultimate Kitchen Hacks", date: "March 10, 2025" },
  ];

  return (
    <Page>
      <h1 className="dashboard-title">Welcome back, Admin!</h1>

      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="action-buttons">
          <button className="btn primary">New Post</button>
          <button className="btn">Manage Posts</button>
          <button className="btn">Edit Profile</button>
        </div>
      </div>

      <div className="dashboard-recent-posts">
        <h2 className="section-title">Recent Posts</h2>
        {recentPosts.map((post, index) => (
          <div key={index} className="post-card">
            <div>
              <p className="post-title">{post.title}</p>
              <p className="post-date">{post.date}</p>
            </div>
            <button className="btn small">Edit</button>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Dashboard;
