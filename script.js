function validateForm(event) {
  event.preventDefault(); // Prevent form submission for validation
  let isValid = true; // Track overall form validity

  const fields = [
    { id: "name", message: "Please enter your name." },
    { id: "email", message: "Please enter a valid email address.", validator: isValidEmail },
    { id: "phone", message: "Please enter a valid 10-digit phone number.", regex: /^\d{10}$/ },
    { id: "ele", message: "Please enter your electricity account number." },
    { id: "aadhar", message: "Please enter a valid 12-digit Aadhaar number.", regex: /^\d{12}$/ },
  ];

  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    const errorElement = document.getElementById(`${field.id}Error`);

    // Reset previous error state
    errorElement.textContent = "";
    input.classList.remove("error-border");

    const value = input.value.trim();
    if (
      !value ||
      (field.regex && !field.regex.test(value)) ||
      (field.validator && !field.validator(value))
    ) {
      errorElement.textContent = field.message; // Show error message
      input.classList.add("error-border"); // Highlight invalid field
      isValid = false; // Mark the form as invalid
    }
  });

  // If the form is valid, proceed with submission
  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset(); // Optional: Reset the form
  }
}

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Attach validation to the form's submit event
document.getElementById("myForm").addEventListener("submit", validateForm);