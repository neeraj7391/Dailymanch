const express = require('express');
const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
} = require('../controllers/categoryController');

const router = express.Router();

router.post('/', createCategory); // Add new category
router.get('/', getCategories); // Get all categories
router.get('/:id', getCategoryById); // Get category by ID
router.put('/:id', updateCategory); // Update category
router.delete('/:id', deleteCategory); // Delete category

module.exports = router;
