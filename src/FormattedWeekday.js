import React from "react";

export default function FormattedWeekday() {
 let now = new Date();
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 let today=days[now.getDay()];
 return (
  <span>
   {today}
  </span>
 ); 
}