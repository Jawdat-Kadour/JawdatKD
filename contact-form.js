// Contact Form JavaScript for EmailJS Integration
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your user ID (you'll need to replace this with your actual EmailJS user ID)
  // This should be done in a separate file or in a script tag in your HTML
  // emailjs.init("YOUR_USER_ID");

  const contactForm = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-button");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Change button text/state to indicate processing
      submitButton.disabled = true;
      const originalButtonText = submitButton.innerHTML;
      submitButton.innerHTML = '<span class="animate-pulse">Sending...</span>';

      // Validate form
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Simple validation
      if (!name || !email || !subject || !message) {
        showStatus("error", "Please fill in all fields");
        resetButton();
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showStatus("error", "Please enter a valid email address");
        resetButton();
        return;
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      };

      // Send email using EmailJS
      emailjs
        .send("service_z0zhtle", "template_xuczplu", templateParams)
        .then(function (response) {
          console.log("SUCCESS!", response.status, response.text);
          showStatus(
            "success",
            "Message sent successfully! I will get back to you soon."
          );
          contactForm.reset();
        })
        .catch(function (error) {
          console.log("FAILED...", error);
          showStatus(
            "error",
            "Failed to send message. Please try again later."
          );
        })
        .finally(function () {
          resetButton();
        });
    });
  }

  function showStatus(type, message) {
    formStatus.textContent = message;
    formStatus.className = "mt-4 py-2 px-4 rounded-lg text-center";

    if (type === "success") {
      formStatus.classList.add(
        "bg-green-100",
        "text-green-800",
        "border",
        "border-green-200"
      );
    } else {
      formStatus.classList.add(
        "bg-red-100",
        "text-red-800",
        "border",
        "border-red-200"
      );
    }

    // Auto-hide after 5 seconds for success messages
    if (type === "success") {
      setTimeout(() => {
        formStatus.textContent = "";
        formStatus.className = "mt-4";
      }, 5000);
    }
  }

  function resetButton() {
    submitButton.disabled = false;
    submitButton.innerHTML = "Send Message";
  }
});
