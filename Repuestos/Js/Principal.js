document.getElementById("open-login-modal").addEventListener("click", function() {
    document.getElementById("login-modal").style.display = "block";
});

document.getElementById("login-modal").addEventListener("click", function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});