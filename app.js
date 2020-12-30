// CREO EL OBJETO PARA LA AUTO1 con sus atributos
function createCar1() {
  const marca = "Peugeot";
  const modelo = "206";
  const puertas = 4;
  const precio = 200000;

  const car1 = new Car(marca, modelo, puertas, precio);
  //   console.log(car1);
  return car1;
}

// CREO EL OBJETO PARA LA AUTO2 con sus atributos
function createCar2() {
  const marca = "Peugeot";
  const modelo = "208";
  const puertas = 5;
  const precio = 250000;

  const car2 = new Car(marca, modelo, puertas, precio);
  // console.log(car2);
  return car2;
}

// CREO EL OBJETO PARA LA MOTO1 con sus atributos
function createBike1() {
  const marca = "Honda";
  const modelo = "Titan";
  const cilindrada = "125cc";
  const precio = 60000;

  const bike1 = new Bike(marca, modelo, precio, cilindrada);
  // console.log(bike1);
  return bike1;
}

// CREO EL OBJETO PARA LA MOTO2 con sus atributos
function createBike2() {
  const marca = "Yamaha";
  const modelo = "YBR";
  const cilindrada = "160cc";
  const precio = 80500;

  const bike2 = new Bike(marca, modelo, precio, cilindrada);
  // console.log(bike2);
  return bike2;
}

// FUNCION PARA OBTENER EL VEHICULO MAS CARO
function MostExpensive() {
  let precioCar1 = createCar1().precio;
  let precioCar2 = createCar2().precio;
  let precioBike1 = createBike1().precio;
  let precioBike2 = createBike2().precio;

  const price = Math.max(
    [precioCar1],
    [precioCar2],
    [precioBike1],
    [precioBike2]
  );
  return price;
}

// FUNCION PARA OBTENER EL VEHICULO MAS BARATO
function LessExpensive() {
  let precioCar1 = createCar1().precio;
  let precioCar2 = createCar2().precio;
  let precioBike1 = createBike1().precio;
  let precioBike2 = createBike2().precio;

  const price = [precioCar1, precioCar2, precioBike1, precioBike2];

  let menor = price[0];

  for (i = 0; i < price.length; i++) {
    if (price[i] < menor) {
      menor = price[i];
    }
  }
  return menor;
}

// METODO PARA HALLAR EL MODELO CON "Y"
function hallarY() {
  const arreglo = [
    [createCar1().modelo.split("", createCar1().modelo.length)],
    [createCar2().modelo.split("", createCar2().modelo.length)],
    [createBike1().modelo.split("", createBike1().modelo.length)],
    [createBike2().modelo.split("", createBike2().modelo.length)],
  ];

  for (i = 0; i < arreglo.length; i++) {
    // console.log(arreglo[i]);
    var letras = arreglo[i];
    //  console.log(letras[0]);
    var indice = [];
    var array = letras[0];
    var letter = "Y";
    var indx = array.indexOf(letter);
    while (indx != -1) {
      indice.push(indx);
      indx = array.indexOf(letter, indx + 1);

      var modelo = array.join("");
      var modeloConY = "";
      // console.log(modeloConY);
      if (modelo === createCar1().modelo) {
        modeloConY = createCar1();
      } else if (modelo === createCar2().modelo) {
        modeloConY = createCar2();
      } else if (modelo === createBike1().modelo) {
        modeloConY = createBike1();
      } else {
        modeloConY = createBike2();
      }
    }
  }
  return modeloConY;
}

