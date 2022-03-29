import app from './app';

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));
