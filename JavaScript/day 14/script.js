// Real-time Clock
function displayClock() {
    setInterval(() => {
        let date = new Date();
        console.log(date.toLocaleTimeString());
    }, 1000);
}

// Calculate Area of a Circle
function calculateArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

// Convert String to Kebab Case
function toKebabCase(str) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

// Countdown Timer
function countdown(targetDate) {
    targetDate = new Date(targetDate);
    setInterval(() => {
        let now = new Date();
        let distance = targetDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    }, 1000);
}

// Get Day of the Week
function getDayOfWeek(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date(date).getDay()];
}

// Get Current Date in Different Formats
function getCurrentDate() {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    console.log(dd + '/' + mm + '/' + yyyy);
    console.log(mm + '/' + dd + '/' + yyyy);
    console.log(yyyy + '-' + mm + '-' + dd);
}

// Check if a Given Date Falls on a Leap Year
function isLeapYear(date) {
    let year = new Date(date).getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Calculate Difference in Days Between Two Dates
function diffInDays(date1, date2) {
    let diffTime = Math.abs(new Date(date2) - new Date(date1));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Calculate Age in Years
function calculateAge(birthdate) {
    let diff_ms = Date.now() - new Date(birthdate).getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
