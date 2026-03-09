const express = require('express');
const router = express.Router();

// View all projects
router.get('/projects', (req, res) => {
  res.json({ message: 'Get all projects' });
});

// View single project details
router.get('/project/:projectId', (req, res) => {
  const { projectId } = req.params;
  res.json({ message: 'Get project details', projectId });
});

// Search projects
router.get('/projects/search', (req, res) => {
  const { query } = req.query;
  res.json({ message: 'Search projects', query });
});

// Filter projects by category
router.get('/projects/category/:categoryName', (req, res) => {
  const { categoryName } = req.params;
  res.json({ message: 'Filter projects by category', categoryName });
});

// View project updates
router.get('/project/:projectId/updates', (req, res) => {
  const { projectId } = req.params;
  res.json({ message: 'Get project updates', projectId });
});

// Sign up / register
router.post('/auth/register', (req, res) => {
  res.json({ message: 'User registered' });
});

// Login
router.post('/auth/login', (req, res) => {
  res.json({ message: 'User logged in' });
});

module.exports = router;