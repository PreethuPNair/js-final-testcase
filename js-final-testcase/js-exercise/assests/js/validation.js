

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    

    if (!validateEmail(email)) {
      emailError.textContent = 'Please enter a valid email address';
    } else {
      emailError.textContent = '';
    }
    
  
    if (!validatePassword(password)) {
      passwordError.textContent = 'Password must be at least 8 characters long';
    } else {
      passwordError.textContent = '';
    }
  });
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    return password.length >= 8;
  }
  