<ul>
<a href="/" className="celsius" rel="noreferrer">C°</a>
|{" "}
<a href="/" className="fahrenheit" rel="noreferrer">F°</a>
</ul>;

function showPosition(position) {
 //function 1:current lat & long
 let lon = position.coords.longitude;
 let lat = position.coords.latitude;
 let key = "61de322b4c57e14ee5306e572d84bdb5";
 let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
 function getCurrentPosition(position) {

  precipitation: response.data.clouds.all,
  
  let visibility = document.querySelector("#visibility");
  visibility.innerHTML = `${(response.data.visibility / 1000).toFixed(1)}km`;
   
  let timezoneShift = response.data.timezone * 1000;
  let utcSunrise = response.data.sys.sunrise * 1000;
  let utcSunset = response.data.sys.sunset * 1000;
  let localSunrise = utcSunrise + timezoneShift;
  let localSunset = utcSunset + timezoneShift;

  document.querySelector("#sunrise-time").innerHTML = `${formatHours(
    localSunrise
  )}`;
  document.querySelector("#sunset-time").innerHTML = `${formatHours(
    localSunset
  )}`;

   

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}

  


  