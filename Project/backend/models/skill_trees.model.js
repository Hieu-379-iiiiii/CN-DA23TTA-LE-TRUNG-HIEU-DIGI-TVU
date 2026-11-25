const BaseModel = require('./base.model');
class SkillTreeModel extends BaseModel { constructor() { super('skill_trees'); } }
module.exports = new SkillTreeModel();
