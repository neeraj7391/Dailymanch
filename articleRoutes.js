const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Check if each function exists in articleController
if (
    !articleController.createArticle ||
    !articleController.getAllArticles ||
    !articleController.getArticleById ||
    !articleController.updateArticle ||
    !articleController.deleteArticle ||
    !articleController.getArticlesByCategory
) {
    throw new Error("One or more required article controller methods are undefined. Please check articleController.js");
}

// Route to create a new article
router.post('/', articleController.createArticle);

// Route to get all articles
router.get('/', articleController.getAllArticles);

// Route to get a single article by ID
router.get('/:id', articleController.getArticleById);

// Route to update an article by ID
router.put('/:id', articleController.updateArticle);

// Route to delete an article by ID
router.delete('/:id', articleController.deleteArticle);

// Route to get articles by category
router.get('/category/:categoryId', articleController.getArticlesByCategory);

module.exports = router;
