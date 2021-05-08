import React from "react";

export default function FormattedDate(props) {
 console.log(props.date);
 let now = new Date();
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 let today = days[now.getDay()];
 let date=now.getDate();
 let theDate = ("0" + date).slice(-2);
 let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 let month = months[now.getMonth()];
 let theHours = now.getHours();
 theHours = ("0" + theHours).slice(-2);
 let theMinutes = now.getMinutes();
 theMinutes = ("0" + theMinutes).slice(-2);
  return (
    <div>
    {theDate} {month} {theHours}:{theMinutes}    
   </div>  
  );
}