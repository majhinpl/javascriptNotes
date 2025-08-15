function SetUsername(username) {
  this.username = username;

  console.log("called");
}

function CreateUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new CreateUser("nephx", "mail@email.com", "125jj");

console.log(chai);
