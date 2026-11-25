const BaseModel = require('./base.model');

class UserModel extends BaseModel {
  constructor() { super('users'); }

  findByEmail(email) {
    return require('../config/database').query('SELECT * FROM users WHERE email = $1', [email]).then((r) => r.rows[0] || null);
  }
}

module.exports = new UserModel();
