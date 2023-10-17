function validate_form() {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const inputs = [username, email, password];

    inputs.forEach((input) => {
        if (input.value === "") {
            input.classList.add("error");
        }
    });
}
