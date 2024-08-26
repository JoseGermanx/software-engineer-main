// List
let array_1 = ["cereal", "bread", "eggs", 2, true, false]
//               0          1       2    índice

array_1.push("milk")

array_1.pop()

array_1.push([2,3,4])

  
  // Objetos
  let person = {
    name: "Mandeep Singh",
    age: 22,
    contact: "msingh@example.com"
  }
  

  // Object with a List element
  let object_2 = {
    name: "Jane Smith",
    age: 20,
    contact: [
      "smithj@example.com",
      "01632614909",
      "07700900217"
    ]
  }


  // lista objetos - estudiantes

  let estudiante1 = {
    nombre : "José",
    edad : 18,
    curso : "Programación"
  }

  let estudiante2 = {
    nombre : "María",
    edad : 19,
    curso : "Base de Datos"
  }

  let estudiante3 = {
    nombre : "Pedro",
    edad : 17,
    curso : "Sistemas Operativos"
  }

  let listaDeEstudiantes = [estudiante1, estudiante2, estudiante3]
  //                             0           1           2

  listaDeEstudiantes.length // 3


  for(let i = 0; i < listaDeEstudiantes.length; i++){
    console.log(listaDeEstudiantes[i].nombre)
  }