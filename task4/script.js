

const userTextField = document.querySelector('a');

userTextField.addEventListener('click', (event) => {
   let userText = prompt('Введите текст');
    
    event.preventDefault();
    userTextField.textContent = userText;

})
