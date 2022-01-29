// Crie um array que receba 5 itens e exiba no console.
let array5Itens = [1,2,"Front-end",true,5];
console.log(`5 itens do array: [${array5Itens}]`);
console.log("----------------------------------------");
// HTML
document.getElementById("array5Itens").innerHTML = `5 itens do array: [${array5Itens}]`;

// Utilize um método para adicionar um nome ao inicio do array.
const addInicioArray = (addNomeInicio) => {
    const arrayAddInicio = ["hoje", 0];
    console.log(`Array inicial: [${arrayAddInicio}]`);
    document.getElementById("arrayAddInicio").innerHTML=`Array inicial: [${arrayAddInicio}]`;
    arrayAddInicio.unshift(addNomeInicio);
    console.log(`O elemento adicionado foi: ${addNomeInicio}`);
    document.getElementById("elementoAddInicio").innerHTML=`O elemento adicionado foi: ${addNomeInicio}`;
    console.log(`Array depois de adicionar o elemento no inicio: [${arrayAddInicio}]`);
    document.getElementById("arrayFinalAddInicio").innerHTML=`Array depois de adicionar o elemento no inicio: [${arrayAddInicio}]`;
    console.log("---------------------------------------------------------------------");
}
addInicioArray("sexta-feira");

// Utilize um método para remover o último nome do array.
const removerUltimoArray = (removerNomeFinal) => {
    const arrayRemoverFinal = ["Estrutura de dados", true];
    console.log(`Array inicial: [${arrayRemoverFinal}]`);
    document.getElementById("arrayRemoverUltimo").innerHTML=`Array inicial: [${arrayRemoverFinal}]`;
    let excluido = arrayRemoverFinal.pop(removerNomeFinal);
    console.log(`Elemento removido foi: ${excluido}`);
    document.getElementById("elementoRemovidoUltimo").innerHTML=`O Elemento removido do final foi: ${excluido}`;
    document.getElementById("arrayFinalRemoverUltimo").innerHTML=`Array depois de remover o elemento do final: [${arrayRemoverFinal}]`;
    console.log(`Array depois de remover o elemento do final: [${arrayRemoverFinal}]`);
    console.log("---------------------------------------------------------------------");
}
removerUltimoArray();

// Utilize um método para adicionar dois nomes ao fim do array.
const addFinalArray = (addNomeFinal,addNomeFinal2) => {
    const arrayAddFinal = ["Back-end", false];
    console.log(`Array inicial: [${arrayAddFinal}]`);
    document.getElementById("arrayAddDoisFinal").innerHTML=`Array inicial: [${arrayAddFinal}]`;
    arrayAddFinal.push(addNomeFinal,addNomeFinal2);
    console.log(`Elementos adicionados: ${addNomeFinal}, ${addNomeFinal2}`);
    document.getElementById("doisElementosAdd").innerHTML=`Elementos adicionados: ${addNomeFinal}, ${addNomeFinal2}`;
    document.getElementById("resultadoAddDoisElementos").innerHTML=`Array depois de adicionar o elemento do final:[${arrayAddFinal}]`;
    console.log(`Array depois de adicionar o elemento do final: [${arrayAddFinal}]`);
    console.log("---------------------------------------------------------------------");
}
addFinalArray("estudar", "nodejs");

// Utilize um método para remover o primeiro nome do array.
const removeInicioArray = () => {
    const arrayRemoverInicio = ["JavaScript",15,false];
    console.log(`Array inicial: [${arrayRemoverInicio}]`);
    let removeInicio = arrayRemoverInicio.shift();
    console.log(`Elemento removido do inicio foi: ${removeInicio}`);
    console.log(`Array depois de remover elemento do inicio: [${arrayRemoverInicio}]`);
    console.log("---------------------------------------------------------------------");
}
removeInicioArray();

// Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]
const numbers = [7,5,6,3,8,9,2,1,4];
console.log(`Array antes de ordenar:[${numbers}]`);
const ordenar = numbers.sort();
console.log(`Depois de ordenar: [${ordenar}]`);

