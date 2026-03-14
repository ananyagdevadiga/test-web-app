function validateLoginForm(username, password) {
  if (!username || !password) {
    return { isValid: false, message: 'Username and password cannot be empty.' };
  }
  return { isValid: true };
}

export { validateLoginForm };