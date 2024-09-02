const express = require('express');
const router = express.Router();
const Question = require('../models/question');

// Get questions by category
router.get('/:category', async (req, res) => {
  try {
    const questions = await Question.find({ category: req.params.category });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Add a new question
router.post('/home', async (req, res) => {
  const question = new Question({
    category: req.body.category,
    questionText: req.body.questionText,
    options: req.body.options,
  });

  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
