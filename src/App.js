import React from 'react';
import CoursesList from './components/CoursesList';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <div><h1>My Udemy Courses</h1></div>
        <Route path="/" exact component={CoursesList} />
      </div>
    </Router>
  );
}

export default App;
