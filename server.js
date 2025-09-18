const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const PORT = 3000;
const DATA_FILE = 'data.json';

function loadData(){
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, '[]');
    }
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function saveData(data){
    console.log("Saving data:", data);
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        fs.readFile('index.html', 'utf-8',(err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Server Error');
            } else{
                let data = loadData();
            }
        });
}});