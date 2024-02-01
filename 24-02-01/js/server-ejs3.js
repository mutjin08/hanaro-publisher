const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const url = require("url");
const fs = require("fs");
const ejs = require("ejs");

const functionMap = [
    { path: "/add_input", func: add_input },
    { path: "/add_output", func: add_output },
];

let server = http.createServer((req, res) => {
    if (req.method == "GET") {
        let pathName = url.parse(req.url, true).pathname;
        let idx = functionMap.findIndex(item => item.path == pathName);
        if (idx == -1) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>Page does not exist.</h1>");
            return;
        }
        console.log(idx);
        functionMap[idx].func(req, res);
    }
});

server.listen(port, host, () => {
    console.log(`Server start at http://${host}:${port}`);
});

function add_input(req, res) {
    fs.readFile("../html/add_input.html", "utf-8", function (error, data) {
        if (error) {
            console.log(error);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Error</h1>");
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        data = ejs.render(data, {});
        res.end(data);
    });
}

function add_output(req, res) {
    let params = url.parse(req.url, true).query;
    fs.readFile("../html/add_output.html", "utf-8", function (error, data) {
        if (error) {
            console.log(error);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Error</h1>");
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        data = ejs.render(data, { x: params.x, y: params.y });
        res.end(data);
    });
}
