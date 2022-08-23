const listaLivrosA = require ('./listaLivros1')
const listaLivrosB = require('./listaLivros2')



function juntarListaOrdenada (listaA, listaB)
{
    let listaOrdenada = [];
    let atualListaA = 0;
    let atualListaB = 0;
    let atualFinal = 0;

    while (atualListaA < listaA.length && atualListaB < listaB.length)
    {
        let produtoAtualListaA = listaA[atualListaA];
        let produtoAtualListaB = listaB[atualListaB];

        if (produtoAtualListaA.preco < produtoAtualListaB.preco)
        {
            listaOrdenada[atualFinal]=listaA[atualListaA]
            atualListaA++;
            atualFinal++;
        }
       if (produtoAtualListaB.preco < produtoAtualListaA.preco)
        {
            listaOrdenada[atualFinal]=listaB[atualListaB];
            atualListaB++;
            atualFinal++
        }
    }

    while(atualListaA < listaA.length)
    {
        listaOrdenada[atualFinal]=listaA[atualListaA]
        atualListaA++;
        atualFinal++;
    }
    while(atualListaB < listaB.length)
    {
        listaOrdenada[atualFinal]=listaB[atualListaB]
        atualListaB++;
        atualFinal++;
    }


        
    return listaOrdenada;
    }

console.log(juntarListaOrdenada(listaLivrosA, listaLivrosB));
//console.log(listaLivrosB[0].preco);