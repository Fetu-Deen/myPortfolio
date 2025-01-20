(function () {
  // Initialize EmailJS with your user ID
  emailjs.init("qOXl1So7P3fLNRr69"); // Replace with your EmailJS user ID

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
      console.log("Form submitted"); // Debugging line

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.querySelector('textarea[name="message"]').value;

      // Send email using EmailJS
      emailjs
        .send("service_1ayurwf", "template_o28vrha", {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        })
        .then(
          function (response) {
            console.log("Email sent successfully!", response);
            document.querySelector(".sent-message").style.display = "block"; // Show success message
            document.querySelector(".error-message").style.display = "none"; // Hide error message
            document.getElementById("contactForm").reset(); // Reset the form
          },
          function (error) {
            console.error("Failed to send email.", error);
            document.querySelector(".error-message").innerText =
              "Failed to send email. Please try again.";
            document.querySelector(".error-message").style.display = "block"; // Show error message
            document.querySelector(".sent-message").style.display = "none"; // Hide success message
          }
        );
    });
})();
