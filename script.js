document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can perform further validation or send the data to a backend server
    // For this example, we'll just log the values to the console
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
});
