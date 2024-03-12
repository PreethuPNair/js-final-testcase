function generateFibonacci() {
    const numTerms = document.getElementById('numTerms').value;
    const fibonacciSequence = calculateFibonacci(numTerms);
    const fibonacciString = fibonacciSequence.join(', ');
    document.getElementById('fibonacciSequence').textContent = 'Fibonacci Sequence: ' + fibonacciString;
  }
  
  function calculateFibonacci(numTerms) {
    let fibonacciSequence = [];
    let a = 0, b = 1, temp;
    
    if (numTerms >= 1) {
      fibonacciSequence.push(a);
    }
    if (numTerms >= 2) {
      fibonacciSequence.push(b);
    }
  
    for (let i = 2; i < numTerms; i++) {
      temp = a + b;
      a = b;
      b = temp;
      fibonacciSequence.push(temp);
    }
  
    return fibonacciSequence;
  }
  