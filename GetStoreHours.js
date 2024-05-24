// Test store hours
// let special_hours = `{
//     "Mon May 27 2024": {
//         "open": -1,
//         "close": -1
//     }
// }`;
// let hours = `{
//     "Monday": {
//         "open": -1,
//         "close": -1
//     },
//     "Tuesday": {
//         "open": 9.5,
//         "close": 17
//     },
//     "Wednesday": {
//         "open": 9.5,
//         "close": 17
//     },
//     "Thursday": {
//         "open": 9.5,
//         "close": 17
//     },
//     "Friday": {
//         "open": 9.5,
//         "close": 17
//     },
//     "Saturday": {
//         "open": 9.5,
//         "close": 15
//     },
//     "Sunday": {
//         "open": -1,
//         "close": -1
//     }
// }`;


console.log(hours);

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let hoursJSON = JSON.parse(hours);

let today = new Date();
let todayDay = dayNames[today.getDay()]
let todayHour = today.getHours();

let minutes = today.getMinutes() + todayHour * 60;
// let minutes = 960;

let openMinutes = hoursJSON[todayDay].open * 60;
let closeMinutes = hoursJSON[todayDay].close * 60;
console.log(minutes);
console.log(openMinutes);
// console.log(hoursJSON);
console.log(new Date().toDateString());
date = new Date().toDateString();
// date = "Mon May 27 2024";

if (date in JSON.parse(special_hours)) {
                let special = JSON.parse(special_hours);
                if (special[date].open === -1) {
                    text = '<span style="color: red; font-weight: 600;">Closed</span>';
                }
                else {
                    var open = special[new Date().toDateString()].open % 1 != 0 ? Math.floor(special[new Date().toDateString()].open) + ":30" : special[new Date().toDateString()].open;
                    var close = special[new Date().toDateString()].close % 1 != 0 ? Math.floor(special[new Date().toDateString()].close - 12) + ":30" : special[new Date().toDateString()].close - 12;
                    text = "<span style='color: green; font-weight: 600;'>Open</span><span> | Special Hours: " + open + " am - " + close + " pm</span>";
                }
}
else {
            if (hoursJSON[todayDay].open === -1) {
                if (hoursJSON['Monday'].open % 1 != 0 ) {
                    let tomorrow = dayNames[(today.getDay() + 1) % 7];
                    var open = Math.floor(hoursJSON[tomorrow].open) + ":30";
                }
                else {
                    var open = hoursJSON[tomorrow].open;
                }
                text = '<span style="color: red; font-weight: 600;">Closed</span><span> | Opens ' + tomorrow + ' at ' + open + ' am</span>';
            }
            else if (minutes >= openMinutes && minutes <= closeMinutes) {
                console.log(hoursJSON[todayDay].close);
                var close = hoursJSON[todayDay].close % 1 != 0 ? Math.floor(hoursJSON[todayDay].close - 12) + ":30" : hoursJSON[todayDay].close - 12;
                text = "<span style='color: green; font-weight: 600;'>Open</span><span> | Closes at " + close + " pm</span>";
            }
            else if (minutes < openMinutes) {
                var open = hoursJSON[todayDay].open % 1 != 0 ? Math.floor(hoursJSON[todayDay].open) + ":30" : hoursJSON[todayDay].open;
                text = '<span style="color: red; font-weight: 600;">Closed</span>';
            }
            else { 
                console.log(hoursJSON[todayDay].open);
                tomorrow = dayNames[(today.getDay() + 1) % 7];
                var open = hoursJSON[tomorrow].open % 1 != 0 ? Math.floor(hoursJSON[tomorrow].open) + ":30" : hoursJSON[tomorrow].open;
                text = '<span style="color: red; font-weight: 600;">Closed</span>';
            }
}
            
        // console.log(today.getHours());
            document.getElementById("hours").innerHTML = text;
