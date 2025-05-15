

import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors({
    origin: 'http://localhost:5173',  
}));


app.use(express.json());


app.post('/api/contact', (req, res) => {
    const receivedData = req.body;
    console.log('Received from client: ', receivedData);

    res.status(200).json({
        message: 'Data successfully received!',
        data: receivedData
    });
});


app.use(express.static(path.join(__dirname, '../client/dist')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});
