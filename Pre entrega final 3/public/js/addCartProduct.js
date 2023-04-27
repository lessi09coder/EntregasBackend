const AddCartProduct = async () => {
   // const cartId = "testcartId"
   // const productId = "testproductId"
    
    console.log(cartId,productId)

    await fetch(`/api/carts/${cartId}/product/${productId}`, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart: cartId , product: productId })
    })
    .then(response => response.text())
    //.then(response => response.json())
    .then(responseText => console.log(responseText))      
    .catch(error => console.error(error));
}




document.getElementById("agregarProducto").addEventListener("click", (event) => {
    event.preventDefault();
    console.log("escucha evento login")
    AddCartProduct();
  });