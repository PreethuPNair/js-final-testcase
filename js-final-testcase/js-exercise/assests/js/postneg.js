function checkNumbers() {
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);
    const resultElement = document.getElementById('result');
  
    if (!isNaN(number1) && !isNaN(number2)) {
      if ((number1 > 0 && number2 < 0) || (number1 < 0 && number2 > 0)) {
        resultElement.textContent = 'One number is positive and the other is negative.';
      } else {
        resultElement.textContent = 'Numbers have the same sign or are both zero.';
      }
    } else {
      resultElement.textContent = 'Please enter valid numbers.';
    }
  }
  