// METODO QUE MUESTRA LA INFORMACION
function loadVehicles() {
  console.log(
    "Marca: " +
      createCar1().marca +
      " // Modelo: " +
      createCar1().modelo +
      " // Puertas: " +
      createCar1().puertas +
      " // Precio: $" +
      createCar1().precio
  );
  console.log(
    "Marca: " +
      createBike1().marca +
      " // Modelo: " +
      createBike1().modelo +
      " // Cilindrada: " +
      createBike1().cilindrada +
      " // Precio: $" +
      createBike1().precio
  );
  console.log(
    "Marca: " +
      createCar2().marca +
      " // Modelo: " +
      createCar2().modelo +
      " // Puertas: " +
      createCar2().puertas +
      " // Precio: $" +
      createCar2().precio
  );
  console.log(
    "Marca: " +
      createBike2().marca +
      " // Modelo: " +
      createBike2().modelo +
      " // Cilindrada: " +
      createBike2().cilindrada +
      " // Precio: $" +
      createBike2().precio
  );

  console.log("==============================");

  //   MUESTRO EL VEHICULO MAS CARO
  if (MostExpensive() === createCar1().precio) {
    console.log(
      "Vehiculo mas caro: " + createCar1().marca + " " + createCar1().modelo
    );
  } else if (MostExpensive() === createCar2().precio) {
    console.log(
      "Vehiculo mas caro: " + createCar2().marca + " " + createCar2().modelo
    );
  } else if (MostExpensive() === createBike1().precio) {
    console.log(
      "Vehiculo mas caro: " + createBike1().marca + " " + createBike1().modelo
    );
  } else {
    console.log(
      "Vehiculo mas caro: " + createBike2().marca + " " + createBike2().modelo
    );
  }

  // MUESTRO EL VEHICULO MAS BARATO
  if (LessExpensive() == createCar1().precio) {
    console.log(
      "Vehiculo mas barato: " + createCar1().marca + " " + createCar1().modelo
    );
  } else if (LessExpensive() == createCar2().precio) {
    console.log(
      "Vehiculo mas barato: " + createCar2().marca + " " + createCar2().modelo
    );
  } else if (LessExpensive() == createBike1().precio) {
    console.log(
      "Vehiculo mas barato: " + createBike1().marca + " " + createBike1().modelo
    );
  } else {
    console.log(
      "vehiculo mas barato: " + createBike2().marca + " " + createBike2().modelo
    );
  }

  console.log(
    "Vehículo que contiene en el modelo la letra 'Y': " +
      hallarY().marca +
      " " +
      hallarY().modelo +
      " $" +
      hallarY().precio
  );

  console.log("==============================");

  const prices = [
    createCar1().precio,
    createCar2().precio,
    createBike1().precio,
    createBike2().precio,
  ].sort(function (a, b) {
    return a - b;
  });
    
    prices.reverse();
    // console.log(prices);
    
   
    for (i = 0; i <= prices.length; i++) {

        var marca1, marca2, marca3, marca4, modelo1, modelo2, modelo3, modelo4;

        if (prices[0] == createCar1().precio) {
             marca1 = createCar1().marca;
             modelo1 = createCar1().modelo;
         } else if (prices[0] == createCar2().precio){
             marca1 = createCar2().marca;
             modelo1 = createCar2().modelo;
         } else if (prices[0]==createBike1().precio) {
             marca1 = createBike1().marca;
             modelo1 = createBike1().modelo;
         } else{
               marca1 = createBike2().marca;
               modelo1 = createBike2().modelo;
        }
        
        if (prices[1] == createCar1().precio) {
             marca2 = createCar1().marca;
             modelo2 = createCar1().modelo;
         } else if (prices[1] == createCar2().precio){
             marca2 = createCar2().marca;
             modelo2 = createCar2().modelo;
         } else if (prices[1]==createBike1().precio) {
             marca2 = createBike1().marca;
             modelo2 = createBike1().modelo;
         } else{
               marca2 = createBike2().marca;
               modelo2 = createBike2().modelo;
        }
        
        if (prices[2] == createCar1().precio) {
             marca3 = createCar1().marca;
             modelo3 = createCar1().modelo;
         } else if (prices[2] == createCar2().precio){
             marca3 = createCar2().marca;
             modelo3 = createCar2().modelo;
         } else if (prices[2]==createBike1().precio) {
             marca3 = createBike1().marca;
             modelo3 = createBike1().modelo;
         } else{
               marca3 = createBike2().marca;
               modelo3 = createBike2().modelo;
        }
        
        if (prices[3] == createCar1().precio) {
            marca4 = createCar1().marca;
            modelo4 = createCar1().modelo;
         } else if (prices[3] == createCar2().precio){
             marca4 = createCar2().marca;
             modelo4 = createCar2().modelo;
         } else if (prices[3]==createBike1().precio) {
             marca4 = createBike1().marca;
             modelo4 = createBike1().modelo;
         } else{
               marca4 = createBike2().marca;
               modelo4 = createBike2().modelo;
         }
     
    }

    console.log("Vehículos ordenados por precio de mayor a menor:  ");
    console.log(  marca1 + " " + modelo1)
    console.log(  marca2 + " " + modelo2);
    console.log(  marca3 + " " + modelo3);
    console.log(  marca4 + " " + modelo4);
}

// LLAMO AL METODO QUE MUESTRA LA INFORMACION EN CONSOLA
loadVehicles();
