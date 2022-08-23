const listaLivros = require ('./listaLivros');

function mergeSort (lista, nivelAninhamento = 0)
{
    if (lista.length > 1)
    {
        const meio = Math.floor(lista.length/2);
        const parte1 = mergeSort(lista.slice(0, meio), nivelAninhamento++);
        const parte2 = mergeSort(lista.slice(meio, lista.lenght), nivelAninhamento++);
        lista = ordena (parte1, parte2)
    }

    return lista;
}

function ordena(lista1, lista2)
{
    let atualLista1 = 0;
    let atualLista2 = 0;
    const resultado = [];

    while (atualLista1 < lista1.length && atualLista2 < lista2.length)
    {
        let prodAtual1 = lista1[atualLista1];
        let prodAtual2 = lista2[atualLista2];

        if (prodAtual1.preco < prodAtual2.preco)
        {
            resultado.push(prodAtual1)
            atualLista1++;
        }
        else
        {
            resultado.push(prodAtual2)
            atualLista2++;
        }
    }
    return resultado.concat(atualLista1 < lista1.length ? lista1.slice(atualLista1) : lista2.slice(atualLista2))
}

module.exports = mergeSort;
//console.trace(mergeSort(listaLivros))