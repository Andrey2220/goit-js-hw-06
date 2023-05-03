const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const { email, password } = event.target.elements; 

  if (!email.value || !password.value) { 
    alert('All fields must be filled in!');
    return;
  }

  const formData = {
    email: email.value,
    password: password.value
  }; 

  console.log(formData); 

  form.reset(); 
});

