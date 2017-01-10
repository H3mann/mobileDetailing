
var neo4j = require('neo4j');
var secret = 'SH464^++^ASD3';
var DB_URL = 'http://hobby-nfchpmpgjildgbkemlgeklol.dbs.graphenedb.com:24789/db/data/';
var DB_USERNAME = 'GBAutoDetail';
var DB_PASSWORD = 'vardjzmOgv9xLX5OvgGz';

var connection = new neo4j.GraphDatabase({
    url: DB_URL,
    auth: {username: DB_USERNAME, password: DB_PASSWORD},
});

module.exports = connection;