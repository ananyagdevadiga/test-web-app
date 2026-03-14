import { validateLoginForm } from './validator.js';

function handleLoginSubmit(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const validation = validateLoginForm(username, password);
  if (!validation.isValid) {
    alert(validation.message);
    return;
  }
  
  // Existing authentication logic
  authenticateUser(username, password);
}

document.getElementById('loginForm').addEventListener('submit', handleLoginSubmit);