import PropTypes from "prop-types";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./COmponents/NavBar";
import News from "./COmponents/News";
import "./COmponents/newsStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
  apiKey=process.env.REACT_APP_NEWSMONKEY_APIKEY;

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                pageSize={6}
                country="in"
                category="general"
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            exact
            path="business"
            element={
              <News
                key="business"
                pageSize={6}
                country="in"
                category="business"
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            exact
            path="entertainment"
            element={
              <News
                key="entertainment"
                pageSize={6}
                country="in"
                category="entertainment"
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            exact
            path="health"
            element={
              <News key="health" pageSize={6} country="in" category="health" apiKey={this.apiKey} />
            }
          />
          <Route
            exact
            path="travel"
            element={
              <News key="travel" pageSize={6} country="in" category="travel" apiKey={this.apiKey} />
            }
          />
          <Route
            exact
            path="science"
            element={
              <News
                key="science"
                pageSize={6}
                country="in"
                category="science"
                apiKey={this.apiKey}
              />
            }
          />
          <Route
            exact
            path="sports"
            element={
              <News key="sports" pageSize={6} country="in" category="sports" apiKey={this.apiKey}/>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
