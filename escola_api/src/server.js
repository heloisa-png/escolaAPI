
require('dotenv').config();


const app = require('./routes/app');   
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`servidor rodando na porta ${PORT}`)
});

//package.jason/cript foi adicionado o start p começar o servidor. pode adicionar o --watch depois do node, vai funcionar como o nodemon 