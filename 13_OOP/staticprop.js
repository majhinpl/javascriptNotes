class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  createId() {
    return "123";
  }
}

const nephx = new User("nephx");
console.log(nephx.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username, email);
    this.email = email;
  }
}

const laptop = new Teacher("laptop", "l@MediaList.com");
console.log(laptop.logMe());
