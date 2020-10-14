function validacion () {
    usuario = document.getElementById("usuario").value ;
    contraseña = document.getElementById("contraseña").value ;

    if (usuario.indexOf("@", 0) == -1 ){
        alert("Usuario requiere un arroba (@)");
        return false;
    } else if (contraseña == ""){
        alert("No a ingresado una contraseña")
        return false;
    } else {
        confirm("Ud. A ingresado correctamente.")
    }
} 
