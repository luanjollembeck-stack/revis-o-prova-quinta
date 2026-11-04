import express from 'express'
import { jogosRouter } from './routes/jogo.routes.js'

const app = express()
const port = 3000

app.use("/jogos", jogosRouter)

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
})
