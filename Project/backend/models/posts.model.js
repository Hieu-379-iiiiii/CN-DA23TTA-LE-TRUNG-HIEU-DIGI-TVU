const BaseModel = require('./base.model');
class PostModel extends BaseModel { constructor() { super('posts'); } }
module.exports = new PostModel();
