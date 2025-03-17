import React from "react";
import "./styles/home.css";
import Card from "./card";

function Home() {
  const courses = [
    {
      title: "Data Structures & Algorithms",
      description: "Master fundamental DSA concepts with hands-on practice",
      difficulty: "Beginner",
      students: 15000,
    },
    {
      title: "Web Development",
      description: "Learn full-stack development with modern technologies",
      difficulty: "Intermediate",
      students: 12000,
    },
    {
      title: "System Design",
      description: "Design scalable systems like industry experts",
      difficulty: "Advanced",
      students: 8000,
    },
  ];

  function signup() {
    window.location.href = "/signup";
  }

  function login() {
    window.location.href = "/login";
  }

  return (
    <div className="home-container">
      <header className="header">
        <nav className="nav-container">
          <div className="items">
            <h4 className="line">Courses</h4>
            <h4 className="line">Tutorials</h4>
            <h4 className="line">Practise</h4>
            <h4 className="line">Jobs</h4>
          </div>
          <h2 className="logo">Career Sync</h2>
          <div className="nav-buttons">
            <button onClick={signup} className="btn">
              Signup
            </button>
            <button onClick={login} className="btn">
              Login
            </button>
          </div>
        </nav>
      </header>

      <div className="main">
        <div className="hero-section">
          <div className="info">
            <h1>Unlock your Career Now</h1>
            <p>
              Explore opportunities across the world and get placed accordingly.
            </p>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search courses, topics, or skills..."
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>

        {/* <section className="features-section">
                    <h2>Why Choose Career Sync?</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>Expert-Led Content</h3>
                            <p>Learn from industry professionals</p>
                        </div>
                        <div className="feature-item">
                            <h3>Practice Arena</h3>
                            <p>Enhance skills with real problems</p>
                        </div>
                        <div className="feature-item">
                            <h3>Interview Prep</h3>
                            <p>Get ready for top companies</p>
                        </div>
                    </div>
                </section> */}

        <section className="courses-section">
          <h2>Popular Courses</h2>
          <div className="courses-grid">
            {courses.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
