const axios = require('axios');
const cheerio = require('cheerio');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const logFile = 'scraping.log';

const db = new sqlite3.Database('torrents.db');

// Create table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS torrents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    seeds INTEGER NOT NULL,
    leeches INTEGER NOT NULL,
    size TEXT NOT NULL,
    upload_date TEXT NOT NULL,
    search_term TEXT NOT NULL
)`);

function logScrapingActivity(message) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync(logFile, logMessage);
}

// Function to extract torrents
async function extractTorrents(html, searchTerm) {
    const $ = cheerio.load(html);
    const torrents = [];
    const rows = $('tbody tr');

    rows.each((index, row) => {
        const columns = $(row).find('td');
        const actualLinkTag = $(columns[0]).find('a').eq(1); // Second <a>

        const name = actualLinkTag.text().trim();
        const url = actualLinkTag.attr('href');
        const seeds = parseInt($(columns[1]).text().trim(), 10);
        const leeches = parseInt($(columns[2]).text().trim(), 10);
        const size = $(columns[3]).text().trim();
        const uploadDate = $(columns[4]).text().trim();

        torrents.push({
            name, url, seeds, leeches, size, uploadDate, searchTerm
        });
    });

    return torrents;
}

// Scraping function
async function scrapeTorrents(baseUrl, searchTerm, maxPages) {
    let allTorrents = [];

    for (let page = 1; page <= maxPages; page++) {
        const url = `${baseUrl}${searchTerm}/${page}/`;
        try {
            const response = await axios.get(url);
            const torrentsOnPage = await extractTorrents(response.data, searchTerm);
            allTorrents = allTorrents.concat(torrentsOnPage);
        } catch (error) {
            console.error(`Failed to retrieve page ${page}: ${error.message}`);
            break;
        }
    }

    return allTorrents;
}

// Save to database
function saveTorrentsToDB(torrents) {
    torrents.forEach(torrent => {
        db.run(`INSERT INTO torrents (name, url, seeds, leeches, size, upload_date, search_term)
                VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [torrent.name, torrent.url, torrent.seeds, torrent.leeches, torrent.size, torrent.uploadDate, torrent.searchTerm], 
            (err) => {
                if (err) console.error(`Error saving torrent: ${err.message}`);
            }
        );
    });
}

function logScrapingActivity(message) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync(logFile, logMessage);
}

async function scrapeTorrents(baseUrl, searchTerm, maxPages) {
    let allTorrents = [];
    logScrapingActivity(`Started scraping for ${searchTerm}`);

    for (let page = 1; page <= maxPages; page++) {
        const url = `${baseUrl}${searchTerm}/${page}/`;
        try {
            const response = await axios.get(url);
            const torrentsOnPage = await extractTorrents(response.data, searchTerm);
            allTorrents = allTorrents.concat(torrentsOnPage);
            logScrapingActivity(`Scraped page ${page} for ${searchTerm}`);
        } catch (error) {
            logScrapingActivity(`Failed to retrieve page ${page}: ${error.message}`);
            break;
        }
    }

    logScrapingActivity(`Completed scraping for ${searchTerm}`);
    return allTorrents;
}

module.exports = { scrapeTorrents, saveTorrentsToDB, logScrapingActivity };
