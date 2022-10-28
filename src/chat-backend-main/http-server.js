import express from 'express';
import fs from 'fs/promises';

const imageMiddleware = () => express.raw({ type: '*/*', limit: '25mb' });

export const httpServerInit = () => {
    const app = express();

    app.post('/user/:username/avatar', imageMiddleware(), async (req, res) => {
        const { username } = req.params;
        const path = `./img/${username}`;
        await fs.writeFile(path, req.body);
        res.status(201).json({ path });
    });

    app.get('/user/:username/avatar', async (req, res) => {
        const { username } = req.params;
        const fileBuffer = await fs.readFile(`./img/${username}`);
        res.end(fileBuffer);
    });

    app.listen(3000);
}
