document.getElementById("meu-elemento").innerHTML = "<h1>Aprendendo JavaScript com o melhor professor da UVV!!!</h1>";


function pegarvalor() {
    // Digamos que o valor recebido seja "20-05-2000"
    var inputDate = document.getElementById("data_nascimento");
    var valorDataRaw = inputDate.value;

    if (!valorDataRaw) {
        window.alert("Por favor, digite uma data!");
        return;

    }
}