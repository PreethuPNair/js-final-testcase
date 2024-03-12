function checkNumbers() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    const resultElement = document.getElementById('result');
  
    if (!isNaN(number1) && !isNaN(number2)) {
      if (number1 === 50 || number2 === 50 || number1 + number2 === 50) {
        resultElement.textContent = 'True';
      } else {
        resultElement.textContent = 'False';
      }
    } else {
      resultElement.textContent = 'Please enter valid numbers.';
    }
  }
  