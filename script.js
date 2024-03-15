function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // Check if input starts with 'pet_' and is followed by alphanumeric characters

    if (input.startsWith('pet_') && /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(input.slice(4))) {
        result = 'Valid Syntax 🟢';
    } else {
        result = 'Invalid Syntax 🔴';
    }

    document.getElementById('result').innerText = result;
}
