import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import { HiSearch } from "react-icons/hi";
import api_key from "../Api";
function SearchWeather() {
  const [search, setSearch] = useState("Raigarh");
  const [data, setData] = useState({
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
    name: "",
    lat: 0,
    lon: 0,
    main: "",
    speed: 0,
    icon: "",
    dt: 0,
  });

  const makeIconUrl = (iconID) =>
    `https://openweathermap.org/img/wn/${iconID}@2x.png`;

  const handleClick = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}`
      )
      .then((response) => {
        console.log(response.data);
        setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country,
          name: response.data.name,
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
          main: response.data.weather[0].main,
          speed: response.data.wind.speed,
          icon: makeIconUrl(response.data.weather[0].icon),
          dt: response.data.dt,
        });
      });
  };
  function createDate(dt) {
    var day = new Date(dt * 1000);
    var day_date = day.toDateString();
    return day_date;
  }

  return (
    <div className="container">
      <div className="row1">
        <p>{createDate(data.dt)}</p>
        <p id="deg">{(data.temp - 273.15).toFixed()} &deg; C</p>
        <h1>
          {data.name}, {data.country}
        </h1>
      </div>
      <div className="row2">
        <div className="searchCity">
          <input
            type="search"
            placeholder="Search City..."
            name="search"
            id=""
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit" className="searchBtn" onClick={handleClick}>
            <HiSearch size={25} id="searchBtn" />
          </button>
        </div>
        <div className="icons_img">
          <img className="icon_" src={data.icon} alt="" />
        </div>
        <p id="main_des">{data.main}</p>
        <br />
        <p id="details">{data.description}</p>

        <p id="details">Humdity: {data.humidity}</p>

        <p id="details">
          Latitude: {data.lon} | Longitude: {data.lon}
        </p>
        <p id="details">
          Sunrise: {data.sunrise} | Sunset: {data.sunset}
        </p>
        <p id="details">Wind Speed : {data.speed}</p>
      </div>
    </div>
  );
}

export default SearchWeather;
