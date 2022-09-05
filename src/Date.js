import React from "react";


export default function Date(props) {

    let months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month  =months[props.date.getMonth()];

    let date = props.date.getDate();
    let year = props.date.getFullYear();
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
     if (hours < 10){
         hours =`0${hours}`;
     }
    let minutes = props.date.getMinutes();
     if (minutes < 10){
         minutes = `0${minutes}`
     } 
     
    return(
        <div className="FormattedDate">
            <ul>
            <li>Last Updated:</li>
            <li>
            {month}, {date}, {year} 
            </li>
            <li>
                {day} {hours}:{minutes}
            </li>
            </ul>
        </div>
    )
}
