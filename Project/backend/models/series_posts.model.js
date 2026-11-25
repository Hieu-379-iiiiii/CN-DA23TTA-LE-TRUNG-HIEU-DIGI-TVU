const BaseModel = require('./base.model');
class SeriesPostModel extends BaseModel { constructor() { super('series_posts'); } }
module.exports = new SeriesPostModel();
