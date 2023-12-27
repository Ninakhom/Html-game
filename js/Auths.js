const API = 'http://localhost:4000';

function getValue(id) {
  return document.getElementById(id).value;
}

async function registerUser() {
  try {
    const fname = getValue('fname');
    const lname = getValue('lname');
    const email = getValue('email');
    const password = getValue('pwd');

    const response = await fetch(`${API}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fname, lname, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    const responseData = await response.json();
    console.log(responseData);

    // Assuming the server returns a token upon successful registration
    localStorage.setItem('token', responseData.token);

    // Redirect to the index page after successful registration
    window.location.href = 'index.html';
  } catch (error) {
    console.error(error);
    alert('Registration failed. Please try again.');
  }
}
