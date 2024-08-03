function login() {
    var userID = document.getElementById("userID").value;
    var userPass = document.getElementById("userPass").value;
    console.log("ID: " + userID);
    console.log("Password: " + userPass);
    }

    function quit() {
    document.getElementById("userID").value = "";
    document.getElementById("userPass").value = "";
    }