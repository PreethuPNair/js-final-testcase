function isPerfectSquare(number) {
    // If the square root of the number is an integer, it's a perfect square
    return Math.sqrt(number) % 1 === 0;
  }
  
  function checkPerfectSquare() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');
  
    if (isPerfectSquare(number)) {
      resultElement.textContent = `${number} is a perfect square.`;
    } else {
      resultElement.textContent = `${number} is not a perfect square.`;
    }
  }
  