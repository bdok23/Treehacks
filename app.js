document.getElementById('voterInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture user input
    const userData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        citizenship: document.getElementById('citizenship').value
    };

    // Send the user data to the server
    fetch('/process-voter-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        // Display the result from the server
        document.getElementById('verificationResult').textContent = JSON.stringify(data);
    })
    .catch(error => console.error('Error:', error));
});
