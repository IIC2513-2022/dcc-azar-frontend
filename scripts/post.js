window.onload = codigo => {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var username = document.getElementById("username");
    var age = document.getElementById("age");
    var password = document.getElementById("password");
    var botonNuevo = document.getElementById("nuevousuario");
    botonNuevo.addEventListener('click', enviaNuevoUsuario);
  }
    
async function enviaNuevoUsuario() {
  datos = {
    firstName: fname.value,
    lastName: lname.value,
    username: username.value,
    age: parseInt(age.value),
    password: password.value
  }

  const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(datos)
    }).then(respuesta => {
        console.log(respuesta.statusText);
        if (respuesta.status == 201) {
          fname.value = "";
          lname.value = "";
          username.value = "";
          age.value = "";
          password.value = "";
        }
        return respuesta.json()
    })
    return response
};


  