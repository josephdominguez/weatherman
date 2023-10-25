function updateClock() { 
    /*
    * Updates clock by displaying the current time and date.
    */
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date')

    // Returns early if time or date elements are not found.
    if (!timeElement || !dateElement) { return; }

    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric'}

    timeElement.textContent = now.toLocaleTimeString('en-US');
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

console.log('hi');
updateClock();
setInterval(updateClock, 1000);
