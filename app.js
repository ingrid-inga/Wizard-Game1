
let contadorPlayer = 0,
contadorPc = 0,
seguirJugando = false;


const darBienvenida = () => {
alert(' ★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★\n                  Bienvenido a Wizard Game                                \n  ★゜・。。・゜゜・。。・゜☆゜・。。・゜゜・。。・゜★');
}


const eligePersonaje = () => {
let personaje = prompt('                         Elige un Personaje 😃          \n                        \n   1.- Harry Potter            2.- Hermione                 3.- Ron Wesley                4.- Voldemort            5.- Dolfy');
let quePersonaje = traducirPersonaje(Number(personaje));
alert(`Elegiste ${quePersonaje}`);
return Number(personaje);
}


const juegaPlayer = () => {
let hechizo = prompt('                               🌟 ¿¿¿Listo para jugar???? 🌟\n                                  ¡¡¡Elije un hechizo!!!              \n                                    Ingresa el número ;)    \n     1- Wingwardum Leviosa               2- Vulnera Sanentur                3- Cruciatus        4.- Sectum Sempra           5.- Expelliarmus');

let queEligioPlayer = traducirHechizo(Number(hechizo));

alert(`Elegiste  ${queEligioPlayer}`);

return Number(hechizo);
}

const juegaCompu = () => {
alert( 'Es el turno de la Computadora 💻 ');

let hechizo = 1 + Math.floor((3 - 1) * Math.random()); 

let queEligioCompu = traducirHechizo(hechizo);

alert(`La computadora eligió  ${queEligioCompu}`);

return hechizo;
}

let compararHechizos = (hechizoPlayer, hechizoCompu) => {


if (hechizoPlayer == hechizoCompu) {
    alert('¡Empataron!');
} else if (hechizoPlayer == 1 && hechizoCompu == 2) {
    alert('¡Ganó la Compu!');
    contadorPc++;
} else if (hechizoPlayer == 1 && hechizoCompu == 3) {
    alert('¡Ganaste! 🔝');
    contadorPlayer++;
} else if (hechizoPlayer == 1 && hechizoCompu == 4) {
    alert('¡Ganó la Compu! 😢');
    contadorPc++;
} else if (hechizoPlayer == 1 && hechizoCompu == 5) {
    alert('¡Ganaste! 🔝');
    contadorPlayer++;


} else if (hechizoPlayer == 2 && hechizoCompu == 1) {
    alert('¡Ganaste! 🔝');
    contadorPlayer++;
} else if (hechizoPlayer == 2 && hechizoCompu == 3) {
    alert('¡Ganó la Compu! 😢');
    contadorPc++;
} else if (hechizoPlayer == 2 && hechizoCompu == 4) {
    alert('¡Ganaste! 🔝');
    contadorPlayer++;
} else if (hechizoPlayer == 2 && hechizoCompu == 5) {
    alert('¡Ganó la Compu! 😢');
    contadorPc++;

} else if (hechizoPlayer == 3 && hechizoCompu == 1) {
    alert('¡Ganó la Compu! 😢');
    contadorPc++;
} else if (hechizoPlayer == 3 && hechizoCompu == 2) {
    alert('¡Ganaste! 🔝');
    contadorPlayer++;
} else if (hechizoPlayer == 3 && hechizoCompu == 4) {
    alert('¡Ganó la Compu! 😢');
    contadorPc++;
} else if (hechizoPlayer == 3 && hechizoCompu == 5) {
    alert('¡Ganaste! 🔝');
    contadorPlayer++;

} else if (hechizoPlayer == 4 && hechizoCompu == 1) {
    alert('¡Ganaste! 🔝');
    contadorPlayer++;
} else if (hechizoPlayer == 4 && hechizoCompu == 2) {
    alert('¡Ganó la Compu! 😢');
    contadorPc++;
} else if (hechizoPlayer == 4 && hechizoCompu == 3) {
    alert('¡Ganaste! 🔝');
    contadorPlayer++;
} else if (hechizoPlayer == 4 && hechizoCompu == 5) {
    alert('¡Ganó la Compu! 😢');
    contadorPc++;

} else if (hechizoPlayer == 5 && hechizoCompu == 1) {
    alert('¡Ganaste! 🔝');
    contadorPlayer++;
} else if (hechizoPlayer == 5 && hechizoCompu == 2) {
    alert('¡Ganó la Compu! 😢');
    contadorPc++;
} else if (hechizoPlayer == 5 && hechizoCompu == 3) {
    alert('¡Ganaste! 🔝');
    contadorPlayer++;
} else if (hechizoPlayer == 5 && hechizoCompu == 4) {
    alert('¡Ganó la Compu! 😢');
    contadorPc++;

} else {
    alert('⚠️Lo sentimos, ha ocurrido un error inesperado⚠️');
}
}

let traducirPersonaje = (numero) => {
switch (numero) {
    case 1:
        return 'Harry Potter';
        break;
    case 2:
        return 'Hermione';
        break;
    case 3:
        return 'Ron Wesley';
        break;
    case 4:
        return 'Voldemort';
        break;
    case 5:
        return 'Dolfy';
        break;
}
}

let traducirHechizo = (numero) => {
switch (numero) {
    case 1:
        return 'Wingwardum Leviosa';
        break;
    case 2:
        return 'Vulnera Sanentur';
        break;
    case 3:
        return 'Cruciatus';
        break;
    case 4:
        return 'Sectum Sempra';
        break;
    case 5:
        return 'Expelliarmus';
        break;

    default:
        break;
}
}

let saludar = () => {
alert(` 🤗  ¡Muchas Gracias por Jugar!  🤗 `);
}

let anunciarGanador = () => {
if (contadorPlayer == contadorPc) {
    return '😦¡¡Hubo empate!!😦';
} else if (contadorPlayer > contadorPc) {
    return '🥳🥳 ¡Vos! ¡Ganaste! 🥳🥳';
} else {
    return ' 😩¡¡¡Ganó la compu!!!😩';
}
}

//ALGORITMO

darBienvenida();

eligePersonaje();

do {
for (let i = 0; i <= 2; i++) {
 alert(`☆∵☆∵☆∵☆∵☆∵☆∵∵☆∵☆∵☆∵☆∵☆∵☆\n                                            ROUND ${i + 1}                                    \n☆∵☆∵☆∵☆∵☆∵☆∵∵☆∵☆∵☆∵☆∵☆∵☆`);

    
    let hechizoPlayer = juegaPlayer();

    let hechizoCompu = juegaCompu();

    compararHechizos(hechizoPlayer, hechizoCompu)

}

alert(` 🤩 🤩 🤩El GANADOR es: 🤩 🤩 🤩      \n ${anunciarGanador()}\n .......`);

seguirJugando = confirm('¿Querés volver a Jugar? 😉');

} while (seguirJugando);

saludar();

