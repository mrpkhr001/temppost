import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav1 from "./components/Nav/Nav1";
import PostList from "./components/pages/PostList";
import ShowComments from "./components/pages/ShowComments";
//import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PostList />} />
          <Route exact path="/posts/:id" element={<ShowComments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
