import { type Request, type Response} from 'express'
import { jogoService } from '../services/jogo.service.js'

class JogoController{
    async getAll (request: Request, response: Response) {
        try {
            const jogos = await jogoService.getAll()
            return response.json(jogos)
        } catch (error) {
            console.error(error);
            return response.status(500).json({ erro: "Erro interno do servidor"})
        }
    }
}

export const jogoController = new JogoController()