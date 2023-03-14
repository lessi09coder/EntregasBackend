function getCookie() {
    fetch('/api/setCookie/get-cookie')
      .then(response => response.text())
      .then(cookieValue => console.log(cookieValue))
      .catch(error => console.error(error));
}

/* const getCookie2 = ()=> {

} */

function createCookie() {
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
}
  
document.getElementById("get-cookie").addEventListener("click", getCookie);
document.getElementById("create-cookie").addEventListener("click", createCookie);