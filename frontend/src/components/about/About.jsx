import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
          Welcome to our TodoList MERN Application! Our platform is designed to
          help individuals and teams stay organized and productive by offering a
          seamless task management experience. Built using the MERN stack
          (MongoDB, Express, React, and Node.js), the app ensures fast
          performance, reliability, and a user-friendly interface. Whether
          you’re planning personal tasks or collaborating on team projects, our
          app enables you to create, update, delete, and track tasks with ease.
          We also provide features like setting deadlines, receiving reminders,
          and categorizing tasks, making it the perfect productivity tool for
          busy users. Our mission is to empower users to manage their time
          efficiently and achieve their goals effortlessly.
        </p>
      </div>
    </div>
  );
};

export default About;
