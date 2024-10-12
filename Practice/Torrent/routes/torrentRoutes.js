const express = require('express');
const { scrapeAndSaveTorrents } = require('../controllers/torrentController');
const { viewTorrents } = require('../controllers/torrentController');
const { searchTorrents } = require('../controllers/torrentController');
const { filterTorrents } = require('../controllers/torrentController');
const { deleteTorrent } = require('../controllers/torrentController');
const { viewLogs } = require('../controllers/torrentController');

const router = express.Router();

// Route to start scraping
router.post('/scrape', scrapeAndSaveTorrents);

// Route to view all torrents
router.get('/view', viewTorrents);

// Route to search torrents
router.get('/search', searchTorrents);

// Route to filter torrents by seeds
router.get('/filter', filterTorrents);

// Route to delete a torrent by ID
router.delete('/delete/:id', deleteTorrent);

// Route to view logs
router.get('/logs', viewLogs);

module.exports = router;
