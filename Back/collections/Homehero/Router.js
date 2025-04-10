const express = require('express');
const { Read, Create, Delete, Edit } = require('./Controllers');
const uploadToCloudinary = require('../../Helpers/İmgUpload');
const router = express.Router();

// Register new admin
router.post('/', uploadToCloudinary, Create);

// Get all users
router.get('/', Read);
// Delete user by ID
// Login route
router.put('/', uploadToCloudinary, Edit);

module.exports = router;
