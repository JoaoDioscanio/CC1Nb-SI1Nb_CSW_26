for (var x = 0; x <= 5; x+=2)
{
    console.log(x);
}
for (let i = 0; i < 5; i++)
{
    console.log(i);
    console.log(i*2);
    console.log(i*2+1);
}
var x = 0;
while (x < 5)
{
    console.log(x*2+1);
    x++;
}

var l = 12;
(l < 5) ? console.log(l*2+1) : console.log("Não é menor que 5");

do {
    console.log(l+1);
    l++;
}
while (l < 50);