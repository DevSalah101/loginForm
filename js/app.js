const btn = document.querySelector("button");
const msg = document.getElementById("message");

function validateForm() {

    let input = document.querySelectorAll('input'),
        username = input[0],
        password = input[1];

    if ((username.value === "") || (password.value === "")) {
        msg.style.display = "block";
        msg.className = "alert-danger";
        
        msg.textContent = "Please Fill All Fields ):";

    }

    if ((username.value == "admin") && (password.value == "123456")) {
        msg.style.display = "block";
        msg.className = "alert-success";
        msg.textContent = "Welcome Mr."+username.value + " (:";
    }

}

btn.addEventListener('click', (e) => {

    e.preventDefault();

    validateForm();

});
