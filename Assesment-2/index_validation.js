function validation_check(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var letter=/^\S*$/;
    if(username == "" || !letter.test(username)){
        document.getElementById('username_msg').innerHTML="*Username Requires For Login";
        return false;
    }
    if(username.length<=2 || username.length>=10){
        document.getElementById('username_msg').innerHTML="*Please Enter Valid Username";
        return false;
    } 
    if(password == ""){
        document.getElementById('pass_msg').innerHTML="*Password Requires For Login";
        return false;
    }
    // else{
    //     alert("Login Successfully");
    // }
}