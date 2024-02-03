import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 3000;
// app.use(app.router);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/body/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = `${__dirname}/public/${filename}`;
    const content = fs.readFileSync(filepath).toString();
    res.end(content.toString());
});
app.get('/', (req, res) => {
    res.send('Add a /filename to path for file download OR /body for body content ');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map