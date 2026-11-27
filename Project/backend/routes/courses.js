const express = require('express');
const router = express.Router();
const controller = require('../controllers/courses_controller');

router.get('/', controller.getCourses);
router.get('/:id', controller.getCourseById);
router.post('/', controller.createCourse);
router.put('/:id', controller.updateCourse);
router.patch('/:id', controller.updateCourse);
router.delete('/:id', controller.deleteCourse);

module.exports = router;
