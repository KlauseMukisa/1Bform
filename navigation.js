document.addEventListener('DOMContentLoaded', function () {
    let currentSection = 0;
    const sections = document.querySelectorAll('.form-section');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = i === index ? 'block' : 'none';
        });
        prevBtn.style.display = index === 0 ? 'none' : 'inline';
        nextBtn.style.display = index === sections.length - 1 ? 'none' : 'inline';
        submitBtn.style.display = index === sections.length - 1 ? 'inline' : 'none';
    }

    function handleNationalityChange() {
        const ugandanFields = document.querySelectorAll('#nin-info, #ugandan-address-info');
        const refugeeFields = document.querySelectorAll('#refugee-number-info, #refugee-settlement-info');

        if (document.getElementById('ugandan').checked) {
            ugandanFields.forEach(field => field.style.display = 'block');
            refugeeFields.forEach(field => field.style.display = 'none');
        } else if (document.getElementById('refugee').checked) {
            refugeeFields.forEach(field => field.style.display = 'block');
            ugandanFields.forEach(field => field.style.display = 'none');
        }
    }

    function handleBusinessRegistrationChange() {
        const registeredFields = document.querySelectorAll('#registration-number-info');
        const nonRegisteredFields = document.querySelectorAll('#registration-reason-info');

        if (document.getElementById('registered-yes').checked) {
            registeredFields.forEach(field => field.style.display = 'block');
            nonRegisteredFields.forEach(field => field.style.display = 'none');
        } else if (document.getElementById('registered-no').checked) {
            nonRegisteredFields.forEach(field => field.style.display = 'block');
            registeredFields.forEach(field => field.style.display = 'none');
        }
    }

    document.getElementById('ugandan').addEventListener('change', handleNationalityChange);
    document.getElementById('refugee').addEventListener('change', handleNationalityChange);
    document.getElementById('registered-yes').addEventListener('change', handleBusinessRegistrationChange);
    document.getElementById('registered-no').addEventListener('change', handleBusinessRegistrationChange);

    prevBtn.addEventListener('click', () => {
        if (currentSection > 0) {
            currentSection--;
            showSection(currentSection);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSection < sections.length - 1) {
            currentSection++;
            showSection(currentSection);
        }
    });

    submitBtn.addEventListener('click', () => {
        Swal.fire({
            title: 'Form Submitted',
            text: 'Your application has been submitted successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    });

    showSection(currentSection);
});
