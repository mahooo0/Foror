const express = require('express');
const { Read, Create, Delete, Edit } = require('./Controllers');
const uploadToCloudinary = require('../../Helpers/İmgUpload');
const router = express.Router();

// Register new admin
router.post('/', Create);

// Get all users
router.get('/', Read);
// Delete user by ID
router.delete('/:id', Delete);
// Login route

module.exports = router;
