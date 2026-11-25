const BaseModel = require('./base.model');
class QuestionModel extends BaseModel { constructor() { super('questions'); } }
module.exports = new QuestionModel();
