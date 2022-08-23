function Cliente (nome, cpf, email, saldo)
{
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor)
    {
        this.saldo += valor;
    }
}

function ClientePoupanca (nome, cpf, email, saldo, saldoPoup)
{
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup;
    this.saldoTotal = this.saldo + this.saldoPoup;
}

const andre = new Cliente ("André", "03124798230", "andre@email.com", 100);

const ju = new ClientePoupanca ("Ju", "88839992098", "ju@email.com", 130, 200)

ClientePoupanca.prototype.depositarPoup = function (valor)
{
    this.saldoPoup += valor;
    this.saldoTotal = this.saldo + this.saldoPoup;
}
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
}
// andre.depositar(50);
// ju.depositarPoup(100);
// console.log (`Depois de depositar:`);
// console.log(`Saldo do andre : ${andre.saldo}`);
// console.log(`Saldo da Ju : 
// CC/ : ${ju.saldo}
// Poupança : ${ju.saldoPoup}
// Saldo Total : ${ju.saldoTotal}`);

// andre.sacar(160);
// andre.sacar(40);
// ju.sacar(500);
// ju.sacar(130);

// console.log(`Saldo do andre : ${andre.saldo}`);
// console.log(`Saldo da Ju : 
// CC/ : ${ju.saldo}
// Poupança : ${ju.saldoPoup}
// Saldo Total : ${ju.saldoTotal}`);

// ju.sacar(200);
// ju.depositar(50);

// console.log(`-----------------`);
// console.log(`Saldo da Ju : 
// CC/ : ${ju.saldo}
// Poupança : ${ju.saldoPoup}
// Saldo Total : ${ju.saldoTotal}`);

console.log(andre.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(andre instanceof Cliente)
console.log(typeof andre)
console.log(typeof ju)
console.log(ju instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)