
/// con el new creamos una nueva instancia de una clase (o de un función constructora)
const currentDate = new Date() // clae incorparada de JS que nos entrega información de fecha


currentDate.getFullYear()
console.log(currentDate)

class Smartphone {

  constructor(make, year, color) {
    this.make = make
    this.year = year
    this.color = color
  }

  age() {           // 2024
    return currentDate.getFullYear() - this.year
  }

  otroMetodo() {
    console.log('otro metodo')
  }

}

const nokia = new Smartphone("Nokia", 2000)
console.log(nokia)


nokia.color = "Space Gray"

console.log(nokia)

const iphone = new Smartphone("Iphone", 2010)
