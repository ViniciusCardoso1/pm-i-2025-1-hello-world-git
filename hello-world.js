document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("nameInput");
    const helloButton = document.getElementById("helloButton");
    const clearButton = document.getElementById("clearButton");
    const message = document.getElementById("message");

    nameInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const name = nameInput.value;
            if (name) {
                message.textContent = `Hello World, ${name}!`;
            } else {
                message.textContent = "Por favor, digite seu nome!";
            }
        }
    });

    nameInput.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            nameInput.value = ""; 
            message.textContent = "";
        }
    });


    clearButton.addEventListener("click", function() {
        nameInput.value = "";
        message.textContent = "";
    });

    helloButton.addEventListener("click", function() {
        const name = nameInput.value;
        if (name) {
            message.textContent = `Hello World, ${name}!`;
        } else {
            message.textContent = "Por favor, digite seu nome!";
        }
    });
});
