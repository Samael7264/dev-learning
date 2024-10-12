const { scrapeTorrents, saveTorrentsToDB } = require('../scraper/torrentScraper');
const fs = require('fs');
const logFile = 'scraping.log';

async function scrapeAndSaveTorrents(req, res) {
    const { baseUrl, searchTerm, maxPages } = req.body;
    try {
        const torrents = await scrapeTorrents(baseUrl, searchTerm, maxPages);
        saveTorrentsToDB(torrents);
        res.json({ message: `${torrents.length} torrents scraped and saved.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Function to view all torrents
function viewTorrents(req, res) {
    const db = new sqlite3.Database('torrents.db');
    db.all("SELECT * FROM torrents", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: rows });
    });
    db.close();
}

// Function to search torrents by name
function searchTorrents(req, res) {
    const { searchTerm } = req.query;
    const db = new sqlite3.Database('torrents.db');
    db.all("SELECT * FROM torrents WHERE name LIKE ?", [`%${searchTerm}%`], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: rows });
    });
    db.close();
}

// Function to filter torrents by seeds
function filterTorrents(req, res) {
    const { minSeeds, maxSeeds } = req.query;
    const db = new sqlite3.Database('torrents.db');
    db.all("SELECT * FROM torrents WHERE seeds >= ? AND seeds <= ?", [minSeeds, maxSeeds], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: rows });
    });
    db.close();
}

// Function to delete a torrent by ID
function deleteTorrent(req, res) {
    const { id } = req.params;
    const db = new sqlite3.Database('torrents.db');
    db.run("DELETE FROM torrents WHERE id = ?", [id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: `Torrent with ID ${id} deleted.` });
    });
    db.close();
}

// Function to view scraping logs
function viewLogs(req, res) {
    fs.readFile(logFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.send(`<pre>${data}</pre>`);
    });
}

module.exports = { scrapeAndSaveTorrents, viewTorrents, searchTorrents, filterTorrents, deleteTorrent, viewLogs };





