document.addEventListener('DOMContentLoaded', () => {
    const registerButtons = document.querySelectorAll('.register-btn');
    const registrationModal = document.getElementById('registrationModal');
    const closeModal = document.querySelector('.close');
    const eventTitle = document.getElementById('eventTitle');
    const eventTypeInput = document.getElementById('eventTypeInput');

    registerButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const eventType = e.target.closest('.event-card').dataset.event;
            eventTitle.textContent = `${eventType} Event Registration`;
            eventTypeInput.value = eventType;
            registrationModal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        registrationModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === registrationModal) {
            registrationModal.style.display = 'none';
        }
    });
});