import React from "react";
import './App.css';

export default function App() {
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
             <strong>
             Moscow{" "}🌇
             </strong>
             <img
              className="icon"
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt=""             
             />
             <div className="degrees" id="font-size">
             13 °c 
             </div>
            </h4>           
           </div> {/*col*/}
           <div className="col d-flex flex-column align-items-end">
            <h5 className="today">Tuesday, 04 May 15:29</h5>
            <ul>
             <li>
              <h6>Feels Like: 2 C°</h6>
             </li>
             <li id="description">Sunny</li>
            </ul>
           </div>
          </div> {/*row*/}
         </div> {/*list-group-item list-group-item active*/}
         <div className="unitConverter">
          <ul>
           <a
            href="/"
            className="celsius"
            rel="noreferrer"           
           >C°</a>
           |{" "}
           <a
            href="/"
            className="fahrenheit"
            rel="noreferrer"          
           >F°</a>
          </ul>
         </div> {/*unitConverter*/}
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
           </div> {/*col-7*/}
           <div className="col-2">
            <input
             type="submit"
             value="Search"
             className="btn btn-outline-primary w-100"
             id="search-button"
            />
           </div> {/*col-2*/}
           <div className="col-3">
            <input
             type="submit"
             value="I'm here 👋"
             className="btn btn-outline-danger w-100"
             id="search-button"
            />
           </div> {/*col-3*/}
          </div> {/*row*/}
         </form>
         <div className="d-flex w-100 justify-content-between">
          <medium className="text-muted" id="weather">
           <ul>
           <center className="display">            
            <li>Wind: 3 km/h;{"  "}</li>
            <li>Humidity: 30 %;{"  "}</li>
            <li>Atmospheric Pressure: 1071 hPa</li>            
           </center>
           </ul>
          </medium>
         </div> {/*d-flex w-100 justify-content-between*/}
         <div className="row">
          <div className="col-sm-4"> {/*column-1*/}
           <div className="card">
            <div className="card border-warning">
             <div className="card text-center">
              <div className="card-body">
               <span className="column-1">
                <div className="card-header bg-transparent border-warning">
                 <span className="colOne-weekday">Wednesday</span>
                 <br />
                </div> {/*card-header bg-transparent border-warning*/}
                <img
                 className="icon-1"
                 src="https://openweathermap.org/img/wn/11d@2x.png"
                 alt=""
                />
                <br />
                <p className="card-text">
                 max 5°{" "}
                  <span>
                  min 2°
                  </span>                 
                </p>
                <small>Thunder</small>
               </span> {/*column-1*/}
              </div> {/*card-body*/}
             </div> {/*card text-center*/}
            </div> {/*card border-warning*/}
           </div> {/*card*/}
          </div> {/*col-sm-4*/}

          <div className="col-sm-4">
           <div className="card">
            <div className="card border-primary">
             <div className="card text-center">
              <div className="card-body">
               <span className="column-2">
                <div className="card-header bg-transparent border-primary">
                 <span className="colTwo-weekday">Thursdsay</span>
                 <br />
                </div> {/*card-header bg-transparent border-primary*/}
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
               </span> {/*column-2*/}
              </div> {/*card-body*/}
             </div> {/*card text-center*/}
            </div> {/*card border-primary*/}
           </div> {/*card*/}
          </div> {/*col-sm-4*/}

          <div className="col-sm-4">
           <div className="card">
            <div className="card border-success">
             <div className="card text-center">
              <div className="card-body">
               <span className="column-3">
                <div className="card-header bg-transparent border-success">
                 <span className="colThree-weekday">Friday</span>
                 <br />
                </div> {/*card-header bg-transparent border-success*/}
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
               </span> {/*column-3*/}
              </div> {/*card-body*/}
             </div> {/*card text-center*/}
            </div> {/*card border-success*/}
           </div> {/*card*/}
          </div> {/*col-sm-4*/}
         </div> {/*row*/}

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
                </div> {/*card-header bg-transparent border-warning*/}
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
               </span> {/*column-4*/}
              </div> {/*card-body*/}
             </div> {/*card text-center*/}
            </div> {/*card border-warning*/}
           </div> {/*card*/}
          </div> {/*col-sm-4*/}

          <div className="col-sm-4">
           <div className="card">
            <div className="card border-primary">
             <div className="card text-center">
              <div className="card-body">
               <span className="column-5">
                <div className="card-header bg-transparent border-primary">
                 <span className="colFive-weekday">Sunday</span>
                 <br />
                </div> {/*card-header bg-transparent border-primary*/}
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
               </span> {/*column-5*/}
              </div> {/*card-body*/}
             </div> {/*card text-center*/}
            </div> {/*card border-primary*/}
           </div> {/*card*/}
          </div> {/*col-sm-4*/}

          <div className="col-sm-4">
           <div className="card">
            <div className="card border-success">
             <div className="card text-center">
              <div className="card-body">
               <span className="column-6">
                <div className="card-header bg-transparent border-success">
                 <span className="colSix-weekday">Monday</span>
                 <br />
                </div> {/*card-header bg-transparent border-success*/}
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
               </span> {/*column-6*/}
              </div> {/*card-body*/}
             </div> {/*card text-center*/}
            </div> {/*card border-success*/}
           </div> {/*card*/}
          </div> {/*col-sm-4*/}
         </div> {/*row*/}
         <div className="Footer">
          <small>
           <center>
           Brain-stormed by <em>Shirin Eldris</em>🤖, {""}
           <a
            href="https://github.com/Sibidomaskuli/forecast.git"
            className="purple"
            target="_blank"
            rel="noreferrer"
           >
            Open-Sourced on GitHub,           
           </a>
           <a
            a href="/"
            className="green"
            target="_blank"
            rel="noreferrer"
            >{" "}
            Netlify hosted
           </a>
           </center>
          </small>
         </div> {/*Footer*/}      
        </div> {/*border border-primary*/}
       </div> {/*list-group*/}
      </div> {/*card-body*/}
     </div> {/*card*/}
    </div> {/*weather-app*/}
   </div> {/*container*/}
  </div> 
 );
}
         
 
     
