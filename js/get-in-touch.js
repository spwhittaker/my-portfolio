let submitButtonClick = document.getElementById("submitButton");
let clearButtonClick  = document.getElementById("clearButton");
console.log('TEST');
/*let formName = document.getElementById("name").value;
let formEmail = document.getElementById("email").value;
let formTel = document.getElementById("phone").value;
let formMessage = document.getElementById("messageText").value;
let formDataContent = [];*/
// console.log(submitButtonClick);
let formDataContent = [];
let submittedData = [];

const formData = function () {
    let formName = document.getElementById("name").value;
    let formEmail = document.getElementById("email").value;
    let formTel = document.getElementById("phone").value;
    let formMessage = document.getElementById("messageText").value;


    if (formName != "") {
        formDataContent.push("\n\tName: " + formName)
        
    };
    if (formEmail != "") {
        formDataContent.push("\n\tEmail: " + formEmail)
    };
    if (formTel != "") {
        formDataContent.push("\n\tPhone Number: " + formTel)
    };
    if (formMessage != "") {
        formDataContent.push("\n\tYour message: " + formMessage)
    };
    alert("Your message has been submitted. Here's what you've submitted: \n" + formDataContent + "\nThis message is actually going somewhere. I promise.");
    submittedData = formDataContent;
    formDataContent = [];

};

const clearData = function() {formDataContent = [];};

submitButtonClick.addEventListener('click', formData, false);
clearButtonClick.addEventListener('click', clearData, false);