function vote(option) {
    // Perform any logic related to voting, if needed
    // For example, you might want to send the vote to a server or update a database

    // Show an alert message when someone votes
    alert(`You voted for ${option}! Thank you for participating.`);

    // Update the styling to signify the chosen option
    const buttons = document.querySelectorAll('.voting-button');
    buttons.forEach(button => {
        if (button.textContent.includes(option)) {
            button.classList.add('chosen-option');
        } else {
            button.classList.remove('chosen-option');
        }
    });
}