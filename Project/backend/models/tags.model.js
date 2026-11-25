const BaseModel = require('./base.model');
class TagModel extends BaseModel { constructor() { super('tags'); } }
module.exports = new TagModel();
