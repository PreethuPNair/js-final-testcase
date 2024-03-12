function calculateSum() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    
    const sum = num1 + num2;
    
    if (num1 === num2) {
      const tripleSum = sum * 3;
      document.getElementById('result').textContent = `The numbers are the same. Triple their sum is ${tripleSum}.`;
    } else {
      document.getElementById('result').textContent = `The sum of the two numbers is ${sum}.`;
    }
  }
  