const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
    constructor() {
      super({ table: "users" });
    }

    insert(user) {
        return this.database.query(
          `insert into ${this.table} (username, email, password_hash) values (?, ?, ?)`,
          [
            user.username,
            user.email,
            user.password_hash,
            user.salt,
            user.id,
          ]
        );
      }
    update(user) {
        return this.database.query(
          `update ${this.table} set username = ?, email = ?, password_hash = ?`,
          [
            user.username,
            user.email,
            user.password_hash,
            user.id,
          ]
        );
      }

}

module.exports = UsersManager;