 let userValidation = /^[A-Za-z0-9]{2,15}$/;
 let passwordValidation = /^(?=.*[A-Za-z0-9])(?=.*[\$])(?=.*[#])(?=.{6,15})/;

document.querySelector('form').addEventListener('submit', (event) =>{
    event.preventDefault();
   
    if (userValidation.test(document.querySelector('#username').value)===false) {
        document.querySelector('#username').classList.add('error');
    } else {
        console.log(document.querySelector('#username').value);
        document.querySelector('#username').value = '';
    }
   
    
    if (passwordValidation.test(document.querySelector('#password').value)===false) {
        document.querySelector('#password').classList.add('error');
    } else {
        
        document.querySelector('#password').value = '';
    }

});


document.querySelector('#username').addEventListener('input', (event) =>{
    if (userValidation.test(document.querySelector('#username').value)===true) {
        document.querySelector('#username').classList.remove('error');
    }
});


document.querySelector('#password').addEventListener('input', (event) =>{
    if (passwordValidation.test(document.querySelector('#password').value)===true) {
        document.querySelector('#password').classList.remove('error');
    }
});

