// Select all li elements within the #support-list
const liElements = document.querySelectorAll('#support-list li');

// Iterate through each li element
liElements.forEach((li, index) => {
    // Get the time text content within the current li
    const currentTimeText = li.querySelector('#time').textContent;

    // Check if there is a next li element
    if (index < liElements.length - 1) {
        // Get the time text content within the next li
        const nextTimeText = liElements[index + 1].querySelector('#time').textContent;

        // Calculate the time difference in seconds
        const timeDifferenceInSeconds = calculateTimeDifferenceInSeconds(currentTimeText, nextTimeText);

        // Set the time difference text content within the current li
        const timeDifferenceElement = li.querySelector('#time_difference');
        const formattedTimeDifference = formatSecondsToTime(timeDifferenceInSeconds);
        timeDifferenceElement.textContent = formattedTimeDifference;

        // Check if the time difference is less than 3 minutes (180 seconds)
        if (timeDifferenceInSeconds < 180) {
            // Add a class called "danger" to the time_difference element
            timeDifferenceElement.classList.add('danger');
        }
    }
});

// Function to convert time in mm:ss format to seconds
function convertTimeToSeconds(timeText) {
    const [minutes, seconds] = timeText.split(':').map(Number);
    return minutes * 60 + seconds;
}

// Function to calculate the time difference in seconds
function calculateTimeDifferenceInSeconds(startTime, endTime) {
    const startSeconds = convertTimeToSeconds(startTime);
    const endSeconds = convertTimeToSeconds(endTime);
    return endSeconds - startSeconds;
}

// Function to format seconds to mm:ss format
function formatSecondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

// Function to pad single-digit numbers with leading zeros
function padZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
}