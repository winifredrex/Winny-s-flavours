function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
  
    // Check if name and email fields are empty
    if (nameInput.value === '' || emailInput.value === '') {
      alert('Please enter your details');
      return;
    }
  
    // If all validations pass, display success message
    alert('Thank you for submitting your form, ' + nameInput.value);
    location.reload();
  }
  
  function showAmazingText() {
    var checkbox = document.getElementById('checkbox');
    var amazingText = document.getElementById('amazingText');
  
    if (checkbox.checked) {
      amazingText.style.display = 'block';
    } else {
      amazingText.style.display = 'none';
    }
  }