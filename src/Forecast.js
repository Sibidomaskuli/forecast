import React, {useEffect, useState} from "react";
import FormattedWeekday from "./FormattedWeekday";
import Icons from "./Icons"; 
import axios from "axios";
import './Forecast.css';

export default function Forecast(props) {
 const [weatherData, setWeatherData]=useState({ready: false});
 let [loaded, setLoaded]=useState(false);
 
 
 function displayForecast(response) {
  setWeatherData(response.data.daily);
  setLoaded(true);
 }
 
 useEffect(() => {
  setLoaded(false);
 }, [props.coordinates]);
 
 function load() {
  const key="64c64ffadfe4c3d751ef8a44c2608885";
  let latitude=props.coordinates.lat;
  let longitude=props.coordinates.lon;
  let geoUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alert&appid=${key}&units=metric`;
  axios.get(geoUrl).then(displayForecast);
 }
    
 if (loaded) {
  return (
   <div className="Forecast">
    <div className="row">
     <div className="col-sm-4">  
      <div className="card">
       <div className="card border-warning">
        <div className="card text-center">
         <div className="card-body">
          <span className="column-1">
           <div className="card-header bg-transparent border-warning">
            <span className="colOne-weekday">
             <FormattedWeekday code={weatherData.todayDate} />
            </span> {" "} {/*column-1*/}
            <br />
           </div> {" "} {/*card-header bg-transparent border-warning*/}
           <div className="icon-1">
            <Icons code={weatherData.icon} />
           </div>
           <br />
           <p className="card-text">
            max {weatherData.max_temp}°{" "}
            <span>
             min {weatherData.min_temp}°
            </span>
           </p>
           <small>{weatherData.description}</small>
          </span> {" "} {/*column-1*/}
         </div> {" "} {/*card-body*/}
        </div> {" "} {/*card text-center*/}
       </div> {" "} {/*card border-warning*/}
      </div> {" "} {/*card*/}
     </div> {" "} {/*col-sm-4*/}
    
     <div className="col-sm-4">
      <div className="card">
       <div className="card border-primary">
        <div className="card text-center">
         <div className="card-body">
          <span className="column-2">
           <div className="card-header bg-transparent border-primary">
            <span className="colTwo-weekday">
             Tomorrow
            </span>
            <br />
           </div> {" "} {/*card-header bg-transparent border-primary*/}
           <img
            className="icon-2"
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt=""
           />
           <br />
           <p className="card-text">
            max 2°{" "}
            <span>
             min 0°
            </span>
           </p>
           <small>Cold</small>
          </span> {" "} {/*column-2*/}
         </div> {" "} {/*card-body*/}
        </div> {" "} {/*card text-center*/}
       </div> {" "} {/*card border-primary*/}
      </div> {" "} {/*card*/}
     </div> {" "} {/*col-sm-4*/}
    
     <div className="col-sm-4">
      <div className="card">
       <div className="card border-success">
        <div className="card text-center">
         <div className="card-body">
          <span className="column-3">
           <div className="card-header bg-transparent border-success">
            <span className="colThree-weekday">Friday</span>
            <br />
           </div> {" "} {/*card-header bg-transparent border-success*/}
           <img
            className="icon-3"
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt=""
           />
           <br />
           <p className="card-text">
            max 7°{" "}
            <span>
             min 4°
            </span>
           </p>
           <small>Cloudy</small>
          </span> {" "} {/*column-3*/}
         </div> {" "} {/*card-body*/}
        </div> {" "} {/*card text-center*/}
       </div> {" "} {/*card border-success*/}
      </div> {" "} {/*card*/}
     </div> {" "} {/*col-sm-4*/}
    </div> {" "} {/*row*/}
    
    <div className="row">
     <div className="col-sm-4">
      <div className="card">
       <div className="card border-warning">
        <div className="card text-center">
         <div className="card-body">
          <span className="column-4">
           <div className="card-header bg-transparent border-warning">
            <span className="colFour-weekday">Saturday</span>
            <br />
           </div> {" "} {/*card-header bg-transparent border-warning*/}
           <img
            className="icon-4"
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
           />
           <br />
           <p className="card-text">
            max 12°{" "}
            <span>
             min 9°
            </span>
           </p>
           <small>Sunny</small>
          </span> {" "} {/*column-4*/}
         </div> {" "} {/*card-body*/}
        </div> {" "} {/*card text-center*/}
       </div> {" "} {/*card border-warning*/}
      </div> {" "} {/*card*/}
     </div> {" "} {/*col-sm-4*/}
    
     <div className="col-sm-4">
      <div className="card">
       <div className="card border-primary">
        <div className="card text-center">
         <div className="card-body">
          <span className="column-5">
           <div className="card-header bg-transparent border-primary">
            <span className="colFive-weekday">Sunday</span>
            <br />
           </div> {" "} {/*card-header bg-transparent border-primary*/}
           <img
            className="icon-5"
            src="https://openweathermap.org/img/wn/03d@2x.png"
            alt=""
           />
           <br />
           <p className="card-text">
            max 10°{" "}
            <span>
             min 8°
            </span>
           </p>
           <small>Clear</small>
          </span> {" "} {/*column-5*/}
         </div> {" "} {/*card-body*/}
        </div> {" "} {/*card text-center*/}
       </div> {" "} {/*card border-primary*/}
      </div> {" "} {/*card*/}
     </div> {" "} {/*col-sm-4*/}
    
     <div className="col-sm-4">
      <div className="card">
       <div className="card border-success">
        <div className="card text-center">
         <div className="card-body">
          <span className="column-6">
           <div className="card-header bg-transparent border-success">
            <span className="colSix-weekday">Monday</span>
            <br />
           </div> {" "} {/*card-header bg-transparent border-success*/}
           <img
            className="icon-6"
            src="https://openweathermap.org/img/wn/02n@2x.png"
            alt=""
           />
           <br />
           <p className="card-text">
            max 6°
            <span>
             min 4°
            </span>
           </p>
           <small>Cold</small>
          </span> {" "} {/*column-6*/}
         </div> {" "} {/*card-body*/}
        </div> {" "} {/*card text-center*/}
       </div> {" "} {/*card border-success*/}
      </div> {" "} {/*card*/}
     </div> {" "} {/*col-sm-4*/}
    </div> {" "} {/*row*/}
   </div>
  );
 } else {
  load();
  return null;
 }
}
 

  
  
    
  
  
  
  
  