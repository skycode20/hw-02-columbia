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