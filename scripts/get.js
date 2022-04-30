
// obtener todos los usuarios

async function obtenerUsuarios(){
    const responseAll = await fetch("http://localhost:3000/users", {
        method: "GET"})
        .then(respuesta => {
        return respuesta.json()})
        .then(respuestaJSON => {
            console.log(respuestaJSON);
            document.getElementById("respuestaUsuarios").innerHTML = JSON.stringify(respuestaJSON, undefined, 2);
    })
}



// obtener un usuario segun su id

async function obtenerUsuario(){
    var id = document.getElementById("usuario").value;
    document.getElementById("usuario").value = ""
    const responseOne = await fetch(`http://localhost:3000/users/${id}`, {
        method: "GET"})
        .then(respuesta => {
        return respuesta.json()})
        .then(respuestaJSON => {
        console.log(respuestaJSON);
        document.getElementById("respuestaUsuario").innerHTML = JSON.stringify(respuestaJSON, undefined, 2);
    })
}


