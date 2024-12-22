import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Layout from "../components/Layout";
import { MdLocationOn } from "react-icons/md";
import { useTranslation } from "react-i18next"; // Importer useTranslation
import '../styles/Weather.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherApp = () => {
  const { t } = useTranslation(); // Initialisation de i18next pour la traduction
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");  
  const [inputCity, setInputCity] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyTemperatures, setDailyTemperatures] = useState([]);
  const currentDate = new Date().toLocaleDateString();

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_ID}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "200") {
        setWeather(data.city);
        setHourlyForecast(data.list.slice(0, 8));
        setDailyTemperatures(getDailyAverages(data.list));
        setError(null);
      } else {
        setError(t("city_not_found"));
        setWeather(null);
        setHourlyForecast([]);
        setDailyTemperatures([]);
      }
    } catch (error) {
      setError(t("geo_error"));
      setWeather(null);
      setHourlyForecast([]);
      setDailyTemperatures([]);
    }
  };

  const getCityFromLocation = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_ID}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      return data.name;
    } catch (error) {
      console.error("Erreur de géolocalisation", error);
      return t("geo_not_supported");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const cityName = await getCityFromLocation(latitude, longitude);
          setCity(cityName);
        },
        () => {
          setError(t("geo_error"));
        }
      );
    } else {
      setError(t("geo_not_supported"));
    }
  }, []);

  useEffect(() => {
    if (city) {
      search(city);
    }
  }, [city]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (inputCity.trim()) {
      setCity(inputCity);
      setInputCity("");
    }
  };

  const toggleUnit = () => setIsCelsius(!isCelsius);

  const convertTemperature = (temp) =>
    isCelsius ? temp : (temp * 9) / 5 + 32;

  const getDailyAverages = (forecastList) => {
    const daily = {};
    forecastList.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!daily[date]) daily[date] = [];
      daily[date].push(item.main.temp);
    });

    return Object.keys(daily).map((date) => ({
      date,
      avgTemp:
        daily[date].reduce((sum, temp) => sum + temp, 0) / daily[date].length,
    }));
  };

  return (
    <Layout title={t("weather")}>
      <div className="container scroll">
        <header className="headerC">
          <form onSubmit={handleSearch} className="searchForm">
            <div className="inputContainer">
              <input
                type="text"
                value={inputCity}
                onChange={(e) => setInputCity(e.target.value)}
                placeholder={t("search_location")}
                className="input"
              />
            </div>
          </form>

          <div className="unitToggle" onClick={toggleUnit}>
            <span className={isCelsius ? "activeUnit" : "inactiveUnit"}>°C</span>
            <div className="toggleButton">
              <div
                className="toggleCircle"
                style={{
                  transform: isCelsius ? "translateX(0)" : "translateX(24px)",
                }}
              />
            </div>
            <span className={!isCelsius ? "activeUnit" : "inactiveUnit"}>°F</span>
          </div>
        </header>

        <div className="mainContainer">
          {weather ? (
            <div className="newWeatherCard">
              <div className="cardHeader">
                <div className="locationContainer">
                  <MdLocationOn className="locationIcon" />
                  <h2 className="cityName">{weather.name}</h2> - {weather.country}
                </div>
                <p className="countryName">{currentDate}</p>
              </div>

              <div className="cardBody">
                <div className="weatherInfo">
                  <img
                    src={`https://openweathermap.org/img/wn/${hourlyForecast[0]?.weather[0]?.icon}@2x.png`}
                    alt="weather icon"
                    className="weatherIcon"
                  />
                  <h1 className="temperature">
                    {Math.round(
                      convertTemperature(hourlyForecast[0]?.main?.temp || 0)
                    )}
                    °{isCelsius ? "C" : "F"}
                  </h1>
                </div>
                <p className="description">
                  {hourlyForecast[0]?.weather[0]?.description || "N/A"}
                </p>
              </div>

              <div className="cardFooter">
                <p>{t("humidity")}: {hourlyForecast[0]?.main?.humidity || "N/A"}%</p>
                <p>{t("wind")}: {hourlyForecast[0]?.wind?.speed || "N/A"} m/s</p>
              </div>
            </div>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <p>{t("loading_weather_data")}</p>
          )}

          <div className="dailyForecast">
            <h3>{t("five_day_forecast")}</h3>
            <Line
              data={{
                labels: dailyTemperatures.map((day) => day.date),
                datasets: [
                  {
                    label: t("temperature_label"),
                    data: dailyTemperatures.map((day) =>
                      Math.round(convertTemperature(day.avgTemp))
                    ),
                    borderColor: "#ff9800",
                    backgroundColor: "rgba(255, 152, 0, 0.2)",
                    fill: true,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: true },
                },
              }}
            />
          </div>
        </div>

        <div className="hourlyForecast">
          {hourlyForecast.map((forecast, index) => (
            <div key={index} className="forecastItem">
              <p className="forecastTime">
                {forecast.dt_txt.split(" ")[1].slice(0, 5)}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                alt="weather icon"
                className="weatherIcon"
              />
              <p className="forecastTemp">
                {Math.round(convertTemperature(forecast.main.temp))}°
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WeatherApp;
