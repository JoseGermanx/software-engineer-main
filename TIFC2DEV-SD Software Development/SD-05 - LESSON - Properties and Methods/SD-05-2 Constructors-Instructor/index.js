

function Person(name, lastName, edad) {
    this.forename = name
    this.surname = lastName
    this.age = edad
    this.fullName = function () {
      return this.forename + " " + this.surname
    }
  }
  

  // Person 1
  let personOne = new Person("Kasim", "Chaudry")

   // Person 2
  let personTwo = new Person("Eva", "Malinova")

  // Person 3
  let personThree = new Person("John", "Doe")

  console.log(personOne.fullName())