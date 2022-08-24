

const button = document.querySelector('button')

const text = document.querySelector('#duplicateField')

const input = document.querySelector('input');


input.addEventListener('keydown', function (event) {
text.textContent = event.target.value; 

})

button.addEventListener ('click', function (event) {
    console.log (input.value);
    input.value = '';
    text.textContent = '';
    event.preventDefault();
    
}
)

