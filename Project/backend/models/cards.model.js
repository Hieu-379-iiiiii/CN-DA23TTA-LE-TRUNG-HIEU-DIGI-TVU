const BaseModel = require('./base.model');
class CardModel extends BaseModel { constructor() { super('cards'); } }
module.exports = new CardModel();
