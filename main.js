const form = document.getElementById("form-submeter");



form.addEventListener('submit', function(e) {
    e.preventDefault();


const primeiroNumero = document.getElementById('campoA');
const segundoNumero = document.getElementById('campoB');
const mensagemSucesso = `O número: ${segundoNumero.value} é maior que: ${primeiroNumero.value}!`

if (primeiroNumero.value < segundoNumero.value){
    alert(mensagemSucesso);
}
else {
    alert("O Primeiro número é maior que o segundo!")
}
})

console.log(form);