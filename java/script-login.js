function validateAll(){
    console.log("buttonnya dipencet!");
    const form = document.getElementById("reserve-form");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phoneNumber = document.getElementById("phoneNumber");
    const password = document.getElementById("password");
    const confPassword = document.getElementById("confPassword");

    if(name.value.trim() === "" || email.value.trim() === "" || phoneNumber.value === "" || password.value === "" || confPassword.value === ""){ 
        alert("All fields must be filled!");
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com!");
    }
    else if(!phoneNumber.value.startsWith("0")){
        alert("Phone number must start with 0!");
    }
    else if(password.value !== confPassword.value){
        alert("Passwords do not match!");
    }
    else{
        form.submit();
        setTimeout(function() {
            window.location.href = 'home.html';
        }, 1000); 
    }
}
