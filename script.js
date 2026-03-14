function login(){

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    // BUG: login allowed with empty fields
    if(username === "admin" && password === "1234"){
        document.getElementById("message").innerText = "Login Successful"
    }
    else{
        document.getElementById("message").innerText = "Invalid Credentials"
    }
}


function signup(){

    let user = document.getElementById("newuser").value
    let pass = document.getElementById("newpass").value

    document.getElementById("signupMessage").innerText =
        "Account created for " + user

}
