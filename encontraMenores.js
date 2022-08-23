const listaLivros = require('./listaLivros');
const mergeSort = require('./mergeSort');

function encontraMenores(pivo, array)
{
    let menores = 0;
    let arrayDosMenores = [];

    for (let atual = 0; atual < array.length; atual++)
    {
        produtoAtual = array[atual];
        
        if (produtoAtual.preco < pivo.preco)
        {
            arrayDosMenores.push(produtoAtual);
            menores++;

        }
    }
    trocaDeLugar(array, array.indexOf(pivo), menores)
    return array;
}
function trocaDeLugar (array, de, para)
{
    let atual = array[de];
    let trocado = array[para];
    array[de] = trocado;
    array[para] = atual;
}

function divideNoPivo (array){
    let pivo = array[Math.floor(array.length/2)];
    encontraMenores(pivo, array)
    let valoresMenores = 0;

    for (let analisando = 0; analisando < array.length; analisando++)
    {
        let atual = array[analisando];
        if (atual.preco <= pivo.preco && atual !== pivo)
        {
            trocaDeLugar(array, analisando, valoresMenores)
            valoresMenores++;
        }
    }
    return array;
}
//console.log(divideNoPivo(listaLivros))

module.exports = trocaDeLugar;