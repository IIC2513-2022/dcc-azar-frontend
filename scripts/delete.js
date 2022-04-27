function borrarUsuario(){
    // Selecting the input element and get its value 
    var usuario = document.getElementById("usuario").value;
    console.log(usuario);
    document.getElementById("usuario").value = ""
}
