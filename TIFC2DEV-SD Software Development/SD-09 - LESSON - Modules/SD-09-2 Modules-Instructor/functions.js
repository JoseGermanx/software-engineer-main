import * as arrays from "./arrays.js"

//  arrays es un objeto que incluye lo que se exporta desde ./arrays.js

export function printDate() {

  let year = new Date().getFullYear()
  let day = new Date().getDay()
  let date = new Date().getDate()
  let month = new Date().getMonth()

  console.log("Today is " + (() => arrays.day[day] + " " + date + arrays.ordinal[date] + " " + arrays.month[month] + " " + year)())
}