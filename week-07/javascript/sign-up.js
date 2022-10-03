function onlyLetters(stringToCheck) {
    var letters = "abcdefghijklmnñopqrstuvwxyz ";
    var cont = 0;
    for (var letter = 0; letter < stringToCheck.length; letter++) {
        if (letters.includes(stringToCheck[letter])) {
            cont = cont + 1;
        }
    }
    if (cont == stringToCheck.length) {
        return true;
    }
    return false;
}


function onlyNumbers(stringToCheck) {
    var numbers = "0987654321";
    var cont = 0;
    for (var number = 0; number < stringToCheck.length; number++) {
        if (numbers.includes(stringToCheck[number])) {
            cont = cont + 1;
        }
    }
    if (cont == stringToCheck.length) {
        return true;
    }
    return false;
}

function hasLetters(stringToCheck) {
    var letters = "abcdefghijklmnñopqrstuvwxyz";
    var i = 0;

    while ((i < stringToCheck.length)) {
        if (letters.includes(stringToCheck[i])) {
            return true;
        }
        i++
    }
    return false;; //if it is true, there is letters
}

function hasNumbers(stringToCheck) {
    var numbers = "1234567890";
    var i = 0;

    while ((i < stringToCheck.length)) {
        if (numbers.includes(stringToCheck[i])) {
            return true;
        }
        i++
    }
    return false;; //if it is true, there is letters
}

function hasAnSpace(stringToCheck) {
    var numbers = " ";
    var i = 0;
    while ((i < stringToCheck.length)) {
        if (numbers.includes(stringToCheck[i])) {
            return true;
        }
        i++
    }
    return false;; //if it is true, there is letters
}

function fixFormatDate(date) {
    var dateSplited = date.split("-");
    var dd = dateSplited[2];
    var mm = dateSplited[1];
    var aaaa = dateSplited[0];
    console.log(dateSplited)
    var dateFormat = mm + "/" + dd + "/" + aaaa;
    return dateFormat;
}

