import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import CourseList from './components/CourseList';
import AddCourse from './components/AddCourse';
import NavBar from './components/NavBar';

// This is a main App component
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/add-course" element={<AddCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
