
var check = function() {
    const password = document.getElementById("password");
    const cpassword = document.getElementById("cpassword");
    const feedback = document.getElementById("password-feedback")
    const cfeedback = document.getElementById("cpassword-feedback");

    if (password.value.length > 5){
        feedback.innerHTML = ""
        if (password.value == document.getElementById("cpassword").value) {
            cfeedback.style.color = 'green'
            cfeedback.innerHTML = '✔'
            password.classList.remove("invalid")
            password.classList.add("valid")
            cpassword.classList.remove("invalid")
            cpassword.classList.add("valid")
        }
        else{
            cfeedback.style.color = 'red'
            cfeedback.innerHTML = 'Not Matching' 
            password.classList.remove("valid")
            password.classList.add("invalid")
            cpassword.classList.remove("valid")
            cpassword.classList.add("invalid")   
        }
    }
    else {
        feedback.style.color = 'red'
        feedback.innerHTML = 'Password should be at least 6 Characters'
    }
}    
        