window.onload = function () {


    /* ------------------name input validation------------------- */
    var inputName = document.getElementById("first-name");
    inputName.onblur = function () {
        var onlyLettersInString = onlyLetters(inputName.value);
        if (onlyLettersInString && inputName.value.length >= 3) {
            inputName.classList.add("isOk")
        } else {
            document.getElementById("first-name-error").innerText = "Invalid name, only accepts letters and more than 3.";
            inputName.classList.remove("isOk")
        }
        if (inputName.value == "") {
            inputName.classList.add("notOk")
        }
    }

    inputName.onfocus = function () {
        inputName.classList.remove("isOk");
        inputName.classList.remove("notOk");
        document.getElementById("first-name-error").innerText = "";
    }
    /*-----------------------------------------------------------*/


    /* ------------------last name input validation------------------- */
    var inputLastName = document.getElementById("last-name");
    inputLastName.onblur = function () {
        var onlyNumbersInString = onlyLetters(inputLastName.value);
        if (onlyNumbersInString && inputLastName.value.length >= 3) {
            inputLastName.classList.add("isOk")
        } else {
            document.getElementById("last-name-error").innerText = "Invalid last name, only accepts numbers and more tan 3.";
            inputLastName.classList.remove("isOk")
        }
        if (inputLastName.value == "") {
            inputLastName.classList.add("notOk")
        }
    }
    inputLastName.onfocus = function () {
        inputLastName.classList.remove("isOk");
        inputLastName.classList.remove("notOk")
        document.getElementById("last-name-error").innerText = "";
    }
    /*----------------------------------------------------------------- */


    /*------------------------DNI input validation---------------------- */
    var inputDNI = document.getElementById("dni");
    inputDNI.onblur = function () {
        var onlyNumbersInString = onlyNumbers(inputDNI.value);
        if (onlyNumbersInString && (inputDNI.value.length == 7 || inputDNI.value.length == 8)) {
            inputDNI.classList.add("isOk");
        } else {
            document.getElementById("dni-error").innerText = "Invalid DNI, only accepts number, and between 7 and 8 digits";
            inputDNI.classList.remove("isOk")
        }
        if (inputDNI.value == "") {
            inputDNI.classList.remove("isOk")
            inputDNI.classList.add("notOk");
        }
    }

    inputDNI.onfocus = function () {
        inputDNI.classList.remove("isOk");
        inputDNI.classList.remove("notOk");
        document.getElementById("dni-error").innerText = "";
    }
    /*-----------------------------------------------------------------*/


    /*---------------- phone input validation ------------------------*/

    var inputPhone = document.getElementById("phone-number");
    inputPhone.onblur = function () {
        if (inputPhone.value.length != 10) {
            document.getElementById("phone-error").innerText = "There must have 10 characters";
            inputPhone.classList.add("notOk");
        } else {
            var onlyNumbersInString = onlyNumbers(inputPhone.value);
            if (onlyNumbersInString) {
                inputPhone.classList.add("isOk");
            } else {
                document.getElementById("phone-error").innerText = "Invalid phone, only accepts number";
                inputPhone.classList.remove("isOk");
            }
            if (inputPhone.value == "") {
                inputPhone.classList.add("notOk");
            }
        }
    }

    inputPhone.onfocus = function () {
        inputPhone.classList.remove("isOk");
        inputPhone.classList.remove("notOk");
        document.getElementById("phone-error").innerText = "";
    }

    /*------------------------------------------------------------------*/


    /*----------------address input validation------------------------- */

    var inputAddress = document.getElementById("input-address");
    inputAddress.onblur = function () {
        if (inputAddress.value.length < 5) {
            document.getElementById("address-error").innerText = "Must have 5 characters at least";
        } else {
            if (hasAnSpace(inputAddress.value) && hasLetters(inputAddress.value) && hasNumbers(inputAddress.value)) {
                inputAddress.classList.add("isOk");
                document.getElementById("address-error").innerText = "";
            } else {
                document.getElementById("address-error").innerText = "Must have an space, a letter, and a number";
                inputAddress.classList.remove("isOk");
            }
        }
        if (inputAddress.value == "") {
            inputAddress.classList.add("notOk")
        }
    }

    inputAddress.onfocus = function () {
        document.getElementById("address-error").innerText = "";
        inputAddress.classList.remove("isOk");
        inputAddress.classList.remove("notOk");
    }


    /*----------------------------------------------------------------- */


    /*-----------------validate location input-------------------------- */

    var inputLocation = document.getElementById("location");
    inputLocation.onblur = function () {
        if (inputLocation.value.length < 3) {
            document.getElementById("location-error").innerText = "Must have 3 characters at least";
        } else {
            if (hasLetters(inputLocation.value) && hasNumbers(inputLocation.value)) {
                inputLocation.classList.add("isOk");
                document.getElementById("location-error").innerText = "";
            } else {
                document.getElementById("location-error").innerText = "Must have a letter, and a number";
                inputLocation.classList.remove("isOk");
            }
        }
        if (inputLocation.value == "") {
            inputLocation.classList.add("notOk")
        }
    }

    inputLocation.onfocus = function () {
        document.getElementById("location-error").innerText = "";
        inputLocation.classList.remove("isOk");
        inputLocation.classList.remove("notOk");
    }
    /*------------------------------------------------------------------- */

    /*-----------------validate area code input-------------------------- */
    var inputAreaCode = document.getElementById("area-code");
    inputAreaCode.onblur = function () {
        if ((inputAreaCode.value.length == 4 || inputAreaCode.value.length == 5) && onlyNumbers(inputAreaCode.value)) {
            inputAreaCode.classList.add("isOk");
            document.getElementById("area-code-error").innerText = "";
        } else {
            inputAreaCode.classList.remove("isOk");
            document.getElementById("area-code-error").innerText = "Must have 4 o 5 characters, and only numbers";
        }
        if (inputAreaCode.value == "") {
            inputAreaCode.classList.add("notOk")
        }
    }

    inputAreaCode.onfocus = function () {
        document.getElementById("area-code-error").innerText = "";
        inputAreaCode.classList.remove("isOk");
        inputAreaCode.classList.remove("notOk");
    }

    /*------------------------------------------------------------------- */

    /*-----------------validate email input-------------------------- */

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

    /*------------------------------------------------------------------- */

    /*-----------------validate password input-------------------------- */

    var inputPassword = document.getElementById("password");
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

    /*------------------------------------------------------------------- */

    /*-----------------validate repeat password input-------------------------- */

    var repeatPassword = document.getElementById("repeat-password");
    repeatPassword.onblur = function () {
        if (inputPassword.value === repeatPassword.value) {
            repeatPassword.classList.add("isOk");
            document.getElementById("error-message-rpt-pass").innerText = "";
        } else {
            document.getElementById("error-message-rpt-pass").innerText = "Passwords do not match";
            repeatPassword.classList.remove("isOk");
        }
        if (repeatPassword.value == "") {
            repeatPassword.classList.add("notOk")
        }
    }

    repeatPassword.onfocus = function () {
        document.getElementById("error-message-rpt-pass").innerText = "";
        repeatPassword.classList.remove("isOk");
    }



    /*------------------------------------------------------------------- */

    /*--------------------------input birthday -------------------------- */


    var createAccountButton = document.getElementById("form-inputs");
    createAccountButton.addEventListener("submit", function (e) {
        e.preventDefault();
        var cont = 0;
        var form = document.getElementById('form-inputs');
        var arr_inputs= {};
        for (var element of form.elements) {
            if (element.localName == "input" && (element.type =="text" || element.type == "password")) {
                if (element.classList.contains("isOk")) {
                    cont = cont + 1;
                }else{
                    console.log(element)
                    arr_inputs[element.id] = element.value;
                }
            }

        }
        console.log(cont)
        if (cont == 10) {
            var name = inputName.value;
            var lastName = inputLastName.value;
            var dni = inputDNI.value;
            var dob = fixFormatDate(document.getElementById("born-date").value);
            var phone = inputPhone.value;
            var address = inputAddress.value;
            var city = inputLocation.value;
            var zip = inputAreaCode.value;
            var email = inputEmail.value;
            var password = inputPassword.value;
            var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" + name + "&lastName=" + lastName + "&dni=" + dni + "&dob=" + dob + "&phone=" + phone + "&address=" + address + "&city=" + city + "&zip=" + zip + "&email=" + email + "&password=" + password;
            console.log(url);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    alert(JSON.stringify(data))
                })

        } else {
            alert("There are errors or some input was not completed!\n" + JSON.stringify(arr_inputs))
        }


    })

}