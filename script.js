document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let guests = document.getElementById("guests").value;

    // Basic validation
    if (name === "" || email === "" || phone === "" || date === "" || time === "" || guests === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Display confirmation
    let confirmationMessage = `Thank you, ${name}! Your table is booked for ${guests} guests on ${date} at ${time}. We’ll send a confirmation to ${email}.`;
    alert(confirmationMessage);

    // Clear form fields (optional)
    document.getElementById("bookingForm").reset();
});