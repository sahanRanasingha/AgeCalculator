window.addEventListener('load', function() {
  var calculateBtn = document.getElementById('calculateBtn');

  calculateBtn.addEventListener('click', function() {
    var birthdateInput = document.getElementById('birthdate');
    var birthdate = new Date(birthdateInput.value);

    if (isNaN(birthdate)) {
      var result = document.getElementById('result');
      result.textContent = 'Select Your Birthday First!';
      return;
    }

    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();

    // Check if the birthday hasn't happened yet this year
    if (
      today.getMonth() < birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())
    ) {
      age--;
    }

    var result = document.getElementById('result');
    result.textContent = 'Your age is ' + age;
  });
});
