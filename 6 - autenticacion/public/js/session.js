

// acomodar esto para el loggin y crear usuario:
const getUser = () => {
    const user = document.getElementById('email-user').value;
    const pass = document.getElementById('password-user').value;
    console.log(user , pass)
    fetch('/api/session/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user, password: pass })
    })
      .then(response => response.text())
     .then(responseText => console.log(responseText))      
      .catch(error => console.error(error));
}
  
document.getElementById("get-user").addEventListener("click", getUser);