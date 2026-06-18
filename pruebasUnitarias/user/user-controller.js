class UserController {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  add(user) {
    const exists = this.users.find((u) => u.id === user.id);
    if (!exists) {
      this.users.push(user);
      return true;
    }
    return false;
  }

  remove(user) {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }

  findByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  findById(id) {
    return this.users.find((user) => user.id === id);
  }
}

module.exports = UserController;
