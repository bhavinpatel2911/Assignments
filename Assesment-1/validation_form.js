function validation_check(){

                                            // FirstName Validation

    var fname=document.getElementById('fname').value;
    var letter= /^[a-zA-Z]+$/;
    if(fname == ""){
        document.getElementById('fname_msg').innerHTML="*Please Enter Your First Name";
        return false;
    }
    if(!letter.test(fname)){
        document.getElementById('fname_msg').innerHTML="*Please Enter Your Fisrt Name in Valid Format!";
        return false;
    }
    if(fname.length<=2){
        document.getElementById('fname_msg').innerHTML="*First Name Length is Too Short!";
        return false;
    }
    if(fname.length>=15){
        document.getElementById('fname_msg').innerHTML="*First Name Length is Too Long!";
        return false;
    }

                                        // LastName Validation

    var lname=document.getElementById('lname').value;
    if(lname == ""){
        document.getElementById('lname_msg').innerHTML="*Please Enter Your Last Name";
        return false;
    }
    if(!letter.test(lname)){
        document.getElementById('lname_msg').innerHTML="*Please Enter Your Last Name in Valid Format!";
        return false;
    }
    if(lname.length<=2){
        document.getElementById('lname_msg').innerHTML="*Last Name Length is Too Short!";
        return false;
    }
    if(lname.length>=15){
        document.getElementById('lname_msg').innerHTML="*Last Name Length is Too Long!";
        return false;
    }

                                            // UserName Validation

    var username=document.getElementById('username').value;
    var letter=/^\S*$/;
    if(username == ""){
        document.getElementById('username_msg').innerHTML="*Please Enter Username";
        return false;
    }
    if(!letter.test(username)){
        document.getElementById('username_msg').innerHTML="*Please Enter Your Username in Valid Format!";
        return false;
    }   
    if(username.length<=2 || username.length>=15){
        document.getElementById('username_msg').innerHTML="*Please Enter Username Between 2 to 15 Characters";
        return false;
    } 

                                            //Password Validation

    var password=document.getElementById('password').value;
    var letter =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
    if(password == ""){
        document.getElementById('pass_msg').innerHTML="*Please Create Password for Login";
        return false;
    }
    if(!letter.test(password)){
        document.getElementById('pass_msg').innerHTML="*Password Must Contain Atleast six digits, one uppercase, one numeric and special character!";
        return false;
    }
    var confirm_password=document.getElementById('confirm_password').value;
    if(confirm_password == ""){
        document.getElementById('c_pass_msg').innerHTML="*Please Enter Same Password Again!";
        return false;
    }
    if(confirm_password != password){
        document.getElementById('c_pass_msg').innerHTML="*Password and Confirm Password Not Matches!";
        return false;
    }

                                            // Mobile Validation

    var mobile=document.getElementById('mobile').value;
    var letter= /^[7-9][0-9]{0,10}$/;
    if(mobile==""){
        document.getElementById('mobile_msg').innerHTML="*Please Enter Mobile Number!";
        return false;
    }
    if(isNaN(mobile)){
        document.getElementById('mobile_msg').innerHTML="*Only Numbers are Allowed";
        return false;
    }
    if(!letter.test(mobile)){
        document.getElementById('mobile_msg').innerHTML="*Please Match the Valid Phone Format!";
        return false;
    }
    if(mobile.length<=9){
        document.getElementById('mobile_msg').innerHTML="*Mobile Number Must Be of 10 Digites!";
        return false;
    }
}