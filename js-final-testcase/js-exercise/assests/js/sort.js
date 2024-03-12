function sortNumbers() {
    const numbersInput = document.getElementById('numbersInput').value;
    const numbersArray = numbersInput.split(',').map(Number); // Convert input string to array of numbers
  
    // Implementing bubble sort algorithm
    for (let i = 0; i < numbersArray.length; i++) {
      for (let j = 0; j < numbersArray.length - i - 1; j++) {
        if (numbersArray[j] > numbersArray[j + 1]) {
          // Swap numbers
          let temp = numbersArray[j];
          numbersArray[j] = numbersArray[j + 1];
          numbersArray[j + 1] = temp;
        }
      }
    }
  
    // Displaying sorted numbers
    const sortedResult = document.getElementById('sortedResult');
    sortedResult.textContent = `Sorted numbers: ${numbersArray.join(', ')}`;
  }
  