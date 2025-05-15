import path from 'path';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

// Настройка CORS для разрешения запросов с фронтенда
app.use(cors({
    origin: ['http://localhost:5173', 'https://cadexchange-test-task-node-react-ts-mui-i9un.onrender.com'],
    credentials: true,
}));

// Разрешение для обработки JSON
app.use(express.json());

// Обслуживание статических файлов React
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'client/dist')));

// Обработка POST-запроса на /api/contact
app.post('/api/contact', (req, res) => {
    const receivedData = req.body;
    console.log('Received from client: ', receivedData);

    res.status(200).json({
        message: 'Data successfully received!',
        data: receivedData
    });
});

// Обслуживание всех остальных маршрутов через index.html для React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});
