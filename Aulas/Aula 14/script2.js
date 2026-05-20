var issoEumaString = "Isso é uma string";
let issoEumnumero = 42;
const issoEumBoolean = true;
let string2 = "42";

if (issoEumnumero === string2)
{
    console.log("As strings são iguais");
}
else
{
    console.log("As strings são diferentes");
}

console.log(issoEumnumero + string2);
console.log(issoEumnumero + parseInt(string2));

var issoEumaGlobal = "Eu sou uma variável global";

{
    let issoEumaLocal = "Eu sou uma variável local"
    console.log(issoEumaLocal);
}

console.log(issoEumaGlobal);

let floatvalue1 = 0.05;
let floatvalue2 = 0.01;

let sum = floatvalue1 + floatvalue2;

console.log(sum)
console.log(sum.toPrecision(2));

console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(16));
console.log(Math.pow(2,6));
console.log(Math.random())

// Primos de 0 a 100

function isPrime(num){
    if (num <= 1){ return false};
    for (let i = 2; i <= Math.sqrt(num);i++){
        if (num % i === 0); return  false
    }
    return true;
}

for (let i = 1; i <= 100; i++)
{
    isPrime(i) ? console.log(i) : console.log(i,"Não é primo")
}