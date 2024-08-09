// form-validation.js

document.addEventListener('DOMContentLoaded', function() {

    // Function to validate required fields
    function validateRequiredFields() {
        let valid = true;
        document.querySelectorAll('.form-control[required]').forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });
        return valid;
    }

    // Function to validate email format
    function validateEmail() {
        const email = document.getElementById('email-address');
        if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.classList.add('is-invalid');
            return false;
        }
        email.classList.remove('is-invalid');
        return true;
    }

    // Function to validate phone number format
    function validatePhoneNumber() {
        const phone = document.getElementById('phone-number');
        if (phone.value && !/^\+?\d{10,15}$/.test(phone.value)) { // Adjust regex according to phone number format
            phone.classList.add('is-invalid');
            return false;
        }
        phone.classList.remove('is-invalid');
        return true;
    }

    // Function to validate radio buttons
    function validateRadios(name) {
        const checked = document.querySelector(`input[name="${name}"]:checked`);
        if (!checked) {
            document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
                input.classList.add('is-invalid');
            });
            return false;
        }
        document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
            input.classList.remove('is-invalid');
        });
        return true;
    }

    // Function to validate checkbox fields
    function validateCheckboxes(name) {
        const checked = document.querySelectorAll(`input[name="${name}"]:checked`).length > 0;
        if (!checked) {
            document.querySelector(`input[name="${name}"]`).classList.add('is-invalid');
            return false;
        }
        document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
            input.classList.remove('is-invalid');
        });
        return true;
    }

    // Form submit event listener
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Perform all validations
        const isRequiredValid = validateRequiredFields();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhoneNumber();
        const isNationalityValid = validateRadios('nationality');
        const isBusinessRegisteredValid = validateRadios('business-registered');
        const areChallengesValid = validateCheckboxes('business-challenges');
        const areModulesValid = validateCheckboxes('training-modules');

        // Check if all validations passed
        if (isRequiredValid && isEmailValid && isPhoneValid && isNationalityValid && isBusinessRegisteredValid && areChallengesValid && areModulesValid) {
            // If valid, show success alert and submit form or redirect
            Swal.fire({
                title: 'Form Submitted',
                text: 'Your application has been submitted successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                // Redirect or move to the next section if needed
                // window.location.href = 'next-page.html';
            });
        } else {
            // Show error alert if validation fails
            Swal.fire({
                title: 'Validation Error',
                text: 'Please correct the errors in the form before submitting.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });
});
