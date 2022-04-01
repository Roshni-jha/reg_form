//we take to this submit the button

const btnsubmit=document.querySelector("#btn-submit")

//we create one function which will work on alertness
function createForm() {
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["phone"];
    var password = document.forms["RegForm"]["Password"];
    var address = document.forms["RegForm"]["Address"];
// and second we put condition to giving alertness.
    if (name.value == "") {
        window.alert("Please enter your name.");
        // name.focus();
        return false;
    }
    if (address.value == "") {
        window.alert("Please enter your address.");
        // address.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        // email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert(
          "Please enter your telephone number.");
        // phone.focus();
        return false;
    }

    if (password.value == "") {
        window.alert("Please enter your password");
        // password.focus();
        return false;
    }
    if (what.selectedIndex < 1) {
        alert("Please enter your course.");
        // what.focus();
        return false;
    }
    return true;
}
// when we will click on this then only it will work

btnsubmit.addEventListener("click",createForm)

//this line to take for store the data.
    const data ={name:name,phone:phone,address: address, Email: email, password: password,}
    const formdata=data.json()
    Console.log(formdata,"data")

