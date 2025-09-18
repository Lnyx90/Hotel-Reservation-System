const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const PORT = 3000;
const dataFile = 'data.json';

function loadData() {
	if (!fs.existsSync(dataFile)) {
		fs.writeFileSync(dataFile, '[]');
	}
	return JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
}

function saveData(data) {
	console.log('Saving data:', data);
	fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {
	if (req.method === 'GET' && req.url === '/') {
		fs.readFile('index.html', 'utf-8', (err, data) => {
			if (err) {
				res.writeHead(500, { 'Content-Type': 'text/plain' });
				res.end('Server Error');
			} else {
				let bookings = loadData();
				let bookingList = bookings
					.map(
						(booking) => `
                <tr>
                    <td>${booking.roomType}</td>
                    <td>${booking.checkInDate}</td>
                    <td>${booking.checkOutDate}</td>
                </tr>
                `
					)
					.join('');
				const html = data.replace(
					'<!--BookingList-->',
					`
                    <h2>Daftar Booking</h2>
                    <table border="1" cellpandding="5">
                    <tr>
                    <td>Room Type</td>
                    <td>Check In Date</td>
                    <td>Check Out Date</td>
                </tr>
                        ${bookingList}
                    </table>
                    `
				);
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.end(html);
			}
		});
	} else if (req.method === 'POST' && req.url === '/submit') {
		let body = '';
		req.on('data', (chunk) => {
			body += chunk.toString();
		});
		req.on('end', () => {
			const formData = querystring.parse(body);
			const data = loadData();
			data.push({
				roomType: formData.roomType,
				checkInDate: formData.checkInDate,
				checkOutDate: formData.checkOutDate,
			});

			saveData(data);

			res.writeHead(302, { Location: '/' });
			res.end();
		});
	}
});

server.listen(3000, () => {
	console.log('Server berjalan di http://localhost:3000');
});
