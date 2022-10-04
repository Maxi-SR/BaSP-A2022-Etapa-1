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
    var dateFormat = mm + "/" + dd + "/" + aaaa;
    return dateFormat;
}

window.onload = function () {
    
    var inputName = document.getElementById("first-name");
    var inputLastName = document.getElementById("last-name");
    var inputDNI = document.getElementById("dni");
    var inputPhone = document.getElementById("phone-number");
    var inputAddress = document.getElementById("input-address");
    var inputLocation = document.getElementById("location");
    var inputAreaCode = document.getElementById("area-code");
    var inputEmail = document.getElementById("input-email");
    var inputPassword = document.getElementById("password");
    var inputRepeatPassword = document.getElementById("repeat-password");
    var inputDob = fixFormatDate(document.getElementById("born-date").value);
    var createAccountButton = document.getElementById("form-inputs");
    /*-------------------set local storage items to form if exists---------*/
    /*if the first item has a value then all items has too, cause I set items to local storage when
        all inputs in the form are ok. Then, cause I send the request if all inputs has the class "isOk"
        I must to set isOk class to all inputs*/
    if (localStorage.getItem("name")){
        inputName.value = localStorage.getItem("name");
        inputName.classList.add("isOk")        
        inputLastName.value = localStorage.getItem("lastName");
        inputLastName.classList.add("isOk")
        inputDNI.value  = localStorage.getItem("dni");
        inputDNI.classList.add("isOk")
        inputDob.value = localStorage.getItem("dob");
        
        inputPhone.value = localStorage.getItem("phone");
        inputPhone.classList.add("isOk")
        inputAddress.value = localStorage.getItem("address");
        inputAddress.classList.add("isOk")
        inputLocation.value = localStorage.getItem("city");
        inputLocation.classList.add("isOk")
        inputAreaCode.value = localStorage.getItem("zip");
        inputAreaCode.classList.add("isOk")
        inputEmail.value = localStorage.getItem("email");
        inputEmail.classList.add("isOk")
        inputPassword.value = localStorage.getItem("password");
        inputPassword.classList.add("isOk")
        inputRepeatPassword.value = localStorage.getItem("repeatPassword")
        inputRepeatPassword.classList.add("isOk")
    }
    /*-------------------------------------------------------------------*/

    /* ------------------name input validation------------------- */
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
    inputAddress.onblur = function () {
        if (inputAddress.value.length < 5) {
            document.getElementById("address-error").innerText = "Must have 5 characters at least";
            inputAddress.classList.add("notOk")
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
    inputEmail.onblur = function () {
        var isOk = regexEmail.test(inputEmail.value);
        if (isOk) {
            document.getElementById("error-message-email").innerText = "";
            inputEmail.classList.remove("input-email");
            inputEmail.classList.add("isOk");
        } else {
            inputEmail.classList.remove("isOk");
            inputEmail.classList.add("notOk")
            document.getElementById("error-message-email").innerText = "Invalid email, try again.";
        }
    }
    inputEmail.onfocus = function () {
        document.getElementById("error-message-email").innerText = "";
        inputEmail.classList.remove("notOk");
        inputEmail.classList.remove("isOk")
    }
    /*------------------------------------------------------------------- */

    /*-----------------validate password input-------------------------- */
    inputPassword.onblur = function () {
        var passwordText = inputPassword.value;
        if (passwordText.length < 8) {
            document.getElementById("error-message-password").innerText = "There must be 8 characters at least.";
            inputPassword.classList.add("notOk")
        } else {
            document.getElementById("error-message-password").innerText = "";
            inputPassword.classList.add("isOk");
        }
    }

    inputPassword.onfocus = function () {
        inputPassword.classList.remove("isOk");
        inputPassword.classList.remove("notOk");
        document.getElementById("error-message-password").innerText = "";
    }
    /*------------------------------------------------------------------- */

    /*-----------------validate repeat password input-------------------------- */
    inputRepeatPassword.onblur = function () {
        if (inputPassword.value === inputRepeatPassword.value) {
            inputRepeatPassword.classList.add("isOk");
            document.getElementById("error-message-rpt-pass").innerText = "";
        } else {
            document.getElementById("error-message-rpt-pass").innerText = "Passwords do not match";
            inputRepeatPassword.classList.add("notOk")
            inputRepeatPassword.classList.remove("isOk");
        }
        if (inputRepeatPassword.value == "") {
            inputRepeatPassword.classList.add("notOk")
        }
    }

    inputRepeatPassword.onfocus = function () {
        document.getElementById("error-message-rpt-pass").innerText = "";
        inputRepeatPassword.classList.remove("isOk");
        inputRepeatPassword.classList.remove("notOk")
    }
    /*------------------------------------------------------------------- */

    /*--------------------------input birthday -------------------------- */
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
                    arr_inputs[element.id] = element.value;
                }
            }
        }
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
            var repeatPassword = inputRepeatPassword.value;
            var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" + name + "&lastName=" + lastName + "&dni=" + dni + "&dob=" + dob + "&phone=" + phone + "&address=" + address + "&city=" + city + "&zip=" + zip + "&email=" + email + "&password=" + password;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.success){
                        localStorage.setItem("name",name);
                        localStorage.setItem("lastName",lastName);
                        localStorage.setItem("dni",dni);
                        localStorage.setItem("dob",dob);
                        localStorage.setItem("phone",phone);
                        localStorage.setItem("address",address);
                        localStorage.setItem("city",city);
                        localStorage.setItem("zip",zip);
                        localStorage.setItem("email",email);
                        localStorage.setItem("password",password);
                        localStorage.setItem("repeatPassword",repeatPassword);
                    } 
                    alert(JSON.stringify(data))
                })
        } else {
            alert("There are errors or some input was not completed!\n" + JSON.stringify(arr_inputs))
        }
    })
}