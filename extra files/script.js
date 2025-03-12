// Check login status
function checkLogin() {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
        document.getElementById("authOptions").style.display = "none";
        document.getElementById("userProfile").style.display = "flex";
    }
}

// Handle login
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    let user = users.find(user => (user.username === username || user.email === username) && user.password === password);
    
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password!");
    }
});

// Handle registration
document.getElementById("registerForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    let newUser = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        securityKey: document.getElementById("securityKey").value,
        email: document.getElementById("email").value
    };
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Registration successful!");
    window.location.href = "index.html";
});

// Expense Addition Restriction
document.getElementById("expenseForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
        alert("You must log in first!");
        return;
    }
    alert("Expense added successfully!");
});

// Balance Check with Security Key
function requestBalanceKey() {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
        alert("You must log in first!");
        return;
    }
    
    let enteredKey = prompt("Enter your security key:");
    if (enteredKey === user.securityKey) {
        alert("Your balance is $1000");
    } else {
        alert("Incorrect security key!");
    }
}
