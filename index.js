
function validateInfo() {

    var name = document.getElementById("user");
    var pass = document.getElementById("pass");
    var pass1 = document.getElementById("pass1");
    var mail = document.getElementById("email");
    var numb = document.getElementById("tel");

    var nammatch = name.value.search(/^[a-zA-Z]+$/);
    var pos = mail.value.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (name.value == "") {
        name.style.borderColor = "red";
        return false;
    }
    else if (nammatch != 0) {
        alert("Only Alphabets are allowed");
        return false;
    }

    if (pass.value == "") {
        pass.style.borderColor = "red";
        return false;
    }
    else if (pass.value != pass1.value) {
        alert("The password doesn't match!Please re-enter the passwords.");
        return false;
    }
    if (mail.value == "") {
        mail.style.borderColor = "red";
        return false;
    }
    else if (pos != 0) {
        alert("Invalid email address");
        return false;
    }

    if (numb.value == "") {
        numb.style.borderColor = "red";
        return false;
    }

    else {
        return true;
    }

}