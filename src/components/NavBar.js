import React from 'react';
import { Link } from 'react-router-dom';

// This block is a NavBar component for navigation links
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Profile</Link></li>
        <li><Link to="/courses">Course List</Link></li>
        <li><Link to="/add-course">Add Course</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
