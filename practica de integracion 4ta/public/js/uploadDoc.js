const form = document.getElementById("uploadForm");
const documentInput = document.getElementById("documentInput");

form.onsubmit = (e) => {
    e.preventDefault();
    submitForm(form.dataset.user);
};

/* 
document.getElementById("uploadForm").addEventListener("submit", (event) => {
    event.preventDefault();
    submitForm(form.dataset.userId);
}); 
*/

const submitForm = async (userId) => {
    const formData = new FormData();
    const files = documentInput.files;

    console.log(files)

    for (let i = 0; i < files.length; i++) {        
        formData.append("files", files[i])      
    }           

    await fetch(`/api/users/${userId}/documents`, {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(responseText => console.log(responseText))
    .catch(error => console.error(error))
};