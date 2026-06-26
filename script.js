// Menu toggle button on small screen sizes, navigation links, and contact form
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');

// Toggle mobile navigation menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close mobile navigation when link is clicked
navLinks.addEventListener('click', (event) => {

  if (event.target.tagName === 'A') {
    navLinks.classList.remove('show');
  }
});

// Handle contact form submission
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form input fields
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const success = document.getElementById('formSuccess');

  // Get error display elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  // Clear previous error or success messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  success.textContent = '';

  let isValid = true;

  // Validate name error
  if (name.value.trim().length < 2) {
    nameError.textContent = 'Please enter your name.';
    isValid = false;
  }

  // Validate email error
  if (!email.value.includes('@') || !email.value.includes('.')) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate error message
  if (message.value.trim().length < 10) {
    messageError.textContent = 'Please write a message of at least 10 characters.';
    isValid = false;
  }

  // All inputs are valid
  if (isValid) {
    success.textContent = 'Thank you. Your message has been checked successfully.';
    contactForm.reset();
  }
});