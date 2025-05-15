import express from 'express';
import cors from 'cors';
import path from 'path';

// Получение пути к текущей директории в ES-модуле
const __dirname = path.dirname(new URL(import.meta.url).pathname);



const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: ['http://localhost:5173', 'https://cadexchange-test-task-node-react-ts-mui-i9un.onrender.com'],
    credentials: true,
}));

app.use(express.json());

const staticDir = path.join(__dirname, 'client', 'dist'); // Указываем путь к папке dist

app.use(express.static(staticDir)); // Статичные файлы из папки dist

app.post('/api/contact', (req, res) => {
    const receivedData = req.body;
    console.log('Received from client: ', receivedData);

    res.status(200).json({
        message: 'Data successfully received!',
        data: receivedData
    });
});

// Обработка остальных маршрутов
app.get('*', (req, res) => {
    res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});
