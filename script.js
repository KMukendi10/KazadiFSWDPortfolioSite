const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('show');
  }
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const success = document.getElementById('formSuccess');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  success.textContent = '';

  let isValid = true;

  if (name.value.trim().length < 2) {
    nameError.textContent = 'Please enter your name.';
    isValid = false;
  }

  if (!email.value.includes('@') || !email.value.includes('.')) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (message.value.trim().length < 10) {
    messageError.textContent = 'Please write a message of at least 10 characters.';
    isValid = false;
  }

  if (isValid) {
    success.textContent = 'Thank you. Your message has been checked successfully.';
    contactForm.reset();
  }
});