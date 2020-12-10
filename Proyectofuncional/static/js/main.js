/*Esto es un test*/
function search_product() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('item');
    let results=false;

    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none";
            
        } 
        else { 
            x[i].style.display="block";
            results=true;
                           
        }
    }
    if (results){
        $(".mensajevacio").css("display","none");   
    } 
    else{
        $(".mensajevacio").css("display","block");
    }
}
/*Término del test*/ 
function refreshcheckbox(){
    numbeer=$('body').find(".item").length;

    $('body').find(".item").each(function(index,element) {
        console.log($(element).children());
        if($(element).children()[1].checked==false){
        numbeer--;
        }   
    });
    if (numbeer==0) {
        $("#buybtton").prop("disabled",true);
    }
    else{
        $("#buybtton").prop("disabled",false);
    }
}
function bruteforce(id_num){
    verific=$("#num"+id_num).val();
    if (verific=="") {
        verific=1;
    }
    if(verific>30){
        verific=30;
    }
    if(verific<0){
        verific=1;
    }
    $("#num"+id_num).val(parseInt(verific));

}

/*Está es la función encargada de guardar el usuario registrado*/

function prueba(){
    var email1 = document.getElementById('inputEmail').value 
    var username1 = document.getElementById('inputUsername').value
    var inp_password1 = document.getElementById('inputPassword1').value
    var inp_password2 = document.getElementById('inputPassword2').value
    if(validateEmail(email1)){
        if(inp_password1==inp_password2){
            var formdata = new FormData();
            formdata.append("email", email1);
            formdata.append("username", username1);
            formdata.append("password", inp_password1);
            formdata.append("password2", inp_password2);

            var requestOptions = {
              method: 'POST',
              body: formdata,
              redirect: 'follow'
            };
            fetch("http://localhost:8000/api/account/register", requestOptions)
                .then(window.alert("Felicitaciones su cuenta ha sido registrada."))
                .catch(error => console.log(error));
        }
        else{
            window.alert("Las contraseñas no coinciden.")
        }
    }
    else{
        window.alert("El email no es válido.")
    }   
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}