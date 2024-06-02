document.addEventListener('DOMContentLoaded', () => {
    const weeksElement = document.getElementById('weeks');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 35); // 5 weeks from now

    function updateTimer() {
        const now = new Date();
        const timeLeft = launchDate - now;

        const weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        weeksElement.textContent = weeks;
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }

    setInterval(updateTimer, 1000);
});
