import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./COmponents/NavBar";
import News from "./COmponents/News";
import "./COmponents/newsStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWSMONKEY_APIKEY;
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
              apiKey={apiKey}
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
              apiKey={apiKey}
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
              apiKey={apiKey}
            />
          }
        />
        <Route
          exact
          path="health"
          element={
            <News
              key="health"
              pageSize={6}
              country="in"
              category="health"
              apiKey={apiKey}
            />
          }
        />
        <Route
          exact
          path="travel"
          element={
            <News
              key="travel"
              pageSize={6}
              country="in"
              category="travel"
              apiKey={apiKey}
            />
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
              apiKey={apiKey}
            />
          }
        />
        <Route
          exact
          path="sports"
          element={
            <News
              key="sports"
              pageSize={6}
              country="in"
              category="sports"
              apiKey={apiKey}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
