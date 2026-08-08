const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve all static files in the current directory 
// (Crucial so the browser can load your manifest.json, icons, etc.)
app.use(express.static(__dirname));

// 2. Catch-all route 
// (Ensures that no matter what URL path is entered, it loads the OS)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`[SYS] Artemis Hub Service active on port ${PORT}`);
});
