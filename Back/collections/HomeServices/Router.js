const express = require('express');
const { Read, Create, Delete, Edit } = require('./Controllers');
const router = express.Router();

// Register new admin
router.post('/', Create);

// Get all users
router.get('/', Read);
// Delete user by ID
// Login route
router.put('/', Edit);

module.exports = router;
