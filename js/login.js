function login() {
    const EmailField = document.getElementById('emailField');
    const email = EmailField.value;
    
    const PasswordlField = document.getElementById('passwordField');
    const password = PasswordlField.value;
    
    if(email=="turzacse@gmail.com" && password =="turza")
    {
        console.log("correct");
        window.location.href = "dashboard.html";
    }
    else
    {
        alert("Wrong E-mail or password!");
    }

}