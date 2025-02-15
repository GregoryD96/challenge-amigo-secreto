// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

//Funcion para agregar amigos
function agregarAmigo() {
    //Capturar el valor de entrada
    let nombre = document.getElementById('amigo').value;
    //Validacion de la entrada
    if (nombre == ''){
        alert('Por favor inserte un nombre.');
    }
    //Actualización del array
    else {
        nombresAmigos.push(nombre);
        limpiarCaja();
        listaAmigos();
        console.log(nombresAmigos);
    }
}
// Funcion para limpiar la caja de input
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function listaAmigos (){
    //Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    //Limpiar la lista existente
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    //Iterar sobre la lista de amigos y agregar elementos a la lista
    for (let i = 0; i < nombresAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = nombresAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    //Validacion que haya amigos disponibles
    if (nombresAmigos.length < 1){
        alert('Por favor inserte al menos un amigo.');
    }
    else{
    //Generar un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()*nombresAmigos.length);
    console.log(indiceAleatorio);
    let elementoResultado = document.getElementById('resultado');
    //Obtener el nombre del amigo seleccionado y mostrarlo
    elementoResultado.innerHTML = `${nombresAmigos[indiceAleatorio]}`;
    }
}