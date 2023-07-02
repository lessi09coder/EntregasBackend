const form = document.getElementById("formForgot");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm();
});
const submitForm = async () => {
    const userEmail = document.getElementById("userEmail").value;
    console.log(userEmail)
    await fetch(`/api/users/forgotPassword`, {
        method: "post",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            email:userEmail
        }),
    }).then(response => response.text())
    //.then(response => response.json())
    .then(responseText => console.log(responseText))      
    .catch(error => console.error(error))
    
    
    /* .then(async (res) => {
        data = await res.json();
        if (data.status === "error") {
            alerts(data.status, data.payload)
        }
        if (data.status === 'success') {
            alerts(data.status, data.payload)
            setTimeout(() => {
                window.location.replace("/api/user/resetPassword");
            }, 1500);
        }
    }) */
}
