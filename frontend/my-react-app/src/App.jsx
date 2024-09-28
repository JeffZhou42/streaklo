import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import PhotoCarousel from "./PhotoCarousel";
import Habits from "./Habits";
import axios from "axios";

function App() {
  const [user, setUser] = useState([{name: "John"}]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser")
      .then((result) => {
        setUser(result.data), location.update();
      })
      .catch((err) => console.log(err));
  });

  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
  ];

  return (
    <Router>
      <div className="App">
        <div className="streaklo-header">
          <h1 className="streaklo-text">Streaklo</h1>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="greeting-header">
                  <div className="greeting-wrapper">
                    <h1 className="greeting">
                      {"hi," + user[0].name + " what's today going to look like?"}
                    </h1>
                  </div>
                </header>
                <h2 className="recap-header">catch up</h2>
                <PhotoCarousel photos={photos} />
                <Link to="/habits" className="habits-link">
                  <span className="plus-symbol">+</span>
                  <span className="habits-text">Habits</span>
                </Link>
              </>
            }
          />
          <Route path="/habits" element={<Habits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
