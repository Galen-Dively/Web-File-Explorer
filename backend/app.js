const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
app.use(cors());

// Configure multer to preserve original filenames
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Preserve the original filename
  },
});

const upload = multer({ storage });

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, '../frontend')));

// API to list files
app.get('/api/files', (req, res) => {
  const files = fs.readdirSync(path.join(__dirname, 'uploads'));
  res.json(files);
});

// API to upload files
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully!' });
});

// API to download files
app.get('/api/files/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'uploads', req.params.filename);
  if (fs.existsSync(filePath)) {
    res.download(filePath, req.params.filename); // Trigger file download
  } else {
    res.status(404).json({ message: 'File not found' });
  }
});

// API to delete files
app.delete('/api/files/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'uploads', req.params.filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.json({ message: 'File deleted successfully!' });
  } else {
    res.status(404).json({ message: 'File not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});