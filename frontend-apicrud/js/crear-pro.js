//variables globales del formulario 
 const d = document;
 let nameInput= d.querySelector('#productos-select');
 let princeInput= d.querySelector ('#precio-pro');
  let stockInput = d.querySelector ('#stock-pro');
 let descripcionInput=d.querySelector ('#des-pro');
 let imagen = d.querySelector('#imagen-pro');
 let productUpdate;
 let btnCreate= d.querySelector ('#btn-create');
  let nameUser = d.querySelector("#nombre-usuario");
 let btnLogout = d.querySelector("#btnLogout");

  //Funcion para poner el nombre del usuario
 let getUser = () => {
   let user = JSON.parse(localStorage.getItem("userLogin"));
   nameUser.textContent = user.nombre;
 }
//evento para el boton del logout
 btnLogout.addEventListener("click",() =>{ 
    localStorage.removeItem("userLogin");
    location.href = "../login.html";
 });


 //evento al botón del formulario 
 btnCreate.addEventListener ('click',()=>{
 alert(nameInput.value);
 let dataProduct=getDataproduct();
 senDataProduct(dataProduct)
    });

    //evento al navegador para compobrar si hay recagrdo la pagina
     d.addEventListener("DOMContentLoaded",()=>{
      getUser();
productUpdate= JSON.parse(localStorage.getItem("productEdit"));

 if(productUpdate != null){

}
    });

 updateDataProduct();



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

 //función para editar el producto

 let updateDataProduct=()=>{

//agregar datos a editar en los campos del dormulario

 nameInput.value= productUpdate.nombre;
 precioInput.value=productUpdate.precio;
 stockInput.value= productUpdate.stock;
 descripcionInput.value= productUpdate.descripcion;
 imagen.src=productUpdate.imagen;

 let product; 

 //alternar el botón de crear y editar 

 let btnEdit=d.querySelector(".btn-updat")
 btnCreate.classlist.toggle("d-nome");
 btnEdit.classlist.toggle("d-nome");

//agregar evento al botón editar 
 btnEdit.addEventlistener("click",()=>{
 product = {
 id:productUpdate.id,
 nombre: nameInput.value,
 descripcion: descripcionInput.value,
 precio: precioInput.value,
 stock: stockInput.value,
 imagen: imagen.src
 }
 // borrar info de localStorage 
 localStorage.removeItem("productEdit")
 //pasar los datos del producto a la función
});
 };
 sendDataProduct(product); 

 //función para realizar la petición al servidor 

 let senUpdateProduct= async (pro) =>{
   let sendDataProduct = async (data) => {
   let url = "http://localhost/apiCrud/crear-producto"
   try {

      let respuesta = await fetch(url, {
   method: "put",
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
    listado.href = "listado-pro.html";
   }

 }  catch (error) {
   console.log(error);
 }
   }
}
 