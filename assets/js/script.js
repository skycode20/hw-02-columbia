let fields = {};
// const nameInput = $("#name");
// const emailInput = $("#email");
// const messageInput = $("#message");
// const submitBtn = $("#submit-btn");

document.addEventListener("DOMContentLoaded", () => {
    fields.name = $("#name");
    fields.email = $("#email");
    fields.message = $("#message");
});

const isNotEmpty = (value) => {
    if (value == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}

const isEmail = (email) => {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}
