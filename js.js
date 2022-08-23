const clientes = [{
    nome: 'Andre',
    idade: 36,
    cpf: '12323147894',
    email: 'andre@email.com',
    fones: ['5532984953618', '5532984970303'],
    saldo: 0,
    dependentes:[ 
        {   
            nomes: 'Sara Silva',
            parentesco: 'filha',
            dataNascimento: '11/10/2014',
        
        },
        
        {   
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNascimento: '04/01/2014'
        }
    ],
    depositar : function ( valor )
    {
        this.saldo+=valor;
    },
    sacar : function (valor)
    {
        this.saldo-=valor;
    },
},
{
    nome: ' Juliana',
    idade: 34,
    cpf: '09876589065',
    email: 'ju@email.com',
    fones: ['5532984224433', '5532984455332'],
    saldo: 1000,
    dependentes:[ 
    {   
        nome: 'Fernando Rosa',
        parentesco: 'entiado',
        dataNascimento: '15/09/2004',
    
    },
    {
        nome: 'Felipe Jose',
        parentesco: 'filho',
        dataNascimento: '10/07/2001'
    }
    ],
    depositar : function ( valor )
    {
        this.saldo+=valor;
    },
    sacar : function (valor)
    {
        this.saldo-=valor;
    }, 
}]

function oferecerSeguro (obj)
{
    const chavesClientes = Object.keys(obj);
    if ( chavesClientes.includes("dependentes") )
    {
        console.log(`Oferta de Seguro de Vida para o Sr. ${obj.nome} e suas ${obj.dependentes[0].parentesco}s`);

    }
}

let listaAux = "";
let listaDeDependentes = "";
for (let i = 0; i < clientes.length; i++)
{
    listaAux = [...clientes[i].dependentes]
    listaDeDependentes.concat(listaAux);
}
console.table(listaDeDependentes);