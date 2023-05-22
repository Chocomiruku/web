document.getElementById("signInForm")
.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
    const currentForm = event.target;
    const formData = new FormData(currentForm);
    var request = new XMLHttpRequest(); 
    request.open("POST", "http:53512");
    request.send(formData);
});

function validate () {
    let login = document.getElementById("login").value;
    if (login.length < 6) {
        console.log("ff")
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Пароль слишком короткий!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    } else {
        swal.fire('Всё отлично')
    }

}