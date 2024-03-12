function getDayOfWeek(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  }
  
  function findDayOfWeek() {
    const inputDate = document.getElementById('dateInput').value;
    const result = getDayOfWeek(inputDate);
    document.getElementById('result').textContent = result;
  }
  