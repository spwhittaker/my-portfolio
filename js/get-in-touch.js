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

    if (formName != null) {formDataContent.push("\n\tName: " + formName)};
    if (formEmail != null ) {formDataContent.push("\n\tEmail: " + formEmail)};
    if (formTel != null) {formDataContent.push("\n\tPhone Number: " + formTel)};
    if (formMessage != null) {formDataContent.push("\n\tYour message: " + formMessage)};
    alert("Your message has been submitted. Here's what you've submitted: \n" + formDataContent + "\nThis message is actually going somewhere. I promise.");
};

submitButtonClick.addEventListener('click',formData,false);