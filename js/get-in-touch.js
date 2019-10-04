let submitButtonClick = document.getElementById("submitButton");
console.log('whatevs');
/*let formName = document.getElementById("name").value;
let formEmail = document.getElementById("email").value;
let formTel = document.getElementById("phone").value;
let formMessage = document.getElementById("messageText").value;
let formDataContent = [];*/
console.log(submitButtonClick);
let formDataContent = [];

const formData = function() {
    let formName = document.getElementById("name").value;
let formEmail = document.getElementById("email").value;
let formTel = document.getElementById("phone").value;
let formMessage = document.getElementById("messageText").value;

    if (formName != null) {formDataContent.push(formName)};
    if (formEmail != null ) {formDataContent.push(formEmail)};
    if (formTel != null) {formDataContent.push(formTel)};
    if (formMessage != null) {formDataContent.push(formMessage)};
    alert(`Your message has been submitted. Here's what you've submitted: ${formDataContent}`);
};

submitButtonClick.addEventListener('click',formData,false);