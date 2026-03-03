//variables globales del formulario 
 const d = document;
 let nameInput= d.querySelector('#productos-select');
 let princeInput= d.querySelector ('#precio-pro');

  let stockInput = d.querySelector ('#stock-pro');
 let descripcionInput=d.querySelector ('#des-pro');
 let imagen = d.querySelector('#imagen-pro');
 let btnCreate= d.querySelector ('#btn-create');

 //evento al botón del formulario 
 btnCreate.addEventListener ('click',()=>{
 alert(nameInput.value);
 let dataProduct=getDataproduct();
 senDataProduct(dataProduct)
    });

// función para validar el formulario y
 //obtener los datos del formulario
 let getDataproduct = () => {
 let product;
if (nameInput.value && priceInput.value && stockInput.value && descripcionInput.value && imagen.src){
 product={
 nombre: nameInput.value,
 descripcion: descripcionInput.value, 
 precio:precioInput.value,
 stock: stockInput.value,
 imagen: imagen.src
}
precioInput.value="";
descripcionInput.value="";
stockInput.value="";
imagen.src= " https://m.media-amazon.com/images/I/61XV8PihCwL._SY250_.jpg"
console.log(product);
alert("Producto creado exitosamente");
} else{
alert("Todos los campos son obligatorios");
}   
return product; 
 };
//funcion para recibir datos y 
//realizar la petición al servidor
let sendDataProduct = async (data) => {
   let url = "http://localhost/apiCrud/crear-producto"
   try {

      let respuesta = await fetch(url, {
   method: "post",
   headers: {
      "Content-Type": "application/json"
   },
   body: JSON.stringify(data)
   });
   if (respuesta.status === 406) {
    alert("los datos enviados no son adminitos");

   }else {  
    let mensaje = await respuesta.json();
    alert(mensaje.mensaje);
   }

 }  catch (error) {
   console.log(error);
 }
};