const express = require('express');
const userRouter = require('./routes/userRoutes');
const HeadersHandler = require('./routes/userRoutes');
const app= express();
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());
// app.use( path = '/user', userRouter);
// app.use(HeadersHandler);

app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render("welcome");
});
app.get('/signup', (req, res) => {
    res.render("signup");
});
app.post('/users', (req, res) => {
    res.send(`Successfully signed up`);
});
app.get('/users', (req, res) => {
    res.render("users");})









app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
