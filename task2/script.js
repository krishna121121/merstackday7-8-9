(() => {
    'use strict';
  
    const forms = document.querySelectorAll('.needs-validation');
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault(); // Don't submit if form is invalid
          event.stopPropagation();
        }
  
        form.classList.add('was-validated'); // Add Bootstrap validation styles
      }, false);
    });
  })();
  