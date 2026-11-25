const BaseModel = require('./base.model');
class TestModel extends BaseModel { constructor() { super('tests'); } }
module.exports = new TestModel();
