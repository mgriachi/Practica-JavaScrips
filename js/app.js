// const ingresarProducto = prompt("elija un producto entre: tv, ventilador, cafetera").toLowerCase() 

// if (ingresarProducto == "tv"){
//     alert("elegiste tv, el valor es de 50k")
// } else if(ingresarProducto == "ventilador"){
//     alert("elegiste ventilador, el valor es de 10k")
// } else if (ingresarProducto == "cafetera"){
//     alert("elegiste cafetera, el valor es de 8k")
// }
 

// const edadUsuario  = prompt("ingrese su edad")

// if (edadUsuario >= 18 && edadUsuario <= 60) {
//     alert("puede pasar");
// } else {
//     alert("No puede pasar");
// }


// alert ("vamos a mostrar la tabla de multiplicar del numero que ingrese")
// const numero = Number(prompt("ingrese un numero"));

// for ( let i = 1; i <= 10; i++){
//     console.log(i + "x" + numero + " " + (i* numero));
// }


// alert ("Busca la letra de tu frase")
// const letra = prompt("ingrese letra")
// const frase = prompt("ingrese frase")
// let contador = 0;

// for ( let i = 0; i < frase.length; i++){
//     if (letra==frase[i]){
//         contador++;
//     }
// }
// alert ("el numero de apariciones de letras es: " + contador);


let tuEdad = prompt("introdusca una edad")
const EdadParaConducir = (tuEdad) =>{
    if (tuEdad >= 18){
        alert("usted puede manejar")
    } else if (tuEdad <= 18){
        alert("usted no puede manejar")
    } 
}

EdadParaConducir(tuEdad)