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