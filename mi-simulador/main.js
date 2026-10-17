/* Pre-entrega 1 */

// let mensaje;

// const nombre = prompt("Ingrese su nombre: ");
// const nacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
// const curso = prompt("Ingrese su curso: ");

// console.log("Nombre: " + nombre);
// console.log("Año de nacimiento: " + nacimiento);
// console.log("Curso: " + curso);

// const anioActual = 2026;
// const edadCalculada = anioActual - nacimiento;
// alert("Edad calculada: " + edadCalculada);

// mensaje = "Bienvenido " + nombre;
// mensaje += " al curso de " + curso + "!";
// alert(mensaje);

// let numero = parseInt(prompt("Ingresa un número entero y te digo si es par o impar: "));
// while (isNaN(numero)) {
//   alert("No ingresaste un número válido.");
//   numero = parseInt(prompt("Ingresa un número entero y te digo si es par o impar: "));
// }
// if (numero % 2 === 0) {
//   alert("El número " + numero + " es par.");
// } else {
//   alert("El número " + numero + " es impar.");
// }

/* Pre-entrega 2 */

const clave = "1234";
let login = false;
let opcion;

while (login === false) {
    let ingreso = prompt("Ingrese la clave: ");
    if (ingreso === null) {
        alert("Cancelaste el ingreso. Saliendo del simulador");
        console.log("Ingreso cancelado por el usuario.");
        break;
    }
    if (ingreso === clave) {
        alert("✅ Acceso concedido" + "\n\n" + "Bienvenido al simulador de JavaScript");
        login = true;
    }
    else {
        alert("❌ Acceso denegado" + "\n\n" + "Intente nuevamente");
    }
}

while (login === true) {
    opcion = prompt("Ingrese una opción: " + "\n\n" +
        "1. Conocer la tabla de multiplicar" + "\n" +
        "2. Sumar números" + "\n" +
        "3. Restar números" + "\n" +
        "4. Multiplicar números" + "\n" +
        "5. Dividir 2 números" + "\n" +
        "6. Salir");
    switch (opcion) {
        case "1":
            alert(" Has seleccionado conocer la tabla de multiplicar");
            let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar: "));
            while (isNaN(numero) || numero < 1 || numero > 10) {
                alert("No ingresaste un número válido.");
                numero = parseInt(prompt("Ingrese un número del 1 al 10 para ver su tabla de multiplicar: "));
            }
            let tabla = "";
            for (let i = 1; i <= 10; i++) {
                tabla += numero + " x " + i + " = " + (numero * i) + "\n";
            }
            alert("La tabla de multiplicar del " + numero + " es:\n\n" + tabla);
            console.log("La tabla de multiplicar del " + numero + " es:\n\n" + tabla);
            break;
        case "2":
            alert("Has seleccionado sumar números");
            let suma = 0;
            let cantidad = parseInt(prompt("¿Cuántos números deseas sumar?"));
            while (isNaN(cantidad) || cantidad < 2) {
                alert("No ingresaste un número válido. Debes colocar un número mayor o igual a 2.");
                cantidad = parseInt(prompt("¿Cuántos números deseas sumar?"));
            }
            for (let i = 1; i <= cantidad; i++) {
                let numeroASumar = parseFloat(prompt("Ingresa el número " + i + ":"));
                while (isNaN(numeroASumar)) {
                    alert("No ingresaste un número válido.");
                    numeroASumar = parseFloat(prompt("Ingresa el número " + i + ":"));
                }
                suma += numeroASumar;
            }
            alert("La suma total es: " + suma);
            console.log("La suma total es: " + suma);
            break;
        case "3":
            alert("Has seleccionado restar números");
            let resta = 0;
            let cantidadRestar = parseInt(prompt("¿Cuántos números deseas restar?"));
            while (isNaN(cantidadRestar) || cantidadRestar < 2) {
                alert("No ingresaste un número válido. Debes colocar un número mayor o igual a 2.");
                cantidadRestar = parseInt(prompt("¿Cuántos números deseas restar?"));
            }
            for (let i = 1; i <= cantidadRestar; i++) {
                let numeroARestar = parseFloat(prompt("Ingresa el número " + i + ":"));
                while (isNaN(numeroARestar)) {
                    alert("No ingresaste un número válido.");
                    numeroARestar = parseFloat(prompt("Ingresa el número " + i + ":"));
                }
                if (i === 1) {
                    resta = numeroARestar;
                } else {
                    resta -= numeroARestar;
                }
            }
            alert("El resultado de la resta es: " + resta);
            console.log("El resultado de la resta es: " + resta);
            break;
        case "4":
            alert("Has seleccionado multiplicar números");
            let producto = 1;
            let cantidadMultiplicar = parseInt(prompt("¿Cuántos números deseas multiplicar?"));
            while (isNaN(cantidadMultiplicar) || cantidadMultiplicar < 2) {
                alert("No ingresaste un número válido. Debes colocar un número mayor o igual a 2.");
                cantidadMultiplicar = parseInt(prompt("¿Cuántos números deseas multiplicar?"));
            }
            for (let i = 1; i <= cantidadMultiplicar; i++) {
                let numeroAMultiplicar = parseFloat(prompt("Ingresa el número " + i + ":"));
                while (isNaN(numeroAMultiplicar)) {
                    alert("No ingresaste un número válido.");
                    numeroAMultiplicar = parseFloat(prompt("Ingresa el número " + i + ":"));
                }
                producto *= numeroAMultiplicar;
            }
            alert("El producto total es: " + producto);
            console.log("El producto total es: " + producto);
            break;
        case "5":
            alert("Has seleccionado dividir 2 números");
            let cociente = 0;
            const cantidadDividir = 2;
            for (let i = 1; i <= cantidadDividir; i++) {
                let numeroADividir = parseFloat(prompt("Ingresa el número " + i + ":"));
                while (isNaN(numeroADividir) || (i === 2 && numeroADividir === 0)) {
                    alert("No ingresaste un número válido. El segundo número no puede ser 0.");
                    numeroADividir = parseFloat(prompt("Ingresa el número " + i + ":"));
                }
                if (i === 1) {
                    cociente = numeroADividir;
                } else {
                    cociente /= numeroADividir;
                }
            }
            alert("El resultado de la división es: " + cociente);
            console.log("El resultado de la división es: " + cociente);
            break;
        case "6":
            alert("Saliendo del simulador");
            console.log("Saliendo del simulador");
            login = false;
            break;
        case null:
            alert("Seleccionaste cancelar. Saliendo del simulador.");
            console.log("Seleccionaste cancelar. Saliendo del simulador.");
            login = false;
            break;
        default:
            alert("Opción no válida");
            console.log("Opción no válida");
            break;
    }
}
