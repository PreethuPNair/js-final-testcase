document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Retrieve values from form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    
    // Display personalized greeting
    const greeting = generateGreeting(name, age);
    alert(greeting);
  });
  
  function generateGreeting(name, age) {
    return `Hello, ${name}! You are ${age} years old. Welcome!`;
  }
  