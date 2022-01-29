let boton = document.getElementById("boton");

const pedido = () => {
let nombre = prompt(" Ingrese su nombre ");
alert(" Bienvenido " + nombre + " , ya puedes realizar tu pedido ");
alert(" Asegúrese de respetar las mayúsculas y los espacios de las opciones ");
let combo = parseInt(prompt(
  " Ingrese el número del combo que desea ordenar: 1 Hamburguesa + papas + bebida.   2 Salchipapas + bebida.   3 Nuggets + papas + bebida."
));

//Utilicé la variable var porque quería ejecutarla en un bloque de código diferente y la variable let no me permitía hacerlo
if (combo === 1) {
  var tipo = prompt(" Carne de Res, Carne de Cerdo y Pollo");
} else if (combo === 2) {
  var tamaño = prompt(" Personal, Familiar, Especial");
} else if (combo === 3) {
  alert(" Su pedido es: Nuggets con papas y bebida de 355ml.");
  alert(" ¡Gracias por su visita, vuelva pronto!");
}

if (combo === 1 && tipo === "Carne de Res") {
  var ingrediente = prompt(
    " Elija un ingrediente adicional: Tocineta, Cebollas Caramelizadas "
  );
} else if (combo === 1 && tipo === "Carne de Cerdo") {
  var ingrediente = prompt(
    " Elija un ingrediente adicional: Pepinillos, Cebollas Caramelizadas "
  );
} else if (combo === 1 && tipo === "Pollo") {
  var ingrediente = prompt(
    " Elija un ingrediente adicional: Champiñones, Cebollas Caramelizadas "
  );
}

if (tipo === "Carne de Res" && ingrediente === "Tocineta") {
  alert(
    " Su pedido es: Hamburguesa de Res con Tocineta, papas y bebida de 355ml."
  );
  alert(" ¡Gracias por su visita, vuelva pronto!");
} else if (tipo === "Carne de Res" && ingrediente === "Cebollas Caramelizadas") {
  alert(
    " Su pedido es: Hamburguesa de Res con Cebollas Caramelizadas, papas y bebida de 355ml."
  );
  alert(" ¡Gracias por su visita, vuelva pronto!");
}

if (tipo === "Carne de Cerdo" && ingrediente === "Pepinillos") {
  alert(
    " Su pedido es: Hamburguesa de Cerdo con Pepinillos, papas y bebida de 355ml."
  );
  alert(" ¡Gracias por su visita, vuelva pronto!");
} else if (
  tipo === "Carne de Cerdo" &&
  ingrediente === "Cebollas Caramelizadas"
) {
  alert(
    " Su pedido es: Hamburguesa de Cerdo con Cebollas Caramelizadas, papas y bebida de 355ml."
  );
  alert(" ¡Gracias por su visita, vuelva pronto!");
}

if (tipo === "Pollo" && ingrediente === "Champiñones") {
  alert(
    " Su pedido es: Hamburguesa de Pollo con Champiñones, papas y bebida de 355ml."
  );
  alert(" ¡Gracias por su visita, vuelva pronto!");
} else if (tipo === "Pollo" && ingrediente === "Cebollas Caramelizadas") {
  alert(
    " Su pedido es: Hamburguesa de Pollo con Cebollas Caramelizadas, papas y bebida de 355ml."
  );
  alert(" ¡Gracias por su visita, vuelva pronto!");
}

if (combo === 2 && tamaño === "Personal") {
  alert(" Su pedido es: Salchipapas tamaño Personal y bebida de 355ml.");
  alert(" ¡Gracias por su visita, vuelva pronto!");
} else if (combo === 2 && tamaño === "Familiar") {
  alert(" Su pedido es: Salchipapas tamaño Familiar y bebida de 355ml.");
  alert(" ¡Gracias por su visita, vuelva pronto!");
} else if (combo === 2 && tamaño === "Especial") {
  alert(" Su pedido es: Salchipapas tamaño Especial y bebida de 355ml.");
  alert(" ¡Gracias por su visita, vuelva pronto!");
}
}

boton.onclick = function () {
    pedido();
}
