//document.getElementById("meu-elemento").innerHTML = "<h1>Aprendendo JavaScript com o melhor professor da UVV!!!</h1>";


function pegarvalor() {
    var dataN = document.getElementById("data_nascimento").value;
    var hoje = new Date().getFullYear();

    if (dataN == 0)
    {
        alert("Digite um valor válido!");
        return;
    }
    var idade = 0;
    var idade = hoje - dataN;
    document.getElementById("idade").innerHTML = "Você tem "+idade+" anos";
}

function dma(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;
    
    var diaH = new Date().getDate();
    var mesH = new Date().getMonth();
    var anoH = new Date().getFullYear();

    switch(mes)
    {
        case "jan":
            mes = 0;
            break;
        
        case "fev":
            mes = 1;
            break;
            
        case "mar":
            mes = 2;
            break;
            
        case "abr":
            mes = 3;
            break;
        case "mai":
            mes = 4;
            break;
        case "jun":
            mes = 5;
            break;
        case "jul":
            mes = 6;
            break;
        case "ago":
            mes = 7;
            break;
        case "set":
            mes = 8;
            break;
        case "out":
            mes = 9;
            break;
        case "nov":
            mes = 10;
            break;
        case "dez":
            mes = 11;
            break;
    }

    var idade;

    if (mes == mesH)
    {
        if (dia > diaH)
        {
            idade = (anoH - ano) - 1;
        }
        else if (dia == diaH)
        {
            alert("Feliz Aniversário");
            idade = anoH - ano;
        }
        else
        {
            idade = anoH - ano;
        }
    }
    else if (mes > mesH)
    {
        idade = anoH - ano - 1;
    }
    else 
    {
        idade = anoH - ano;
    }
    document.getElementById("idadeT").innerHTML = "Você tem "+idade+" anos";
}
