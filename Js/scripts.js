
let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("myForm").addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value.trim();


    let storedUser = users.find(user => user.email === email && user.pass === pass);
    if (storedUser) {
        showToast("User has been successfully logged in.");
    } else {
        showToast("Please register first.");
        return;
    }

    let user = {
        email,
        pass
    }

    user.id = Math.random().toString(36).slice(2);
    user.dateCreated = new Date().getTime();
    user.status = "active";
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("login").innerText = email;
}

function showToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "bottom-right", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #0D6EFD, #DC3545)",
        },
    }).showToast();
}


window.onload = () =>{
    let year = new Date().getFullYear();
    document.getElementById("year").innerText = year;
}