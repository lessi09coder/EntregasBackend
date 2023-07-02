const form = document.getElementById("formReset");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm();
});
const submitForm = async () => {
    const email = document.getElementById("userEmail").value;
    const token = document.getElementById("token").value;
    const newPassword = document.getElementById("userPassword").value;
    const repeatNewPassword = document.getElementById("userRepeat").value;
    await fetch('/api/users/resetPassword', {
        method: "post",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            token: token,
            password: newPassword,
            repeatPassword: repeatNewPassword
        }),
    })
}