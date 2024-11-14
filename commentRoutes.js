const express = require('express');
const {
    createComment,
    getCommentsByArticle,
    getCommentById,
    updateComment,
    deleteComment,
} = require('../controllers/commentController');

const router = express.Router();

router.post('/', createComment); // Create a new comment
router.get('/article/:articleId', getCommentsByArticle); // Get comments for an article
router.get('/:id', getCommentById); // Get a specific comment by ID
router.put('/:id', updateComment); // Update a specific comment by ID
router.delete('/:id', deleteComment); // Delete a specific comment by ID

module.exports = router;
