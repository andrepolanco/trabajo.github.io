function login(){
    var user,pass;
    user=document.getElementById("usuario").value;
    pass=document.getElementById("contraseña").value;
    if(user =="albamar@gmail.com"&& pass == 1234){
        alert("usuario y contraseña validos");
        window.location="welcome.html";
        return false;
    }
    if(user =="andre@gmail.com"&& pass == 2345){
        alert("usuario y contraseña validos");
        window.location="welcome.html";
        return false;
    }
    if(user =="jose@gmail.com"&& pass == 3456){
        alert("usuario y contraseña validos");
        window.location="welcome.html";
        return false;
    }
    if(user =="caroline@gmail.com"&& pass == 4567){
        alert("usuario y contraseña validos");
        window.location="welcome.html";
        return false;
    }
    else{
        alert("sus datos son incorrectos");
    }
}