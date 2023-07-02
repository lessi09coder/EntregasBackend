const addUserForm = async () => {
    const ValueName = document.getElementById("name-User").value;
    const ValueLastname = document.getElementById("lastname-User").value;
    const ValueUser = document.getElementById("user-User").value;
    const ValueEmail = document.getElementById("email-User").value;
    const ValuePassword = document.getElementById("password-User").value;

    await fetch("/api/users/register", {
        method: "post",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: ValueName,
            lastname: ValueLastname,
            user: ValueUser,
            email: ValueEmail,
            password: ValuePassword
        })
    })
        .then(response => response.text())
        .then(responseText => console.log(responseText))
        .catch(error => console.error(error))
}

document.getElementById("formRegister").addEventListener("submit", (event) => {
    event.preventDefault();
    addUserForm();
});