const day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  
  const ordinal = [
    null,
    'st',
    'nd',
    'rd',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'st',
    'nd',
    'rd',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'st'
  ]
  
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  
  let year = new Date().getFullYear()
  
  let currentDay = new Date().getDay()
  
  let date = new Date().getDate()
  
  let currentMonth = new Date().getMonth()
  
  function getDate() {
    return day[currentDay] + " " + date + ordinal[date] + " " + month[currentMonth] + " " + year
  }
  
  function printDate() {
    console.log("Today is " + getDate())
  }

  printDate()