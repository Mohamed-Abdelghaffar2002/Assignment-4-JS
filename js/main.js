let signupName = document.querySelector("#signupName");
let signupEmail = document.querySelector("#signupEmail");
let signupPass = document.querySelector("#signupPass");

let loginEmail = document.querySelector("#loginEmail");
let loginPass = document.querySelector("#loginPass");

let signUp = document.querySelector("#signUp");
let logIn = document.querySelector("#logIn");
let logOut = document.querySelector("#logOut");

let myData = document.querySelector("#myData");

let list = [];
var index;

if (localStorage.getItem("allUsers")) {
  list = JSON.parse(localStorage.getItem("allUsers"));
}


if (signUp) {
  signUp.addEventListener("click", function () {
    if (repeatedEmail()) {
    } else if (validName() && validEmail() && validPass()) {
      let user = {
        name: signupName.value,
        email: signupEmail.value,
        pass: signupPass.value,
      };
      list.push(user);
      localStorage.setItem("allUsers", JSON.stringify(list));
      window.open("index.html", "_self");
    } else {
      var invalid = document.querySelector("#invalid");
      invalid.classList.remove("d-none");
    }
  });
}

if (logIn) {
  logIn.addEventListener("click",function () {
    for (let i = 0; i < list.length; i++) {
      if (
        loginEmail.value == list[i].email &&
        loginPass.value == list[i].pass
      ) {
        index = i;
        window.open("home.html", "_self");
        return i;
      }
    }
    var incorrect = document.querySelector("#incorrect");
    incorrect.classList.remove("d-none");
  });
}

if (myData) {
  document.getElementById("myData").innerHTML = `Welcome ${list[index].name} `;
}


if (logOut) {
  logOut.addEventListener("click", function () {
    window.open("index.html", "_self");
  });
}

function validName() {
  var regex = /^[a-zA-Z]{3,}$/;
  if (signupName.value == "") {
    signupName.classList.add("is-invalid");
    signupName.classList.remove("is-valid");
    return false;
  } else if (regex.test(signupName.value)) {
    signupName.classList.remove("is-invalid");
    signupName.classList.add("is-valid");
    return true;
  } else {
    signupName.classList.add("is-invalid");
    signupName.classList.remove("is-valid");
    return false;
  }
}
function validEmail() {
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (signupEmail.value == "") {
    signupEmail.classList.add("is-invalid");
    signupEmail.classList.remove("is-valid");
    return false;
  } else if (regex.test(signupEmail.value)) {
    signupEmail.classList.remove("is-invalid");
    signupEmail.classList.add("is-valid");
    return true;
  } else {
    signupEmail.classList.add("is-invalid");
    signupEmail.classList.remove("is-valid");
    return false;
  }
}
function validPass() {
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (signupPass.value == "") {
    signupPass.classList.add("is-invalid");
    signupPass.classList.remove("is-valid");
    return false;
  } else if (regex.test(signupPass.value)) {
    signupPass.classList.remove("is-invalid");
    signupPass.classList.add("is-valid");
    return true;
  } else {
    signupPass.classList.add("is-invalid");
    signupPass.classList.remove("is-valid");
    return false;
  }
}

function repeatedEmail() {
  var existEmail = document.querySelector("#existEmail");
  for (let i = 0; i < list.length; i++) {
    if (list[i].email == signupEmail.value) {
      existEmail.classList.remove("d-none");
      return true;
    }
  }
  existEmail.classList.add("d-none");
  return false;
}
