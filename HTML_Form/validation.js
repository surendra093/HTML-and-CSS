const form = document.getElementById('form');
const Name = document.getElementById('t1');
const company = document.getElementById('t2');
const Email = document.getElementById('t3');
const number = document.getElementById('t4');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs(){

      const nameValue = Name.value.trim();
      const comapnyValue =company.value.trim();
      const EmailValue = Email.value.trim();
      const NumberValue = number.value.trim();
      
      if (nameValue ===""){
             //show error 
             //add error class
             setErrorfor(Name,'Name cannot be blank');
      }
      else{
           //add sucess class
           setSuccessFor(Name);
      }      

      if (comapnyValue ===""){
        //show error 
        //add error class
        setErrorfor(company,'Company cannot be blank');
      }
     else{
        //add sucess class
        setSuccessFor(company);
     }      
   
     if(EmailValue ==="") {
        setErrorFor(Email,'Email cannot be blank');
     }
     else {
        setSuccessFor(Email);
     }


     
}

function setErrorfor(input,message){

     const formControl = input.parentElement;
     const small = formControl.querySelector('small');
     formControl.className = 'temp error'; 
     small.innerText = message;    
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'temp success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}