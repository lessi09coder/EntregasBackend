const getUser = async () => {
    const userName = document.getElementById('loggin-user').value;
    const pass = document.getElementById('password-user').value;    

    await fetch('/api/users/userPost', {
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
};  

document.getElementById("get-user").addEventListener("submit", (event) => {
  event.preventDefault();  
  getUser();
});

const loguotUser = async () => {
  
  await fetch('/api/users/logout', {
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
};

document.getElementById("logout").addEventListener("click", (event) => {
  event.preventDefault();  
  loguotUser();
});

