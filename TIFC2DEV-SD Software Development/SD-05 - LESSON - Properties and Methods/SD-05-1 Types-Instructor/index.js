// Object
let person = {
    "forename": "Kasim",
    "surname": "Chaudry",
    "fullName": function () {
      return "El nombre completo es:  " + person.forename + " " + person.surname
    },
    "age": 27,
    "contact": {
      "email": {
        "home": "liverpoolrox@example.net",
        "work": "kasimchaudry@example.com"
      },
      "phone": {
        "home": "+441632870235",
        "mobile": "+447700929333"
      }
    },
    "employed": true,
    "position": "Junior Developer"
  }

  console.log(person.fullName())