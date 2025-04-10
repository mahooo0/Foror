const express = require('express');
const { Read, Create, Delete, Edit } = require('./Controllers');
const uploadToCloudinary = require('../../Helpers/İmgUpload');
const router = express.Router();

// Register new admin
router.post('/', uploadToCloudinary, Create);

// Get all users
router.get('/', Read);
router.delete('/:id', Delete);
// Delete user by ID
// Login route
router.put('/:id', uploadToCloudinary, Edit);

module.exports = router;
