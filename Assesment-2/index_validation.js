function validation_check(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var letter=/^\S*$/;
    //Validation for Password
    if(username == "" || !letter.test(username)){
        document.getElementById('username_msg').innerHTML="*Username Requires For Login";
        return false;
    }
    //Validation for Password
    if(username.length<=2 || username.length>=10){
        document.getElementById('username_msg').innerHTML="*Please Enter Valid Username";
        return false;
    }
    //Validation for Password
    if(password == ""){
        document.getElementById('pass_msg').innerHTML="*Password Requires For Login";
        return false;
    }
    // else{
    //     alert("Login Successfully");
    // }
}
