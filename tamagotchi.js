const input = require('readline-sync');

let cansancio = 1;
let hambre = 1;
let aburrimiento = 10;
let salud = 20;
let dinero = 20;
let manzana = 0;
let pizza = 0;
let sushi = 0;
let ensalada = 0;
let pasta = 0;

init();
hacer();

function init () {
    console.log("\n¡BIENVENIDX A TAMAGOTCHI CON NODE.JS!");
    console.log('\nCansancio: ' + cansancio);
    console.log('Hambre: ' + hambre);
    console.log('Aburrimiento: ' + aburrimiento);
    console.log('Dinero: ' + dinero);
    console.log('Salud: ' + salud);
}

function reglas() {
    console.log("\n - Los valores de puntuación de cansancio, salud, hambre y aburrimiento van del 1 al 20. \n - Pierdes cuando el tamagotchi alcanza 20 de cansancio o de hambre o 1 de salud. \n - Puedes trabajar para ganar dinero. \n - Con el dinero que ganes, puedes comprar diferentes artículos de alimentación. \n - Cada artículo tiene consecuencias diferentes en el tamagotchi. \n")
}

function hacer() {
    let info = input.question("\nIntroduce una acción: \n -reglas \n -comer \n -jugar \n -dormir \n -batallar \n -ruleta \n -comprar \n -trabajar \n -");
    if (info == "reglas") {
        reglas();
    } else if (info == "comer") {
        comer()
    } else if (info == "jugar") {
        jugar();
    } else if (info == "dormir") {
        dormir();
    } else if (info == "batallar") {
        batallar();
    } else if (info == "ruleta") {
        ruleta();
    } else if (info == "comprar") {
        comprar();
    } else if (info == "trabajar") {
        trabajar();
    } else {
        console.log("\nAcción desconocida.");
    }
    comprobar(cansancio, hambre, aburrimiento, salud);
}

function comprar() {
    let info = input.question("\nIntroduce: \n -manzana \n -pizza \n -sushi \n -ensalada \n -pasta \n -");
    if (info == 'manzana' && dinero >= 5) {
        dinero = dinero - 5;
        manzana++;
    } else if (info == 'manzana' && dinero < 5) {
        console.log("No tienes suficiente dinero.")
    }
    if (info == 'pizza' && dinero >= 12) {
        dinero = dinero - 12;
        pizza++;
    } else if (info == 'pizza' && dinero < 12) {
        console.log("No tienes suficiente dinero.")
    }
    if (info == 'sushi' && dinero >= 15) {
        dinero = dinero - 15;
        sushi = 1;
    } else if (info == 'sushi' && dinero < 15) {
        console.log("No tienes suficiente dinero.")
    }
    if (info == 'ensalada' && dinero >= 10) {
        dinero = dinero - 10;
        ensalada = 1;
    } else if (info == 'ensalada' && dinero < 10) {
        console.log("No tienes suficiente dinero.")
    }
    if (info == 'pasta' && dinero >= 12) {
        dinero = dinero - 12;
        pasta = 1;
    } else if (info == 'pasta' && dinero < 12) {
        console.log("No tienes suficiente dinero.")
    }
    console.log("\nManzanas: " + manzana, "\nPizzas: " + pizza, "\nSushi: " + sushi, "\nEnsaladas: " + ensalada, "\nPasta: " + pasta, "\n");
}

function trabajar() {
    cansancio = cansancio + 5;
    if (cansancio > 20) {
        cansancio = 20;
    }
    hambre = hambre + 3;
    if (hambre > 20) {
        hambre = 20;
    }
    aburrimiento = aburrimiento + 4;
    if (aburrimiento > 20) {
        aburrimiento = 20;
    }
    salud = salud - 4;
    if (salud < 1) {
        salud = 1;
    }
    dinero = dinero + 15;
}

function dormir() {
    cansancio = cansancio - 2;
    if (cansancio < 1) {
        cansancio = 1;
    }
    hambre = hambre + 2;
    if (hambre > 20) {
        hambre = 20;
    }
    aburrimiento++;
    if (aburrimiento > 20) {
        aburrimiento = 20;
    }
    salud = salud + 3;
    if (salud > 20) {
        salud = 20;
    }
}

function jugar() {
    let info = input.question("\nIntroduce: \n -consola \n -pelota \n -sims \n -");
    if (info == 'consola' || info == 'CONSOLA') {
        aburrimiento = aburrimiento - 4;
        cansancio = cansancio + 2;
        hambre++;
        salud = salud - 2;
    }
    if (info == 'pelota' || info == 'PELOTA') {
        aburrimiento = aburrimiento - 2;
        cansancio = cansancio + 4;
        salud++;
        hambre++;
    }
    if (info == 'sims' || info == 'SIMS') {
        aburrimiento = aburrimiento - 5;
        cansancio++;
        hambre = hambre + 4;
        salud--;
    }
    if (aburrimiento < 1) {
        aburrimiento = 1;
    }
    if (cansancio > 20) {
        cansancio = 20;
    }
    if (hambre > 20) {
        hambre = 20;
    }
    if (salud > 20) {
        salud = 20;
    }
    if (salud < 1) {
        salud = 1;
    }
}

