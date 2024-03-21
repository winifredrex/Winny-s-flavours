function printvalue() {
    var nameInput = document.forms["form1"]["name"];
    var phoneInput = document.forms["form1"]["name1"];
    var addressInput = document.forms["form1"]["name2"];
    var emailInput = document.forms["form1"]["name3"];
    var orderInput = document.forms["form1"]["name4"];
  
    // Check if any of the required fields are empty
    if (nameInput.value === '' || phoneInput.value === '' || addressInput.value === '' || emailInput.value === '' || orderInput.value === '') {
      alert('Please fill in all fields');
      return;
    }
// Check if name exceeds 20 characters
    if (nameInput.value.length > 20) {
        alert('Name must be maximum 20 characters long');
        return;
    }
    // Check if phone number exceeds 10 characters
    if (phoneInput.value.length > 20) {
        alert('Phone number must be maximum 10 characters long');
        return; 
    }
    // Check if email exceeds 20 characters
    if (emailInput.value.length > 40) {
        alert('Email must be maximum 20 characters long');
        return;
    }

    alert('Thank you for your order, ' + nameInput.value);
    location.reload();

  
  }
  