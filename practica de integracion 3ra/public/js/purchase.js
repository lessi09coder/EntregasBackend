const comprar = async () => {
    urlPurchase = `${window.location.href}/purchase`
    console.log(urlPurchase)
    await fetch(urlPurchase, {
        method: 'get',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' }       
      })
      .then(response => response.text())
      //.then(response => response.json())
      .then(responseText => console.log(responseText))      
      .catch(error => console.error(error));
}

document.getElementById("comprar").addEventListener("click", (event) => {
    event.preventDefault();
    console.log("escucha evento COMPRAR")
    comprar();
  });