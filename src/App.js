import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div class="container">
      <div class="weather-app">
        <div class="row">
          <span class="col-6">
            <form class="form-inline" id="city-submit-form">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="City Search"
                aria-label="Search"
                id="city-search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                id="search-button"
              >
                Search
              </button>
            </form>
          </span>
          <span class="col-3">
            <h3 id="current-date">Sun Jan 17 18:40</h3>
          </span>
        </div>

        <h2 id="city">Los Angeles</h2>

        <div class="row">
          <div class="col">
            <span class="image-description">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Clear"
                id="icon"
              />
            </span>
            <strong id="current-temperature">18</strong>
            <span class="units">
              <h4 class="active" id="celsius-link">
                °C | °F
              </h4>
            </span>
          </div>
          <div class="col">
            <ul class="current-details">
              <li class="current-description"></li>
              <li>
                <strong id="current-high">26</strong>/
                <span id="current-low">11</span>
              </li>
              <li>
                Wind: <span id="wind">3mph</span>
              </li>
              <li>
                Humidity: <span id="humidity">47</span>%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
