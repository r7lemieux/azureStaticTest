import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
dotenv.config();
const app = express();
const port = process.env.PORT || 3010;
// app.use(app.router);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.get('/body/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = `${__dirname}/../public/${filename}`;
    const content = fs.readFileSync(filepath).toString();
    console.log(`==>server.ts:21 content`, content);
    res.end(content.toString());
});
app.get('/', (req, res) => {
    res.send('Add a /filename to path for file download OR /body for body content');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map