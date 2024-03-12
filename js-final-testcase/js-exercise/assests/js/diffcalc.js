function calculateDifference() {
    const number = parseInt(document.getElementById('number').value);
    const resultElement = document.getElementById('result');
  
    if (!isNaN(number)) {
      const difference = Math.abs(number - 13);
      const result = number > 13 ? difference * 2 : difference;
      resultElement.textContent = `The difference is: ${result}`;
    } else {
      resultElement.textContent = 'Please enter a valid number.';
    }
  }
  