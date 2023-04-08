const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'users.html'));
});

module.exports = router;
    