const express = require('express');
const router = express.Router();

//View all projects
router.get('/projects', (req, res) => {
  res.json({ message: 'Get all projects' });
});

//View Single Project Details
router.get('/project/:projectId', (req, res) => {
  const { projectId } = req.params;
  res.json({ message: 'Get project details', projectId });
});

//Fund a project
router.post('/project/:projectId/fund', (req, res) => {
  const { projectId } = req.params;
  res.json({ message: 'Fund a project', projectId });
});

//View funding history
router.get('/funding/history', (req, res) => {
  res.json({ message: 'Get funding history' });
});