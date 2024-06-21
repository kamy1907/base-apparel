const formInput = document.getElementById('form-input');
const form = document.getElementById('form');
const btn = document.getElementById('submit-btn');

formInput.addEventListener('input', function(){
    if(formInput.value.trim()===""){
        btn.disabled = true;
    } else{
        btn.disabled = false
    }
})
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", (e) => {
    e.preventDefault(); // change the form default submit pattern
    console.log(formInput.value);

    const isValid = validateEmail(formInput.value)

    // check if the email is not valid
    if(!isValid){
        // change the form input border color
        formInput.style.border = '1px red solid';
        // display error icon
        document.getElementById("error-icon").style.display = 'block'
        // display error text
        document.getElementById('error-text').style.display = 'block'
        return 
    }

    // submit the form
    form.submit()
})