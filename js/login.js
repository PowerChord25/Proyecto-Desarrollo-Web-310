document.addEventListener("DOMContentLoaded", function(){
document.getElementById("formulario").addEventListener("submit", function(event){
        event.preventDefault()
        let username = document.getElementById("username").value;
        localStorage.setItem("username" , username);
        let password = document.getElementById("password").value;
        fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
                })
                .then(res => res.json())
                .then(data => {
                localStorage.setItem("token", data.token);
                window.location.href = "index.html";
                });
});
})