function comer() {
    let info = input.question("\nIntroduce: \n -manzana \n -pizza \n -sushi \n -ensalada \n -pasta \n -");
    if (info == 'manzana' && manzana >= 1) {
        manzana--;
        hambre--;
        cansancio++;
        salud = salud + 3;
    } else if (info == 'manzana' && manzana < 1) {
        console.log("\n¡No tienes manzanas! \n")
    }
    if (info == 'pizza' && pizza >= 1) {
        pizza--;
        hambre = hambre - 3;
        cansancio++;
        salud++;
    } else if (info == 'pizza' && pizza < 1) {
        console.log("\n¡No tienes pizza! \n")
    }
    if (info == 'sushi' && sushi >= 1) {
        sushi--;
        hambre = hambre - 2;
        cansancio++;
        salud = salud + 3;
    } else if (info == 'sushi' && sushi < 1) {
        console.log("\n¡No tienes sushi! \n")
    }
    if (info == 'ensalada' && ensalada >= 1) {
        ensalada--;
        hambre = hambre - 2;
        cansancio++;
        salud = salud + 3;
    } else if (info == 'ensalada' && ensalada < 1) {
        console.log("\n¡No tienes ensalada! \n")
    }
    if (info == 'pasta' && pasta >= 1) {
        pasta--;
        hambre = hambre - 3;
        cansancio++;
        salud = salud + 2;
    } else if (info == 'pasta' && pasta < 1) {
        console.log("\n¡No tienes pasta! \n")
    }
    if (hambre <= 1) {
        hambre = 1;
    }
    if (cansancio > 20) {
        cansancio = 20;
    }
    console.log("\nManzanas: " + manzana, "\nPizzas: " + pizza, "\nSushi: " + sushi, "\nEnsaladas: " + ensalada, "\nPasta: " + pasta, "\n");
}

function batallar() {
    cansancio = Math.floor(Math.random() * (+3 - -3) + 1);
    if (cansancio > 20) {
        cansancio = 20;
    }
    if (cansancio < 1) {
        cansancio = 1;
    }
    hambre = Math.floor(Math.random() * (+3 - -3) + 1);
    if (hambre > 20) {
        hambre = 20;
    }
    if (hambre < 1) {
        hambre = 1;
    }
    aburrimiento = Math.floor(Math.random() * (+3 - -3) + 1);
    if (aburrimiento > 20) {
        aburrimiento = 20;
    }
    if (aburrimiento < 1) {
        aburrimiento = 1;
    }
    salud = Math.floor(Math.random() * (+3 - -3) + 1);
    if (salud > 20) {
        salud = 20;
    }
    if (salud < 1) {
        salud = 1;
    }

}

function ruleta() {
    var prob = Math.random()
    if (prob >= 0.5) {
        console.log("\n¡Tuviste suerte!")
        aburrimiento = aburrimiento - 6;
        cansancio = cansancio - 5;
        dinero = dinero + 15;
        salud = salud + 5;
        if (aburrimiento <= 1) {
            aburrimiento = 1;
        }
        if (cansancio <= 1) {
            cansancio = 1;
        }
        if (salud > 20) {
            salud = 20;
        }
    } else {
        console.log("\n¡Ups!")
        hambre = hambre + 10;
        dinero = dinero - 20;
        cansancio = cansancio + 4;
        salud = salud - 8;
        if (hambre > 20) {
            hambre = 20;
        }
        if (cansancio > 20) {
            cansancio = 20;
        }
        if (salud < 1) {
            salud = 1;
        }
    }
}

function comprobar(cansancio, hambre, aburrimiento, salud) {
    if (cansancio >= 20 || hambre >= 20 || salud <= 1) {
        actualizarUI(cansancio, hambre, aburrimiento, salud);
        console.log("\n¡Has perdido! :-(");
        volver();
    } else if (aburrimiento == 1) {
        actualizarUI(cansancio, hambre, aburrimiento, salud);
        console.log("\n¡Has ganado! :-)");
        volver();
    } else {
        actualizarUI(cansancio, hambre, aburrimiento, salud);
    }
}

function actualizarUI(cansancio, hambre, aburrimiento, salud) {
    console.log('\nCansancio: ' + cansancio);
    console.log('Hambre: ' + hambre);
    console.log('Aburrimiento: ' + aburrimiento);
    console.log('Dinero: ' + dinero);
    console.log('Salud: ' + salud);
    if (cansancio < 20 && hambre < 20 && aburrimiento > 1 && salud > 1) {
        hacer();
    }
}

function volver() {
    let info = input.question("\n ¿Volver a jugar? S/N \n -");
    if (info == 's' || info == 'S') {
        cansancio = 1;
        hambre = 1;
        aburrimiento = 10;
        salud = 20;
        dinero = 20;
        manzana = 0;
        pizza = 0;
        sushi = 0;
        ensalada = 0;
        pasta = 0;
        hacer();
    } else return;
}