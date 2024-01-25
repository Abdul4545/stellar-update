import React, { Component } from 'react'
import NavBar from './Componenets/NavBar';
import News from './Componenets/News';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  pageSize = 9;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize = {this.pageSize} country={"in"} category="general" />} />
            <Route path="/business" element={<News key="business" pageSize = {this.pageSize} country={"in"} category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize = {this.pageSize} country={"in"} category="entertainment" />} />
            <Route path="/sports" element={<News key="sports" pageSize = {this.pageSize} country={"in"} category="sports" />} />
            <Route path="/science" element={<News key="science" pageSize = {this.pageSize} country={"in"} category="science" />} />
            <Route path="/technology" element={<News key="technology" pageSize = {this.pageSize} country={"in"} category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;


