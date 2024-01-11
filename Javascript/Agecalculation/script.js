// Function to calculate age
function calculateAge() {
    // Get the input element
    let dobInput = document.getElementById('dob');

    // Get the selected date from the input
    let dob = new Date(dobInput.value);

    // Get the current date
    let currentDate = new Date();

    // Calculate the difference in milliseconds
    let timeDiff = currentDate - dob;

    // Calculate age in years
    let ageInYears = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

    // Calculate remaining days
    let remainingDays = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));

    // Create a new element to display the result
    let resultElement = document.createElement('div');

    // Set the inner HTML of the result element
    resultElement.innerHTML = 'Your age is ' + ageInYears + ' years and ' + remainingDays + ' days.';

    // Get the container to append the result
    var container = document.getElementById('result');

    // Clear previous results
    container.innerHTML = '';

    // Append the result to the container
    container.appendChild(resultElement);
}
