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
