const getUser = async () => {
    const userName = document.getElementById('loggin-user').value;
    const pass = document.getElementById('password-user').value;
    console.log(userName , pass)

    await fetch('/api/session/userPost', {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: userName, password: pass })
    })
    .then(response => response.text())
    //.then(response => response.json())
    .then(responseText => console.log(responseText))      
    .catch(error => console.error(error));
}
  

document.getElementById("get-user").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("escucha evento login")
  getUser();
});

const loguotUser = async () => {
  
  await fetch('/api/session/logout', {
    method: 'post',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({})
  })
  .then(response => response.text())
  //.then(response => response.json())
  .then(responseText => console.log(responseText))      
  .catch(error => console.error(error));
}

document.getElementById("logout").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("escucha evento logout")
  loguotUser();
});

