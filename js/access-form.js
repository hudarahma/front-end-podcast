const form = document.getElementById('form');
const newName = form.elements.namedItem('new-name');
const newEmail = form.elements.namedItem('new-email');
const discription =  document.querySelector('.text');
const err = document.querySelector('.err')
const btn = document.querySelector('button')

// discription.addEventListener('click',()=>{
//     console.log('hi', discription.innerHTML)
// })
btn.addEventListener('click', (event)=>{
    event.preventDefault();
    // console.log('its mee')
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;
    if(mailFormat.test(newEmail.value) && (newName.value) && (discription.innerHTML) ){
        err.style.display = 'none';
        form.submit();
        console.log(discription.innerHTML)
        
    } else {
        err.style.display = 'block'
    }

})