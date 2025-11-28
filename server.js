const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
  res.json({
    status: 'success',
    message: 'CI/CD Pipeline Demo Server Running',
    timestamp: new Date().toISOString()
  });
});

// Export app for tests
module.exports = app;

// Start server only if run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
