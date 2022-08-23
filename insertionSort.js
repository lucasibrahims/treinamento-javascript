const livros = require ('./listaLivros');
const troca = require ('./troca')

function insertionSort(lista)
{
    for (let atual=0; atual < lista.length; atual++)
    {
        let analise = atual;
        while(analise > 0 && lista[analise].preco<lista[analise-1].preco)
        {
            troca(livros, analise, (analise-1));
            
            analise--;
            
        }
    }

    console.log(lista);
}

console.log(livros);
insertionSort(livros);

