function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementById('close');
const closeBtnAfterSubmit_top = document.getElementById('closeAfter');
const closeBtnAfterSubmit_bottom = document.getElementById('close-modal');
const afterSubmitForm = document.getElementById('form-submitted');
const form = document.getElementById('form');
const input_first = document.getElementById('first');
const input_last = document.getElementById('last');
const input_email = document.getElementById("email");
const input_birthdate = document.getElementById("birthdate");
const input_quantity = document.getElementById('quantity');
const locations = document.getElementsByName("location")
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//close modal event
closeBtn.addEventListener("click", closeModal);
//close modal event after submit form (bottom)
closeBtnAfterSubmit_bottom.addEventListener("click", closeModal);
//close modal event after submit form (top)
closeBtnAfterSubmit_top.addEventListener("click", closeModal);
//send form
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if(validate()){
    launchAfterSubmit()
  }
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal form
function launchAfterSubmit() {
  afterSubmitForm.style.display = "block";
}

// launch modal form
function closeModal() {
  modalbg.style.display = "none";
}

//function validate modal
function validate(){
  let validation = true
  // firstname
  if(!validateInput(input_first)){
    input_first.parentNode.setAttribute("data-error-visible", true)
    validation = false
  }else{
    input_first.parentNode.setAttribute("data-error-visible", false)
  }
  // lastname 
  if(!validateInput(input_last)){
    input_last.parentNode.setAttribute("data-error-visible", true)
    validation = false
  }else{
    input_last.parentNode.setAttribute("data-error-visible", false)
  }
  // email
  if(!validateEmail(input_email)){
    input_email.parentNode.setAttribute("data-error-visible", true)
    validation = false
  }else{
    input_email.parentNode.setAttribute("data-error-visible", false)
  }
  // birthdate
  if(!validateDate(input_birthdate)){
    input_birthdate.parentNode.setAttribute("data-error-visible", true)
    validation = false
  }else{
    input_birthdate.parentNode.setAttribute("data-error-visible", false)
  }
  // quantity
  if(!validateQuantity(input_quantity)){
    input_quantity.parentNode.setAttribute("data-error-visible", true)
    validation = false
  }else{
    input_quantity.parentNode.setAttribute("data-error-visible", false)
  }
  //locations
  let location_value = null
  for(let i = 0; i < locations.length; i++) {
      if(locations[i].checked){
          location_value = locations[i].value
      }
  }
  if(location_value == null){
    locations[0].parentNode.setAttribute("data-error-visible", true)
    validation = false
  }else{
    locations[0].parentNode.setAttribute("data-error-visible", false)
  }

  if(!checkbox1.checked){
    checkbox1.parentNode.setAttribute("data-error-visible", true)
    validation = false
  }else{
    checkbox1.parentNode.setAttribute("data-error-visible", false)
  }

  return validation
}

//function to validate if quantity is defined
function validateQuantity(input){
  if(!input.value || input.value < 0 || input.value > 99){
    return false
  }else{
    return true
  }
}
//function to validate if lenght of value input > 1
function validateInput(input){
  if(input.value.trim().length<2){
    return false
  }else{
    return true
  }
}
//fucntion to check the email validation 
function validateEmail(input) {
  var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (input.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
//function to validate if the date isn't greater than current date
function validateDate(input){
  const date = input.value
  const nowDate = new Date();
  if(new Date(date)>nowDate || !date){
    return false;
  }else{
    return true;
  }
}


