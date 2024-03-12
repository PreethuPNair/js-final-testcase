function sumOfEvenNumbers(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
  
    return sum;
  }
  
  function calculateSum() {
    const numbersInput = document.getElementById('numbersInput').value;
    const numbersArray = numbersInput.split(',').map(Number); // Convert input string to array of numbers
    
    const sum = sumOfEvenNumbers(numbersArray);
    
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Sum of even numbers: ${sum}`;
  }
  