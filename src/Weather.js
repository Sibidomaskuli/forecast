import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast"; 
import axios from "axios";

export default function Weather(props) {
 const [city, setCity] = useState(props.defaultCity);
 const [weatherData, setWeatherData]=useState({ready: false});
  
 function displayWeather(response) {  
 setWeatherData({   
  ready: true,
  city: response.data.name + ", " + response.data.sys.country,
  icon: response.data.weather[0].icon,
  todayDate: new Date(response.data.dt*1000),
  temperature: Math.round(response.data.main.temp),
  max_temp: Math.round(response.data.main.temp_max),
  min_temp: Math.round(response.data.main.temp_min),
  feels_like: Math.round(response.data.main.feels_like),
  pressure: response.data.main.pressure, 
  humidity: response.data.main.humidity,
  wind: Math.round(response.data.wind.speed),
  description: response.data.weather[0].description,
  coordinates: response.data.coord,   
   });  
  }

  function handleSubmit(event) {
   event.preventDefault();
   search(); 
  }

  function updateCity(event) { 
   setCity(event.target.value);    
  }
 
  function handleClick(event) {
   event.preventDefault();
   navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
 function searchLocation(position) {
  const key="64c64ffadfe4c3d751ef8a44c2608885";
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`; 
  axios.get(url).then(displayWeather); 
 }

 function search() {
  const key = "64c64ffadfe4c3d751ef8a44c2608885";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(url).then(displayWeather);
}
 
 if (weatherData.ready) {
  return (
   <div className="App">
    <div className="container">
     <div className="weather-app">
      <div className="card">
       <div className="card-body">
        <div className="list-group">
         <div className="border border-primary">
          <div className="list-group-item list-group-item active">
           <div className="row">
            <div className="col">
             <h4 className="mb-1">
              {/*city name display in header*/}
              <span className="Style">{weatherData.city} 🌇</span>
              <div className="degrees" id="font-size">
               {weatherData.temperature} c°
              </div>
             </h4>
            </div>{" "} {/*col*/}
            <div className="col d-flex flex-co lumn align-items">
             <ul>
              <li>
               <h5>
                <FormattedDate code={weatherData.todayDate} />
               </h5>
              </li>
              <li>
               <h6>Feels like: {weatherData.feels_like} c°</h6>
              </li>
             </ul>
            </div>{" "} {/*col d-flex flex-co lumn align-items*/}
           </div>{" "} {/*row*/}
          </div>{" "} {/*list-group-item list-group-item active*/}
          <form className="Input"
           onSubmit={handleSubmit}>
           <div className="row">
            <div className="col-7">
             <input
              type="search"
              placeHolder="🌏 Enter a city.."
              className="form-control"
              autoComplete="off"
              autoFocus="on"
              id="box-contents"
              onChange={updateCity}
             />
            </div>{" "} {/*col-7*/}
            <div className="col-2">
             <input
              type="submit"
              value="Search"
              className="btn btn-outline-primary w-100"
              id="search-button"
             />
            </div>{" "} {/*col-2*/}
            <div className="col-3">
             <button onClick={handleClick} id="search-button">
              I'm here 👋
             </button>
            </div>{" "} {/*col-3*/}
           </div>{" "} {/*row*/}
          </form>
          <div className="d-flex w-100 justify-content-between">
           <medium className="text-muted" id="weather">
            <ul>
             <center>
              <li>
               Wind: {weatherData.wind} km/h;{"  "}
              </li>
              <li>
               Humidity: {weatherData.humidity} %;{"  "}
              </li>
              <li>
               Atmospheric Pressure: {weatherData.pressure} hPa
              </li>
             </center>
            </ul>
           </medium>
          </div>{" "} {/*d-flex w-100 justify-content-between*/}
          <Forecast coordinates={weatherData.coordinates} />
          <div className="Footer">
           <small>
            <center>
             Created by <em>Shirin Eldris</em> {""}
             <a
              href="https://github.com/Sibidomaskuli/forecast.git"
              className="purple"
              target="_blank"
              rel="noreferrer"
             >
              GitHub 🌍
             </a>
             <a
              a
              href="/"
              className="green"
              target="_blank"
              rel="noreferrer"
             >
              {" "}
              Netlify
             </a>
            </center>
           </small>
          </div>{" "} {/*Footer*/}
         </div>{" "} {/*border border-primary*/}
        </div>{" "} {/*list-group*/}
       </div>{" "} {/*card-body*/}
      </div>{" "} {/*card*/}
     </div>{" "} {/*weather-app*/}
    </div>{" "} {/*container*/}
   </div>
  );
 } else {
  search();
  return "Please stand by while loading...";
 }
  }
  
    
 
 
 
 
 
 

 
 

 