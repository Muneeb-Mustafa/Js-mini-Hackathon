
let users = JSON.parse(localStorage.getItem("users")) || []; 

document.getElementById("myForm").addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value.trim();

    if (email.length < 6) {
        showToast("Please enter your email correctly");
        return;
    }
    if (pass.length < 6) { 
        showToast("Please enter your password correctly");
        return;
    }
    if (users.some(user => user.email === email)) {
        showToast("User already exists. Please login");
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
    showToast("A new user has been successfully added.");
    localStorage.setItem("users", JSON.stringify(users)); 
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