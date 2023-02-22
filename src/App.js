import React, { useEffect } from "react";
import SearchWeather from "./components/SearchWeather";
import "./index.css";
function App() {
  useEffect(() => {
    // getting users current location
  }, []);
  return (
    <>
      <SearchWeather />
      <div className="Center">
        <div className="footer">
          <p>         
              Deployed by :Tushar Sahu
          </p>
          
        </div>
      </div>
    </>
  );
}

export default App;
