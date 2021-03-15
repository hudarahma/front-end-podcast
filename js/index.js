const form = document.getElementById('singup'); 
const email = form.elements.namedItem('email');
const btn = document.querySelector('button');
const message = document.getElementById('show-message');


btn.addEventListener('click', (event)=>{
    event.preventDefault()
    //console.log('its meee')
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;
    if(mailFormat.test(email.value)){
        message.style.display = 'none';
        form.submit();
        
    } else {
        message.style.display = 'block'
    }
})

