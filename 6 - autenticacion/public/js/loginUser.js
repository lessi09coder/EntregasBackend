const getUser = async () => {
    const user = document.getElementById('email-user').value;
    const pass = document.getElementById('password-user').value;
    //console.log(user , pass)
    await fetch('/api/session/userPost', {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user, password: pass })
    })
    .then(response => response.text())
    //.then(response => response.json())
    .then(responseText => console.log(responseText))      
    .catch(error => console.error(error));
}
  

document.getElementById("get-user").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("escucha evento")
  getUser();
});