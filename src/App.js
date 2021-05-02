import React from "react";
import './App.css';

export default function App() {
 return (
  <div className="App">
   <header className="App-header">
   <div className="container">
    <div className="weather-app">
    <div className="card">
     <div className="card-body">

      <div className="list-group">
       <span className="border border-primary">
        <a
          href="#"
          className="list-group-item list-group-item-action active"
          aria-current="true"
          rel="no referrer"
        />
       </span>
       <span className="d-flex justify-content-between">
        <h4 className="mb-1">
         <span className="cityName">
         Moscow{" "}🌇
         </span>
        </h4>
         <h5 className="today">Sunday, 02 May 18:48</h5>
         <ul>
          <li>feels like: 1°</li>
          <li>Sunny</li>
         </ul>
       </span>
       <img
          className="icon"
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt=""
       />
       <div className="degrees" id="font-size">
        13 °c
       </div>      
      </div>
      <div className="unitConverter">
       <ul>
        <a href="/" className="celsius" rel="noreferrer">C°</a>
        |{" "}
        <a href="/" className="fahrenheit" rel="noreferrer">F°</a>
       </ul>  
      </div>
      <form className="Input">
          <div className="row">
          <div className="col-7">               
          <input
           type="search"
           placeHolder="🌏 Enter a city.."
           className="form-control"
           autoComplete="off"
           autoFocus="on"
           id="box-contents"
          />
         </div>
          <div className="col-2">
           <input
            type="submit"
            value="Search"
            className="btn btn-outline-primary w-100"
            id="search-button"           
           />
          </div>       
         <div className="col-3">
          <input
           type="submit"
           value="I'm here 👋"
           className="btn btn-outline-danger w-100"
           id="search-button"
           />         
          </div>
         </div>
      </form>
      <div className="d-flex w-100 justify-content-between">
         <medium className="text-muted" id="weather">
           <ul>
            <li> 🚩 Wind: km/h;{" "}</li>
            <li> 💧 Humidity: %;{" "}</li>
            <li> 🌡️ Atmospheric Pressure: hPa;{" "}</li>
            <li> ☔ Precipitation: 86%</li>
           </ul>            
         </medium>
      </div>
      
      <div className="row">
        <div className="col-sm-4">
         <div className="card">
          <div className="card border-warning">
           <div className="card text-center">
            <div className="card-body">
             <span className="column-1">
              <div className="card-header bg-transparent border-warning">
               <span className="colOne-weekday">Thursday</span>
               <br />
              </div>
              <img
                  className="icon-1"
                  src="https://openweathermap.org/img/wn/11d@2x.png"
                  alt=""
              />
              <br />
              <p className="card-text">
               max 5° min 2°
              </p>
              <small>light snow</small>
             </span>
            </div>
           </div>
          </div>
         </div>
        </div>
            
        <div className="col-sm-4">
         <div className="card">
          <div className="card border-primary">
           <div className="card text-center">
            <div className="card-body">
             <div className="card-border text-primary">
              <span className="column-2">
               <div className="card-header bg-transparent border-primary">
               <span className="colTwo-weekday">Friday</span>
               <br />
              </div>
              <img
                  className="icon-2"
                  src="https://openweathermap.org/img/wn/04d@2x.png"
                  alt=""
              />
              <br />
              <p className="card-text">
               max 2° min 0°
              </p>
               <small>windy</small>
              </span>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
            
        <div className="col-sm-4">
         <div className="card">
          <div className="card border-success">
           <div className="card text-center">
            <div className="card-body">
             <span className="column-3">
              <div className="card-header bg-transparent border-success">
              <span className="colThree-weekday">Saturday</span>
               <br />
              </div>
              <img
                  className="icon-3"
                  src="https://openweathermap.org/img/wn/02d@2x.png"
                  alt=""
              />
              <br />
              <p className="card-text">
               max 7° min 4°
              </p>
              <small>cloudy</small>
             </span>
            </div>
           </div>
          </div>
         </div>
        </div>         
      </div>

      <div className="row">         
        <div className="col-sm-4">
         <div className="card">
          <div className="card border-warning">
           <div className="card text-center">
            <div className="card-body">
             <span className="column-4">
              <div className="card-header bg-transparent border-warning">
              <span className="colFour-weekday">Sunday</span>
               <br />
              </div>
              <img
                  className="icon-4"
                  src="https://openweathermap.org/img/wn/01d@2x.png"
                  alt=""
              />
              <br />
              <p className="card-text">
               max 12° min 9°
              </p>
              <small>sunny</small>
             </span>
            </div>
           </div>
          </div>
         </div>
        </div>
         
        <div className="col-sm-4">
         <div className="card">
          <div className="card border-primary">
           <div className="card text-center">
            <div className="card-body">
             <div className="card-border text-primary">
              <span className="column-5">
               <div className="card-header bg-transparent border-primary">
               <span className="colFive-weekday">Monday</span>
               <br />
              </div>
              <img
                  className="icon-5"
                  src="https://openweathermap.org/img/wn/01n@2x.png"
                  alt=""
              />
              <br />
              <p className="card-text">
               max 10° min 8°
              </p>
               <small>clear</small>
              </span>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
         
        <div className="col-sm-4">
         <div className="card">
          <div className="card border-success">
           <div className="card text-center">
            <div className="card-body">
             <span className="column-6">
              <div className="card-header bg-transparent border-success">
              <span className="colSix-weekday">Tuesday</span>
               <br />
              </div>
              <img
                  className="icon-6"
                  src="https://openweathermap.org/img/wn/04d@2x.png"
                  alt=""
              />
              <br />
              <p className="card-text">
               max 6° min 4°
              </p>
              <small>cold</small>
             </span>
            </div>
           </div>
          </div>
         </div>
        </div>         
      </div>
      <div className="Footer">
       <small>
        Brain- stormed by <em>Shirin Eldris</em> 🤖, {""}
        <a
         href="https://github.com/Sibidomaskuli/forecast.git"
         className="purple"
         target="_blank"
         rel="noreferrer"
        >
        Open-Source on GitHub,
        </a>
        <a href="/"
         className="green"
         target="_blank"
         rel="noreferrer"
        >{" "}
        Netlify hosted
        </a>
       </small>
       </div>
       
     </div>
    </div>
    </div>    
   </div>
   </header>
  </div>
 );
}

     
