const form = document.getElementById('form-time');
const nA = document.getElementById('number-a');
const nB = document.getElementById('number-b');
let formEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const diferencaAB = nB.value-nA.value;
    const successMessage = `A variação de tempo entre ${nA.value} e ${nB.value} é de ${diferencaAB} segundos`

    if((parseInt(nB.value)>=parseInt(nA.value))){
        const containerSuccessMessage = document.querySelector('.success-message');
        containerSuccessMessage.innerHTML = successMessage;
        containerSuccessMessage.style.display = 'block';

        nA.value = '';
        nB.value = '';
        console.log("B>A");
    } else {
        nB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';

        console.log("A>B");
    }
})

nB.addEventListener('keyup', function(e) {
    console.log(e.target.value);

    if (!(parseInt(nB.value)>=parseInt(nA.value))) {
        nB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})