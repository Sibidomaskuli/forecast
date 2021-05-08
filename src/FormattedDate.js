import React from "react";

export default function FormattedDate(props) {
 console.log(props.date);
 let now = new Date();
 let date=now.getDate();
 let thisDate = ("0" + date).slice(-2);
 let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 let month = months[now.getMonth()];
 let hours = now.getHours();
 hours = ("0" + hours).slice(-2);
 let minutes = now.getMinutes();
 minutes = ("0" + minutes).slice(-2);
  return (
    <div>
    {thisDate} {month} {hours}:{minutes}    
   </div>  
  );
}
 