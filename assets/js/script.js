$(document).ready(() => {
    let fields = {};
    // const nameInput = $("#name");
    // const emailInput = $("#email");
    // const messageInput = $("#message");
    // const submitBtn = $("#submit-btn");
    console.log("DOM loaded")
    document.addEventListener("DOMContentLoaded", function () {
        fields.name = $("#name");
        fields.email = $("#email");
        fields.message = $("#message");
        console.log(fields.name);
    });

    function isNotEmpty(value) {
        if (value == null || typeof value == 'undefined') return false;
        return (value.length > 0);
    };

    function isEmail(email) {
        let regex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?)*$/";
        return regex.test(String(email).toLowerCase());
    };

    function fieldValidation(field, validationFunction) {
        if (field == null) return false;

        let isFieldValid = validationFunction(field.value)
        if (!isFieldValid) {
            field.className = 'placeholderRed';
        } else {
            field.className = '';
        }

        return isFieldValid;
    };

    function isValid() {
        var valid = true;

        valid &= fieldValidation(fields.name, isNotEmpty);
        valid &= fieldValidation(fields.email, isEmail);
        valid &= fieldValidation(fields.message, isNotEmpty);

        return valid;
    };

    class User {
        constructor(name, email, message) {
            this.name = name;
            this.email = email;
            this.message = message;
        }
    }

    function sendContact() {
        if (isValid()) {
            let usr = new User(name.value, email.value, message.value);

            alert(`${usr.name} thanks for reaching out. I will get back to you soon!`);
        } else {
            alert("There was an error. Please try again.")
        }
    }

    sendContact();

});