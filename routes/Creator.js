const express = require('express');
const router = express.Router();

// Submit Idea
router.post('/post/idea', (req, res) => {
  res.json({ message: 'Idea submitted' });
});

// Edit Idea
router.put('/edit/idea/:ideaId', (req, res) => {
  const { ideaId } = req.params;
  res.json({ message: 'Idea edited', ideaId });
});

// Delete Idea
router.delete('/delete/idea/:ideaId', (req, res) => {
  const { ideaId } = req.params;
  res.json({ message: 'Idea deleted', ideaId });
});

// View Own Projects
router.get('/projects', (req, res) => {
  res.json({ message: 'Get creator projects' });
});

module.exports = router;