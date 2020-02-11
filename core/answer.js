//  7 Write respective headers object below.

//  General Headers

// Request URL: https://altcampus.io/
// Request Method: GET
// Status Code: 200
// Remote Address: 128.199.85.71:443
// Referrer Policy: no-referrer-when-downgrade

// Request Headers

// :authority: altcampus.io
// :method: GET
// :path: /
// :scheme: https
// accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// accept-encoding: gzip, deflate, br
// accept-language: en-US,en;q=0.9,hi;q=0.8
// cache-control: max-age=0
// cookie: _ga=GA1.2.726714585.1575010696; track_uid=25b4b6c5-d5b6-7286-5dfc-923b971dd3e8; _altcampus_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYSjVEMnNtQUNCd1hrS3JzalVyb2NZQT09.VFiPLZ8pATRfVZN_np1nGqNo_hhBwGP_cpNOqJCjark; _gid=GA1.2.867583968.1581242154
// dnt: 1
// sec-fetch-mode: navigate
// sec-fetch-site: none
// sec-fetch-user: ?1
// upgrade-insecure-requests: 1
// user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36

// //  Response Headers

// access-control-allow-credentials: true
// access-control-allow-origin: *
// access-control-expose-headers:
// cache-control: max-age=0, private, must-revalidate
// content-encoding: gzip
// content-type: text/html; charset=utf-8
// date: Sun, 09 Feb 2020 09:57:20 GMT
// server: nginx/1.10.3 (Ubuntu)
// status: 200
// x-content-type-options: nosniff
// x-content-type-options: nosniff
// x-download-options: noopen
// x-frame-options: SAMEORIGIN
// x-frame-options: DENY
// x-permitted-cross-domain-policies: none
// x-request-id: 2nor6s4r609lg9ljg800a3u1
// x-xss-protection: 1; mode=block
// ```;
// 8  Write parsed object below of the url ``http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4
const url = require("url");
var localUrl =
	"http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4";
var parsedUrl = url.parse(localUrl, true);
console.log(parsedUrl);

// 9 Write parsed query object
