const db = require('../config/database');

class BaseModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async findAll(options = {}) {
    const { limit, offset, orderBy = 'id', order = 'ASC' } = options;
    const safeOrder = String(order).toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const values = [];
    let sql = `SELECT * FROM ${this.tableName} ORDER BY ${orderBy} ${safeOrder}`;
    if (limit !== undefined) {
      values.push(Number(limit));
      sql += ` LIMIT $${values.length}`;
    }
    if (offset !== undefined) {
      values.push(Number(offset));
      sql += ` OFFSET $${values.length}`;
    }
    const result = await db.query(sql, values);
    return result.rows;
  }

  async findById(id) {
    const result = await db.query(`SELECT * FROM ${this.tableName} WHERE id = $1`, [id]);
    return result.rows[0] || null;
  }

  async create(data) {
    const keys = Object.keys(data);
    if (!keys.length) throw new Error('No data provided to create');
    const values = Object.values(data);
    const columns = keys.join(', ');
    const placeholders = keys.map((_, index) => `$${index + 1}`).join(', ');
    const result = await db.query(
      `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders}) RETURNING *`,
      values,
    );
    return result.rows[0];
  }

  async update(id, data) {
    const keys = Object.keys(data);
    if (!keys.length) throw new Error('No data provided to update');
    const values = Object.values(data);
    const assignments = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');
    values.push(id);
    const result = await db.query(
      `UPDATE ${this.tableName} SET ${assignments} WHERE id = $${values.length} RETURNING *`,
      values,
    );
    return result.rows[0] || null;
  }

  async delete(id) {
    const result = await db.query(`DELETE FROM ${this.tableName} WHERE id = $1 RETURNING *`, [id]);
    return result.rows[0] || null;
  }
}

module.exports = BaseModel;
