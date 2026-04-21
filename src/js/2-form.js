'use strict';

const form = document.querySelector('.feedback-form');
const fillKey = 'feedback-form-state';

const formData = {
    email: '',
    message: '',
};

const savedData = localStorage.getItem(fillKey);
if (savedData) {
    const parsedData = JSON.parse(savedData);

    formData.email = parsedData.email ?? '';
    formData.message = parsedData.message ?? '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(fillKey, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);

    localStorage.removeItem(fillKey);

    formData.email = '';
    formData.message = '';

    form.reset();
});