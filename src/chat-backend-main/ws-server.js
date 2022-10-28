import { WebSocketServer } from 'ws';

export const wsServerInit = () => {
    const wss = new WebSocketServer({
        port: 8080,
    });

    wss.on('connection', (ws) => {
        ws.on('message', (raw) => {
            const data = JSON.parse(raw);
            if (data.type === 'message') {
                wss.clients.forEach(client => {
                   client.send(JSON.stringify({
                       type: data.type,
                       username: data.username,
                       text: data.text,
                   }));
                });
            }
        });
    });
}