let listaDeSuper = [ ];

listaDeSuper [0]="sal"
listaDeSuper [1]="Papa"
listaDeSuper [2]="Huevos"
listaDeSuper[3]="lechuga"

console.log(listaDeSuper);

console.log(listaDeSuper[0]);

let ultimoElemento = listaDeSuper[listaDeSuper.length - 1];

console.log(ultimoElemento);

listaDeSuper.push ("leche", "pan");
listaDeSuper.unshift("café", "galletitas");

console.log(listaDeSuper.length);

let noHabia = listaDeSuper.pop();

let comprado = listaDeSuper.shift();

console.log(listaDeSuper.length);

function logItems(arreglo) {
    arreglo.forEach((producto, indice)=> {
        console.log('${indice}: ${producto}');
    });
}

console.log("Lista de supermercado:");
logItems(listaDeSuper)

let listalimpieza = ("lavandina", "detergente", "jabon blanco");

console.log("Lista limpieza:");
logItems(listalimpieza)