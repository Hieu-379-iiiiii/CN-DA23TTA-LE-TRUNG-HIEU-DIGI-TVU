const { Course } = require('../models');

function isValidId(id) {
  return /^\d+$/.test(String(id));
}

exports.getCourses = async (req, res) => {
  try {
    const { limit, offset, orderBy, order } = req.query;
    const options = {};
    if (limit !== undefined) options.limit = Number(limit);
    if (offset !== undefined) options.offset = Number(offset);
    if (orderBy) options.orderBy = orderBy;
    if (order) options.order = order;

    if ((limit !== undefined && (!Number.isInteger(options.limit) || options.limit < 0)) ||
        (offset !== undefined && (!Number.isInteger(options.offset) || options.offset < 0))) {
      return res.status(400).json({ success: false, message: 'limit and offset must be non-negative integers' });
    }

    const courses = await Course.findAll(options);
    res.json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid course id' });
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
    res.json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ success: false, message: 'Course data is required' });
    }
    const course = await Course.create(req.body);
    res.status(201).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid course id' });
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ success: false, message: 'Course data is required' });
    }
    const course = await Course.update(req.params.id, req.body);
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
    res.json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid course id' });
    const course = await Course.delete(req.params.id);
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
    res.json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
