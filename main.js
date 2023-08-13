let elegirPrincipal

let elegirSecundario

let comprarBebida

let dineroActual = 200

function Tablas() {
  let ingresarNumero = parseInt(prompt("Ingresa el numero que quieras aprender las tablas"))

  for(let Tabla = 1; Tabla <= 10; Tabla++) {
    let Resultado = ingresarNumero * Tabla
    alert(ingresarNumero + " x " + Tabla + " = " + Resultado)
}
}

function hacerCalculo() {
  let elegirTerciario = prompt("Que calculo te gustaria realizar?\n\n1. Suma\n\n2. Resta\n\n3. Multiplicacion\n\n4. Division")

  if(elegirTerciario == "1") {
    let primerNumero = parseInt(prompt("Elige tu primer numero"))
    let segundoNumero = parseInt(prompt("Elige tu segundo numero " + primerNumero + " + " + "_"))
    let Resultado = primerNumero + segundoNumero
    alert(primerNumero + " + " + segundoNumero + " = " + Resultado)
  }

  else if(elegirTerciario == "2") {
    let primerNumero = parseInt(prompt("Elige tu primer numero"))
    let segundoNumero = parseInt(prompt("Elige tu segundo numero " + primerNumero + " - " + "_"))
    let Resultado = primerNumero - segundoNumero
    alert(primerNumero + " - " + segundoNumero + " = " + Resultado)
  }

  else if(elegirTerciario == "3") {
    let primerNumero = parseInt(prompt("Elige tu primer numero"))
    let segundoNumero = parseInt(prompt("Elige tu segundo numero " + primerNumero + " x " + "_"))
    let Resultado = primerNumero * segundoNumero
    alert(primerNumero + " x " + segundoNumero + " = " + Resultado)
  }

  else if(elegirTerciario == "4") {
    let primerNumero = parseInt(prompt("Elige tu primer numero"))
    let segundoNumero = parseInt(prompt("Elige tu segundo numero " + primerNumero + " ÷ " + "_"))
    let Resultado = primerNumero / segundoNumero
    alert(primerNumero + " ÷ " + segundoNumero + " = " + Resultado)
  }
}

do {

  elegirPrincipal = prompt("Hola, buen dia. A donde quieres pasar?\nElige una de estas opciones:\n\n1. Entrar a la escuela de Matematicas\n\n2. Entrar al bar\n\nPara salir escribe ESC");

  elegirPrincipal = elegirPrincipal.toUpperCase()

  if(elegirPrincipal == "1") {

    do {
      elegirSecundario = prompt("Bienvenido a la escuela de Matematicas!\nQue te gustaria hacer?\n\n1. Aprender las tablas\n\n2. Hacer un calculo\n\nPara volver atras escribe ESC");
      
      elegirSecundario = elegirSecundario.toUpperCase()

      switch (elegirSecundario) {
        case "1":
          Tablas()
        break;
      
        case "2":
          hacerCalculo()
        break
  
        case "ESC":
          alert("Esperamos que vuelvas pronto!")
        break
  
        default:
          alert("Opcion no valida")
      }
    }while(elegirSecundario != "ESC")

    }

  else if(elegirPrincipal == "2") {
    do {
    elegirSecundario = prompt("Bienvenido al bar!\nCuantos años tienes?\n\nNota: Debes ser mayor de 18 para pasar.\n\nPara volver atras escribe ESC");

    elegirSecundario = elegirSecundario.toUpperCase()

    if(elegirSecundario >= 18) {
      alert("Bienvenido al bar, espero que tengas una buena noche!")


      do{
        comprarBebida = prompt("Llegaste a la barra, que te gustaria comprar?\nTienes: " + dineroActual + "$" + "\n\n1. Smirnoff 20$\n\n2. Chandon 50$\n\n3. Fernet con Cola 10$\n\n4. Johnnie Walker Blue Label 150$\n\nPara volver atras escribe ESC")

        comprarBebida = comprarBebida.toUpperCase()

        if(comprarBebida == "1") {
          if(dineroActual >= 20) {
            dineroActual -= 20
            alert("Compra realizada con exito, se descontaron 20$ de tu cuenta.")
          }

          else if(dineroActual < 20) {
            alert("No tienes suficientes fondos para realizar esta compra.")
          }
        }

        else if(comprarBebida == "2") {
          if(dineroActual >= 50) {
            dineroActual -= 50
            alert("Compra realizada con exito, se descontaron 50$ de tu cuenta.")
          }

          else if(dineroActual < 50) {
            alert("No tienes suficientes fondos para realizar esta compra.")
          }
        }

        else if(comprarBebida == "3") {
          if(dineroActual >= 10) {
            dineroActual -= 10
            alert("Compra realizada con exito, se descontaron 10$ de tu cuenta.")
          }

        else if(dineroActual < 10) {
            alert("No tienes suficientes fondos para realizar esta compra.")
          }
        }

        else if(comprarBebida == "4") {
          if(dineroActual >= 150) {
            dineroActual -= 150
            alert("Compra realizada con exito, se descontaron 150$ de tu cuenta.")
          }

        else if(dineroActual < 150) {
          alert("No tienes suficientes fondos para realizar esta compra.")
        }
        }

        else if(comprarBebida == "ESC") {
          alert("Esperamos que vuelvas pronto!")
          break
        }

        else {
          alert("Opcion no valida")
          }

      }while(comprarBebida != "ESC")

    }

    else if(elegirSecundario <= 17) {
      alert("Lo siento, debes ser mayor de 18 para pasar.")
    }

    else if(elegirSecundario == "ESC") {
      break
    }

    else {
      alert("Opcion no valida")
      }
    }while(elegirSecundario != "ESC") 
  }

  else if(elegirPrincipal == "ESC") {
    alert("Espero que vuelvas pronto!")
  }

  else {
    alert("Opcion no valida.")
  }

} while(elegirPrincipal != "ESC")