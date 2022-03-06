nameInput = document.querySelector("#name")
submit = document.querySelector(".form-1-submit")

submit.addEventListener("click", e=>alert(`Hi ${nameInput.value}`))