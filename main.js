document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = "Thank you! Your message has been received.";
  this.reset();
});

