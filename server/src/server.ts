import express from 'express';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors({
    origin: ['http://localhost:5173', 'https://cadexchange-test-task-node-react-ts-mui-i9un.onrender.com'],
    credentials: true,
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

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});
