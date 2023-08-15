 docu/* ment.getElementById("log")
document.getElementById("log").addEventListener("click",function() {
window.location.href = "login.html";

});

let si=document.getElementById("sig")
si.addEventListener("click",function(){
    window.location.href="signup.html";
})
document.getElementById("Log").addEventListener("click" function{

    window.location.href="welcom.php";
})

/// validatetion
document.getElementById("loginForm").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var isValid = true;
    
    // Simple validation: Check if fields are not empty
    if (username.trim() === "") {
        isValid = false;
        document.getElementById("username").classList.add("error");
    } else {
        document.getElementById("username").classList.remove("error");
    }
    
    if (password.trim() === "") {
        isValid = false;
        document.getElementById("password").classList.add("error");
    } else {
        document.getElementById("password").classList.remove("error");
    }
    
    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    }
});
 */


