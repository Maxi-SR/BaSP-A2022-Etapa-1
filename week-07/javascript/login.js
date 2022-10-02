window.onload = function () {

    var regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var inputEmail = document.getElementById("input-email");
    inputEmail.onblur = function () {
        var isOk = regexEmail.test(inputEmail.value);
        if (isOk) {
            document.getElementById("error-message-email").innerText = "";
            inputEmail.classList.remove("input-email");
            inputEmail.classList.add("isOk");
        } else {
            inputEmail.classList.remove("isOk");
            inputEmail.classList.add("input-email");
            document.getElementById("error-message-email").innerText = "Invalid email, try again.";
        }
    }

    inputEmail.onfocus = function () {
        document.getElementById("error-message-email").innerText = "";
    }


    var inputPassword = document.getElementById("input-password");
    inputPassword.onblur = function () {
        var passwordText = inputPassword.value;
        if (passwordText.length < 8) {
            document.getElementById("error-message-password").innerText = "There must be 8 characters at least.";
        } else {
            document.getElementById("error-message-password").innerText = "";
            inputPassword.classList.add("isOk");

        }
    }

    inputPassword.onfocus = function () {
        inputPassword.classList.remove("isOk");
        document.getElementById("error-message-password").innerText = "";
    }

    var formData = document.getElementById("form-data");
    formData.addEventListener("submit", function (e) {
        e.preventDefault();
        var user = document.getElementById("input-email").value;
        var password = document.getElementById("input-password").value;
        if (inputEmail.classList.contains("isOk") && inputPassword.classList.contains("isOk")) {
            var url = "https://basp-m2022-api-rest-server.herokuapp.com/login?email=" + user + "&password=" + password;
            // if all inputs are green then the data to get is ok, and the inputs are green
            //  only if the user is rose@radiumrocket.com and the password is BaSP2022
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.success == true) {
                        alert("The request was made correctly\n" + "success: " + data.success + "\nmsg: " + data.msg)
                    } else {
                        alert("The request got an error\n" + "success: " + data.success + "\nmsg: " + data.msg);
                    }
                })
        } else {
            if (inputEmail.classList.contains("isOk")) {
                alert("Oops! The password must contains 8 characters at least, try again");
            } else if (inputPassword.classList.contains("isOk")) {
                alert("Oops! Invalid email,try again");
            } else {
                alert("Both inputs are wrong! Try again");
            }
        }
    });
}