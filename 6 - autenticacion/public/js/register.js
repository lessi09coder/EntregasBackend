
const addUserForm = async () => {
    const Valueuser = document.getElementById("email-User").value;
    const Valuepassword = document.getElementById("password-User").value;
    console.log(Valueuser , Valuepassword)
    await fetch("http://localhost:8080/api/session/register",{
        method: "post",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: Valueuser, password: Valuepassword })
    })
    //.then(response => response.text())
    //.then(responseText => console.log(responseText))      
    .catch(error => console.error(error));
}

document.getElementById("formRegister").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("escucha evento")
    addUserForm();
});