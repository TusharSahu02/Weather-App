import React, { useEffect } from "react";
import SearchWeather from "./components/SearchWeather";
import "./index.css";
function App() {
  useEffect(() => {
    // getting users current location
  }, [])
  return (
    <>
      <SearchWeather />
      <div className="Center">
        <div className="footer">
          <p>
            {" "}
            <a href="www.linkedin.com/in/tushar-sahu-buddy">
              Deployed by :Tushar Sahu
            </a>
          </p>
          <p>
            <a href="https://github.com/TusharSahu02/Weather-App"> Repo link: Github </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
