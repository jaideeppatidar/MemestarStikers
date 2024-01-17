
const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');
const upload = require('../mutler/multerConfig')
const  User = require('../database/db')
router.get('/', mainController.getHomePage);

router.post('/api/upload', upload.single('media'), async (req, res) => {
    try {
      const { description } = req.body;
      const mediaPath = req.file.path;
  
      const newMeme = new User({ mediaPath, description });
      await newMeme.save();
  
      res.json({ success: true, message: 'Meme uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  
  router.delete('/api/memes/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Meme.findByIdAndDelete(id);
      res.json({ success: true, message: 'Meme deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
module.exports = router;
