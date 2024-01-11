import React from 'react';
import CoursesList from './components/CoursesList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// <div><h1>My Udemy Courses</h1></div>
function App() {
  return (
    <Router>
      <div className="app">
        
        <Route path="/" exact component={CoursesList} />
      </div>
    </Router>
  );
}

export default App;
