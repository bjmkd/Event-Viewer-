var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

id = 0;

function readFormData() {
  id++;
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["address"] = document.getElementById("address").value;
  formData["city"] = document.getElementById("city").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell0 = newRow.insertCell(0);
  cell0.innerHTML = id;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = data.address;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = data.city;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)"><i class="fa fa-pencil-alt" title="Update"></i></a>
                       <a onClick="onDelete(this)"> <i class="fa fa-trash" title="Delete"></i></a>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("address").value = "";
  document.getElementById("city").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("submit").style.display = "none";
  document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("address").value = selectedRow.cells[2].innerHTML;
  document.getElementById("city").value = selectedRow.cells[3].innerHTML;
  document.getElementById("save").style.display = "block";
}

function updateRecord(formData) {
  selectedRow.cells[1].innerHTML = formData.fullName;
  selectedRow.cells[2].innerHTML = formData.address;
  selectedRow.cells[3].innerHTML = formData.city;
  document.getElementById("save").style.display = "none";
  document.getElementById("submit").style.display = "block";
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function store1() {
  localStorage.setItem("fullName", fullName.value);
  localStorage.setItem("address", address.value);
  localStorage.setItem("city", city.value);
}

function check1() {
  // stored data from the register-form
  //var storedName = localStorage.getItem('userName');
  var storedfullName = localStorage.getItem("fullName");
  var storedaddress = localStorage.getItem("address");
  var storedcity = localStorage.getItem("city");
  // var storedphone = localStorage.getItem('phone');
}

function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("fullNameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}

// Name and Password from the register-form
var userName = document.getElementById("name");
var pw = document.getElementById("pw");
var uname = document.getElementById("uname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");

var addedUser = document.querySelector(".added-user");

// storing input from register-form
function store() {
  localStorage.setItem("userName", userName.value);
  localStorage.setItem("pw", pw.value);
  localStorage.setItem("uname", uname.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("phone", phone.value);

  if (
    (userName.value !== "") &
    (pw.value !== "") &
    (uname.value !== "") &
    (email.value !== "") &
    (phone.value !== "")
  ) {
    addedUser.innerHTML = "User added";
  } else {
    addedUser.innerHTML = "All fields are required";
  }
  userName.value = "";
  pw.value = "";
  uname.value = "";
  email.value = "";
  phone.value = "";
}

// check if stored data from register-form is equal to entered data in the   login-form

function check() {
  // stored data from the register-form
  //var storedName = localStorage.getItem('userName');
  var storedPw = localStorage.getItem("pw");
  var storeduname = localStorage.getItem("uname");
  // var storedemail = localStorage.getItem('email');
  // var storedphone = localStorage.getItem('phone');

  // entered data from the login-form
  var userName = document.getElementById("userName").value;
  var userPw = document.getElementById("userPw").value;
  console.log(userName, userPw);
  // check if stored data from register-form is equal to data from login form
  if (userName == storeduname && userPw == storedPw) {
    window.open("event_table.html");
  } else if (userName === "" && userPw === "") {
    alert("Empty username or password");
  } else {
    alert("Wrong username or password");
  }

  return false;
}
