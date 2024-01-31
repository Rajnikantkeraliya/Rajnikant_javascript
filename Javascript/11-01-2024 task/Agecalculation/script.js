
function calculateAge() {
    // Get the input value (date of birth)
    const dobInput = document.getElementById("dob");
    const dobValue = dobInput.value;

    // Calculate age
    const dobDate = new Date(dobValue);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dobDate;

    // Convert age from milliseconds to years, months, and days
    const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
    const ageYears = Math.floor(ageInYears);

    const remainingMonths = (ageInYears - ageYears) * 12;
    const ageMonths = Math.floor(remainingMonths);

    const remainingDays = (remainingMonths - ageMonths) * (365.25 / 12);
    const ageDays = Math.floor(remainingDays);

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.</p>`;
  }
