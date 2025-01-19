//to get a input form html fields
const form =  document.querySelector('#form');
const username =  document.querySelector('#username');
const email =  document.querySelector('#email');
const password =  document.querySelector('#password');
const cpass =  document.querySelector('#cpass');


// to be check the submit event into the form.
form.addEventListener('submit',(e)=>{
    
    if(!validateInput()){
        e.preventDefault();

    }
})

function validateInput(){
    const usernameV = username.value.trim();
    const emailV = email.value.trim();
    const passwordV = password.value.trim();
    const cpassV = cpass.value.trim();
    let success = true;

    if (usernameV === ''){
        success = false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
    if(emailV === ''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validEmail(emailV)){
        setError(email,'Please Enter Valid Email')
    }
    else{
        setSuccess(email)
    }
    if (passwordV === ''){
        success = false;
        setError(password,'Password is required')
    }
    
    else if(passwordV.length<9){
        setError(password,"Password must to be 8 character")
    }
    else{
        setSuccess(password)
    }

    if(cpassV ===''){
        success = false;
        setError(cpass,"This field is required")
    }
    else if(cpassV !== passwordV){
        setError(cpass,'Password is mismatch')
    }
    else{
        setSuccess(cpass)
    }

    return success;

}
//element input,message is valid or invaild.
function setError(element,message){
    //to get the message from the parent element 
    //eppadi na password nu parent element athu la error irukura msg 
    const input = element.parentElement;
    //.error used to get a msg / search a data into error class
    //input used for get a info by particular input tag
    const errorElement = input.querySelector('.error');

    errorElement.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
}

function setSuccess(element){
    
    const input = element.parentElement;
    
    const errorElement = input.querySelector('.error');

    errorElement.innerText ='' ;
    input.classList.add('success');
    input.classList.remove('error');
}

const validEmail = (email) =>{
    return String(email)
    .toLowerCase().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
};