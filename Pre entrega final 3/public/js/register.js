
const addUserForm = async () => {
    const ValueUser = document.getElementById("user-User").value;
    const ValueEmail = document.getElementById("email-User").value;
    const ValuePassword = document.getElementById("password-User").value;
    console.log(ValueUser , ValueEmail ,ValuePassword)
    await fetch("/api/session/register",{
        method: "post",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: ValueUser, email:ValueEmail, password: ValuePassword })
    })
    .then(response => response.text())
    .then(responseText => console.log(responseText))
    .catch(error => console.error(error))
}

document.getElementById("formRegister").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("escucha evento")
    addUserForm();
});