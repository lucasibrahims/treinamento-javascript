class Cliente {
    constructor (nome, cpf, email, saldo){

    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    }
    depositar(valor)
    {
        this.saldo += valor;
        console.log(`CC/ - Depósito de ${valor} efetuado com sucesso!`);
    }

     mostrarSaldo (conta)
     {
        if (conta === "cc/")
        {
            console.log(`${this.nome} Seu saldo atual é de ${this.saldo}.`)
        }
        else if (conta === "cp/")
        {
            console.log(`${this.nome} Seu saldo atual na poupança é de ${this.saldoPoup}`)
        }
        else if (conta === "total")
        {   
            if (this.saldoPoup === "undefined")
            {
                console.log(`${this.nome} Seu saldo atual é de:
                cc/: ${this.saldo}
                cp/: 0
                total: ${this.saldo}`)
                
            } else
            {
                console.log(`${this.nome} Seu saldo atual é de:
                cc/: ${this.saldo}
                cp/: ${this.saldoPoup}
                total: ${this.saldoTotal}`);
            }
        }
    }
}
class ClientePoupanca extends Cliente
{
    constructor (nome, cpf, email, saldo, saldoPoup, saldoTotal)
    {
        super(nome, cpf, email, saldo)
        this.saldoPoup = saldoPoup;
        this.saldoTotal = this.saldo + this.saldoPoup;
    }
    depositarPoup(valor)
    {
        this.saldoPoup += valor;
        this.saldoTotal = this.saldo + this.saldoPoup;
        console.log(`CP/ - Depósito de ${valor} efetuado com sucesso!`);
    }
    
}


const andre = new Cliente ("André", "03124798230", "andre@email.com", 100);

const ju = new ClientePoupanca ("Ju", "88839992098", "ju@email.com", 130, 200)


Cliente.prototype.sacar = function (valor)
{
    if (valor > this.saldo)
    {
        console.log(`Valor disponível para saque ${this.saldo}. Saque indisponível!`)
    }
    else
    {
        this.saldo -= valor;
    }
}

ClientePoupanca.prototype.sacar = function (valor)
{
    if (valor > this.saldo && valor <= this.saldoTotal)
    {
        valor -= this.saldo;
        this.saldo = 0;
        this.saldoPoup -= valor;
        this.saldoTotal = this.saldoPoup;
    }
    else if (valor === this.saldo)
    {
        this.saldo = 0;
        this.saldoTotal = this.saldoPoup;
    }
    else if (valor > this.saldoTotal)
    {
        console.log(`Valor disponível para saque ${this.saldoTotal}. Saque indisponível!`)
    }
    else
    {
        this.saldo -= valor;
    }
}

