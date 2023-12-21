// Select elements from the DOM
const passwordDisplay = document.getElementById('password');
const generateButton = document.getElementById('generate');

// Function to generate a random password
function generatePassword() {
    // Implement password generation logic here
}

// Event listener for the Generate Password button
generateButton.addEventListener('click', () => {
    const newPassword = generatePassword();
    passwordDisplay.value = newPassword;
    function generatePassword() {
        const length = parseInt(prompt('Enter the length of the password (between 8 and 128):'));
        if (isNaN(length) || length < 8 || length > 128) {
            alert('Invalid length. Please enter a valid number between 8 and 128.');
            return '';
        }

        const includeLowercase = confirm('Include lowercase letters?');
        const includeUppercase = confirm('Include uppercase letters?');
        const includeNumbers = confirm('Include numbers?');
        const includeSpecialChars = confirm('Include special characters?');

        // Define character sets for each type
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_-+=<>?';

        // Combine selected character sets
        let allChars = '';
        if (includeLowercase) allChars += lowercaseChars;
        if (includeUppercase) allChars += uppercaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSpecialChars) allChars += specialChars;

        if (allChars === '') {
            alert('You must include at least one character type.');
            return '';
        }

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            newPassword += allChars[randomIndex];
        }

        return newPassword;
    }
});
