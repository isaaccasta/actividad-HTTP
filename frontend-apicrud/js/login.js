//vairiables gloables del formulario de login
const d = document;
userInput = d.querySelector("#usuarioForm");
passInput = d.querySelector("#contraForm");
btnLogin = d.querySelector(".btnLogin");

// evento click del boton login
btnLogin.addEventListener("click", () => {
  // alert ("escribio :"+userInput.value);
   let dataForm = getData();
   sendData(dataForm);
});

//funcion para validar formulario 
//obtener datos de formulario
let getData = () => {
   let user;
    if(userInput.value && passInput.value ){ 
      user ={
         usuario: userInput.value,
         contrasena: passInput.value
      }
      userInput.value = "";
      passInput.value = "";
    } else{
      alert("El ususario y al contraseña es opbligatoria ");
    }
    console.log(user);
    return user;  
}


//funcion para recivir datos y realizar la preticion del servidor
let sendData = async (data) => {
   let url = "http://localhost/apiCrud/login"
   try {

      let respuesta = await fetch(url, {
   method: "post",
   headers: {
      "Content-Type": "application/json"
   },
   body: JSON.stringify(data)
   });
   if (respuesta.status === 401) {
    alert("credenciales incorrectas");
    return;

   }else {  let userLogin = await respuesta.json();
     // console.log(userLogin);
     alert(`credenciales correctas: ${userLogin.usuario} `);
     localStorage.setItem("userLogin", JSON.stringify(userLogin));
     window.location.href = "../index.html";
   }

 }  catch (error) {
   console.log(error);
 }
};