// Simple shared user storage (localStorage for persistence across pages)
let users = JSON.parse(localStorage.getItem('users')) || {};

function handleLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    if (users[username] && users[username] === password) {
        alert('Login successful! Welcome back, ' + username + '!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password!');
    }
}

function handleSignup() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (users[username]) {
        alert('Username already exists!');
        return;
    }
    
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful! You can now login.');
    window.location.href = 'login.html';
}
