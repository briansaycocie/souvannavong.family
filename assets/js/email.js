// Anti-spam email protection using character code encoding
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Decode and activate all protected email links
    var emailElements = document.querySelectorAll('[data-email]');

    emailElements.forEach(function(element) {
      var encodedEmail = element.getAttribute('data-email');
      if (!encodedEmail) return;

      // Decode the email from character codes
      var codes = encodedEmail.split(',').map(function(code) {
        return parseInt(code, 10);
      });

      var email = String.fromCharCode.apply(null, codes);

      // Update the link
      element.href = 'mailto:' + email;

      // Set the email address as the link text if element is empty
      if (!element.textContent.trim()) {
        element.textContent = email;
      }

      // Remove the data-email attribute to prevent reprocessing
      element.removeAttribute('data-email');
    });
  }
})();
