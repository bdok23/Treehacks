function verifyAndSubmit() {
    // Get values from the form elements
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const citizenship = document.getElementById('citizenship').value;

    // Check eligibility conditions
    const isEligible = age >= 18 && citizenship === 'US';

    // If eligible, redirect to voting.html
    if (isEligible) {
        alert('You are eligible! Redirecting to voting.html...');
        window.location.href = 'voting.html';
        return false; // Prevent the form from submitting
    } else {
        alert('You are not eligible.');
        return false; // Prevent the form from submitting
    }
}