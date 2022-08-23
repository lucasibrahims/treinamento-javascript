function troca(lista, produtoA, produtoB)
{
    let itemAnalise = lista[produtoA];
    let itemAnterior = lista[produtoB];
    lista [produtoA]=itemAnterior;
    lista [produtoB]=itemAnalise;
}

module.exports = troca;