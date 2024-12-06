document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const registrationModal = document.getElementById('registrationModal');

    registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(registrationForm);

        try {
            const response = await fetch('/register', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                alert('Registration Successful!');
                registrationForm.reset();
                registrationModal.style.display = 'none';
            } else {
                alert(`Registration Failed: ${result.message}`);
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed. Please try again.');
        }
    });
});