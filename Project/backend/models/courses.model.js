const BaseModel = require('./base.model');
class CourseModel extends BaseModel { constructor() { super('courses'); } }
module.exports = new CourseModel();
