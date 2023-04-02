
const productId = async () => {
    const productId = document.getElementById("productId").value;
    
    console.log(productId )
    
    
}

document.getElementById("").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("escucha evento")
    productId();
});