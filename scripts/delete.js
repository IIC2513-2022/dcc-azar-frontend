async function borrarUsuario(){
    var usuario = parseInt(document.getElementById("usuario").value);
    console.log(usuario);
    const responseOne = await fetch(`http://localhost:3000/users/${usuario}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    }).then(respuesta => {
        console.log(respuesta);
        if (respuesta.status == 200){
            document.getElementById("usuario").value = ""
        }
        return respuesta
    })
}