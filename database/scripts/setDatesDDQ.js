const fs = require('fs');


function formatDate(date) {
// Take a Date in d.getTime (millisecond) format and return a string 'yyyy-mm-dd'.

    let year = date.getFullYear().toString();
    
    let monthNum = date.getMonth() + 1;
    let month;
    monthNum < 10 ? month = '0' + monthNum.toString() : month = monthNum.toString();
    
    let dayNum = date.getDate();
    let day;
    dayNum < 10 ? day = '0' + dayNum.toString() : day = dayNum.toString();
    
    return year + '-' + month + '-' + day;
}

function calcDates(bookingId) {

  let startDateObj = new Date(today.getTime() + (86400000 * (Math.ceil(bookingId / 2) - 2)));
  let endDateObj = new Date(today.getTime() + (86400000 * (Math.floor(bookingId / 2) - 0)));
  return [startDateObj, endDateObj];
}

function setBookingDates(line) {
  if (line.slice(0, 22) === 'insert into `Bookings`') {
    let end = line.search(/\)/);
    let values = line.slice(31, end).split(',');
    let bookingId = parseInt(values[0]);
    let newDates = calcDates(bookingId);
    values[1] = " '" + formatDate(newDates[0]) + "'"
    values[2] = " '" + formatDate(newDates[1]) + "'"
   
    return line.slice(0, 31) + values.join() + "\)\;";
    
  } else { return line; }
}

let todayDate = new Date();
let day = todayDate.getDate();
let month = todayDate.getMonth();
let year = todayDate.getFullYear();
let today = new Date(year, month, day);

try{

  let DDQ = fs.readFileSync('../../database/DDQ_file_2.sql', 'utf8');
  
  console.log(DDQ);
  
  let lines = DDQ.split('\n'); // split into queries
  
  let newLines = lines.map(line => setBookingDates(line));
  
  let newDDQ = newLines.join('\n');
  
  console.log(newDDQ)
  
  fs.writeFile('../../database/DDQ_file_2.sql',newDDQ, err => {
    if (err) {
      console.log(err);
    }
  });
 
  // for (let e of newLines){
  //   console.log(e, "chico");
  // }

} catch (e) {
  console.error(e);

}


