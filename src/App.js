import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './componets/Navbar';
import AddTask from './componets/AddTask';
import ViewTask from './componets/ViewTask';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mx-auto py-20">
          <Routes>
            <Route exact path="/" element={<AddTask />} />
            <Route exact path="/viewtask" element={<ViewTask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
