//esto no va en la carpeta public por obvios temas de seguridad

/* 
function getUserAAAA() {
    fetch('/api/session/user')
      .then(response => response.text())
      .then(userValue => console.log(userValue))
      .catch(error => console.error(error));
     
    const userEmail = document.getElementById('client-email').value;
    console.log(userEmail)
    fetch('/api/setCookie/create-cookie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail: userEmail })
      })
        .then(response => response.text())
        .then(responseText => console.log(responseText))
        .catch(error => console.error(error));
  } */
    

/* const getCookie2 = ()=> {

} */

function getUser() {
    const user = document.getElementById('client-user').value;
    const pass = document.getElementById('client-pass').value;
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